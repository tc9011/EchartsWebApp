import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    ViewsRoutingModule,
    LayoutModule,
  ],
  declarations: []
})
export class ViewsModule { }
