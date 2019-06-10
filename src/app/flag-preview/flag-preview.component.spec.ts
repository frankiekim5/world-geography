import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlagPreviewComponent } from './flag-preview.component';
import { HttpClientModule } from '@angular/common/http';

describe('FlagPreviewComponent', () => {
  let component: FlagPreviewComponent;
  let fixture: ComponentFixture<FlagPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FlagPreviewComponent
      ],
      imports: [
        HttpClientModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlagPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
