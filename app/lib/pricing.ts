export const HOURLY_MIN_HOURS = 4;

export type VehicleKey = "s_class" | "v_class" | "range_rover" | "e_class" | "eqv" | "rolls_royce";

export const HOURLY_RATES: Record<VehicleKey, number> = {
  s_class: 80,
  v_class: 75,
  range_rover: 100,
  e_class: 60,
  eqv: 80,
  rolls_royce: 150,
};

export const DAY_RATE_HOURS = 8;
export const DAY_RATES: Record<VehicleKey, number> = {
  s_class: 640,
  v_class: 600,
  range_rover: 800,
  e_class: 480,
  eqv: 640,
  rolls_royce: 1200,
};

export const AIRPORT_FARES = {
  heathrow:   { s_class: 170, v_class: 170, range_rover: 210, e_class: 130, eqv: 180, rolls_royce: 350 },
  gatwick:    { s_class: 250, v_class: 250, range_rover: 290, e_class: 200, eqv: 260, rolls_royce: 450 },
  lcy:        { s_class: 165, v_class: 165, range_rover: 200, e_class: 125, eqv: 175, rolls_royce: 350 },
  stansted:   { s_class: 260, v_class: 260, range_rover: 300, e_class: 210, eqv: 270, rolls_royce: 450 },
  luton:      { s_class: 250, v_class: 250, range_rover: 290, e_class: 200, eqv: 260, rolls_royce: 450 },
};

export const VEHICLE_LABELS: Record<VehicleKey, string> = {
  s_class: "Mercedes-Benz S-Class",
  v_class: "Mercedes-Benz V-Class",
  range_rover: "Range Rover",
  e_class: "Mercedes-Benz E-Class",
  eqv: "Mercedes-Benz EQV",
  rolls_royce: "Rolls-Royce Ghost",
};

export const EVENT_PACKAGES: Record<string, { description: string; vehicles: Partial<Record<VehicleKey, number>> }> = {
  'royal-ascot': {
    description: 'Full day including travel to/from Ascot Racecourse and waiting time',
    vehicles: { s_class: 750, v_class: 700, range_rover: 950, e_class: 550 },
  },
  'wimbledon': {
    description: 'Full day including travel to/from AELTC and waiting time',
    vehicles: { s_class: 700, v_class: 650, range_rover: 900, e_class: 500 },
  },
  'cheltenham': {
    description: 'Full day including travel to/from Cheltenham Racecourse and waiting time',
    vehicles: { s_class: 850, v_class: 800, range_rover: 1050, e_class: 650 },
  },
  'henley': {
    description: 'Full day including travel to/from Henley-on-Thames and waiting time',
    vehicles: { s_class: 750, v_class: 700, range_rover: 950, e_class: 550 },
  },
  'goodwood': {
    description: 'Full day including travel to/from Goodwood Estate and waiting time',
    vehicles: { s_class: 850, v_class: 800, range_rover: 1050, e_class: 650 },
  },
  'chelsea-flower-show': {
    description: 'Full day including travel to/from Royal Hospital Chelsea and waiting time',
    vehicles: { s_class: 650, v_class: 600, range_rover: 850, e_class: 500 },
  },
  'farnborough-airshow': {
    description: 'Full day including travel to/from Farnborough and waiting time',
    vehicles: { s_class: 800, v_class: 750, range_rover: 1000, e_class: 600 },
  },
  'bafta': {
    description: 'Evening service including travel to/from Southbank Centre and waiting time',
    vehicles: { s_class: 550, v_class: 500, range_rover: 700, e_class: 400 },
  },
};