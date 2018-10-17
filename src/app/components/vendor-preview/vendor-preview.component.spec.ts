import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorPreviewComponent } from './vendor-preview.component';

describe('VendorPreviewComponent', () => {
  let component: VendorPreviewComponent;
  let fixture: ComponentFixture<VendorPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
