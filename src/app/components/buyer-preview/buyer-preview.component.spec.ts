import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerPreviewComponent } from './buyer-preview.component';

describe('BuyerPreviewComponent', () => {
  let component: BuyerPreviewComponent;
  let fixture: ComponentFixture<BuyerPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
