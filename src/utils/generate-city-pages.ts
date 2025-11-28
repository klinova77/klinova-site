import cities from '~/data/cities';
import services from '~/data/services';
import type { ServiceConfig } from '~/types/geo';

const slugify = (v: string) =>
  v
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');

type ServiceKey = 'moquettes' | 'parkings' | 'balcons' | 'balcons-fientes' | 'canapes-tapis';

const serviceSlugByKey: Record<ServiceKey, string> = {
  moquettes: 'nettoyage-moquettes',
  parkings: 'nettoyage-parkings',
  balcons: 'nettoyage-balcons',
  'balcons-fientes': 'nettoyage-balcons-fientes-pigeons',
  'canapes-tapis': 'nettoyage-canapes-tapis-matelas',
};

const getServiceSlug = (service: ServiceConfig) =>
  serviceSlugByKey[service.key as ServiceKey];

export function generateCityPaths() {
  const paths: any[] = [];

  for (const city of cities) {
    if (!city || !city.name || !city.department) continue;

    const deptSlug = city.department.slug ?? slugify(city.department.name);
    const citySlug = city.slug ?? slugify(city.name);

    for (const service of services) {
      if (!service?.key) continue;

      const serviceSlug = getServiceSlug(service);

      paths.push({
        params: {
          department: deptSlug,
          city: citySlug,
          service: serviceSlug,
        },
        props: {
          department: city.department,
          city,
          service,
        },
      });
    }
  }

  return paths;
}
