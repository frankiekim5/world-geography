import { Currency } from './currencies';

export interface Country {
  active?: boolean;
  alpha2Code?: string;
  area?: number;
  capital?: string;
  currencies?: Currency[];
  flag?: string;
  languages?: Language[];
  latlng?: number[];
  name?: string;
  nativeName?: string;
  population?: number;
  region?: string;
  regionalBlocs?: RegionalBloc[];
  subregion?: string;
}

export interface Language {
  name: string;
}

export interface RegionalBloc {
  acronym?: string;
  name?: string;
}

export interface Regions {
  name: string;
  active: boolean;
}
