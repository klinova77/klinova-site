import cities from '~/data/cities';
import services from '~/data/services';

const slugify = (v: string) =>
  v
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');

export function generateCityPaths() {
  const paths: any[] = [];

  for (const city of cities) {
    if (!city || !city.name || !city.department) continue;

    const deptSlug = city.department.slug ?? slugify(city.department.name);
    const citySlug = city.slug ?? slugify(city.name);

    for (const service of services) {
      if (!service?.key) continue;

      // 👉 slug de la page service principale
      //    ex: "/nettoyage-moquettes" → "nettoyage-moquettes"
      const serviceSlug =
        (service.urls?.parent ?? `/nettoyage-${service.key}`).replace(/^\//, '');

      paths.push({
        params: {
          department: deptSlug,
          city: citySlug,
          service: serviceSlug,
        },
        props: {
          department: city.department,
          city,
          service, // on passe bien l’objet complet au composant
        },
      });
    }
  }

  return paths;
}
