import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LineComponent} from "./line/line.component";
import {BarComponent} from "./bar/bar.component";
import {LbOptionDataComponent} from "./lineandbaroptiondata/lb-option-data.component";
import {DataInputComponent} from "./datainput/datainput.component";


const routes: Routes = [
    {
        path: '',
        redirectTo: '/line',
        pathMatch: 'full'
    },
    {
        path: 'line',
        component: LineComponent
    },
    {
        path: 'bar',
        component: BarComponent
    },
    {
        path: 'lboption',
        component: LbOptionDataComponent
    },
    {
        path: 'datainput',
        component: DataInputComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}