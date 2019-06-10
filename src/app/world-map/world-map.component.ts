import { Component, OnInit } from '@angular/core';
import { REGIONS, REGIONALBLOCS } from '../constants/constants';
import { Country, Regions } from '../interfaces/country';

@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.scss'],
})

export class WorldMapComponent implements OnInit {

  lowerBound = 0;
  upperBound = 0;

  // Region filtering
  regionObjects: Regions[] = [];
  activeRegions: Country[] = [];

  // Search filtering
  searchText: string;
  showFilters = false;

  // Languages filtering
  allLanguages: string[] = [];
  selectedLanguage: string;

  // Regional Blocs filtering
  selectedBloc: string;
  regionalBlocsArray: string[] = [];

  constructor() { }

  ngOnInit() {
    Object.keys(REGIONS).forEach(value => {
      this.regionObjects.push(
        {
          name: REGIONS[value],
          active: false
        }
      );
    });
    this.regionalBlocsArray = Object.values(REGIONALBLOCS);
    this.regionalBlocsArray.sort();
  }

  toggleFilters(condition: boolean) { this.showFilters = condition; }

  filterRegion(region: Country) {
    region.active = !region.active;
    // Adds selected regions and removes deselected regions
    region.active ? this.activeRegions.push(region)
      : this.activeRegions = this.activeRegions.filter(item => item.active);
    // To detect change as an input in child component
    this.activeRegions = this.activeRegions.slice();
  }

  setAllLanguages(languages: string[]) {
    this.allLanguages = languages;
  }
}
