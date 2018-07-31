// /**
//  * Represents an `ApiSauce` `CLIENT_ERROR` problem.
//  */
// import { ClientError } from './ClientError';

// interface IProps {
//   statusCode: number;
// }

// export class ClientRequestError extends ClientError {
//   public type: string;
//   public statusCode: number;

//   constructor({ statusCode }: IProps) {
//     super(`The client request failed with status code '${statusCode}'`);

//     this.type = 'ClientRequestError';
//     this.statusCode = statusCode;
//   }
// }
