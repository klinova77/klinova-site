
// src/pages/[city]/[service]/index.astro
import type { ServiceConfig } from "~/types/geo";

import moquettes from "./moquettes.config";
import parkings from "./parkings.config";
import balcons from "./balcons.config";
import balconsFientes from "./balcons-fientes.config";
import canapeTapis from "./canapes-tapis.config";
import terrasses from "./terrasses.config";
import nettoyageAppartementMaison from "./nettoyage-appartement-maison.config";

const services: ServiceConfig[] = [
  moquettes,
  parkings,
  balcons,
  balconsFientes,
  canapeTapis,
  terrasses,
  nettoyageAppartementMaison,
];

export default services;
