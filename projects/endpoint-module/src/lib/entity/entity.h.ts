import { Params } from '@angular/router';

export interface EntityOptions {
  params: Params;
  body: any;
}

export interface EntityDecoratorOptions {
  endpoint: string;
}
