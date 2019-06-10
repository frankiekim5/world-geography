import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../countries.service';
import { take } from 'rxjs/operators';
import { Currencies } from '../../interfaces/currencies';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-ce-dashboard',
  templateUrl: './ce-dashboard.component.html',
  styleUrls: ['./ce-dashboard.component.scss']
})
export class CeDashboardComponent implements OnInit {

  usaCurrency: Currencies;
  usaCountry: Country;
  britishCurrency: Currencies;
  euroCurrency: Currencies;

  constructor(
    private countriesService: CountriesService
  ) { }

  ngOnInit() {
    this.getEuroInformation();
    this.getUSAInformation();
    this.getBritishInformation();
  }

  private getEuroInformation() {
    this.countriesService.getCurrencyData('latest')
      .pipe(take(1)).subscribe(result => {
        this.euroCurrency = result;
      });
  }

  private getUSAInformation() {
    this.countriesService.getCurrencyData('latest/?base=USD')
      .pipe(take(1)).subscribe(result => {
        this.usaCurrency = result;
      });
    this.countriesService.getCountryData('alpha/USA')
      .pipe(take(1)).subscribe(result => {
        this.usaCountry = result;
      });
  }

  private getBritishInformation() {
    this.countriesService.getCurrencyData('latest/?base=GBP')
      .pipe(take(1)).subscribe(result => {
        this.britishCurrency = result;
      });
  }

}
