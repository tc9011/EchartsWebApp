import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BarChartsComponent } from './bar-charts.component';
import { barChartsRoutes } from './bar-charts.routes';
import { SharedModule } from '../../shared/shared.module';
import { LayoutModule } from '../../layout/layout.module';

@NgModule({
  imports: [
    LayoutModule,
    RouterModule.forChild(barChartsRoutes),
    SharedModule,
  ],
  declarations: [BarChartsComponent]
})
export class BarChartsModule {
}
