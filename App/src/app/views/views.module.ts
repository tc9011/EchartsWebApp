import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { LayoutModule } from '../layout/layout.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ViewsRoutingModule,
    LayoutModule,
    SharedModule,
  ],
  declarations: []
})
export class ViewsModule { }
