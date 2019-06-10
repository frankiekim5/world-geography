import { Component, OnInit, OnDestroy } from '@angular/core';
import { CountriesService } from '../countries.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-flag-preview',
  templateUrl: './flag-preview.component.html',
  styleUrls: ['./flag-preview.component.scss']
})
export class FlagPreviewComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject<any>();

  flagImage: string;

  constructor(private countriesService: CountriesService) { }

  ngOnInit() {
    this.countriesService.flagSubject
      .pipe(takeUntil(this.destroy$))
      .subscribe(result => {
        this.flagImage = result;
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

}
