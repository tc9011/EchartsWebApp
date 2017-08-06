import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartsComponent } from './bar-charts.component';
import { RouterModule } from '@angular/router';
import { barChartsRoutes } from './bar-charts.routes'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(barChartsRoutes),
  ],
  declarations: [BarChartsComponent]
})
export class BarChartsModule { }
