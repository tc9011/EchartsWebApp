import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineAndBarSettingsComponent } from './line-and-bar-settings.component';

describe('LineAndBarSettingsComponent', () => {
  let component: LineAndBarSettingsComponent;
  let fixture: ComponentFixture<LineAndBarSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineAndBarSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineAndBarSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
