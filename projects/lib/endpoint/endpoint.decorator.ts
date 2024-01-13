import { NgxEndpointService } from './endpoint.service';

export const NgxEndpointDecorator = (endpoint: string) => (target: any, name: string) => {
  Object.defineProperty(target, name, {
    get: () => NgxEndpointService.instance.create(endpoint),
    enumerable: true,
    configurable: true
  });
};
