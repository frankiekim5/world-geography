import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyExchangeComponent } from './currency-exchange.component';
import { CeDashboardComponent } from '../ce-dashboard/ce-dashboard.component';
import { CeSelectCurrencyComponent } from '../ce-select-currency/ce-select-currency.component';
import { CeCurrencyInformationComponent } from '../ce-currency-information/ce-currency-information.component';
import { SidebarComponent } from 'src/app/sidebar/sidebar.component';
import { CeFlagPreviewComponent } from '../ce-flag-preview/ce-flag-preview.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Currency } from 'src/app/interfaces/currencies';

describe('CurrencyExchangeComponent', () => {
  let component: CurrencyExchangeComponent;
  let fixture: ComponentFixture<CurrencyExchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CurrencyExchangeComponent,
        CeDashboardComponent,
        CeSelectCurrencyComponent,
        CeCurrencyInformationComponent,
        CeFlagPreviewComponent,
        SidebarComponent
      ],
      imports: [
        FormsModule,
        HttpClientModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the boolean condition properly', () => {
    component.isCurrencySelected(true);
    expect(component.showCurrencyInformation).toBe(true);
  });

  it('should set the currency properly', () => {
    const currency: Currency = {
      active: false,
      code: 'BAD',
    };
    component.currencySelected(currency);
    expect(component.currency).toEqual(currency);
  });
});
