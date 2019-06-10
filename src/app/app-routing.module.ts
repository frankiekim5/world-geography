import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CountryPageComponent } from './country-page/country-page.component';
import { WorldMapComponent } from './world-map/world-map.component';
import { CurrencyExchangeComponent } from './ce-general/currency-exchange/currency-exchange.component';

const routes: Routes = [
  { path: '', redirectTo: '/countries-table', pathMatch: 'full' },
  { path: 'countries-table', component: WorldMapComponent },
  { path: 'country/:alpha', component: CountryPageComponent },
  { path: 'currency-exchange', component: CurrencyExchangeComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
