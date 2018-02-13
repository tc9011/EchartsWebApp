import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxisPointerComponent } from './axis-pointer.component';

describe('AxisPointerComponent', () => {
  let component: AxisPointerComponent;
  let fixture: ComponentFixture<AxisPointerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxisPointerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxisPointerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
