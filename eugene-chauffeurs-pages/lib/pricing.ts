export const HOURLY_MIN_HOURS = 4;

export type VehicleKey = "s_class" | "v_class" | "range_rover";

export const HOURLY_RATES: Record<VehicleKey, number> = {
  s_class: 80,
  v_class: 75,
  range_rover: 100,
};

export const DAY_RATE_HOURS = 8;
export const DAY_RATES: Record<VehicleKey, number> = {
  s_class: 640,
  v_class: 600,
  range_rover: 800,
};

export const AIRPORT_FARES = {
  heathrow:   { s_class: 170, v_class: 170, range_rover: 210 },
  gatwick:    { s_class: 250, v_class: 250, range_rover: 290 },
  lcy:        { s_class: 165, v_class: 165, range_rover: 200 },
  stansted:   { s_class: 260, v_class: 260, range_rover: 300 },
  luton:      { s_class: 250, v_class: 250, range_rover: 290 },
};

export const VEHICLE_LABELS: Record<VehicleKey, string> = {
  s_class: "Mercedes-Benz S-Class",
  v_class: "Mercedes-Benz V-Class",
  range_rover: "Range Rover",
};
