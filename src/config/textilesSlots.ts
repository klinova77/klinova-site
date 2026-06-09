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
  // Samedi 13 juin 2026
  {
    id: "2026-06-13-0900",
    dateLabel: "Samedi 13 juin",
    timeLabel: "9h00",
    datetime: "2026-06-13T09:00:00+02:00",
    open: false,
    duration: "1h30",
  },
  {
    id: "2026-06-13-1030",
    dateLabel: "Samedi 13 juin",
    timeLabel: "10h30",
    datetime: "2026-06-13T10:30:00+02:00",
    open: false,
    duration: "1h30",
  },
  {
    id: "2026-06-13-1200",
    dateLabel: "Samedi 13 juin",
    timeLabel: "12h00",
    datetime: "2026-06-13T12:00:00+02:00",
    open: false,
    duration: "1h30",
  },
  {
    id: "2026-06-13-1330",
    dateLabel: "Samedi 13 juin",
    timeLabel: "13h30",
    datetime: "2026-06-13T13:30:00+02:00",
    open: false,
    duration: "1h30",
  },
  {
    id: "2026-06-13-1500",
    dateLabel: "Samedi 13 juin",
    timeLabel: "15h00",
    datetime: "2026-06-13T15:00:00+02:00",
    open: false,
    duration: "1h30",
  },
  {
    id: "2026-06-13-1630",
    dateLabel: "Samedi 13 juin",
    timeLabel: "16h30",
    datetime: "2026-06-13T16:30:00+02:00",
    open: false,
    duration: "1h30",
  },
  {
    id: "2026-06-13-1800",
    dateLabel: "Samedi 13 juin",
    timeLabel: "18h00",
    datetime: "2026-06-13T18:00:00+02:00",
    open: false,
    duration: "1h30",
  },

  // Samedi 20 juin 2026
  {
    id: "2026-06-20-0900",
    dateLabel: "Samedi 20 juin",
    timeLabel: "9h00",
    datetime: "2026-06-20T09:00:00+02:00",
    open: false,
    duration: "1h30",
  },
  {
    id: "2026-06-20-1030",
    dateLabel: "Samedi 20 juin",
    timeLabel: "10h30",
    datetime: "2026-06-20T10:30:00+02:00",
    open: false,
    duration: "1h30",
  },
  {
    id: "2026-06-20-1200",
    dateLabel: "Samedi 20 juin",
    timeLabel: "12h00",
    datetime: "2026-06-20T12:00:00+02:00",
    open: false,
    duration: "1h30",
  },
  {
    id: "2026-06-20-1330",
    dateLabel: "Samedi 20 juin",
    timeLabel: "13h30",
    datetime: "2026-06-20T13:30:00+02:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-06-20-1500",
    dateLabel: "Samedi 20 juin",
    timeLabel: "15h00",
    datetime: "2026-06-20T15:00:00+02:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-06-20-1630",
    dateLabel: "Samedi 20 juin",
    timeLabel: "16h30",
    datetime: "2026-06-20T16:30:00+02:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-06-20-1800",
    dateLabel: "Samedi 20 juin",
    timeLabel: "18h00",
    datetime: "2026-06-20T18:00:00+02:00",
    open: true,
    duration: "1h30",
  },

  // Samedi 27 juin 2026
  {
    id: "2026-06-27-0900",
    dateLabel: "Samedi 27 juin",
    timeLabel: "9h00",
    datetime: "2026-06-27T09:00:00+02:00",
    open: false,
    duration: "1h30",
  },
  {
    id: "2026-06-27-1030",
    dateLabel: "Samedi 27 juin",
    timeLabel: "10h30",
    datetime: "2026-06-27T10:30:00+02:00",
    open: false,
    duration: "1h30",
  },
  {
    id: "2026-06-27-1200",
    dateLabel: "Samedi 27 juin",
    timeLabel: "12h00",
    datetime: "2026-06-27T12:00:00+02:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-06-27-1330",
    dateLabel: "Samedi 27 juin",
    timeLabel: "13h30",
    datetime: "2026-06-27T13:30:00+02:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-06-27-1500",
    dateLabel: "Samedi 27 juin",
    timeLabel: "15h00",
    datetime: "2026-06-27T15:00:00+02:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-06-27-1630",
    dateLabel: "Samedi 27 juin",
    timeLabel: "16h30",
    datetime: "2026-06-27T16:30:00+02:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-06-27-1800",
    dateLabel: "Samedi 27 juin",
    timeLabel: "18h00",
    datetime: "2026-06-27T18:00:00+02:00",
    open: true,
    duration: "1h30",
  },

  // Samedi 4 juillet 2026
  {
    id: "2026-07-04-0900",
    dateLabel: "Samedi 4 juillet",
    timeLabel: "9h00",
    datetime: "2026-07-04T09:00:00+02:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-07-04-1030",
    dateLabel: "Samedi 4 juillet",
    timeLabel: "10h30",
    datetime: "2026-07-04T10:30:00+02:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-07-04-1200",
    dateLabel: "Samedi 4 juillet",
    timeLabel: "12h00",
    datetime: "2026-07-04T12:00:00+02:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-07-04-1330",
    dateLabel: "Samedi 4 juillet",
    timeLabel: "13h30",
    datetime: "2026-07-04T13:30:00+02:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-07-04-1500",
    dateLabel: "Samedi 4 juillet",
    timeLabel: "15h00",
    datetime: "2026-07-04T15:00:00+02:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-07-04-1630",
    dateLabel: "Samedi 4 juillet",
    timeLabel: "16h30",
    datetime: "2026-07-04T16:30:00+02:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-07-04-1800",
    dateLabel: "Samedi 4 juillet",
    timeLabel: "18h00",
    datetime: "2026-07-04T18:00:00+02:00",
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