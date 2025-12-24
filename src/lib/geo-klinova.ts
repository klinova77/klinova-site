// src/lib/geo-klinova.ts

export type Preposition = "à" | "de";

function normalizeCityName(name: string): string {
  return name.replace(/\s+/g, " ").trim();
}

export function withPreposition(prep: Preposition, rawName: string): string {
  const name = normalizeCityName(rawName);

  // Le Raincy → au Raincy / du Raincy
  if (/^Le\s+/i.test(name)) {
    const base = name.replace(/^Le\s+/i, "");
    if (prep === "à") return `au ${base}`;
    if (prep === "de") return `du ${base}`;
  }

  // Les Lilas → aux Lilas / des Lilas
  if (/^Les\s+/i.test(name)) {
    const base = name.replace(/^Les\s+/i, "");
    if (prep === "à") return `aux ${base}`;
    if (prep === "de") return `des ${base}`;
  }

  // L'Haÿ-les-Roses → à l'Haÿ-les-Roses / de l'Haÿ-les-Roses
  if (/^L['’]/.test(name)) {
    const rest = name.slice(1); // "'Haÿ-les-Roses" ou "’Haÿ-les-Roses"
    return `${prep} l${rest}`;
  }

  // La Courneuve → à La Courneuve / de La Courneuve
  if (/^La\s+/i.test(name)) {
    return `${prep} ${name}`;
  }

  // Cas général : Gagny, Chelles, Paris…
  return `${prep} ${name}`;
}

export const aVille = (name: string) => withPreposition("à", name);
export const deVille = (name: string) => withPreposition("de", name);
