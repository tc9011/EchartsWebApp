/*
* *******************************************************
* Imports
* *******************************************************
* */

// Common of angular
import {ModuleWithProviders, NgModule} from '@angular/core';

// Modules
import {TitleModule} from "./title/title.module";
import {LegendModule} from "./legend/legend.module";
import {GridModule} from "./grid/grid.module";
import {XAxisModule} from "./x-axis/x-axis.module";
import {YAxisModule} from "./y-axis/y-axis.module";
import {PolarModule} from "./polar/polar.module";
import {RadiusAxisModule} from "./radius-axis/radius-axis.module";
import {AngleAxisModule} from "./angle-axis/angle-axis.module";
import {RadarModule} from "./radar/radar.module";
import {DataZoomModule} from "./data-zoom/data-zoom.module";
import {VisualMapModule} from "./visual-map/visual-map.module";
import {TooltipModule} from "./tooltip/tooltip.module";
import {AxisPointerModule} from "./axis-pointer/axis-pointer.module";
import {ToolboxModule} from "./toolbox/toolbox.module";
import {BrushModule} from "./brush/brush.module";
import {GeoModule} from "./geo/geo.module";
import {ParallelModule} from "./parallel/parallel.module";
import {BackgroundColorModule} from "./background-color/background-color.module";
import {ColorModule} from "./color/color.module";
import {TextStyleModule} from "./text-style/text-style.module";
import {SeriesModule} from "./series/series.module";
import {AriaModule} from "./aria/aria.module";
import {DatasetModule} from "./dataset/dataset.module";
import {CalendarModule} from "./calendar/calendar.module";
import {GraphicModule} from "./graphic/graphic.module";
import {TimelineModule} from "./timeline/timeline.module";
import {SingleAxisModule} from "./single-axis/single-axis.module";
import {ParallelAxisModule} from "./parallel-axis/parallel-axis.module";

/*
* *******************************************************
* Root module
* *******************************************************
* */
const settingsModules = [
  TitleModule,
  LegendModule,
  GridModule,
  XAxisModule,
  YAxisModule,
  PolarModule,
  RadiusAxisModule,
  AngleAxisModule,
  RadarModule,
  DataZoomModule,
  VisualMapModule,
  TooltipModule,
  AxisPointerModule,
  ToolboxModule,
  BrushModule,
  GeoModule,
  ParallelModule,
  ParallelAxisModule,
  SingleAxisModule,
  TimelineModule,
  GraphicModule,
  CalendarModule,
  DatasetModule,
  AriaModule,
  SeriesModule,
  TextStyleModule,
  ColorModule,
  BackgroundColorModule
];

@NgModule({
  imports: [
    settingsModules
  ],
  declarations: [],
  exports: [settingsModules]
})
export class SettingsModule {}


