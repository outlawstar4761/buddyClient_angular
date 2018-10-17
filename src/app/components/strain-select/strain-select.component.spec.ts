import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrainSelectComponent } from './strain-select.component';

describe('StrainSelectComponent', () => {
  let component: StrainSelectComponent;
  let fixture: ComponentFixture<StrainSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrainSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrainSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
