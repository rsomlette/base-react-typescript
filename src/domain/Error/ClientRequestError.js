/**
 * Represents an `ApiSauce` `CLIENT_ERROR` problem.
 */
import { ClientError } from '@domain/Error/ClientError';

export class ClientRequestError extends ClientError {
  statusCode: number;

  constructor(statusCode: number) {
    super(`The client request failed with status code '${statusCode}'`);

    this.type = 'ClientRequestError';
    this.statusCode = statusCode;
  }
}
