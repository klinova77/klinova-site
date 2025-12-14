// src/lib/schema/pricing.ts
// Génère un tableau d'Offer Schema.org à partir de pricingTiers (ou fallback legacy pricing)

export type LegacyPricing = {
  from: string; // ex "150 €"
  unit?: string; // ex "€/m²", "intervention"
  note?: string;
};

export type PricingTier =
  | {
      name: string;
      description: string;
      priceType: "from";
      from: number;
      unitCode?: string; // ✅ ex "C62" (par intervention) ou "MTK" (par m²)
      vatIncluded?: boolean;
      currency?: string; // default EUR
    }
  | {
      name: string;
      description: string;
      priceType: "range";
      low: number;
      high: number;
      unitCode: string; // ex "MTK"
      vatIncluded?: boolean;
      currency?: string; // default EUR
    }
  | {
      name: string;
      description: string;
      priceType: "quote";
      currency?: string; // default EUR
    };

export interface BuildPricingOffersInput {
  // Les tiers "nouveau modèle"
  pricingTiers?: PricingTier[];

  // Legacy si tu n'as pas encore migré un service
  legacyPricing?: LegacyPricing;

  // Contexte de page
  pageUrl: string; // url de la page locale/service
  fallbackOfferName: string; // ex: `${service.name} à ${city.name}`
  fallbackOfferDescription: string; // description SEO
}

const cleanPriceToNumber = (p?: string): number | undefined => {
  if (!p) return undefined;
  const numeric = p.replace(/[^0-9.,]/g, "").replace(",", ".").trim();
  const value = Number(numeric);
  return Number.isFinite(value) ? value : undefined;
};

const unitCodeFromLabel = (unit?: string): string | undefined => {
  if (!unit) return undefined;
  const u = unit.toLowerCase();

  if (u.includes("m²") || u.includes("m2")) return "MTK";
  if (u.includes("intervention") || u.includes("forfait")) return "C62";

  return undefined;
};

export const buildPricingOffers = (input: BuildPricingOffersInput): any[] => {
  const tiers = Array.isArray(input.pricingTiers) ? input.pricingTiers : [];
  const offers: any[] = [];

  // 1) Tiers (moderne)
  for (const tier of tiers) {
    const currency = tier.currency || "EUR";
    const vatIncluded =
      "vatIncluded" in tier ? (tier.vatIncluded ?? true) : true;

    // ✅ availability partout (y compris quote)
    const offer: any = {
      "@type": "Offer",
      name: tier.name,
      description: tier.description,
      priceCurrency: currency,
      url: input.pageUrl,
      availability: "https://schema.org/InStock",
    };

    if (tier.priceType === "from") {
      const unitCode = tier.unitCode ?? "C62";

      offer.priceSpecification = {
        "@type": "UnitPriceSpecification",
        priceCurrency: currency,
        price: tier.from,
        valueAddedTaxIncluded: vatIncluded,
        referenceQuantity: {
          "@type": "QuantitativeValue",
          unitCode,
          value: 1,
        },
      };

      offers.push(offer);
      continue;
    }

    if (tier.priceType === "range") {
      offer.priceSpecification = {
        "@type": "UnitPriceSpecification",
        priceCurrency: currency,
        minPrice: tier.low,
        maxPrice: tier.high,
        unitCode: tier.unitCode,
        valueAddedTaxIncluded: vatIncluded,
        referenceQuantity: {
          "@type": "QuantitativeValue",
          unitCode: tier.unitCode,
          value: 1,
        },
      };

      offers.push(offer);
      continue;
    }

    if (tier.priceType === "quote") {
      // ✅ Pas de price=0 / minPrice=0 : offre décrite sans prix.
      offers.push(offer);
      continue;
    }
  }

  // 2) Fallback legacy si aucun tiers
  if (offers.length === 0 && input.legacyPricing?.from) {
    const legacyPrice = cleanPriceToNumber(input.legacyPricing.from);
    const legacyUnit = unitCodeFromLabel(input.legacyPricing.unit);

    if (legacyPrice !== undefined) {
      offers.push({
        "@type": "Offer",
        name: input.fallbackOfferName,
        description: input.fallbackOfferDescription,
        priceCurrency: "EUR",
        url: input.pageUrl,
        availability: "https://schema.org/InStock",
        ...(legacyUnit
          ? {
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                priceCurrency: "EUR",
                price: legacyPrice,
                valueAddedTaxIncluded: true,
                referenceQuantity: {
                  "@type": "QuantitativeValue",
                  unitCode: legacyUnit,
                  value: 1,
                },
              },
            }
          : { price: legacyPrice }),
      });
    }
  }

  return offers;
};
