import { EndpointDecoratorOptions } from './endpoint.h';
import { EndpointService } from './endpoint.service';

export const EndpointDecorator = (options: EndpointDecoratorOptions) => {
  return (target: any, name: string) => {
    Object.defineProperty(target, name, {
      get: () => EndpointService.instance.create({endpoint: options.endpoint}),
      enumerable: true,
      configurable: true
    });
  };
};
