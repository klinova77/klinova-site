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
  // Samedi 6 décembre 2025
  {
    id: "2025-12-06-0900",
    dateLabel: "Samedi 6 décembre",
    timeLabel: "9h00",
    datetime: "2025-12-06T09:00:00+01:00",
    open: false,
    duration: "1h30",
  },
  {
    id: "2025-12-06-1030",
    dateLabel: "Samedi 6 décembre",
    timeLabel: "10h30",
    datetime: "2025-12-06T10:30:00+01:00",
    open: false,
    duration: "1h30",
  },
  {
    id: "2025-12-06-1200",
    dateLabel: "Samedi 6 décembre",
    timeLabel: "12h00",
    datetime: "2025-12-06T12:00:00+01:00",
    open: false,
    duration: "1h30",
  },
  {
    id: "2025-12-06-1330",
    dateLabel: "Samedi 6 décembre",
    timeLabel: "13h30",
    datetime: "2025-12-06T13:30:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2025-12-06-1500",
    dateLabel: "Samedi 6 décembre",
    timeLabel: "15h00",
    datetime: "2025-12-06T15:00:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2025-12-06-1630",
    dateLabel: "Samedi 6 décembre",
    timeLabel: "16h30",
    datetime: "2025-12-06T16:30:00+01:00",
    open: false,
    duration: "1h30",
  },
  {
    id: "2025-12-06-1800",
    dateLabel: "Samedi 6 décembre",
    timeLabel: "18h00",
    datetime: "2025-12-06T18:00:00+01:00",
    open: true,
    duration: "1h30",
  },

  // Samedi 13 décembre 2025
  {
    id: "2025-12-13-0900",
    dateLabel: "Samedi 13 décembre",
    timeLabel: "9h00",
    datetime: "2025-12-13T09:00:00+01:00",
    open: false,
    duration: "1h30",
  },
  {
    id: "2025-12-13-1030",
    dateLabel: "Samedi 13 décembre",
    timeLabel: "10h30",
    datetime: "2025-12-13T10:30:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2025-12-13-1200",
    dateLabel: "Samedi 13 décembre",
    timeLabel: "12h00",
    datetime: "2025-12-13T12:00:00+01:00",
    open: false,
    duration: "1h30",
  },
  {
    id: "2025-12-13-1330",
    dateLabel: "Samedi 13 décembre",
    timeLabel: "13h30",
    datetime: "2025-12-13T13:30:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2025-12-13-1500",
    dateLabel: "Samedi 13 décembre",
    timeLabel: "15h00",
    datetime: "2025-12-13T15:00:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2025-12-13-1630",
    dateLabel: "Samedi 13 décembre",
    timeLabel: "16h30",
    datetime: "2025-12-13T16:30:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2025-12-13-1800",
    dateLabel: "Samedi 13 décembre",
    timeLabel: "18h00",
    datetime: "2025-12-13T18:00:00+01:00",
    open: true,
    duration: "1h30",
  },

  // Samedi 20 décembre 2025
  {
    id: "2025-12-20-0900",
    dateLabel: "Samedi 20 décembre",
    timeLabel: "9h00",
    datetime: "2025-12-20T09:00:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2025-12-20-1030",
    dateLabel: "Samedi 20 décembre",
    timeLabel: "10h30",
    datetime: "2025-12-20T10:30:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2025-12-20-1200",
    dateLabel: "Samedi 20 décembre",
    timeLabel: "12h00",
    datetime: "2025-12-20T12:00:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2025-12-20-1330",
    dateLabel: "Samedi 20 décembre",
    timeLabel: "13h30",
    datetime: "2025-12-20T13:30:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2025-12-20-1500",
    dateLabel: "Samedi 20 décembre",
    timeLabel: "15h00",
    datetime: "2025-12-20T15:00:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2025-12-20-1630",
    dateLabel: "Samedi 20 décembre",
    timeLabel: "16h30",
    datetime: "2025-12-20T16:30:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2025-12-20-1800",
    dateLabel: "Samedi 20 décembre",
    timeLabel: "18h00",
    datetime: "2025-12-20T18:00:00+01:00",
    open: true,
    duration: "1h30",
  },

  // Samedi 27 décembre 2025
  {
    id: "2025-12-27-0900",
    dateLabel: "Samedi 27 décembre",
    timeLabel: "9h00",
    datetime: "2025-12-27T09:00:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2025-12-27-1030",
    dateLabel: "Samedi 27 décembre",
    timeLabel: "10h30",
    datetime: "2025-12-27T10:30:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2025-12-27-1200",
    dateLabel: "Samedi 27 décembre",
    timeLabel: "12h00",
    datetime: "2025-12-27T12:00:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2025-12-27-1330",
    dateLabel: "Samedi 27 décembre",
    timeLabel: "13h30",
    datetime: "2025-12-27T13:30:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2025-12-27-1500",
    dateLabel: "Samedi 27 décembre",
    timeLabel: "15h00",
    datetime: "2025-12-27T15:00:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2025-12-27-1630",
    dateLabel: "Samedi 27 décembre",
    timeLabel: "16h30",
    datetime: "2025-12-27T16:30:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2025-12-27-1800",
    dateLabel: "Samedi 27 décembre",
    timeLabel: "18h00",
    datetime: "2025-12-27T18:00:00+01:00",
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
