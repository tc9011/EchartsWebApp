import { NgModule,ModuleWithProviders } from '@angular/core';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';

import {TranslateModule} from '@ngx-translate/core';

import { AngularEchartsModule } from 'ngx-echarts';
import 'hammerjs';

const sharedModule = [
  FormsModule,
  ReactiveFormsModule,
  AngularEchartsModule,
  HttpClientModule,
  HttpModule,
  TranslateModule
];


@NgModule({
  imports: sharedModule,
  declarations: [],
  exports: sharedModule
})
export class SharedModule {}
