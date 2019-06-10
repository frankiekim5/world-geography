import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { WorldMapComponent } from './world-map/world-map.component';
import { FilterPipe } from './filter.pipe';
import { MapTableComponent } from './map-table/map-table.component';
import { FilterArrowComponent } from './filter-arrow/filter-arrow.component';
import { AppRoutingModule } from './app-routing.module';
import { CountryPageComponent } from './country-page/country-page.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FlagPreviewComponent } from './flag-preview/flag-preview.component';
import { CurrencyExchangeComponent } from './ce-general/currency-exchange/currency-exchange.component';
import { CeDashboardComponent } from './ce-general/ce-dashboard/ce-dashboard.component';
import { CeSelectCurrencyComponent } from './ce-general/ce-select-currency/ce-select-currency.component';
import { CeCurrencyInformationComponent } from './ce-general/ce-currency-information/ce-currency-information.component';
import { CeFlagPreviewComponent } from './ce-general/ce-flag-preview/ce-flag-preview.component';

@NgModule({
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
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCkUOdZ5y7hMm0yrcCQoCvLwzdM6M8s5qk'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
