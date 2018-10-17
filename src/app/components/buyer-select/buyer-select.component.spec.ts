import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerSelectComponent } from './buyer-select.component';

describe('BuyerSelectComponent', () => {
  let component: BuyerSelectComponent;
  let fixture: ComponentFixture<BuyerSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
