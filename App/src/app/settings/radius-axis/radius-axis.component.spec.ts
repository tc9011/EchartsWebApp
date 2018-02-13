import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiusAxisComponent } from './radius-axis.component';

describe('RadiusAxisComponent', () => {
  let component: RadiusAxisComponent;
  let fixture: ComponentFixture<RadiusAxisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadiusAxisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadiusAxisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
