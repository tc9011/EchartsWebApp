import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {MdTabsModule} from '@angular/material';

import { BarChartsComponent } from './bar-charts.component';
import { barChartsRoutes } from './bar-charts.routes'
import {SharedModule} from "../shared/shared.module";
import {LineAndBarSettingsModule} from "../shared/line-and-bar-settings/line-and-bar-settings.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(barChartsRoutes),
    MdTabsModule,
    SharedModule,
    LineAndBarSettingsModule
  ],
  declarations: [BarChartsComponent]
})
export class BarChartsModule { }
