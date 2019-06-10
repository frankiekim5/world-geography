import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { CeDashboardComponent } from './ce-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { CountriesService } from 'src/app/countries.service';
import { MockCurrencies, MockBritishCurrency, MockUSACurrency } from 'src/app/mock-data/mock-currencies.json';
import { of } from 'rxjs';
import { MockUSACountry } from 'src/app/mock-data/mock-countries.json';

describe('CeDashboardComponent', () => {
  let component: CeDashboardComponent;
  let fixture: ComponentFixture<CeDashboardComponent>;

  const countriesService = {
    getCurrencyData: (extension: string) => {
      if (extension === 'latest') {
        return of(MockCurrencies);
      } else if (extension === 'latest/?base=USD') {
        return of(MockUSACurrency);
      } else {
        return of(MockBritishCurrency);
      }
    },
    getCountryData: () => of(MockUSACountry),
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CeDashboardComponent
      ],
      imports: [
        HttpClientModule,
      ],
      providers: [
        { provide: CountriesService, useValue: countriesService},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the euro currency information', fakeAsync(() => {
    tick();
    expect(component.euroCurrency).toEqual(MockCurrencies);
  }));

  it('should set the US currency information', fakeAsync(() => {
    tick();
    expect(component.usaCurrency).toEqual(MockUSACurrency);
  }));

  it('should set the US country information', fakeAsync(() => {
    tick();
    expect(component.usaCountry).toEqual(MockUSACountry);
  }));

  it('should set the British currency information', fakeAsync(() => {
    tick();
    expect(component.britishCurrency).toEqual(MockBritishCurrency);
  }));
});
