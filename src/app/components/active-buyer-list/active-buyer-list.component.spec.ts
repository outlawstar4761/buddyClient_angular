import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveBuyerListComponent } from './active-buyer-list.component';

describe('ActiveBuyerListComponent', () => {
  let component: ActiveBuyerListComponent;
  let fixture: ComponentFixture<ActiveBuyerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveBuyerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveBuyerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
