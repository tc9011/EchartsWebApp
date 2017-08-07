import {AppComponent} from "./app.component";

export const appRoutes=[
  {
    path:'',
    redirectTo:'line',
    pathMatch:'full'
  },
  {
    path:'line',
    loadChildren: './line-charts/line-charts.module#LineChartsModule',    //lazy load
  },
  {
    path:'bar',
    loadChildren: './bar-charts/bar-charts.module#BarChartsModule',    //lazy load
  },
  {
    path:'**',//fallback router must in the last
    loadChildren: './line-charts/line-charts.module#LineChartsModule',
  }
];
