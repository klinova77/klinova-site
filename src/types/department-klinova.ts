export type DepartmentSlugKln =
  | "paris"
  | "seine-et-marne"
  | "yvelines"
  | "essonne"
  | "hauts-de-seine"
  | "seine-saint-denis"
  | "val-de-marne"
  | "val-d-oise";

export interface DepartmentImageItem {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

export interface DepartmentKlnSection {
  id: string; // ex: "contexte", "process"
  title: string;
  html: string; // HTML string (set:html)
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
  imageWidth?: number;
  imageHeight?: number;
}

export interface DepartmentKlnFAQItem {
  question: string;
  answer: string;
}

export interface DepartmentKlnInternalLink {
  label: string;
  href: string;
}

export interface DepartmentKln {
  slug: DepartmentSlugKln;

  department: {
    name: string;
    code: string;
  };

  heroTitle?: string;
  heroKicker?: string; // "•" separated like SP
  heroDescription?: string;

  images?: {
    items: DepartmentImageItem[];
  };

  challenges?: {
    title?: string;
    items: string[];
  };

  sections?: DepartmentKlnSection[];

  logistics?: string; // HTML string allowed (set:html)

  faq?: DepartmentKlnFAQItem[];

  internalLinks?: DepartmentKlnInternalLink[];

  seo?: {
    title?: string;
    description?: string;
  };
}
