import { Component, OnInit, Input } from '@angular/core';
import { Currency, Currencies } from 'src/app/interfaces/currencies';
import { CountriesService } from 'src/app/countries.service';
import { take } from 'rxjs/operators';
import { Country } from 'src/app/interfaces/country';
import { ALLSTRING } from 'src/app/constants/constants';

@Component({
  selector: 'app-ce-currency-information',
  templateUrl: './ce-currency-information.component.html',
  styleUrls: ['./ce-currency-information.component.scss']
})
export class CeCurrencyInformationComponent implements OnInit {

  private currencyCodes: string[];
  private targetCur: string;
  private conversionRate: number;
  private selectedCurrency: Currency;

  selectedCountry: Country;
  allCurrencies: Country[] = [];
  targetedCurrency: string;
  conversionAmount = 0;
  finalConversion = 0;
  finalCurrency: string;

  constructor(
    private countriesService: CountriesService
  ) { }

  @Input() set currency(currency: Currency) {
    this.selectedCurrency = currency;
    if (currency) {
      const code = currency.code.slice(0, 2);
      this.countriesService.getCountryData(`alpha/${code}`)
        .pipe(take(1)).subscribe(result => {
          this.selectedCountry = result;
        });
    }
  }

  ngOnInit() {
    this.getAllCurrencies();
  }

  private getAllCurrencies() {
    this.countriesService.getCurrencyData('latest')
      .pipe(take(1)).subscribe((result: Currencies) => {
        this.currencyCodes = Object.keys(result.rates);
        this.currencyCodes.push(result.base);
        this.currencyCodes.sort();
        this.countriesService.getCountryData(ALLSTRING)
          .pipe(take(1)).subscribe((res: Country[]) => {
            for (const country of res) {
              for (const cur of this.currencyCodes) {
                if (cur.slice(0, 2) === country.alpha2Code) {
                  this.allCurrencies.push(country);
                }
              }
            }
          });
      });
  }

  convertCurrency() {
    if (this.targetedCurrency) {
      for (const cur of this.currencyCodes) {
        if (this.targetedCurrency === cur.slice(0, 2)) {
          this.targetCur = cur;
        }
      }
      this.countriesService.getCurrencyData(`latest?base=${this.selectedCurrency.code}`)
        .pipe(take(1)).subscribe((result: Currencies) => {
          for (const rate in result.rates) {
            if (rate === this.targetCur) {
              this.conversionRate = result.rates[rate];
              this.finalConversion = this.conversionAmount * this.conversionRate;
              for (const currency of this.allCurrencies) {
                if (currency.alpha2Code === this.targetedCurrency) {
                  this.finalCurrency = currency.currencies[0].name;
                }
              }
              return;
            }
          }
        });
    }
  }

}
