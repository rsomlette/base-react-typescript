/**
 * Represents an `ApiSauce` `SERVER_ERROR` problem.
 */
import { ClientError } from '@domain/Error/ClientError';

export class ClientServerError extends ClientError {
  statusCode: number;

  constructor(statusCode: number) {
    super(`The client request failed with status code '${statusCode}'`);

    this.type = 'ClientServerError';
    this.statusCode = statusCode;
  }
}
