import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PolarComponent} from "./polar.component";
import {SharedModule} from "../../shared/shared.module";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule
  ],
  declarations: [PolarComponent],
  exports: [PolarComponent]
})
export class PolarModule { }
