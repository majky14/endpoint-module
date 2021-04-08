import { InjectionToken } from '@angular/core';

import { EndpointOptions } from './endpoint.h';

export const ENDPOINT_CONFIG_TOKEN = new InjectionToken<IEndpointConfig>(
  'ENDPOINT_MODULE_CONFIG_TOKEN'
);

export interface IEndpointConfig {
  baseUrl: string;
  endpoints?: EndpointOptions[];
}
