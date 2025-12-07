// src/lib/company.ts

export const COMPANY_START_YEAR = 2014; // à ajuster

export const getExperienceYears = (refYear = new Date().getFullYear()) => {
  const years = refYear - COMPANY_START_YEAR;
  return years > 0 ? years : 1;
};
