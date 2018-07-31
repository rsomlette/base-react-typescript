// import { Observable } from 'rxjs';
// import { Rxs } from '../../Domain/Helper/Rsx';
// import { IAuthentication } from '../../domain/Model/User/Authentication';

// interface IUserClientAdapter {
//   fetch$(email: string, password: string): Observable<IAuthentication>;
// }

// class UserAdapter implements IUserClientAdapter {
//   public fetch$(email: string, password: string): Observable<IAuthentication> {
//     return Rxs.of$({ accessToken: '123AB' }).pipe(Rxs.delay$(200));
//   }
// }

// export const userAdapter: IUserClientAdapter = new UserAdapter();
