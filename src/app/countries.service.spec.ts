import { TestBed, inject } from '@angular/core/testing';

import { CountriesService } from './countries.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { take } from 'rxjs/operators';
import { ALLSTRING } from './constants/constants';

describe('CountriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ]
  }));

  it('should be created', () => {
    const service: CountriesService = TestBed.get(CountriesService);
    expect(service).toBeTruthy();
  });

  it('should get the country data', () => {
    inject([CountriesService, HttpTestingController], (service: CountriesService, mockBackend) => {
      service.getCountryData(ALLSTRING).pipe(take(1)).subscribe((response: any) => {
        expect(response).toBe(200);
      });
      mockBackend.expectOne({
        url: `https://restcountries.eu/rest/v2/${ALLSTRING}`,
        method: 'GET',
      }).flush(200);
    });
  });

  it('should get the currency data', () => {
    inject([CountriesService, HttpTestingController], (service: CountriesService, mockBackend) => {
      service.getCurrencyData('latest').pipe(take(1)).subscribe((response: any) => {
        expect(response).toBe(200);
      });
      mockBackend.expectOne({
        url: 'https://api.exchangeratesapi.io/latest',
        method: 'GET',
      }).flush(200);
    });
  });

});
