import { HttpClient } from '@angular/common/http';
import { Injectable, InjectionToken } from '@angular/core';
import { IEndpoint } from 'endpoint-module';
import { Observable } from 'rxjs';

import { User } from '../domain/user';

export const USER_ENDPOINT_TOKEN = new InjectionToken<UserEndpoint>('USER_ENDPOINT_TOKEN');

@Injectable()
export class UserEndpoint implements IEndpoint<User> {

  constructor(
    private http: HttpClient
  ) { }

  create(body: Partial<User>): Observable<User> {
    return undefined;
  }

  delete(id: string): Observable<User> {
    return undefined;
  }

  list(): Observable<User[]> {
    return this.http.get('https://api.mocki.io/v1/469a9425/users') as Observable<User[]>;
  }

  read(id: string): Observable<User> {
    return this.http.get(`https://api.mocki.io/v1/469a9425/users/${id}`) as Observable<User>;
  }

  update(id: string, body: Partial<User>): Observable<User> {
    return undefined;
  }

  public profile(): Observable<User> {
    return this.http.get(`https://api.mocki.io/v1/469a9425/users/profile`) as Observable<User>;
  }
}
