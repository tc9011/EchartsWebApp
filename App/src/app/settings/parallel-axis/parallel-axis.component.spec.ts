import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallelAxisComponent } from './parallel-axis.component';

describe('ParallelAxisComponent', () => {
  let component: ParallelAxisComponent;
  let fixture: ComponentFixture<ParallelAxisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParallelAxisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParallelAxisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
