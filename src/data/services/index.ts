// src/pages/[city]/[service]/index.astro
// Types partagés (tu peux aussi importer depuis ~/types/services)
export type ServiceKey = 'moquettes' | 'parkings' | 'balcons' | 'balcons-fientes' | 'canapes-tapis';

export interface ServiceConfig {
  key: ServiceKey;
  name: string;
  defaultDescription?: string;
  benefits?: string[];
  process?: { step: string; description: string }[];
  equipment?: string[];
  averageDuration?: string;
  pricing?: { from: string; unit: string };
  faq?: { question: string; answer: string }[];
  urls?: { parent?: string };
  images?: { heroDesktop?: string; heroMobile?: string };
}

// ⬇️ adapte ces chemins à tes vrais noms de fichiers
import moquettes from './moquettes.config';
import parkings from './parkings.config';
import balcons from './balcons.config';
import balconsFientes from './balcons-fientes.config';
import canapeTapis from './canapes-tapis.config';

const services: ServiceConfig[] = [
  moquettes,
  parkings,
  balcons,
  balconsFientes,
  canapeTapis,
];

export default services;
