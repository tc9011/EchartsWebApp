import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import {HttpClientModule, HttpClient} from '@angular/common/http';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import {appRoutes} from './app.routes';
import { TitleComponent } from './settings/title/title.component';
import { LegendComponent } from './settings/legend/legend.component';
import { GridComponent } from './settings/grid/grid.component';
import { XAxisComponent } from './settings/x-axis/x-axis.component';
import { YAxisComponent } from './settings/y-axis/y-axis.component';
import { PolarComponent } from './settings/polar/polar.component';
import { RadiusAxisComponent } from './settings/radius-axis/radius-axis.component';
import { AngleAxisComponent } from './settings/angle-axis/angle-axis.component';
import { RadarComponent } from './settings/radar/radar.component';
import { DataZoomComponent } from './settings/data-zoom/data-zoom.component';
import { VisualMapComponent } from './settings/visual-map/visual-map.component';
import { TooltipComponent } from './settings/tooltip/tooltip.component';
import { AxisPointerComponent } from './settings/axis-pointer/axis-pointer.component';
import { ToolboxComponent } from './settings/toolbox/toolbox.component';
import { BrushComponent } from './settings/brush/brush.component';
import { GeoComponent } from './settings/geo/geo.component';
import { ParallelComponent } from './settings/parallel/parallel.component';
import { ParallelAxisComponent } from './settings/parallel-axis/parallel-axis.component';
import { SingleAxisComponent } from './settings/single-axis/single-axis.component';
import { TimelineComponent } from './settings/timeline/timeline.component';
import { GraphicComponent } from './settings/graphic/graphic.component';
import { CalendarComponent } from './settings/calendar/calendar.component';
import { DatasetComponent } from './settings/dataset/dataset.component';
import { AriaComponent } from './settings/aria/aria.component';
import { SeriesComponent } from './settings/series/series.component';
import { TextStyleComponent } from './settings/text-style/text-style.component';
import { ColorComponent } from './settings/color/color.component';
import { BackgroundColorComponent } from './settings/background-color/background-color.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    LegendComponent,
    GridComponent,
    XAxisComponent,
    YAxisComponent,
    PolarComponent,
    RadiusAxisComponent,
    AngleAxisComponent,
    RadarComponent,
    DataZoomComponent,
    VisualMapComponent,
    TooltipComponent,
    AxisPointerComponent,
    ToolboxComponent,
    BrushComponent,
    GeoComponent,
    ParallelComponent,
    ParallelAxisComponent,
    SingleAxisComponent,
    TimelineComponent,
    GraphicComponent,
    CalendarComponent,
    DatasetComponent,
    AriaComponent,
    SeriesComponent,
    TextStyleComponent,
    ColorComponent,
    BackgroundColorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
