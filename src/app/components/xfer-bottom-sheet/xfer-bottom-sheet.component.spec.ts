import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XferBottomSheetComponent } from './xfer-bottom-sheet.component';

describe('XferBottomSheetComponent', () => {
  let component: XferBottomSheetComponent;
  let fixture: ComponentFixture<XferBottomSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XferBottomSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XferBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
