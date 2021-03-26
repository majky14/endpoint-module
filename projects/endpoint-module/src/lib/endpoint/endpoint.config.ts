import { InjectionToken } from '@angular/core';

import { EndpointOptions } from './endpoint.h';

export const EndpointConfigToken = new InjectionToken<IEndpointConfig>('EndpointConfigToken');

export interface IEndpointConfig {
  baseUrl: string;
  endpoints?: EndpointOptions[];
}
