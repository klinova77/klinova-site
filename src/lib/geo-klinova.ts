//D:\Klinova-site\src\lib\geo-klinova.ts
export type Preposition = "à" | "de";

const NBSP = "\u00A0"; // espace insécable

function normalizeCityName(name: string): string {
  return name.replace(/\s+/g, " ").trim();
}

const glue = (...parts: string[]) => parts.join(NBSP);

export function withPreposition(prep: Preposition, rawName: string): string {
  const name = normalizeCityName(rawName);

  // Le Raincy → au Raincy / du Raincy
  if (/^Le\s+/i.test(name)) {
    const base = name.replace(/^Le\s+/i, "");
    if (prep === "à") return glue("au", base);
    return glue("du", base);
  }

  // Les Lilas → aux Lilas / des Lilas
  if (/^Les\s+/i.test(name)) {
    const base = name.replace(/^Les\s+/i, "");
    if (prep === "à") return glue("aux", base);
    return glue("des", base);
  }

  // L'Haÿ-les-Roses → à l'Haÿ-les-Roses / de l'Haÿ-les-Roses
  if (/^L['’]/.test(name)) {
    return glue(prep, name.replace(/^L/, "l"));
  }

  // La Courneuve → empêcher "de" / "La" / "Courneuve" de se séparer
  if (/^La\s+/i.test(name)) {
    return `${prep}${NBSP}${name.replace(/\s+/g, NBSP)}`;
  }

  // Cas général : Gagny, Chelles, Paris…
  return glue(prep, name);
}

// ✅ IMPORTANT : ce sont bien des fonctions (flèches)
export const aVille = (name: string) => withPreposition("à", name);
export const deVille = (name: string) => withPreposition("de", name);
