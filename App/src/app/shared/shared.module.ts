import { NgModule,ModuleWithProviders } from '@angular/core';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { AngularEchartsModule } from 'ngx-echarts';
import 'hammerjs';

const sharedModule = [
  FormsModule,
  ReactiveFormsModule,
  AngularEchartsModule
];


@NgModule({
  imports: sharedModule,
  declarations: [],
  exports: sharedModule
})
export class SharedModule { }
