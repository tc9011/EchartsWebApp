import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { LineAndBarSettingsComponent } from './line-and-bar-settings.component';
import {SharedModule} from "../shared.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [LineAndBarSettingsComponent],
  exports: [LineAndBarSettingsComponent]
})
export class LineAndBarSettingsModule { }
