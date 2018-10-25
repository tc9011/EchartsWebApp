import { NgModule } from '@angular/core';

import { GlobalComponent } from './global/global.component';
import { SharedModule } from '../shared/shared.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';

const LAYOUTCOMPONENT = [
  GlobalComponent,
  SidebarComponent,
  HomeComponent
];

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [...LAYOUTCOMPONENT],
  exports: [...LAYOUTCOMPONENT]
})
export class LayoutModule { }
