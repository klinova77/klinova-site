// src/data/departments.ts

export interface DepartmentMeta {
  name: string;
  code: string;
  slug: string;
  shortLabel: string;   // ex. "Val-de-Marne (94)"
}

export const DEPARTMENTS: DepartmentMeta[] = [
  {
    name: 'Paris',
    code: '75',
    slug: 'paris',
    shortLabel: 'Paris (75)',
  },
  {
    name: 'Seine-et-Marne',
    code: '77',
    slug: 'seine-et-marne',
    shortLabel: 'Seine-et-Marne (77)',
  },
  {
    name: 'Yvelines',
    code: '78',
    slug: 'yvelines',
    shortLabel: 'Yvelines (78)',
  },
  {
    name: "Essonne",
    code: "91",
    slug: "essonne",
    shortLabel: "Essonne (91)",
  },
  {
    name: 'Hauts-de-Seine',
    code: '92',
    slug: 'hauts-de-seine',
    shortLabel: 'Hauts-de-Seine (92)',
  },
  {
    name: 'Seine-Saint-Denis',
    code: '93',
    slug: 'seine-saint-denis',
    shortLabel: 'Seine-Saint-Denis (93)',
  },
  {
    name: 'Val-de-Marne',
    code: '94',
    slug: 'val-de-marne',
    shortLabel: 'Val-de-Marne (94)',
  },
  {
    name: "Val-d'Oise",
    code: '95',
    slug: 'val-d-oise',
    shortLabel: "Val-d'Oise (95)",
  },
];
