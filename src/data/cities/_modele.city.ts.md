

import type { City } from "~/types/geo";

const TEMPLATE_CITY: City = {
  name: "",
  slug: "",
  postalCodes: [],

  customDescription: "",

  department: {
    name: "",
    code: "",
    slug: ""
  },

  districts: [],
  nearbyCities: [],

  landmarks: [],

  testimonial: {     // ,e pas modifier
    text: "",
    author: "",
    role: "",
    building: ""
  },

  ctaOverride: "",  // ne pas modifier

  services: [
    {
      serviceKey: "moquettes",
      heroDescription: "",
      whyUsBullets: [],
      uniqueIntro: ``,
      uniqueDeepDive: ``,
      specificChallenges: [],
      faqAdditions: [
        { question: "...", answer: "..." },
        { question: "...", answer: "..." },
        { question: "...", answer: "..." },
        { question: "...", answer: "..." }
      ],
      ctaOverride: ""
    },
    {
      serviceKey: "parkings",
      heroDescription: "",
      whyUsBullets: [],
      uniqueIntro: ``,
      uniqueDeepDive: ``,
      specificChallenges: [],
      faqAdditions: [
        { question: "...", answer: "..." },
        { question: "...", answer: "..." },
        { question: "...", answer: "..." },
        { question: "...", answer: "..." }
      ],
      ctaOverride: ""
    },
    {
      serviceKey: "balcons",
      heroDescription: "",
      whyUsBullets: [],
      uniqueIntro: ``,
      uniqueDeepDive: ``,
      specificChallenges: [],
      faqAdditions: [
        { question: "...", answer: "..." },
        { question: "...", answer: "..." },
        { question: "...", answer: "..." },
        { question: "...", answer: "..." }
      ],
      ctaOverride: ""
    },
    {
      serviceKey: "balcons-fientes",
      heroDescription: "",
      whyUsBullets: [],
      uniqueIntro: ``,
      uniqueDeepDive: ``,
      specificChallenges: [],
      faqAdditions: [
        { question: "...", answer: "..." },
        { question: "...", answer: "..." },
        { question: "...", answer: "..." },
        { question: "...", answer: "..." }
      ],
      ctaOverride: ""
    },
    {
      serviceKey: "canapes-tapis",
      heroDescription: "",
      whyUsBullets: [],
      uniqueIntro: ``,
      uniqueDeepDive: ``,
      specificChallenges: [],
      faqAdditions: [
        { question: "...", answer: "..." },
        { question: "...", answer: "..." },
        { question: "...", answer: "..." },
        { question: "...", answer: "..." }
      ],
      ctaOverride: ""
    }
  ]
};

export default TEMPLATE_CITY;
