import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {MdTabsModule} from '@angular/material';

import { LineChartsComponent } from './line-charts.component';
import { lineChartsRoutes } from './line-charts.routes'
import {SharedModule} from "../shared/shared.module";
import {LineAndBarSettingsModule} from "../shared/line-and-bar-settings/line-and-bar-settings.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(lineChartsRoutes),
    MdTabsModule,
    SharedModule,
    LineAndBarSettingsModule
  ],
  declarations: [LineChartsComponent]
})
export class LineChartsModule { }
