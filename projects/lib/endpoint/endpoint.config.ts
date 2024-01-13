import { InjectionToken } from '@angular/core';

import { NgxEndpointOptions } from './endpoint.interface';

export const NGX_ENDPOINT_CONFIG_TOKEN = new InjectionToken<NgxEndpointConfig>(
  'NGX_ENDPOINT_CONFIG_TOKEN'
);

export type NgxEndpointConfig = {
  baseUrl: string;
  httpHeaders?: object;
  withCredentials?: boolean;
  endpoints?: NgxEndpointOptions[];
}
