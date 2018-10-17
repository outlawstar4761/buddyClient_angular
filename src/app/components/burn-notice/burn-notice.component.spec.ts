import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BurnNoticeComponent } from './burn-notice.component';

describe('BurnNoticeComponent', () => {
  let component: BurnNoticeComponent;
  let fixture: ComponentFixture<BurnNoticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurnNoticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BurnNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
