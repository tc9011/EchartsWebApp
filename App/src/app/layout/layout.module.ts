import { NgModule } from '@angular/core';

import { GlobalComponent } from './global/global.component';
import { SharedModule } from '../shared/shared.module';
import { SidebarComponent } from './sidebar/sidebar.component';

const LAYOUTCOMPONENT = [
  GlobalComponent,
  SidebarComponent
];

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [GlobalComponent],
  exports: [...LAYOUTCOMPONENT]
})
export class LayoutModule { }
