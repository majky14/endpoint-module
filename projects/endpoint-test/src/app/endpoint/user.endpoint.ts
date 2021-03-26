import { Endpoint } from 'endpoint-module';
import { Observable } from 'rxjs';

import { User } from '../domain/user';

export class UserEndpoint extends Endpoint<User> {
  public profile(): Observable<User> {
    return this.http.get(`${this.endpoint}/profile`) as Observable<User>;
  }
}
