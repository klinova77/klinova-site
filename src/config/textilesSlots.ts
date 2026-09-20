// Configuration des créneaux disponibles pour le nettoyage de textiles
//
// Planning glissant sur les 14 prochains jours :
// - lundi, mardi, jeudi, vendredi : 17h30 et 19h00
// - mercredi : 16h00, 17h30 et 19h00
// - samedi : 16h00, 17h30 et 19h00
// - dimanche : aucun créneau
//
// Pour fermer ponctuellement un créneau, ajouter son id dans CLOSED_SLOT_IDS.
// Exemple : "2026-09-23-1730"

export interface TextileSlot {
  id: string;
  dateLabel: string;
  timeLabel: string;
  datetime: string;
  open: boolean;
  duration?: string;
}

const DAYS_TO_DISPLAY = 14;
const SLOT_DURATION = "1h30";

const CLOSED_SLOT_IDS = new Set<string>([
  // "2026-09-23-1730",
]);

const SLOT_TIMES_BY_DAY: Record<number, string[]> = {
  1: ["17:30", "19:00"], // lundi
  2: ["17:30", "19:00"], // mardi
  3: ["16:00", "17:30", "19:00"], // mercredi
  4: ["17:30", "19:00"], // jeudi
  5: ["17:30", "19:00"], // vendredi
  6: ["16:00", "17:30", "19:00"], // samedi
};

const pad = (value: number): string => String(value).padStart(2, "0");

const getParisDateParts = (date: Date) => {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Paris",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);

  return {
    year: Number(parts.find((part) => part.type === "year")?.value),
    month: Number(parts.find((part) => part.type === "month")?.value),
    day: Number(parts.find((part) => part.type === "day")?.value),
  };
};

const formatDateKey = (date: Date): string =>
  `${date.getUTCFullYear()}-${pad(date.getUTCMonth() + 1)}-${pad(date.getUTCDate())}`;

const formatDateLabel = (date: Date): string => {
  const label = new Intl.DateTimeFormat("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    timeZone: "Europe/Paris",
  }).format(date);

  return label.charAt(0).toUpperCase() + label.slice(1);
};

const formatTimeLabel = (time: string): string => {
  const [hours, minutes] = time.split(":");
  return `${Number(hours)}h${minutes}`;
};

const getParisOffset = (dateKey: string): string => {
  // Midi UTC évite les ambiguïtés lors des changements d'heure.
  const referenceDate = new Date(`${dateKey}T12:00:00Z`);

  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Paris",
    timeZoneName: "longOffset",
  }).formatToParts(referenceDate);

  const offset = parts.find((part) => part.type === "timeZoneName")?.value;

  return offset?.replace("GMT", "") || "+01:00";
};

const getTodayInParisAsUtcNoon = (referenceDate: Date): Date => {
  const { year, month, day } = getParisDateParts(referenceDate);
  return new Date(Date.UTC(year, month - 1, day, 12, 0, 0));
};

export const getTextileSlots = (
  referenceDate: Date = new Date(),
  daysToDisplay: number = DAYS_TO_DISPLAY
): TextileSlot[] => {
  const slots: TextileSlot[] = [];
  const today = getTodayInParisAsUtcNoon(referenceDate);

  for (let dayOffset = 0; dayOffset < daysToDisplay; dayOffset += 1) {
    const date = new Date(today);
    date.setUTCDate(today.getUTCDate() + dayOffset);

    const times = SLOT_TIMES_BY_DAY[date.getUTCDay()];
    if (!times) continue;

    const dateKey = formatDateKey(date);
    const dateLabel = formatDateLabel(date);
    const utcOffset = getParisOffset(dateKey);

    times.forEach((time) => {
      const id = `${dateKey}-${time.replace(":", "")}`;
      const datetime = `${dateKey}T${time}:00${utcOffset}`;
      const slotDate = new Date(datetime);

      // Ne pas afficher un créneau déjà passé le jour même.
      if (slotDate.getTime() <= referenceDate.getTime()) return;

      slots.push({
        id,
        dateLabel,
        timeLabel: formatTimeLabel(time),
        datetime,
        open: !CLOSED_SLOT_IDS.has(id),
        duration: SLOT_DURATION,
      });
    });
  }

  return slots;
};

// Types de services textiles
export interface ServiceType {
  id: string;
  label: string;
  description: string;
  estimatedDuration: string;
}

export const TEXTILE_SERVICES: ServiceType[] = [
  {
    id: "canape",
    label: "Canapé / Fauteuil",
    description: "Nettoyage en profondeur avec désodorisation",
    estimatedDuration: "1h30 à 2h",
  },
  {
    id: "tapis",
    label: "Tapis",
    description: "Détachage et extraction complète",
    estimatedDuration: "1h à 1h30",
  },
  {
    id: "matelas",
    label: "Matelas",
    description: "Hygiénisation et traitement anti-acariens",
    estimatedDuration: "1h à 1h30",
  },
  {
    id: "multiple",
    label: "Intervention multiple",
    description: "Plusieurs éléments (canapé + tapis, etc.)",
    estimatedDuration: "2h à 3h",
  },
];

// Helpers conservés
export const getAvailableSlots = (): TextileSlot[] =>
  getTextileSlots().filter((slot) => slot.open);

export const getSlotById = (id: string): TextileSlot | undefined =>
  getTextileSlots().find((slot) => slot.id === id);

export const formatSlotLabel = (slot: TextileSlot): string =>
  `${slot.dateLabel} à ${slot.timeLabel}`;
