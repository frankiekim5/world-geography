import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { CeSelectCurrencyComponent } from './ce-select-currency.component';
import { CeFlagPreviewComponent } from '../ce-flag-preview/ce-flag-preview.component';
import { HttpClientModule } from '@angular/common/http';
import { CountriesService } from 'src/app/countries.service';
import { CountryCurrency } from 'src/app/interfaces/currencies';
import { of, Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import { MockCurrencies, MockActiveCurrencies } from '../../mock-data/mock-currencies.json';
import { MockCountries } from 'src/app/mock-data/mock-countries.json';

describe('CeSelectCurrencyComponent', () => {
  let component: CeSelectCurrencyComponent;
  let fixture: ComponentFixture<CeSelectCurrencyComponent>;

  const countriesService = {
    getCurrencyData: () => of(MockCurrencies),
    getCountryData: () => of(MockCountries),
    currencyInfoSubject: new Subject<CountryCurrency>(),
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CeSelectCurrencyComponent,
        CeFlagPreviewComponent
      ],
      imports: [
        HttpClientModule
      ],
      providers: [
        {provide: CountriesService, useValue: countriesService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeSelectCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get all currencies', fakeAsync(() => {
    tick();
    expect(component.allCurrencies).toEqual(MockActiveCurrencies);
  }));

  it('should trigger the flag preview', () => {
    const countryCurrency: CountryCurrency = {
      currency: {
        code: 'USD',
      },
      previewedCountry: MockCountries,
    };
    countriesService.currencyInfoSubject.pipe(take(1)).subscribe((result: CountryCurrency) => {
      if (result) {
        expect(result).toEqual(countryCurrency);
      }
    });
    component.triggerPreview('USD');
  });

  it('should reset the flag preview', () => {
    countriesService.currencyInfoSubject.pipe(take(1)).subscribe(result => {
      expect(result).toBe(null);
    });
    component.resetPreview();
  });

  it('should detect which currency was selected by the user', () => {
    component.currencyButtonClick(MockActiveCurrencies[1]);
    MockActiveCurrencies[1].active = true;
    expect(component.allCurrencies).toEqual(MockActiveCurrencies);
  });


});
