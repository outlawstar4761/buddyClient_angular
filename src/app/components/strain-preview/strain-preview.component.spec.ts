import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrainPreviewComponent } from './strain-preview.component';

describe('StrainPreviewComponent', () => {
  let component: StrainPreviewComponent;
  let fixture: ComponentFixture<StrainPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrainPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrainPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
