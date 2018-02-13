import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AriaComponent } from './aria.component';

describe('AriaComponent', () => {
  let component: AriaComponent;
  let fixture: ComponentFixture<AriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
