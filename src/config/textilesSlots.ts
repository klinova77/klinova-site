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
  // Samedi 25 juillet 2026
  {
    id: "2026-07-25-0900",
    dateLabel: "Samedi 25 juillet",
    timeLabel: "9h00",
    datetime: "2026-07-25T09:00:00+02:00",
    open: false,
    duration: "1h30",
  },
  {
    id: "2026-07-25-1030",
    dateLabel: "Samedi 25 juillet",
    timeLabel: "10h30",
    datetime: "2026-07-25T10:30:00+02:00",
    open: false,
    duration: "1h30",
  },
  {
    id: "2026-07-25-1200",
    dateLabel: "Samedi 25 juillet",
    timeLabel: "12h00",
    datetime: "2026-07-25T12:00:00+02:00",
    open: false,
    duration: "1h30",
  },
  {
    id: "2026-07-25-1330",
    dateLabel: "Samedi 25 juillet",
    timeLabel: "13h30",
    datetime: "2026-07-25T13:30:00+02:00",
    open: false,
    duration: "1h30",
  },
  {
    id: "2026-07-25-1500",
    dateLabel: "Samedi 25 juillet",
    timeLabel: "15h00",
    datetime: "2026-07-25T15:00:00+02:00",
    open: false,
    duration: "1h30",
  },
  {
    id: "2026-07-25-1630",
    dateLabel: "Samedi 25 juillet",
    timeLabel: "16h30",
    datetime: "2026-07-25T16:30:00+02:00",
    open: false,
    duration: "1h30",
  },
  {
    id: "2026-07-25-1800",
    dateLabel: "Samedi 25 juillet",
    timeLabel: "18h00",
    datetime: "2026-07-25T18:00:00+02:00",
    open: false,
    duration: "1h30",
  },

  // Samedi 8 août 2026
  {
    id: "2026-08-08-0900",
    dateLabel: "Samedi 8 août",
    timeLabel: "9h00",
    datetime: "2026-08-08T09:00:00+02:00",
    open: false,
    duration: "1h30",
  },
  {
    id: "2026-08-08-1030",
    dateLabel: "Samedi 8 août",
    timeLabel: "10h30",
    datetime: "2026-08-08T10:30:00+02:00",
    open: false,
    duration: "1h30",
  },
  {
    id: "2026-08-08-1200",
    dateLabel: "Samedi 8 août",
    timeLabel: "12h00",
    datetime: "2026-08-08T12:00:00+02:00",
    open: false,
    duration: "1h30",
  },
  {
    id: "2026-08-08-1330",
    dateLabel: "Samedi 8 août",
    timeLabel: "13h30",
    datetime: "2026-08-08T13:30:00+02:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-08-08-1500",
    dateLabel: "Samedi 8 août",
    timeLabel: "15h00",
    datetime: "2026-08-08T15:00:00+02:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-08-08-1630",
    dateLabel: "Samedi 8 août",
    timeLabel: "16h30",
    datetime: "2026-08-08T16:30:00+02:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-08-08-1800",
    dateLabel: "Samedi 8 août",
    timeLabel: "18h00",
    datetime: "2026-08-08T18:00:00+02:00",
    open: true,
    duration: "1h30",
  },

  // Samedi 15 août 2026
  {
    id: "2026-08-15-0900",
    dateLabel: "Samedi 15 août",
    timeLabel: "9h00",
    datetime: "2026-08-15T09:00:00+02:00",
    open: false,
    duration: "1h30",
  },
  {
    id: "2026-08-15-1030",
    dateLabel: "Samedi 15 août",
    timeLabel: "10h30",
    datetime: "2026-08-15T10:30:00+02:00",
    open: false,
    duration: "1h30",
  },
  {
    id: "2026-08-15-1200",
    dateLabel: "Samedi 15 août",
    timeLabel: "12h00",
    datetime: "2026-08-15T12:00:00+02:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-08-15-1330",
    dateLabel: "Samedi 15 août",
    timeLabel: "13h30",
    datetime: "2026-08-15T13:30:00+02:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-08-15-1500",
    dateLabel: "Samedi 15 août",
    timeLabel: "15h00",
    datetime: "2026-08-15T15:00:00+02:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-08-15-1630",
    dateLabel: "Samedi 15 août",
    timeLabel: "16h30",
    datetime: "2026-08-15T16:30:00+02:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-08-15-1800",
    dateLabel: "Samedi 15 août",
    timeLabel: "18h00",
    datetime: "2026-08-15T18:00:00+02:00",
    open: true,
    duration: "1h30",
  },

  // Samedi 22 août 2026
  {
    id: "2026-08-22-0900",
    dateLabel: "Samedi 22 août",
    timeLabel: "9h00",
    datetime: "2026-08-22T09:00:00+02:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-08-22-1030",
    dateLabel: "Samedi 22 août",
    timeLabel: "10h30",
    datetime: "2026-08-22T10:30:00+02:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-08-22-1200",
    dateLabel: "Samedi 22 août",
    timeLabel: "12h00",
    datetime: "2026-08-22T12:00:00+02:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-08-22-1330",
    dateLabel: "Samedi 22 août",
    timeLabel: "13h30",
    datetime: "2026-08-22T13:30:00+02:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-08-22-1500",
    dateLabel: "Samedi 22 août",
    timeLabel: "15h00",
    datetime: "2026-08-22T15:00:00+02:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-08-22-1630",
    dateLabel: "Samedi 22 août",
    timeLabel: "16h30",
    datetime: "2026-08-22T16:30:00+02:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-08-22-1800",
    dateLabel: "Samedi 22 août",
    timeLabel: "18h00",
    datetime: "2026-08-22T18:00:00+02:00",
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