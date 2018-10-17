import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveStrainListComponent } from './active-strain-list.component';

describe('ActiveStrainListComponent', () => {
  let component: ActiveStrainListComponent;
  let fixture: ComponentFixture<ActiveStrainListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveStrainListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveStrainListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
