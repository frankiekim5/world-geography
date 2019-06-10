import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CountriesService } from '../countries.service';
import { Country } from '../interfaces/country';
import { ALLSTRING, DOWNSTRING, UPSTRING, NAMESTRING, CAPITALSTRING, REGIONSTRING } from '../constants/constants';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-map-table',
  templateUrl: './map-table.component.html',
  styleUrls: ['./map-table.component.scss']
})

export class MapTableComponent implements OnInit {

  @Input() set activeRegions(activeRegions: Country[]) {
    this.countryData = [];
    if (activeRegions && activeRegions.length > 0) {
      for (const activeRegion of activeRegions) {
        this.countriesService.getCountryData(`region/${activeRegion.name}`)
          .pipe(take(1)).subscribe(result => {
            this.countryData = this.countryData.concat(result);
          });
      }
    } else {
      this.getAllCountries();
    }
  }
  @Input() searchText: string;
  @Input() set populationBounds(bounds) {
    this.countryData = this.allCountryData.filter(item => {
      return item.population >= bounds.lowerBound && item.population <= bounds.upperBound;
    });
    this.countryData.sort((a, b) => {
      return b.population - a.population;
    });
  }
  @Input() selectedLanguage: string;
  @Input() selectedBloc: string;

  @Output() languages = new EventEmitter<string[]>();

  private allCountryData: Country[] = []; // This is for the population filter mainly.
  private languageSet = new Set();

  DOWNSTRING = DOWNSTRING;
  UPSTRING = UPSTRING;
  NAMESTRING = NAMESTRING;
  CAPITALSTRING = CAPITALSTRING;
  REGIONSTRING = REGIONSTRING;

  countryData: Country[] = [];

  constructor(private countriesService: CountriesService, private router: Router) { }

  ngOnInit() {
    this.getAllCountries();
  }

  private getAllCountries() {
    this.countriesService.getCountryData(ALLSTRING)
      .pipe(take(1)).subscribe(result => {
        this.countryData = result;
        this.allCountryData = result;
        this.getAllLanguages();
      });
  }

  private getAllLanguages() {
    for (const country of this.allCountryData) {
      for (const language of country.languages) {
        this.languageSet.add(language.name);
      }
    }
    const languageArray = (Array.from(this.languageSet)).sort();
    this.languages.emit(languageArray);
  }

  // Sorting
  sortCountry(order: string, propertyKey: string) {
    this.countryData.sort((a, b) => {
      if (order === DOWNSTRING) {
        return b[propertyKey].localeCompare(a[propertyKey]);
      } else {
        return a[propertyKey].localeCompare(b[propertyKey]);
      }
    });
  }

  // Navigate to the selected country
  navSelectedCountry(alpha3Code: string) {
    this.router.navigate([`country/${alpha3Code}`]);
  }

  triggerFlagPreview(flag?: string) {
    this.countriesService.flagSubject.next(flag || null);
  }

}
