import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { MapTableComponent } from './map-table.component';
import { FilterPipe } from '../filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { CountriesService } from '../countries.service';
import { of, Subject } from 'rxjs';
import { Country } from '../interfaces/country';
import { take } from 'rxjs/operators';
import { UPSTRING, NAMESTRING, DOWNSTRING, CAPITALSTRING, REGIONSTRING } from '../constants/constants';

const MockCountries: Country[] = [
  {
    name: 'Be',
    capital: 'Ferris Wheel',
    region: 'Asia',
    languages: [
      {
        name: 'Korean',
      }
    ],
  },
  {
    name: 'Cd',
    capital: 'White House',
    region: 'Europe',
    languages: [
      {
        name: 'Russian',
      }
    ],
  },
  {
    name: 'Ab',
    capital: 'California',
    region: 'Africa',
    languages: [
      {
        name: 'French',
      }
    ],
  },
];

describe('MapTableComponent', () => {
  let component: MapTableComponent;
  let fixture: ComponentFixture<MapTableComponent>;

  const countriesService = {
    getCountryData: () => of(MockCountries),
    flagSubject: new Subject<string>(),
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MapTableComponent,
        FilterPipe
      ],
      imports: [
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [
        {provide: CountriesService, useValue: countriesService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get all countries', fakeAsync(() => {
    tick();
    expect(component.countryData).toEqual(MockCountries);
  }));

  it('should trigger flag preview', () => {
    countriesService.flagSubject.pipe(take(1)).subscribe((result: string) => {
      expect(result).toBe('hello world');
    });
    component.triggerFlagPreview('hello world');
  });

  it('should reset flag on mouse leave', () => {
    countriesService.flagSubject.pipe(take(1)).subscribe((result: null) => {
      expect(result).toEqual(null);
    });
    component.triggerFlagPreview();
  });

  it('should sort column name ascending', () => {
    const countryData: Country[] = [
      {
        name: 'Ab',
        capital: 'California',
        region: 'Africa',
        languages: [
          {
            name: 'French',
          }
        ],
      },
      {
        name: 'Be',
        capital: 'Ferris Wheel',
        region: 'Asia',
        languages: [
          {
            name: 'Korean',
          }
        ],
      },
      {
        name: 'Cd',
        capital: 'White House',
        region: 'Europe',
        languages: [
          {
            name: 'Russian',
          }
        ],
      },
    ];
    component.sortCountry(UPSTRING, NAMESTRING);
    expect(component.countryData).toEqual(countryData);
  });

  it('should sort column name descending', () => {
    const countryData: Country[] = [
      {
        name: 'Cd',
        capital: 'White House',
        region: 'Europe',
        languages: [
          {
            name: 'Russian',
          }
        ],
      },
      {
        name: 'Be',
        capital: 'Ferris Wheel',
        region: 'Asia',
        languages: [
          {
            name: 'Korean',
          }
        ],
      },
      {
        name: 'Ab',
        capital: 'California',
        region: 'Africa',
        languages: [
          {
            name: 'French',
          }
        ],
      },
    ];
    component.sortCountry(DOWNSTRING, NAMESTRING);
    expect(component.countryData).toEqual(countryData);
  });

  it('should sort column capital ascending', () => {
    const countryData: Country[] = [
      {
        name: 'Ab',
        capital: 'California',
        region: 'Africa',
        languages: [
          {
            name: 'French',
          }
        ],
      },
      {
        name: 'Be',
        capital: 'Ferris Wheel',
        region: 'Asia',
        languages: [
          {
            name: 'Korean',
          }
        ],
      },
      {
        name: 'Cd',
        capital: 'White House',
        region: 'Europe',
        languages: [
          {
            name: 'Russian',
          }
        ],
      },
    ];
    component.sortCountry(UPSTRING, CAPITALSTRING);
    expect(component.countryData).toEqual(countryData);
  });

  it('should sort column capital descending', () => {
    const countryData: Country[] = [
      {
        name: 'Cd',
        capital: 'White House',
        region: 'Europe',
        languages: [
          {
            name: 'Russian',
          }
        ],
      },
      {
        name: 'Be',
        capital: 'Ferris Wheel',
        region: 'Asia',
        languages: [
          {
            name: 'Korean',
          }
        ],
      },
      {
        name: 'Ab',
        capital: 'California',
        region: 'Africa',
        languages: [
          {
            name: 'French',
          }
        ],
      },
    ];
    component.sortCountry(DOWNSTRING, CAPITALSTRING);
    expect(component.countryData).toEqual(countryData);
  });

  it('should sort column region ascending', () => {
    const countryData: Country[] = [
      {
        name: 'Ab',
        capital: 'California',
        region: 'Africa',
        languages: [
          {
            name: 'French',
          }
        ],
      },
      {
        name: 'Be',
        capital: 'Ferris Wheel',
        region: 'Asia',
        languages: [
          {
            name: 'Korean',
          }
        ],
      },
      {
        name: 'Cd',
        capital: 'White House',
        region: 'Europe',
        languages: [
          {
            name: 'Russian',
          }
        ],
      },
    ];
  });

  it('should sort column region descending', () => {
    const countryData: Country[] = [
      {
        name: 'Cd',
        capital: 'White House',
        region: 'Europe',
        languages: [
          {
            name: 'Russian',
          }
        ],
      },
      {
        name: 'Be',
        capital: 'Ferris Wheel',
        region: 'Asia',
        languages: [
          {
            name: 'Korean',
          }
        ],
      },
      {
        name: 'Ab',
        capital: 'California',
        region: 'Africa',
        languages: [
          {
            name: 'French',
          }
        ],
      },
    ];
    component.sortCountry(DOWNSTRING, REGIONSTRING);
    expect(component.countryData).toEqual(countryData);
  });

});
