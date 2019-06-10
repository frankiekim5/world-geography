import { Country } from '../interfaces/country';

export const MockUSACountry: Country = {
  name: 'United States of America',
    capital: 'Washington DC',
    region: 'Americas',
    currencies: [
      {
        code: 'USD',
        name: 'United States dollar',
      }
    ],
    alpha2Code: 'US',
};

export const MockCountries: Country[] = [
  {
    name: 'Be',
    capital: 'Ferris Wheel',
    region: 'Asia',
    currencies: [
      {
        code: 'USD',
        name: 'United States dollar',
      }
    ],
    alpha2Code: 'US',
  },
];
