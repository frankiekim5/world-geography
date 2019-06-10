import { Component, OnInit, OnDestroy } from '@angular/core';
import { CountriesService } from 'src/app/countries.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { EUROSTRING } from '../../constants/constants';
import { Country } from '../../interfaces/country';
import { CountryCurrency } from 'src/app/interfaces/currencies';

@Component({
  selector: 'app-ce-flag-preview',
  templateUrl: './ce-flag-preview.component.html',
  styleUrls: ['./ce-flag-preview.component.scss']
})
export class CeFlagPreviewComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject<any>();

  previewCountry: Country;

  constructor(
    private countriesService: CountriesService
  ) { }

  ngOnInit() {
    this.countriesService.currencyInfoSubject
      .pipe(takeUntil(this.destroy$))
      .subscribe((result: CountryCurrency) => {
        if (result) {
          // Since EU is not a country, create EU object
          if (result.currency.code === EUROSTRING) {
            this.previewCountry = {
              name: 'European Union',
              flag: '../../assets/images/eu_flag.png',
              currencies: [{code: 'EUR', name: 'Euros'}],
            };
          }

          for (const country of result.previewedCountry) {
            if (result.currency.code.includes(country.alpha2Code)) {
              this.previewCountry = country;
              return;
            }
          }
        } else {
          this.previewCountry = null;
        }
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
  }
}
