import { Pipe, PipeTransform } from '@angular/core';
import { ALLSTRING, UNAFFILIATEDSTRING } from './constants/constants';
import { Country } from './interfaces/country';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: Country[], searchText: string, selectedLanguage: string, selectedBloc: string): any[] {
    if (!items) {
      return [];
    }
    // Filter for search text
    if (searchText) {
      searchText = searchText.toLowerCase();
      items = items.filter(item => {
        return item.name.toLowerCase().includes(searchText);
      });
    }
    // Filter for selected language
    if (selectedLanguage) {

      if (selectedLanguage === ALLSTRING) { return items; }

      items = items.filter(item => {
        for (const language of item.languages) {
          return language.name === selectedLanguage;
        }
      });
    }
    // Filter for selected regional bloc
    if (selectedBloc) {

      if (selectedBloc === ALLSTRING) { return items; }

      items = items.filter(item => {
        if (item.regionalBlocs.length > 0) {
          for (const bloc of item.regionalBlocs) {
            return bloc.acronym.toLowerCase() === selectedBloc.toLowerCase();
          }
        }
        return selectedBloc === UNAFFILIATEDSTRING;
      });
    }
    return items;
  }

}
