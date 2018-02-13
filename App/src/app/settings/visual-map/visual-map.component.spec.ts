import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualMapComponent } from './visual-map.component';

describe('VisualMapComponent', () => {
  let component: VisualMapComponent;
  let fixture: ComponentFixture<VisualMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
