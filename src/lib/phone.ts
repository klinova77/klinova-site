// src/lib/phone.ts

export const PHONE_E164 = '+33676738661' as const; // format international
export const PHONE_DISPLAY = '06 76 73 86 61' as const;

export const toTelHref = (num: string) => `tel:${num}`;
