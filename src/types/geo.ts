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
  department: Department;
  nearbyCities?: string[];
  images?: { heroDesktop?: string; heroMobile?: string };
  cityImage?: string;
  services: CityServiceLocal[];
}