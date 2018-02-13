import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngleAxisComponent } from './angle-axis.component';

describe('AngleAxisComponent', () => {
  let component: AngleAxisComponent;
  let fixture: ComponentFixture<AngleAxisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngleAxisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngleAxisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
