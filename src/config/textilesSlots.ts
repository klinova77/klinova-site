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
  // Samedi 28 mars 2026
  {
    id: "2026-03-28-0900",
    dateLabel: "Samedi 28 mars",
    timeLabel: "9h00",
    datetime: "2026-03-28T09:00:00+01:00",
    open: false,
    duration: "1h30",
  },
  {
    id: "2026-03-28-1030",
    dateLabel: "Samedi 28 mars",
    timeLabel: "10h30",
    datetime: "2026-03-28T10:30:00+01:00",
    open: false,
    duration: "1h30",
  },
  {
    id: "2026-03-28-1200",
    dateLabel: "Samedi 28 mars",
    timeLabel: "12h00",
    datetime: "2026-03-28T12:00:00+01:00",
    open: false,
    duration: "1h30",
  },
  {
    id: "2026-03-28-1330",
    dateLabel: "Samedi 28 mars",
    timeLabel: "13h30",
    datetime: "2026-03-28T13:30:00+01:00",
    open: false,
    duration: "1h30",
  },
  {
    id: "2026-03-28-1500",
    dateLabel: "Samedi 28 mars",
    timeLabel: "15h00",
    datetime: "2026-03-28T15:00:00+01:00",
    open: false,
    duration: "1h30",
  },
  {
    id: "2026-03-28-1630",
    dateLabel: "Samedi 28 mars",
    timeLabel: "16h30",
    datetime: "2026-03-28T16:30:00+01:00",
    open: false,
    duration: "1h30",
  },
  {
    id: "2026-03-28-1800",
    dateLabel: "Samedi 28 mars",
    timeLabel: "18h00",
    datetime: "2026-03-28T18:00:00+01:00",
    open: false,
    duration: "1h30",
  },

  // Samedi 4 avril 2026
  {
    id: "2026-04-04-0900",
    dateLabel: "Samedi 4 avril",
    timeLabel: "9h00",
    datetime: "2026-04-04T09:00:00+01:00",
    open: false,
    duration: "1h30",
  },
  {
    id: "2026-04-04-1030",
    dateLabel: "Samedi 4 avril",
    timeLabel: "10h30",
    datetime: "2026-04-04T10:30:00+01:00",
    open: false,
    duration: "1h30",
  },
  {
    id: "2026-04-04-1200",
    dateLabel: "Samedi 4 avril",
    timeLabel: "12h00",
    datetime: "2026-04-04T12:00:00+01:00",
    open: false,
    duration: "1h30",
  },
  {
    id: "2026-04-04-1330",
    dateLabel: "Samedi 4 avril",
    timeLabel: "13h30",
    datetime: "2026-04-04T13:30:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-04-04-1500",
    dateLabel: "Samedi 4 avril",
    timeLabel: "15h00",
    datetime: "2026-04-04T15:00:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-04-04-1630",
    dateLabel: "Samedi 4 avril",
    timeLabel: "16h30",
    datetime: "2026-04-04T16:30:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-04-04-1800",
    dateLabel: "Samedi 4 avril",
    timeLabel: "18h00",
    datetime: "2026-04-04T18:00:00+01:00",
    open: true,
    duration: "1h30",
  },

  // Samedi 11 avril 2026
  {
    id: "2026-04-11-0900",
    dateLabel: "Samedi 11 avril",
    timeLabel: "9h00",
    datetime: "2026-04-11T09:00:00+01:00",
    open: false,
    duration: "1h30",
  },
  {
    id: "2026-04-11-1030",
    dateLabel: "Samedi 11 avril",
    timeLabel: "10h30",
    datetime: "2026-04-11T10:30:00+01:00",
    open: false,
    duration: "1h30",
  },
  {
    id: "2026-04-11-1200",
    dateLabel: "Samedi 11 avril",
    timeLabel: "12h00",
    datetime: "2026-04-11T12:00:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-04-11-1330",
    dateLabel: "Samedi 11 avril",
    timeLabel: "13h30",
    datetime: "2026-04-11T13:30:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-04-11-1500",
    dateLabel: "Samedi 11 avril",
    timeLabel: "15h00",
    datetime: "2026-04-11T15:00:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-04-11-1630",
    dateLabel: "Samedi 11 avril",
    timeLabel: "16h30",
    datetime: "2026-04-11T16:30:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-04-11-1800",
    dateLabel: "Samedi 11 avril",
    timeLabel: "18h00",
    datetime: "2026-04-11T18:00:00+01:00",
    open: true,
    duration: "1h30",
  },

  // Samedi 18 avril 2026
  {
    id: "2026-04-18-0900",
    dateLabel: "Samedi 18 avril",
    timeLabel: "9h00",
    datetime: "2026-04-18T09:00:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-04-18-1030",
    dateLabel: "Samedi 18 avril",
    timeLabel: "10h30",
    datetime: "2026-04-18T10:30:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-04-18-1200",
    dateLabel: "Samedi 18 avril",
    timeLabel: "12h00",
    datetime: "2026-04-18T12:00:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-04-18-1330",
    dateLabel: "Samedi 18 avril",
    timeLabel: "13h30",
    datetime: "2026-04-18T13:30:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-04-18-1500",
    dateLabel: "Samedi 18 avril",
    timeLabel: "15h00",
    datetime: "2026-04-18T15:00:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-04-18-1630",
    dateLabel: "Samedi 18 avril",
    timeLabel: "16h30",
    datetime: "2026-04-18T16:30:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-04-18-1800",
    dateLabel: "Samedi 18 avril",
    timeLabel: "18h00",
    datetime: "2026-04-18T18:00:00+01:00",
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