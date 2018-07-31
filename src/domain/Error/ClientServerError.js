// import { ClientError } from './ClientError';

// /**
//  * Represents an `ApiSauce` `SERVER_ERROR` problem.
//  */

// interface IProps {
//   statusCode: number;
// }

// export class ClientServerError extends ClientError {
//   statusCode: number;
//   type: string;

//   constructor(statusCode: number) {
//     super(`The client request failed with status code '${statusCode}'`);

//     this.type = 'ClientServerError';
//     this.statusCode = statusCode;
//   }
// }
