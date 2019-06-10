import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { CeCurrencyInformationComponent } from './ce-currency-information.component';
import { CountriesService } from 'src/app/countries.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { MockCurrencies } from '../../mock-data/mock-currencies.json';
import { MockCountries } from 'src/app/mock-data/mock-countries.json';

describe('CeCurrencyInformationComponent', () => {
  let component: CeCurrencyInformationComponent;
  let fixture: ComponentFixture<CeCurrencyInformationComponent>;

  const countriesService = {
    getCountryData: () => of(MockCountries),
    getCurrencyData: () => of(MockCurrencies),
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CeCurrencyInformationComponent
      ],
      imports: [
        FormsModule, HttpClientModule
      ],
      providers: [
        { provide: CountriesService, useValue: countriesService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeCurrencyInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve all the currencies for conversion', fakeAsync(() => {
    tick();
    expect(component.allCurrencies).toEqual(MockCountries);
  }));

  it('should correctly calculate the final conversion amount and the selected currency',
    fakeAsync(() => {
    component.conversionAmount = 10;
    component.targetedCurrency = 'US';
    component.currency = {code: 'EUR', active: true};
    component.convertCurrency();
    tick();
    expect(component.finalConversion).toBe(component.conversionAmount * MockCurrencies.rates.USD);
    expect(component.finalCurrency).toBe('United States dollar');
  }));

});
