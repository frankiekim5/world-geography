import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-arrow',
  templateUrl: './filter-arrow.component.html',
  styleUrls: ['./filter-arrow.component.scss']
})
export class FilterArrowComponent implements OnInit {

  @Output() filterCondition = new EventEmitter<boolean>();

  showFilters = false;

  constructor() { }

  ngOnInit() {
  }

  toggleFilters(condition: boolean) {
    this.showFilters = condition;
    this.filterCondition.emit(this.showFilters);
  }
}
