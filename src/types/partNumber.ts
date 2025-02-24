export interface Config {
  reference: string;
  version: string;
  gasType: string;
  gases: {
    CO: boolean;
    NO2: boolean;
    O3: boolean;
    SO2: boolean;
    H2S: boolean;
    NH3: boolean;
    CO2: boolean;
    CH4: boolean;
  };
  particulate: string;
  meteorology: string;
  noise: string;
  communications: string;
}

export interface SelectionDescription {
  title: string;
  description: string;
}