import cities from '~/data/cities';              // export default: City[]
import services from '~/data/services';          // ✅ l’index qu’on vient de créer

const slugify = (v: string) =>
  v.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

export function generateCityPaths() {
  const paths: any[] = [];

  for (const city of cities) {
    if (!city || !city.name || !city.department) continue;

    const deptSlug = city.department.slug ?? slugify(city.department.name);
    const citySlug = city.slug ?? slugify(city.name);

    for (const service of services) {
      if (!service?.key) continue;

      paths.push({
        params: {
          department: deptSlug,
          city: citySlug,
          service: service.key,
        },
        props: {
          department: city.department, // { name, slug, ... }
          city,
          service,
        },
      });
    }
  }

  return paths;
}
