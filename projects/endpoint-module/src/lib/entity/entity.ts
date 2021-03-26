import { Observable } from 'rxjs';

import { EntityOptions } from './entity.h';

export abstract class Entity {
  public _id: string;

  protected constructor(id: string) {
    this._id = id;
  }

  public static list<T>(): Observable<T[]> {
    throw new Error('Missing list implementation!');
  }

  public static create<T>(options: EntityOptions): Observable<T> {
    throw new Error('Missing create implementation!');
  }

  public static read<T>(id: string): Observable<T> {
    throw new Error('Missing read implementation!');
  }

  public static update<T>(options: EntityOptions): Observable<T> {
    throw new Error('Missing update implementation!');
  }

  public static delete<T>(id: string): Observable<T> {
    throw new Error('Missing delete implementation!');
  }
}
