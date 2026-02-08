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
  // Samedi 14 février 2026
  {
    id: "2026-02-14-0900",
    dateLabel: "Samedi 14 février",
    timeLabel: "9h00",
    datetime: "2026-02-14T09:00:00+01:00",
    open: false,
    duration: "1h30",
  },
  {
    id: "2026-02-14-1030",
    dateLabel: "Samedi 14 février",
    timeLabel: "10h30",
    datetime: "2026-02-14T10:30:00+01:00",
    open: false,
    duration: "1h30",
  },
  {
    id: "2026-02-14-1200",
    dateLabel: "Samedi 14 février",
    timeLabel: "12h00",
    datetime: "2026-02-14T12:00:00+01:00",
    open: false,
    duration: "1h30",
  },
  {
    id: "2026-02-14-1330",
    dateLabel: "Samedi 14 février",
    timeLabel: "13h30",
    datetime: "2026-02-14T13:30:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-02-14-1500",
    dateLabel: "Samedi 14 février",
    timeLabel: "15h00",
    datetime: "2026-02-14T15:00:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-02-14-1630",
    dateLabel: "Samedi 14 février",
    timeLabel: "16h30",
    datetime: "2026-02-14T16:30:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-02-14-1800",
    dateLabel: "Samedi 14 février",
    timeLabel: "18h00",
    datetime: "2026-02-14T18:00:00+01:00",
    open: true,
    duration: "1h30",
  },

  // Samedi 21 février 2026
  {
    id: "2026-02-21-0900",
    dateLabel: "Samedi 21 février",
    timeLabel: "9h00",
    datetime: "2026-02-21T09:00:00+01:00",
    open: false,
    duration: "1h30",
  },
  {
    id: "2026-02-21-1030",
    dateLabel: "Samedi 21 février",
    timeLabel: "10h30",
    datetime: "2026-02-21T10:30:00+01:00",
    open: false,
    duration: "1h30",
  },
  {
    id: "2026-02-21-1200",
    dateLabel: "Samedi 21 février",
    timeLabel: "12h00",
    datetime: "2026-02-21T12:00:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-02-21-1330",
    dateLabel: "Samedi 21 février",
    timeLabel: "13h30",
    datetime: "2026-02-21T13:30:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-02-21-1500",
    dateLabel: "Samedi 21 février",
    timeLabel: "15h00",
    datetime: "2026-02-21T15:00:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-02-21-1630",
    dateLabel: "Samedi 21 février",
    timeLabel: "16h30",
    datetime: "2026-02-21T16:30:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-02-21-1800",
    dateLabel: "Samedi 21 février",
    timeLabel: "18h00",
    datetime: "2026-02-21T18:00:00+01:00",
    open: true,
    duration: "1h30",
  },

  // Samedi 7 mars 2026
  {
    id: "2026-03-07-0900",
    dateLabel: "Samedi 7 mars",
    timeLabel: "9h00",
    datetime: "2026-03-07T09:00:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-03-07-1030",
    dateLabel: "Samedi 7 mars",
    timeLabel: "10h30",
    datetime: "2026-03-07T10:30:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-03-07-1200",
    dateLabel: "Samedi 7 mars",
    timeLabel: "12h00",
    datetime: "2026-03-07T12:00:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-03-07-1330",
    dateLabel: "Samedi 7 mars",
    timeLabel: "13h30",
    datetime: "2026-03-07T13:30:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-03-07-1500",
    dateLabel: "Samedi 7 mars",
    timeLabel: "15h00",
    datetime: "2026-03-07T15:00:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-03-07-1630",
    dateLabel: "Samedi 7 mars",
    timeLabel: "16h30",
    datetime: "2026-03-07T16:30:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-03-07-1800",
    dateLabel: "Samedi 7 mars",
    timeLabel: "18h00",
    datetime: "2026-03-07T18:00:00+01:00",
    open: true,
    duration: "1h30",
  },

  // Mardi 17 mars 2026
  {
    id: "2026-03-17-0900",
    dateLabel: "Mardi 17 mars",
    timeLabel: "9h00",
    datetime: "2026-03-17T09:00:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-03-17-1030",
    dateLabel: "Mardi 17 mars",
    timeLabel: "10h30",
    datetime: "2026-03-17T10:30:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-03-17-1200",
    dateLabel: "Mardi 17 mars",
    timeLabel: "12h00",
    datetime: "2026-03-17T12:00:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-03-17-1330",
    dateLabel: "Mardi 17 mars",
    timeLabel: "13h30",
    datetime: "2026-03-17T13:30:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-03-17-1500",
    dateLabel: "Mardi 17 mars",
    timeLabel: "15h00",
    datetime: "2026-03-17T15:00:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-03-17-1630",
    dateLabel: "Mardi 17 mars",
    timeLabel: "16h30",
    datetime: "2026-03-17T16:30:00+01:00",
    open: true,
    duration: "1h30",
  },
  {
    id: "2026-03-17-1800",
    dateLabel: "Mardi 17 mars",
    timeLabel: "18h00",
    datetime: "2026-03-17T18:00:00+01:00",
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
