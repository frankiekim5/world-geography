import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../countries.service';
import { Country } from '../interfaces/country';

import { take } from 'rxjs/operators';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.scss']
})
export class CountryPageComponent implements OnInit {

  selectedCountry: Country = {};

  currentTime = new Date();

  constructor(
    private route: ActivatedRoute,
    private countriesService: CountriesService,
  ) { }

  ngOnInit() {
    this.getCountry();
    setInterval(() => {
      this.currentTime = new Date();
    }, 1);
  }

  private getCountry() {
    const alphaCode = this.route.snapshot.paramMap.get('alpha');
    this.countriesService.getCountryData(`alpha/${alphaCode}`)
      .pipe(take(1)).subscribe(result => {
        Object.assign(this.selectedCountry, result);
      });
  }

}
