import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataZoomComponent } from './data-zoom.component';

describe('DataZoomComponent', () => {
  let component: DataZoomComponent;
  let fixture: ComponentFixture<DataZoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataZoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
