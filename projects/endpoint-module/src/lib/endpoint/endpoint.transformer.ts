import { ITransformer } from './endpoint.h';

export class BaseTransformer<T> implements ITransformer<T> {
  public transform(data: any): T {
    return data;
  }
}
