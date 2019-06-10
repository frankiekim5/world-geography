import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Country } from './interfaces/country';
import { Currencies, CountryCurrency } from './interfaces/currencies';
// import { Currencies }

@Injectable({
  providedIn: 'root'
})

export class CountriesService {

  flagSubject = new BehaviorSubject<any>(null);
  currencyInfoSubject = new BehaviorSubject<CountryCurrency>(null);

  constructor(private http: HttpClient) { }

  getCountryData(extension: string): Observable<Country[]> {
    return this.http.get<Country[]>(`https://restcountries.eu/rest/v2/${extension}`);
  }

  getCurrencyData(extension: string): Observable<Currencies> {
    return this.http.get<Currencies>(`https://api.exchangeratesapi.io/${extension}`);
  }
}
