import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveFrontListComponent } from './active-front-list.component';

describe('ActiveFrontListComponent', () => {
  let component: ActiveFrontListComponent;
  let fixture: ComponentFixture<ActiveFrontListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveFrontListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveFrontListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
