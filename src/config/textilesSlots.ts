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
  // Samedi 17 janvier 2026
  {
    id: "2026-01-17-0900",
    dateLabel: "Samedi 17 janvier",
    timeLabel: "9h00",
    datetime: "2026-01-17T09:00:00+01:00",
    open: false,
    duration: "1h30",
  },
  {
    id: "2026-01-17-1030",
    dateLabel: "Samedi 17 janvier",
    timeLabel: "10h30",
    datetime: "2026-01-17T10:30:00+01:00",
    open: false,
    duration: "1h30",
  },
  {
    id: "2026-01-17-1200",
    dateLabel: "Samedi 17 janvier",
    timeLabel: "12h00",
    datetime: "2026-01-17T12:00:00+01:00",
    open: false,
    duration: "1h30",
  },
  {
    id: "2026-01-17-1330",
    dateLabel: "Samedi 17 janvier",
    timeLabel: "13h30",
    datetime: "2026-01-17T13:30:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-01-17-1500",
    dateLabel: "Samedi 17 janvier",
    timeLabel: "15h00",
    datetime: "2026-01-17T15:00:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-01-17-1630",
    dateLabel: "Samedi 17 janvier",
    timeLabel: "16h30",
    datetime: "2026-01-17T16:30:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-01-17-1800",
    dateLabel: "Samedi 17 janvier",
    timeLabel: "18h00",
    datetime: "2026-01-17T18:00:00+01:00",
    open: true,
    duration: "1h30",
  },

  // Samedi 24 janvier 2026
  {
    id: "2026-01-24-0900",
    dateLabel: "Samedi 24 janvier",
    timeLabel: "9h00",
    datetime: "2026-01-24T09:00:00+01:00",
    open: false,
    duration: "1h30",
  },
  {
    id: "2026-01-24-1030",
    dateLabel: "Samedi 24 janvier",
    timeLabel: "10h30",
    datetime: "2026-01-24T10:30:00+01:00",
    open: false,
    duration: "1h30",
  },
  {
    id: "2026-01-24-1200",
    dateLabel: "Samedi 24 janvier",
    timeLabel: "12h00",
    datetime: "2026-01-24T12:00:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-01-24-1330",
    dateLabel: "Samedi 24 janvier",
    timeLabel: "13h30",
    datetime: "2026-01-24T13:30:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-01-24-1500",
    dateLabel: "Samedi 24 janvier",
    timeLabel: "15h00",
    datetime: "2026-01-24T15:00:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-01-24-1630",
    dateLabel: "Samedi 24 janvier",
    timeLabel: "16h30",
    datetime: "2026-01-24T16:30:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-01-24-1800",
    dateLabel: "Samedi 24 janvier",
    timeLabel: "18h00",
    datetime: "2026-01-24T18:00:00+01:00",
    open: true,
    duration: "1h30",
  },

  // Samedi 31 janvier 2026
  {
    id: "2026-01-31-0900",
    dateLabel: "Samedi 31 janvier",
    timeLabel: "9h00",
    datetime: "2026-01-31T09:00:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-01-31-1030",
    dateLabel: "Samedi 31 janvier",
    timeLabel: "10h30",
    datetime: "2026-01-31T10:30:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-01-31-1200",
    dateLabel: "Samedi 31 janvier",
    timeLabel: "12h00",
    datetime: "2026-01-31T12:00:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-01-31-1330",
    dateLabel: "Samedi 31 janvier",
    timeLabel: "13h30",
    datetime: "2026-01-31T13:30:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-01-31-1500",
    dateLabel: "Samedi 31 janvier",
    timeLabel: "15h00",
    datetime: "2026-01-31T15:00:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-01-31-1630",
    dateLabel: "Samedi 31 janvier",
    timeLabel: "16h30",
    datetime: "2026-01-31T16:30:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-01-31-1800",
    dateLabel: "Samedi 31 janvier",
    timeLabel: "18h00",
    datetime: "2026-01-31T18:00:00+01:00",
    open: true,
    duration: "1h30",
  },

  // Samedi 7 février 2026
  {
    id: "2026-02-07-0900",
    dateLabel: "Samedi 7 février",
    timeLabel: "9h00",
    datetime: "2026-02-07T09:00:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-02-07-1030",
    dateLabel: "Samedi 7 février",
    timeLabel: "10h30",
    datetime: "2026-02-07T10:30:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-02-07-1200",
    dateLabel: "Samedi 7 février",
    timeLabel: "12h00",
    datetime: "2026-02-07T12:00:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-02-07-1330",
    dateLabel: "Samedi 7 février",
    timeLabel: "13h30",
    datetime: "2026-02-07T13:30:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-02-07-1500",
    dateLabel: "Samedi 7 février",
    timeLabel: "15h00",
    datetime: "2026-02-07T15:00:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-02-07-1630",
    dateLabel: "Samedi 7 février",
    timeLabel: "16h30",
    datetime: "2026-02-07T16:30:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-02-07-1800",
    dateLabel: "Samedi 7 février",
    timeLabel: "18h00",
    datetime: "2026-02-07T18:00:00+01:00",
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
