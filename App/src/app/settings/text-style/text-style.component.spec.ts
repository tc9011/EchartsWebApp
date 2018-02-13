import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextStyleComponent } from './text-style.component';

describe('TextStyleComponent', () => {
  let component: TextStyleComponent;
  let fixture: ComponentFixture<TextStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
