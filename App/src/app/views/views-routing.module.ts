import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GlobalComponent } from '../layout/global/global.component';
import { HomeComponent } from '../layout/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'chart',
    component: GlobalComponent,
    children: [
      {
        path: '',
        redirectTo: 'line',
        pathMatch: 'full'
      },
      {
        path: 'line',
        loadChildren: './line-charts/line-charts.module#LineChartsModule',    // lazy load
      },
      {
        path: 'bar',
        loadChildren: './bar-charts/bar-charts.module#BarChartsModule',    // lazy load
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
