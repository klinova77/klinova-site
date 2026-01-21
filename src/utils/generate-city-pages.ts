// src/utils/generate-city-pages.ts
import cities from "~/data/cities";
import services from "~/data/services";
import type { City, ServiceConfig } from "~/types/geo";

const slugify = (v: string) =>
  v
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

const serviceSlug = (s: ServiceConfig) => s.urls?.parent?.replace(/^\//, "") ?? "";

export function generateCityPaths() {
  const allServiceConfigs = (Array.isArray(services) ? services : []).filter(
    (s): s is ServiceConfig =>
      typeof s === "object" &&
      s !== null &&
      typeof s.key === "string" &&
      typeof s.urls?.parent === "string" &&
      !!s.urls.parent
  );

  const paths: Array<{
    params: { department: string; city: string; service: string };
    props: { department: City["department"]; city: City; service: ServiceConfig };
  }> = [];

  for (const city of cities as City[]) {
    if (!city?.name || !city?.department) continue;

    const deptSlug = city.department.slug ?? slugify(city.department.name ?? "");
    const citySlugValue = city.slug ?? slugify(city.name);

    // ✅ services activés dans le city.ts
    const cityServiceKeys = new Set((city.services ?? []).map((s) => s.serviceKey));

    // ✅ configs disponibles + activées pour cette ville
    const configsForCity = allServiceConfigs.filter((cfg) => cityServiceKeys.has(cfg.key));

    for (const svc of configsForCity) {
      const svcSlug = serviceSlug(svc);
      if (!svcSlug) continue; // sécurité

      paths.push({
        params: { department: deptSlug, city: citySlugValue, service: svcSlug },
        props: { department: city.department, city, service: svc },
      });
    }
  }

  return paths;
}
