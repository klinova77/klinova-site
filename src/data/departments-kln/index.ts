// D:\Klinova-site\src\data\departments-kln\index.ts

import type { DepartmentKln, DepartmentSlugKln } from "~/types/department-klinova";

import { paris } from "./paris";
import { seineEtMarne } from "./seine-et-marne";
import { yvelines } from "./yvelines";
import { essonne } from "./essonne";
import { hautsDeSeine } from "./hauts-de-seine";
import { seineSaintDenis } from "./seine-saint-denis";
import { valDeMarne } from "./val-de-marne";
import { valDOise } from "./val-d-oise";

export const DEPARTMENTS_KLN: Partial<Record<DepartmentSlugKln, DepartmentKln>> = {
  paris,
  "seine-et-marne": seineEtMarne,
  yvelines,
  essonne,
  "hauts-de-seine": hautsDeSeine,
  "seine-saint-denis": seineSaintDenis,
  "val-de-marne": valDeMarne,
  "val-d-oise": valDOise,
};
