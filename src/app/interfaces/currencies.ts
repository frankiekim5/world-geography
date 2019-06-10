import { Country } from './country';

export interface Currencies {
  base?: string;
  rates?: Rates;
}

export interface Currency {
  rate?: number;
  active?: boolean;
  code?: string;
  name?: string;
}

export interface CountryCurrency {
  previewedCountry: Country[];
  currency: Currency;
}

export interface Rates {
  AUD: number;
  BGN: number;
  BRL: number;
  CAD: number;
  CHF: number;
  CNY: number;
  CZK: number;
  DKK: number;
  EUR?: number;
  GBP: number;
  HKD: number;
  HRK: number;
  HUF: number;
  IDR: number;
  ILS: number;
  INR: number;
  ISK: number;
  JPY: number;
  KRW: number;
  MXN: number;
  MYR: number;
  NOK: number;
  NZD: number;
  PHP: number;
  PLN: number;
  RON: number;
  RUB: number;
  SEK: number;
  SGD: number;
  THB: number;
  TRY: number;
  USD: number;
  ZAR: number;
}
