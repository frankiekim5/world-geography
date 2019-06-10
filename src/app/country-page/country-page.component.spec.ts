import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CountryPageComponent } from './country-page.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('CountryPageComponent', () => {
  let component: CountryPageComponent;
  let fixture: ComponentFixture<CountryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CountryPageComponent,
        SidebarComponent
      ],
      imports: [
        RouterTestingModule,
        HttpClientModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
