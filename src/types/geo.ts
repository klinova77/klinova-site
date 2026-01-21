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

  faq?: ServiceFaqItem[];
  urls?: ServiceUrls;
  images?: { heroDesktop?: string; heroMobile?: string };

  // CTA global par service
  ctaOverride?: string;
}
