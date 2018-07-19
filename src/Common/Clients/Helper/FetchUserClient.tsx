import { Observable } from 'rxjs';
import { Rxs } from '../../../Helper/Rsx';

interface IUserClientAdapter {
  fetch$(email: string, password: string): Observable<IFetchClientResponse>;
}

// TODO: should not be here ?
export interface IFetchClientResponse {
  accessToken: string;
}

class UserClientAdapter implements IUserClientAdapter {
  public fetch$(email: string, password: string): Observable<IFetchClientResponse> {
    return Rxs.of$({ accessToken: '123AB' }).pipe(Rxs.delay$(200));
  }
}

export const userClient: IUserClientAdapter = new UserClientAdapter();
