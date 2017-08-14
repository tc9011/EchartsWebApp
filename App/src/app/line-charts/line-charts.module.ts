import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LineChartsComponent } from './line-charts.component';
import { lineChartsRoutes } from './line-charts.routes';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(lineChartsRoutes),
    SharedModule
  ],
  declarations: [LineChartsComponent]
})
export class LineChartsModule { }
