import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewXferComponent } from './new-xfer.component';

describe('NewXferComponent', () => {
  let component: NewXferComponent;
  let fixture: ComponentFixture<NewXferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewXferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewXferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
