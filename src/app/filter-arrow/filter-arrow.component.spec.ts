import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterArrowComponent } from './filter-arrow.component';

describe('FilterArrowComponent', () => {
  let component: FilterArrowComponent;
  let fixture: ComponentFixture<FilterArrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterArrowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle filters', () => {
    component.toggleFilters(true);
    expect(component.showFilters).toBe(true);
  });
});
