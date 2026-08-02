// ~/types/geo.ts

export type ServiceKey =
  | "moquettes"
  | "parkings"
  | "balcons"
  | "balcons-fientes"
  | "canapes-tapis"
  | "terrasses"
  | "nettoyage-appartement-maison";

export interface Department {
  name: string;
  code?: string;
  slug: string;
}

export interface ServicePricing {
  from: string;
  unit: string;
  note?: string;
}

export interface CityServiceLocal {
  serviceKey: ServiceKey;
  uniqueIntro?: string;
  uniqueDeepDive?: string;
  pricingHint?: Record<string, string> & { note?: string };
  caseStudy?: {
    title: string;
    date?: string;
    housing?: string;
    beforeAfterImages?: string[];
    metrics?: Record<string, string>;
    testimonial?: { text: string; author?: string };
  };
  faqAdditions?: { question: string; answer: string }[];
  patternOverride?: "A" | "B" | "C" | "D";
  ctaOverride?: string;
  photos?: string[];

  // ✅ par ville + service
  heroDescription?: string;
  whyUsBullets?: string[];
  specificChallenges?: string[];

  pricing?: ServicePricing;
}

export interface City {
  name: string;
  slug: string;
  postalCodes: string[];
  customDescription?: string;
  detailedDescription?: string;
  ctaOverride?: string;
  faq?: { question: string; answer: string }[];
  testimonial?: { text: string; author: string; role: string; building?: string };
  districts?: string[];
  landmarks?: string[];
  citySpecificChallenges?: string[];
  whyUsBullets?: string[];
  department: Department;
  nearbyCities?: string[];
  images?: { heroDesktop?: string; heroMobile?: string };
  cityImage?: string;

  // 🆕 contenu spécifique hub
  hubIntro?: string;

  services: CityServiceLocal[];
}

export type PricingTier =
  | {
      name: string;
      description: string;
      priceType: "from";
      from: number;
      vatIncluded?: boolean;
      currency?: string; // default EUR
    }
  | {
      name: string;
      description: string;
      priceType: "range";
      low: number;
      high: number;
      unitCode: string; // ex: "MTK"
      vatIncluded?: boolean;
      currency?: string;
    }
  | {
      name: string;
      description: string;
      priceType: "quote";
      currency?: string;
    };

export type PriceTax = "HT" | "TTC";

export interface ParkingUnitPriceRange {
  min: number;
  max: number;
  currency: "EUR";
  unitCode: "MTK";
  tax: PriceTax;
}

export interface ParkingCommercialPricing {
  standardParking: ParkingUnitPriceRange & {
    factors: string[];
  };
  referenceCase: {
    amount: number;
    surfaceM2: number;
    currency: "EUR";
    tax: "HT";
    approximate: boolean;
    locationContext: string;
    soilCondition: string;
    cleaningsPerYear: number;
  };
  largeParking: ParkingUnitPriceRange & {
    conditional: true;
    conditions: string[];
    exposeAsGenericMinimum: false;
    exposeInStructuredData: false;
  };
  heavyCleaning: {
    pricingMode: "quote";
    operations: string[];
    specialConfigurationLabel: string;
  };
  individualMinimum: {
    amount: number;
    currency: "EUR";
    tax: "TTC";
    audience: "individual";
    appliesTo: string[];
    exposeInStructuredData: false;
  };
}

export interface ServiceProcessStep {
  step: string;
  description: string;
}

export interface ServiceFaqItem {
  question: string;
  answer: string;
}

export interface ServiceUrls {
  parent?: string;
}

export interface ServiceConfig {
  key: ServiceKey;
  name: string;

  defaultDescription?: string;
  benefits?: string[];
  process?: ServiceProcessStep[];
  equipment?: string[];
  averageDuration?: string;

  // legacy (si tu l'utilises encore)
  pricing?: { from: string; unit: string; note?: string };

  // new
  pricingTiers?: PricingTier[];

  // Tarification commerciale structurée propre au service parkings.
  commercialPricing?: ParkingCommercialPricing;

  faq?: ServiceFaqItem[];
  urls?: ServiceUrls;
  images?: { heroDesktop?: string; heroMobile?: string };

  // CTA global par service
  ctaOverride?: string;
}
