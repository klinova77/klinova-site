// ~/types/geo.ts

export type ServiceKey = 'moquettes' | 'parkings' | 'balcons' | 'balcons-fientes' | 'canapes-tapis';

export interface Department {
  name: string;
  code?: string;
  slug: string;
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
  patternOverride?: 'A' | 'B' | 'C' | 'D';
  ctaOverride?: string;
  photos?: string[];

  // ✅ heroDescription par ville + service
  heroDescription?: string;
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
  specificChallenges?: string[];

  // ✅ ici, bien dans City (et pas après services:)
  whyUsBullets?: string[];

  department: Department;
  nearbyCities?: string[];
  images?: { heroDesktop?: string; heroMobile?: string };
  cityImage?: string;
  services: CityServiceLocal[];
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
  pricing?: { from: string; unit: string };
  faq?: ServiceFaqItem[];
  urls?: ServiceUrls;
  images?: { heroDesktop?: string; heroMobile?: string };

  // 🆕 CTA global par service
  ctaOverride?: string;
}
