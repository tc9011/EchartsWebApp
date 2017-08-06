import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineChartsComponent } from './line-charts.component';
import { RouterModule } from '@angular/router';
import { lineChartsRoutes } from './line-charts.routes'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(lineChartsRoutes),
  ],
  declarations: [LineChartsComponent]
})
export class LineChartsModule { }
