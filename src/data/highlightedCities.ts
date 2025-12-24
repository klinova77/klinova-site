// D:\Klinova-site\src\data\highlightedCities.ts

import cities from '~/data/cities';

const HIGHLIGHTED_CITY_SLUGS = [
  "bussy-saint-georges",
  "livry-gargan",
  "le-raincy",
  'montfermeil',
  'gagny',
  'villeparisis',
  'gournay-sur-marne',
  'neuilly-sur-marne',
  'vaires-sur-marne',

  'claye-souilly',
  'torcy',
'champs-sur-marne',
'noisy-le-grand',
  'lagny-sur-marne',
  'torcy',
'champs-sur-marne',
];

export const highlightedCities = HIGHLIGHTED_CITY_SLUGS
  .map((slug) => cities.find((c) => c.slug === slug))
  .filter(Boolean);
