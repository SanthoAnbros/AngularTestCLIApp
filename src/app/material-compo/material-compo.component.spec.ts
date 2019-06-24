import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialCompoComponent } from './material-compo.component';

describe('MaterialCompoComponent', () => {
  let component: MaterialCompoComponent;
  let fixture: ComponentFixture<MaterialCompoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialCompoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
