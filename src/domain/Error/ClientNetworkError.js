/**
 * Represents an `ApiSauce` `CONNECTION_ERROR` or `NETWORK_ERROR` problem.
 */
import { ClientError } from '@domain/Error/ClientError';

export class ClientNetworkError extends ClientError {
  constructor() {
    super('A network error occurred while performing client request');

    this.type = 'ClientNetworkError';
  }
}
