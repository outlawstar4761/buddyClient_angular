import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveXferListComponent } from './active-xfer-list.component';

describe('ActiveXferListComponent', () => {
  let component: ActiveXferListComponent;
  let fixture: ComponentFixture<ActiveXferListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveXferListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveXferListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
