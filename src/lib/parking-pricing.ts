import type {
  ParkingCommercialPricing,
  ParkingUnitPriceRange,
  PriceTax,
} from "~/types/geo";

type TaxedAmount = {
  amount: number;
  tax: PriceTax;
};

const formatNumber = (value: number): string => {
  if (!Number.isFinite(value)) {
    throw new Error("Invalid parking pricing value");
  }

  return value
    .toLocaleString("fr-FR", {
      minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
      maximumFractionDigits: 2,
    })
    .replace(/[\u00A0\u202F]/g, " ");
};

export const formatFrenchList = (
  items: string[],
  conjunction: "et" | "ou" = "et",
): string => {
  if (items.length === 0) {
    throw new Error("French list formatting requires at least one item");
  }

  if (items.length === 1) return items[0];
  if (items.length === 2) return `${items[0]} ${conjunction} ${items[1]}`;

  return `${items.slice(0, -1).join(", ")} ${conjunction} ${items[items.length - 1]}`;
};

const assertLargeParkingExposurePolicy = (
  pricing: ParkingCommercialPricing["largeParking"],
): void => {
  if (
    pricing.conditional !== true ||
    pricing.exposeAsGenericMinimum !== false ||
    pricing.exposeInStructuredData !== false
  ) {
    throw new Error("Large parking pricing exposure policy is invalid");
  }

  if (pricing.conditions.length === 0) {
    throw new Error("Large parking pricing requires explicit eligibility conditions");
  }
};

export const formatParkingAmount = ({ amount, tax }: TaxedAmount): string =>
  `${formatNumber(amount)} € ${tax}`;

export const formatParkingSurface = (surfaceM2: number): string =>
  `${formatNumber(surfaceM2)} m²`;

export const formatParkingUnitPrice = (
  amount: number,
  tax: PriceTax,
): string => `${formatNumber(amount)} € ${tax}/m²`;

export const formatParkingRange = (range: ParkingUnitPriceRange): string =>
  `${formatNumber(range.min)} à ${formatNumber(range.max)} € ${range.tax}/m²`;

export const formatReferenceUnitPrice = (
  referenceCase: ParkingCommercialPricing["referenceCase"],
): string =>
  formatParkingUnitPrice(
    referenceCase.amount / referenceCase.surfaceM2,
    referenceCase.tax,
  );

/**
 * Garde-fou commercial : cette fourchette ne peut être formatée qu'avec son
 * audience grands volumes et ses conditions d'éligibilité immédiatement avant.
 */
export const formatLargeParkingPricingWithConditions = (
  pricing: ParkingCommercialPricing["largeParking"],
): string => {
  assertLargeParkingExposurePolicy(pricing);

  const conditions = formatFrenchList(pricing.conditions);
  const upperBound = formatParkingUnitPrice(pricing.max, pricing.tax);
  const range = `${formatNumber(pricing.min)} et ${formatNumber(pricing.max)} € ${pricing.tax}/m²`;

  return `Lorsque le parking présente ${conditions}, le tarif au m² peut descendre sous ${upperBound}. Dans les configurations les plus favorables, il peut varier entre ${range}.`;
};

/** Variante locale : expose le seuil conditionnel sans publier le plancher. */
export const formatLargeParkingPricingWithoutFloor = (
  pricing: ParkingCommercialPricing["largeParking"],
): string => {
  assertLargeParkingExposurePolicy(pricing);

  const conditions = formatFrenchList(pricing.conditions);
  const upperBound = formatParkingUnitPrice(pricing.max, pricing.tax);

  return `Pour les grands et très grands parkings, le tarif au m² peut descendre sous ${upperBound} lorsque le site présente ${conditions}. La tarification exacte est établie au devis selon la configuration.`;
};
