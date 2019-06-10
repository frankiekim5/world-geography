import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WorldMapComponent } from './world-map.component';
import { FormsModule } from '@angular/forms';
import { FilterArrowComponent } from '../filter-arrow/filter-arrow.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MapTableComponent } from '../map-table/map-table.component';
import { FlagPreviewComponent } from '../flag-preview/flag-preview.component';
import { FilterPipe } from '../filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { Country } from '../interfaces/country';

describe('WorldMapComponent', () => {
  let component: WorldMapComponent;
  let fixture: ComponentFixture<WorldMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WorldMapComponent,
        FilterArrowComponent,
        SidebarComponent,
        MapTableComponent,
        FlagPreviewComponent,
        FilterPipe
      ],
      imports: [
        FormsModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize', () => {
    const regionObjects = [
      {
        name: 'Africa',
        active: false,
      },
      {
        name: 'Americas',
        active: false,
      },
      {
        name: 'Asia',
        active: false,
      },
      {
        name: 'Europe',
        active: false,
      },
      {
        name: 'Oceania',
        active: false,
      },
    ];
    const regionalBlocsArray = [
      'Unaffiliated', 'EU', 'EFTA', 'CARICOM',
      'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN',
      'CAIS', 'CEFTA', 'NAFTA', 'SAARC'
    ].sort();
    expect(component.regionObjects).toEqual(regionObjects);
    expect(component.regionalBlocsArray).toEqual(regionalBlocsArray);
  });

  it('should toggle filters', () => {
    component.toggleFilters(true);
    expect(component.showFilters).toBe(true);
  });

  it('should display all languages in select menu', () => {
    const testArray = [
      'Ab', 'Cnn', 'test2', 'test'
    ];
    component.setAllLanguages(testArray);
    expect(component.allLanguages).toEqual(testArray);
  });

  it('should add the region if it is active', () => {
    const activeRegions: Country[] = [
      {
        active: true,
      },
    ];
    const country: Country = {
      active: false,
    };

    component.filterRegion(country);
    expect(component.activeRegions).toEqual(activeRegions);
  });

  it('should filter out inactive regions', () => {
    const activeRegions: Country[] = [];

    const country: Country = {
      active: true,
    };

    component.filterRegion(country);
    expect(component.activeRegions).toEqual(activeRegions);
  });
});
