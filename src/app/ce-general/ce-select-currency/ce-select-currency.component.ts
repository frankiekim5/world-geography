import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CountriesService } from 'src/app/countries.service';
import { take } from 'rxjs/operators';
import { ALLSTRING } from 'src/app/constants/constants';
import { Country } from 'src/app/interfaces/country';
import { Currency, CountryCurrency } from 'src/app/interfaces/currencies';

@Component({
  selector: 'app-ce-select-currency',
  templateUrl: './ce-select-currency.component.html',
  styleUrls: ['./ce-select-currency.component.scss']
})
export class CeSelectCurrencyComponent implements OnInit {

  @Output() isCurrencySelected = new EventEmitter<boolean>();
  @Output() currencySelected = new EventEmitter<Currency>();

  allCurrencies: any[];
  oneButtonClicked = false;

  constructor(
    private countriesService: CountriesService,
  ) { }

  ngOnInit() {
    this.getAllCurrencyData();
  }

  private getAllCurrencyData() {
    this.countriesService.getCurrencyData('latest')
      .pipe(take(1)).subscribe(result => {
        this.allCurrencies = Object.keys(result.rates);
        this.allCurrencies.push(result.base);
        this.allCurrencies.sort();

        // Convert each currency to an object and add the active property (for the buttons).
        this.allCurrencies.forEach((value, index, array) => {
          array[index] = {
            code: value,
            active: false,
          };
        });
      });
  }

  triggerPreview(currency: string) {
    const countryCurrency: CountryCurrency = {
      previewedCountry: [],
      currency: {},
    };

    this.countriesService.getCountryData(ALLSTRING)
      .pipe(take(1)).subscribe((result: Country[]) => {
        for (const country of result) {
          for (const cur of country.currencies) {
            if (currency === cur.code) {
              countryCurrency.previewedCountry.push(country);
            }
          }
        }
        countryCurrency.currency.code = currency;
        this.countriesService.currencyInfoSubject.next(countryCurrency);
      });
  }

  resetPreview() {
    this.countriesService.currencyInfoSubject.next(null);
  }

  currencyButtonClick(cur: Currency) {
    this.allCurrencies.map(value => {
      value.code !== cur.code ? value.active = false : value.active = true;
    });
    cur.active ? this.oneButtonClicked = true : this.oneButtonClicked = false;

    this.isCurrencySelected.emit(this.oneButtonClicked);

    if (this.oneButtonClicked) {
      this.currencySelected.emit(cur);
    }
  }

}
