import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollPageDetailsComponent } from './scroll-page-details.component';

describe('ScrollPageDetailsComponent', () => {
  let component: ScrollPageDetailsComponent;
  let fixture: ComponentFixture<ScrollPageDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollPageDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollPageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
