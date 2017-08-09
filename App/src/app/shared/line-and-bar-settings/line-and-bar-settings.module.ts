import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineAndBarSettingsComponent } from '../line-and-bar-settings/line-and-bar-settings.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LineAndBarSettingsComponent],
  exports: [LineAndBarSettingsComponent]
})
export class LineAndBarSettingsModule { }
