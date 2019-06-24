import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewForm2Component } from './new-form2.component';

describe('NewForm2Component', () => {
  let component: NewForm2Component;
  let fixture: ComponentFixture<NewForm2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewForm2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
