import { NgModule,ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AngularEchartsModule } from 'ngx-echarts';
import 'hammerjs';

const sharedModule = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  AngularEchartsModule,
  BrowserAnimationsModule
];


@NgModule({
  imports: sharedModule,
  declarations: [],
  exports: sharedModule
})
export class SharedModule { }
