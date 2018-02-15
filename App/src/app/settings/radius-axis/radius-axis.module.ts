import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RadiusAxisComponent} from "./radius-axis.component";
import {SharedModule} from "../../shared/shared.module";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule
  ],
  declarations: [RadiusAxisComponent],
  exports: [RadiusAxisComponent]
})
export class RadiusAxisModule { }
