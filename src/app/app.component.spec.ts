import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { WorldMapComponent } from './world-map/world-map.component';
import { FilterPipe } from './filter.pipe';
import { MapTableComponent } from './map-table/map-table.component';
import { AppRoutingModule } from './app-routing.module';
import { FilterArrowComponent } from './filter-arrow/filter-arrow.component';
import { CountryPageComponent } from './country-page/country-page.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FlagPreviewComponent } from './flag-preview/flag-preview.component';
import { CurrencyExchangeComponent } from './ce-general/currency-exchange/currency-exchange.component';
import { CeDashboardComponent } from './ce-general/ce-dashboard/ce-dashboard.component';
import { CeSelectCurrencyComponent } from './ce-general/ce-select-currency/ce-select-currency.component';
import { CeCurrencyInformationComponent } from './ce-general/ce-currency-information/ce-currency-information.component';
import { CeFlagPreviewComponent } from './ce-general/ce-flag-preview/ce-flag-preview.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        AppRoutingModule,
      ],
      declarations: [
        AppComponent,
        WorldMapComponent,
        FilterPipe,
        MapTableComponent,
        FilterArrowComponent,
        CountryPageComponent,
        SidebarComponent,
        FlagPreviewComponent,
        CurrencyExchangeComponent,
        CeDashboardComponent,
        CeSelectCurrencyComponent,
        CeCurrencyInformationComponent,
        CeFlagPreviewComponent,
      ],
      schemas: [ NO_ERRORS_SCHEMA ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
