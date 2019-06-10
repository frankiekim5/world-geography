import { Component, OnInit } from '@angular/core';
import { Currency } from 'src/app/interfaces/currencies';

@Component({
  selector: 'app-currency-exchange',
  templateUrl: './currency-exchange.component.html',
  styleUrls: ['./currency-exchange.component.scss']
})
export class CurrencyExchangeComponent implements OnInit {

  showCurrencyInformation = false;
  currency: Currency;

  constructor() { }

  ngOnInit() {
  }

  isCurrencySelected(condition: boolean) {
    this.showCurrencyInformation = condition;
  }

  currencySelected(cur: Currency) {
    this.currency = cur;
  }

}
