// Configuration des créneaux disponibles pour le nettoyage de textiles
// Pour fermer un créneau : changer open: true en open: false

export interface TextileSlot {
  id: string;
  dateLabel: string;
  timeLabel: string;
  datetime: string;
  open: boolean;
  duration?: string;
}

export const TEXTILES_SLOTS: TextileSlot[] = [
  // Samedi 21 décembre 2025
  {
    id: "2025-12-21-0900",
    dateLabel: "Samedi 21 décembre",
    timeLabel: "9h00",
    datetime: "2025-12-21T09:00:00+01:00",
    open: false,
    duration: "1h30",
  },
  {
    id: "2025-12-21-1030",
    dateLabel: "Samedi 21 décembre",
    timeLabel: "10h30",
    datetime: "2025-12-21T10:30:00+01:00",
    open: false,
    duration: "1h30",
  },
  {
    id: "2025-12-21-1200",
    dateLabel: "Samedi 21 décembre",
    timeLabel: "12h00",
    datetime: "2025-12-21T12:00:00+01:00",
    open: false,
    duration: "1h30",
  },
  {
    id: "2025-12-21-1330",
    dateLabel: "Samedi 21 décembre",
    timeLabel: "13h30",
    datetime: "2025-12-21T13:30:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2025-12-21-1500",
    dateLabel: "Samedi 21 décembre",
    timeLabel: "15h00",
    datetime: "2025-12-21T15:00:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2025-12-21-1630",
    dateLabel: "Samedi 21 décembre",
    timeLabel: "16h30",
    datetime: "2025-12-21T16:30:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2025-12-21-1800",
    dateLabel: "Samedi 21 décembre",
    timeLabel: "18h00",
    datetime: "2025-12-21T18:00:00+01:00",
    open: true,
    duration: "1h30",
  },

  // Samedi 28 décembre 2025
  {
    id: "2025-12-28-0900",
    dateLabel: "Samedi 28 décembre",
    timeLabel: "9h00",
    datetime: "2025-12-28T09:00:00+01:00",
    open: false,
    duration: "1h30",
  },
  {
    id: "2025-12-28-1030",
    dateLabel: "Samedi 28 décembre",
    timeLabel: "10h30",
    datetime: "2025-12-28T10:30:00+01:00",
    open: false,
    duration: "1h30",
  },
  {
    id: "2025-12-28-1200",
    dateLabel: "Samedi 28 décembre",
    timeLabel: "12h00",
    datetime: "2025-12-28T12:00:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2025-12-28-1330",
    dateLabel: "Samedi 28 décembre",
    timeLabel: "13h30",
    datetime: "2025-12-28T13:30:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2025-12-28-1500",
    dateLabel: "Samedi 28 décembre",
    timeLabel: "15h00",
    datetime: "2025-12-28T15:00:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2025-12-28-1630",
    dateLabel: "Samedi 28 décembre",
    timeLabel: "16h30",
    datetime: "2025-12-28T16:30:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2025-12-28-1800",
    dateLabel: "Samedi 28 décembre",
    timeLabel: "18h00",
    datetime: "2025-12-28T18:00:00+01:00",
    open: true,
    duration: "1h30",
  },

  // Samedi 4 janvier 2026
  {
    id: "2026-01-04-0900",
    dateLabel: "Samedi 4 janvier",
    timeLabel: "9h00",
    datetime: "2026-01-04T09:00:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-01-04-1030",
    dateLabel: "Samedi 4 janvier",
    timeLabel: "10h30",
    datetime: "2026-01-04T10:30:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-01-04-1200",
    dateLabel: "Samedi 4 janvier",
    timeLabel: "12h00",
    datetime: "2026-01-04T12:00:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-01-04-1330",
    dateLabel: "Samedi 4 janvier",
    timeLabel: "13h30",
    datetime: "2026-01-04T13:30:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-01-04-1500",
    dateLabel: "Samedi 4 janvier",
    timeLabel: "15h00",
    datetime: "2026-01-04T15:00:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-01-04-1630",
    dateLabel: "Samedi 4 janvier",
    timeLabel: "16h30",
    datetime: "2026-01-04T16:30:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-01-04-1800",
    dateLabel: "Samedi 4 janvier",
    timeLabel: "18h00",
    datetime: "2026-01-04T18:00:00+01:00",
    open: true,
    duration: "1h30",
  },

  // Samedi 11 janvier 2026
  {
    id: "2026-01-11-0900",
    dateLabel: "Samedi 11 janvier",
    timeLabel: "9h00",
    datetime: "2026-01-11T09:00:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-01-11-1030",
    dateLabel: "Samedi 11 janvier",
    timeLabel: "10h30",
    datetime: "2026-01-11T10:30:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-01-11-1200",
    dateLabel: "Samedi 11 janvier",
    timeLabel: "12h00",
    datetime: "2026-01-11T12:00:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-01-11-1330",
    dateLabel: "Samedi 11 janvier",
    timeLabel: "13h30",
    datetime: "2026-01-11T13:30:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-01-11-1500",
    dateLabel: "Samedi 11 janvier",
    timeLabel: "15h00",
    datetime: "2026-01-11T15:00:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-01-11-1630",
    dateLabel: "Samedi 11 janvier",
    timeLabel: "16h30",
    datetime: "2026-01-11T16:30:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-01-11-1800",
    dateLabel: "Samedi 11 janvier",
    timeLabel: "18h00",
    datetime: "2026-01-11T18:00:00+01:00",
    open: true,
    duration: "1h30",
  },
];

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

// Helper functions
export const getAvailableSlots = (): TextileSlot[] => {
  return TEXTILES_SLOTS.filter((slot) => slot.open);
};

export const getSlotById = (id: string): TextileSlot | undefined => {
  return TEXTILES_SLOTS.find((slot) => slot.id === id);
};

export const formatSlotLabel = (slot: TextileSlot): string => {
  return `${slot.dateLabel} à ${slot.timeLabel}`;
};
