import { NgModule } from '@angular/core';

import {MdInputModule} from '@angular/material';

import { CommonModule } from '@angular/common';
import { LineAndBarSettingsComponent } from '../line-and-bar-settings/line-and-bar-settings.component';
import {SharedModule} from "../shared.module";

@NgModule({
  imports: [
    CommonModule,
    MdInputModule,
    SharedModule
  ],
  declarations: [LineAndBarSettingsComponent],
  exports: [LineAndBarSettingsComponent]
})
export class LineAndBarSettingsModule { }
