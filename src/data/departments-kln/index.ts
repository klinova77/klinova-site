import type { DepartmentKln, DepartmentSlugKln } from "~/types/department-klinova";

import { seineEtMarne } from "./seine-et-marne";
import { valDeMarne } from "./val-de-marne";
import { seineSaintDenis } from "./seine-saint-denis";

export const DEPARTMENTS_KLN: Partial<Record<DepartmentSlugKln, DepartmentKln>> = {
  "seine-et-marne": seineEtMarne,
  "val-de-marne": valDeMarne,
  "seine-saint-denis": seineSaintDenis,
};
