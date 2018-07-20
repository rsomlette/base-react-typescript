import { Observable } from 'rxjs';

import { Rxs } from '../Domain/Helper/Rsx';
import { IAuthentication } from '../domain/Model/User/Authentication';
import { BaseClient, DEFAULT_JSON_API_HEADERS } from './BaseClient';

export class AccountClient extends BaseClient {
  constructor(baseUrl: string, headers: any = {}) {
    super(baseUrl, { ...DEFAULT_JSON_API_HEADERS, ...headers });
  }

  public loginUser$(email: string, password: string): Observable<IAuthentication> {
    return this.create$('/login', { email, password }).pipe(
      Rxs.tap$((authentication: IAuthentication) => {
        this.api.setHeader('Authorization', `Bearer ${authentication.accessToken}`);
      }),
    );
  }
}
