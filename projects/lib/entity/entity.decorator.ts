import { NgxEndpointService } from '~/lib/endpoint';

import { NgxEntityOptions } from './entity.model';

export const NgxEntityDecorator = (endpoint: string) => (constructor: any) => {
  const endpointInstance = () => NgxEndpointService.instance.create(endpoint);
  constructor.create = (o: NgxEntityOptions) => endpointInstance().create(o.body);
  constructor.read = (id: string) => endpointInstance().read(id);
  constructor.update = (id: string, o: NgxEntityOptions) => endpointInstance().update(id, o.body);
  constructor.delete = (id: string) => endpointInstance().delete(id);
};
