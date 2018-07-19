// import {
//   create,
//   CLIENT_ERROR,
//   CONNECTION_ERROR,
//   SERVER_ERROR,
//   TIMEOUT_ERROR,
//   NETWORK_ERROR,
//   type ApiSauceInstance,
//   type ApiResponse,
// } from 'apisauce';

// import {
//   ClientError,
//   ClientNetworkError,
//   ClientRequestError,
//   ClientServerError,
//   ClientTimeoutError,
// } from '@domain/Error';
// import { asObject } from '@domain/Helper/Objects';
// import { Rxs, type Observable } from '@domain/Helper/Rxs';

// export type UploadCompletedEvent = {
//   data: Object,
// };

// export type UploadEvent = UploadCompletedEvent;

// export const DEFAULT_JSON_API_HEADERS = {
//   Accept: 'application/json',
//   'Content-Type': 'application/json',
// };

// export class BaseClient {
//   api: ApiSauceInstance;

//   constructor(baseUrl: string, headers: Object) {
//     this.api = create({
//       baseURL: baseUrl,
//       headers,
//     });
//   }

//   addMonitor(monitor: any) {
//     this.api.addMonitor(monitor);
//   }

//   del$(...parameters: mixed[]): Observable<ApiResponse> {
//     return Rxs.from$(this.api.delete(...parameters));
//   }

//   get$(...parameters: mixed[]): Observable<ApiResponse> {
//     return Rxs.from$(this.api.get(...parameters));
//   }

//   post$(...parameters: mixed[]): Observable<ApiResponse> {
//     return Rxs.from$(this.api.post(...parameters));
//   }

//   put$(...parameters: mixed[]): Observable<ApiResponse> {
//     return Rxs.from$(this.api.put(...parameters));
//   }

//   /**
//    * Perform an HTTP `DELETE` and transforms response as an `Object` and
//    * throw when server error or body is not an `Object`.
//    */
//   delete$(...parameters: mixed[]): Observable<Object> {
//     return this.del$(...parameters).map(this.responseToObject);
//   }

//   /**
//    * Perform an HTTP `POST` and transforms response as an `Object` and
//    * throw when server error or body is not an `Object`.
//    */
//   create$(...parameters: mixed[]): Observable<Object> {
//     return this.post$(...parameters).map(this.responseToObject);
//   }

//   /**
//    * Perform an HTTP `GET` and transforms response as an `Object` and
//    * throw when server error or body is not an `Object`.
//    */
//   fetch$(...parameters: mixed[]): Observable<Object> {
//     return this.get$(...parameters).map(this.responseToObject);
//   }

//   /**
//    * Perform an HTTP `GET` and transforms response as a stream of `Object` and
//    * throw when server error or body is not an array of `Object`.
//    */
//   list$(...parameters: mixed[]): Observable<Object> {
//     return this.get$(...parameters).flatMap(this.responseToList$);
//   }

//   /**
//    * Perform an HTTP `PUT` and transforms response as an `Object` and
//    * throw when server error or body is not an `Object`.
//    */
//   update$(...parameters: mixed[]): Observable<Object> {
//     return this.put$(...parameters).map(this.responseToObject);
//   }

//   upload$(path: string, form: any, config: Object = {}): Observable<UploadEvent> {
//     const headers = { ...config.headers };
//     headers['Content-Type'] = 'multipart/form-data';

//     return this.post$(path, form, { ...config, headers })
//       .map(this.responseToObject)
//       .map((body: Object) => ({ data: body }));
//   }

//   extractResponseBody(response: ApiResponse): mixed {
//     if (!response.ok) {
//       throw mapProblemToError(response);
//     }

//     return response.data;
//   }

//   responseToBody(response: ApiResponse): ?mixed {
//     return extractResponseBody(response);
//   }

//   /**
//    * Transforms the response body assumed to be an `array` into
//    * an Observable stream containing all array elements:
//    *   `responseToList$({ data: [1, 2 , 3]}) == '|----1----2----3----.'`
//    */
//   responseToList$(response: ApiResponse): Observable<any> {
//     const body = extractResponseBody(response);
//     if (!Array.isArray(body)) {
//       throw new Error(`Expecting response to be an array, received data of type [${typeof body}].`);
//     }

//     return Rxs.from$(body);
//   }

//   responseToObject(response: ApiResponse): Object {
//     const body = asObject(extractResponseBody(response));
//     if (body == null) {
//       throw new Error(
//         `Expecting response to be an object, received data of type [${typeof body}].`,
//       );
//     }

//     return body;
//   }
// }

// function extractResponseBody(response: ApiResponse): mixed {
//   if (!response.ok) {
//     throw mapProblemToError(response);
//   }

//   return response.data;
// }

// function mapProblemToError(response: ApiResponse) {
//   const { problem } = response;
//   if (problem === CLIENT_ERROR) return new ClientRequestError(response.status);
//   if (problem === SERVER_ERROR) return new ClientServerError(response.status);
//   if (problem === CONNECTION_ERROR || problem === NETWORK_ERROR) return new ClientNetworkError();
//   if (problem === TIMEOUT_ERROR) return new ClientTimeoutError();

//   return new ClientError();
// }
