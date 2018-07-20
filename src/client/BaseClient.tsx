import {
  ApiResponse,
  ApisauceInstance,
  CLIENT_ERROR,
  CONNECTION_ERROR,
  create,
  NETWORK_ERROR,
  SERVER_ERROR,
  TIMEOUT_ERROR,
} from 'apisauce';

import { Observable } from 'rxjs';
import {
  ClientError,
  ClientNetworkError,
  ClientRequestError,
  ClientServerError,
  ClientTimeoutError,
} from '../domain/Error';
import { Rxs } from '../Domain/Helper/Rsx';
import { asObject } from './Helper/Objects';

// import { asObject } from '@domain/Helper/Objects';
// import { Observable, Rxs type } from '@domain/Helper/Rxs';

export interface IUploadCompletedEvent {
  data: any;
}

export const DEFAULT_JSON_API_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export class BaseClient {
  public api: ApisauceInstance;

  constructor(baseUrl: string, headers: object) {
    this.api = create({ baseURL: baseUrl, headers });
  }

  public addMonitor(monitor: any) {
    this.api.addMonitor(monitor);
  }

  public del$(url: string,
    data?: any | undefined,
    axiosConfig?: any | undefined,
  ): Observable<ApiResponse<any>> {
    return Rxs.from$(this.api.delete(url, data, axiosConfig));
  }

  public get$(
    url: string,
    data?: any | undefined,
    axiosConfig?: any | undefined,
  ): Observable<ApiResponse<any>> {
    return Rxs.from$(this.api.get(url, data, axiosConfig));
  }

  public post$(
    url: string,
    data?: any | undefined,
    axiosConfig?: any | undefined,
  ): Observable<ApiResponse<any>> {
    return Rxs.from$(this.api.post(url, data, axiosConfig)));
  }

  public put$(
    url: string,
    data?: any | undefined,
    axiosConfig?: any | undefined,
  ): Observable<ApiResponse<any>> {
    return Rxs.from$(this.api.put(url, data, axiosConfig));
  }

  /**
   * Perform an HTTP `DELETE` and transforms response as an `Object` and
   * throw when server error or body is not an `Object`.
   */
  public delete$(
    url: string,
    data?: any | undefined,
    axiosConfig?: any | undefined,
  ): Observable<object> {
    return this.del$(url, data, axiosConfig).pipe(Rxs.map$(this.responseToObject));
  }

  /**
   * Perform an HTTP `POST` and transforms response as an `Object` and
   * throw when server error or body is not an `Object`.
   */
  public create$(
    url: string,
    data?: any | undefined,
    axiosConfig?: any | undefined,
  ): Observable<object> {
    return this.post$(url, data, axiosConfig).pipe(Rxs.map$(this.responseToObject));
  }

  /**
   * Perform an HTTP `GET` and transforms response as an `Object` and
   * throw when server error or body is not an `Object`.
   */
  public fetch$(
    url: string,
    data?: any | undefined,
    axiosConfig?: any | undefined,
  ): Observable<object> {
    return this.get$(url, data, axiosConfig).pipe(Rxs.map$(this.responseToObject));
  }

  /**
   * Perform an HTTP `GET` and transforms response as a stream of `Object` and
   * throw when server error or body is not an array of `Object`.
   */
  public list$(
    url: string,
    data?: any | undefined,
    axiosConfig?: any | undefined,
  ): Observable<object> {
    return this.get$(url, data, axiosConfig).pipe(Rxs.flatMap$(this.responseToList$));
  }

  /**
   * Perform an HTTP `PUT` and transforms response as an `Object` and
   * throw when server error or body is not an `Object`.
   */
  public update$(
    url: string,
    data?: any | undefined,
    axiosConfig?: any | undefined,
  ): Observable<object> {
    return this.put$(url, data, axiosConfig).pipe(Rxs.map$(this.responseToObject));
  }

  public upload$(path: string, form: any, config: any = {}): Observable<IUploadCompletedEvent> {
    const headers = { ...config.headers };
    headers['Content-Type'] = 'multipart/form-data';

    return this.post$(path, form, {
      ...config,
      headers,
    }).pipe(
      Rxs.map$(this.responseToObject),
      Rxs.map$((body: any) => ({
        data: body,
      })),
    );
  }

  public extractResponseBody(response: ApiResponse<any>): any {
    if (!response.ok) {
      throw mapProblemToError(response);
    }

    return response.data;
  }

  public responseToBody(response: ApiResponse<any>): any | null {
    return extractResponseBody(response);
  }

  /**
   * Transforms the response body assumed to be an `array` into
   * an Observable stream containing all array elements:
   *   `responseToList$({ data: [1, 2 , 3]}) == '|----1----2----3----.'`
   */
  public responseToList$(response: ApiResponse<any>): Observable<any> {
    const body = extractResponseBody(response);
    if (!Array.isArray(body)) {
      throw new Error(`Expecting response to be an array, received data of type [${typeof body}].`);
    }

    return Rxs.from$(body);
  }

  public responseToObject(response: ApiResponse<any>): any {
    const body = asObject(extractResponseBody(response));
    if (body == null) {
      throw new Error(
        `Expecting response to be an object, received data of type [${typeof body}].`,
      );
    }

    return body;
  }
}

function extractResponseBody(response: ApiResponse<any>): any {
  if (!response.ok) {
    throw mapProblemToError(response);
  }

  return response.data;
}

function mapProblemToError(response: ApiResponse<any>) {
  const { problem, status } = response;
  if (status != null) {
    if (problem === CLIENT_ERROR) {
      return new ClientRequestError(status);
    }
    if (problem === SERVER_ERROR) {
      return new ClientServerError(status);
    }
  }
  if (problem === CONNECTION_ERROR || problem === NETWORK_ERROR) {
    return new ClientNetworkError();
  }
  if (problem === TIMEOUT_ERROR) {
    return new ClientTimeoutError();
  }

  return new ClientError();
}
