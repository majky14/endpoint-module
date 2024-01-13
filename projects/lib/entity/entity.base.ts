import { Observable } from 'rxjs';

import { NgxEntityOptions } from './entity.model';

export abstract class NgxEntityBase {
  protected constructor(protected _id: string) {}

  public static list<T>(): Observable<T> {
    throw new Error('Missing list implementation!');
  }

  public static create<T>(_: NgxEntityOptions): Observable<T> {
    throw new Error('Missing create implementation!');
  }

  public static read<T>(_: string): Observable<T> {
    throw new Error('Missing read implementation!');
  }

  public static update<T>(_: NgxEntityOptions): Observable<T> {
    throw new Error('Missing update implementation!');
  }

  public static delete<T>(_: string): Observable<T> {
    throw new Error('Missing delete implementation!');
  }
}
