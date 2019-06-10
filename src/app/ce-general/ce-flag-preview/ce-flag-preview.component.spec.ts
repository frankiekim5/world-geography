import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { CeFlagPreviewComponent } from './ce-flag-preview.component';
import { HttpClientModule } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { CountryCurrency } from 'src/app/interfaces/currencies';
import { CountriesService } from 'src/app/countries.service';
import { MockCountries } from 'src/app/mock-data/mock-countries.json';

describe('CeFlagPreviewComponent', () => {
  let component: CeFlagPreviewComponent;
  let fixture: ComponentFixture<CeFlagPreviewComponent>;

  const countryCurrency: CountryCurrency = {
    currency: {
      code: 'USD',
    },
    previewedCountry: MockCountries,
  };

  const countriesService = {
    currencyInfoSubject: new BehaviorSubject<CountryCurrency>(countryCurrency),
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeFlagPreviewComponent ],
      imports: [ HttpClientModule ],
      providers: [
        {provide: CountriesService, useValue: countriesService}
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeFlagPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should properly set the preview country', fakeAsync(() => {
    tick();
    expect(component.previewCountry).toEqual(countryCurrency.previewedCountry[0]);
  }));

});
