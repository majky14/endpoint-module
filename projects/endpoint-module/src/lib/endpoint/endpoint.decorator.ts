import { EndpointService } from './endpoint.service';

export const EndpointDecorator = (endpoint: string) => (target: any, name: string) => {
  Object.defineProperty(target, name, {
    get: () => EndpointService.instance.create(endpoint),
    enumerable: true,
    configurable: true
  });
};
