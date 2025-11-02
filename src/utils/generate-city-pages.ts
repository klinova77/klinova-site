import localSeoData from '~/data/local-seo.json';

export function generateCityPaths() {
  const paths = [];

  for (const city of localSeoData.cities) {
    for (const service of localSeoData.services) {
      paths.push({
        params: {
          city: city.slug,
          service: service.key
        },
        props: {
          city,
          service
        }
      });
    }
  }

  return paths;
}
