import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialCombo1Component } from './material-combo1.component';

describe('MaterialCombo1Component', () => {
  let component: MaterialCombo1Component;
  let fixture: ComponentFixture<MaterialCombo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialCombo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialCombo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
