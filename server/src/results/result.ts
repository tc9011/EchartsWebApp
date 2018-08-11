export interface titleTypings {
  id: string;
  show: boolean;
  text: string;
  link: string;
  target: string;
  textStyle: *;
  subtext: string;
  sublink: string;
  subtarget: string;
  subtextStyle: *;
  padding: number;
  itemGap: number;
  zlevel: number;
  z: number;
  left: string, number;
  top: string, number;
  right: string, number;
  bottom: string, number;
  backgroundColor: Color;
  borderColor: Color;
  borderWidth: number;
  borderRadius: number, Array;
  shadowBlur: number;
  shadowColor: Color;
  shadowOffsetX: number;
  shadowOffsetY: number;
}

export interface legendTypings {
  type: string;
  id: string;
  show: boolean;
  zlevel: number;
  z: number;
  left: string, number;
  top: string, number;
  right: string, number;
  bottom: string, number;
  width: string, number;
  height: string, number;
  orient: string;
  align: string;
  padding: number;
  itemGap: number;
  itemWidth: number;
  itemHeight: number;
  symbolKeepAspect: boolean;
  formatter: string, Function;
  selectedMode: string, boolean;
  inactiveColor: Color;
  selected: Object;
  textStyle: Object;
  tooltip: Object;
  data[i]: Object;
  backgroundColor: Color;
  borderColor: Color;
  borderWidth: number;
  borderRadius: number, Array;
  shadowBlur: number;
  shadowColor: Color;
  shadowOffsetX: number;
  shadowOffsetY: number;
  scrollDataIndex: number;
  pageButtonItemGap: number;
  pageButtonGap: number;
  pageButtonPosition: string;
  pageFormatter: string, Function;
  pageIcons: Object;
  pageIconColor: string;
  pageIconInactiveColor: string;
  pageIconSize: number, Array;
  pageTextStyle: Object;
  animation: boolean;
  animationDurationUpdate: number;
}

export interface gridTypings {
  id: string;
  show: boolean;
  zlevel: number;
  z: number;
  left: string, number;
  top: string, number;
  right: string, number;
  bottom: string, number;
  width: string, number;
  height: string, number;
  containLabel: boolean;
  backgroundColor: Color;
  borderColor: Color;
  borderWidth: number;
  shadowBlur: number;
  shadowColor: Color;
  shadowOffsetX: number;
  shadowOffsetY: number;
  tooltip: *;
}

export interface xAxisTypings {
  id: string;
  show: boolean;
  gridIndex: number;
  position: string;
  offset: number;
  type: string;
  name: string;
  nameLocation: string;
  nameTextStyle: Object;
  nameGap: number;
  nameRotate: number;
  inverse: boolean;
  boundaryGap: boolean, Array;
  min: number, string, function;
  max: number, string;
  scale: boolean;
  splitNumber: number;
  minInterval: number;
  maxInterval: number;
  interval: number;
  logBase: number;
  silent: boolean;
  triggerEvent: boolean;
  axisLine: Object;
  axisTick: Object;
  axisLabel: Object;
  splitLine: Object;
  splitArea: Object;
  data[i]: Object;
  axisPointer: Object;
  zlevel: number;
  z: number;
}

export interface yAxisTypings {
  id: string;
  show: boolean;
  gridIndex: number;
  position: string;
  offset: number;
  type: string;
  name: string;
  nameLocation: string;
  nameTextStyle: Object;
  nameGap: number;
  nameRotate: number;
  inverse: boolean;
  boundaryGap: boolean, Array;
  min: number, string, function;
  max: number, string;
  scale: boolean;
  splitNumber: number;
  minInterval: number;
  maxInterval: number;
  interval: number;
  logBase: number;
  silent: boolean;
  triggerEvent: boolean;
  axisLine: Object;
  axisTick: Object;
  axisLabel: Object;
  splitLine: Object;
  splitArea: Object;
  data[i]: Object;
  axisPointer: Object;
  zlevel: number;
  z: number;
}

export interface polarTypings {
  id: string;
  zlevel: number;
  z: number;
  center: Array;
  radius: Array;
  tooltip: *;
}

export interface radiusAxisTypings {
  id: string;
  polarIndex: number;
  type: string;
  name: string;
  nameLocation: string;
  nameTextStyle: Object;
  nameGap: number;
  nameRotate: number;
  inverse: boolean;
  boundaryGap: boolean, Array;
  min: number, string, function;
  max: number, string;
  scale: boolean;
  splitNumber: number;
  minInterval: number;
  maxInterval: number;
  interval: number;
  logBase: number;
  silent: boolean;
  triggerEvent: boolean;
  axisLine: Object;
  axisTick: Object;
  axisLabel: Object;
  splitLine: Object;
  splitArea: Object;
  data[i]: Object;
  axisPointer: Object;
  zlevel: number;
  z: number;
}

export interface angleAxisTypings {
  id: string;
  polarIndex: number;
  startAngle: number;
  clockwise: boolean;
  type: string;
  boundaryGap: boolean, Array;
  min: number, string, function;
  max: number, string;
  scale: boolean;
  splitNumber: number;
  minInterval: number;
  maxInterval: number;
  interval: number;
  logBase: number;
  silent: boolean;
  triggerEvent: boolean;
  axisLine: Object;
  axisTick: Object;
  axisLabel: Object;
  splitLine: Object;
  splitArea: Object;
  data[i]: Object;
  axisPointer: Object;
  zlevel: number;
  z: number;
}

export interface radarTypings {
  id: string;
  zlevel: number;
  z: number;
  center: Array;
  radius: number, string;
  startAngle: number;
  name: Object;
  nameGap: number;
  splitNumber: number;
  shape: string;
  scale: boolean;
  silent: boolean;
  triggerEvent: boolean;
  axisLine: Object;
  axisTick: Object;
  axisLabel: Object;
  splitLine: Object;
  splitArea: Object;
  indicator[i]: Object;
}

export interface dataZoomTypings {
  dataZoom[i]-inside: Object;
  dataZoom[i]-slider: Object;
}

export interface visualMapTypings {
  visualMap[i]-continuous: Object;
  visualMap[i]-piecewise: Object;
}

export interface tooltipTypings {
  show: boolean;
  trigger: string;
  axisPointer: Object;
  showContent: boolean;
  alwaysShowContent: boolean;
  triggerOn: string;
  showDelay: number;
  hideDelay: number;
  enterable: boolean;
  confine: boolean;
  transitionDuration: number;
  position: string, Array, Function;
  formatter: string, Function;
  backgroundColor: Color;
  borderColor: Color;
  borderWidth: number;
  padding: number;
  textStyle: Object;
  extraCssText: string;
}

export interface axisPointerTypings {
  id: string;
  show: boolean;
  type: string;
  snap: boolean;
  z: number;
  label: Object;
  lineStyle: Object;
  shadowStyle: Object;
  triggerTooltip: boolean;
  value: number;
  status: boolean;
  handle: Object;
  link: Array;
  triggerOn: string;
}

export interface toolboxTypings {
  id: string;
  show: boolean;
  orient: string;
  itemSize: number;
  itemGap: number;
  showTitle: boolean;
  feature: Object;
  iconStyle: Object;
  emphasis: Object;
  zlevel: number;
  z: number;
  left: string, number;
  top: string, number;
  right: string, number;
  bottom: string, number;
  width: string, number;
  height: string, number;
}

export interface brushTypings {
  id: string;
  toolbox: Array;
  brushLink: Array, string;
  seriesIndex: Array, number, string;
  geoIndex: Array, number, string;
  xAxisIndex: Array, number, string;
  yAxisIndex: Array, number, string;
  brushType: string;
  brushMode: string;
  transformable: boolean;
  brushStyle: Object;
  throttleType: string;
  throttleDelay: number;
  removeOnClick: number;
  inBrush: Object;
  outOfBrush: Object;
  z: number;
}

export interface geoTypings {
  id: string;
  show: boolean;
  map: string;
  roam: boolean;
  center: Array;
  aspectScale: number;
  boundingCoords: Array;
  zoom: number;
  scaleLimit: Object;
  nameMap: Object;
  selectedMode: boolean, string;
  label: Object;
  itemStyle: Object;
  emphasis: Object;
  zlevel: number;
  z: number;
  left: string, number;
  top: string, number;
  right: string, number;
  bottom: string, number;
  layoutCenter: Array;
  layoutSize: number, string;
  regions[i]: Object;
  silent: boolean;
}

export interface parallelTypings {
  id: string;
  zlevel: number;
  z: number;
  left: string, number;
  top: string, number;
  right: string, number;
  bottom: string, number;
  width: string, number;
  height: string, number;
  layout: string;
  axisExpandable: boolean;
  axisExpandCenter: number;
  axisExpandCount: number;
  axisExpandWidth: number;
  axisExpandTriggerOn: string;
  parallelAxisDefault: Object;
}

export interface parallelAxisTypings {
  id: string;
  dim: number;
  parallelIndex: number;
  realtime: boolean;
  areaSelectStyle: Object;
  type: string;
  name: string;
  nameLocation: string;
  nameTextStyle: Object;
  nameGap: number;
  nameRotate: number;
  inverse: boolean;
  boundaryGap: boolean, Array;
  min: number, string, function;
  max: number, string;
  scale: boolean;
  splitNumber: number;
  minInterval: number;
  maxInterval: number;
  interval: number;
  logBase: number;
  silent: boolean;
  triggerEvent: boolean;
  axisLine: Object;
  axisTick: Object;
  axisLabel: Object;
  data[i]: Object;
}

export interface singleAxisTypings {
  id: string;
  zlevel: number;
  z: number;
  left: string, number;
  top: string, number;
  right: string, number;
  bottom: string, number;
  width: string, number;
  height: string, number;
  orient: string;
  type: string;
  name: string;
  nameLocation: string;
  nameTextStyle: Object;
  nameGap: number;
  nameRotate: number;
  inverse: boolean;
  boundaryGap: boolean, Array;
  min: number, string, function;
  max: number, string;
  scale: boolean;
  splitNumber: number;
  minInterval: number;
  maxInterval: number;
  interval: number;
  logBase: number;
  silent: boolean;
  triggerEvent: boolean;
  axisLine: Object;
  axisTick: Object;
  axisLabel: Object;
  splitLine: Object;
  splitArea: Object;
  data[i]: Object;
  axisPointer: Object;
  tooltip: *;
}

export interface timelineTypings {
  show: boolean;
  type: string;
  axisType: string;
  currentIndex: number;
  autoPlay: boolean;
  rewind: boolean;
  loop: boolean;
  playInterval: number;
  realtime: boolean;
  controlPosition: string;
  zlevel: number;
  z: number;
  left: string, number;
  top: string, number;
  right: string, number;
  bottom: string, number;
  padding: number, Array;
  orient: string;
  inverse: boolean;
  symbol: string;
  symbolSize: number, Array;
  symbolRotate: number;
  symbolKeepAspect: boolean;
  symbolOffset: Array;
  lineStyle: Object;
  label: Object;
  itemStyle: Object;
  checkpointStyle: Object;
  controlStyle: Object;
  emphasis: Object;
  data: Array;
}

export interface graphicTypings {
  id: string;
  elements[i]: ;
}

export interface calendarTypings {
  id: string;
  zlevel: number;
  z: number;
  left: string, number;
  top: string, number;
  right: string, number;
  bottom: string, number;
  width: number, string;
  height: number, string;
  range: number, string, Array;
  cellSize: number, Array;
  orient: string;
  splitLine: Object;
  itemStyle: Object;
  dayLabel: Object;
  monthLabel: Object;
  yearLabel: Object;
  silent: boolean;
}

export interface datasetTypings {
  id: string;
  source: Array, Object;
  dimensions: Array;
  sourceHeader: boolean;
}

export interface ariaTypings {
  show: boolean;
  description: string;
  general: Object;
  series: Object;
  data: Object;
}

export interface seriesTypings {
  series[i]-line: Object;
  series[i]-bar: Object;
  series[i]-pie: Object;
  series[i]-scatter: Object;
  series[i]-effectScatter: Object;
  series[i]-radar: Object;
  series[i]-tree: Object;
  series[i]-treemap: Object;
  series[i]-sunburst: Object;
  series[i]-boxplot: Object;
  series[i]-candlestick: Object;
  series[i]-heatmap: Object;
  series[i]-map: Object;
  series[i]-parallel: Object;
  series[i]-lines: Object;
  series[i]-graph: Object;
  series[i]-sankey: Object;
  series[i]-funnel: Object;
  series[i]-gauge: Object;
  series[i]-pictorialBar: Object;
  series[i]-themeRiver: Object;
  series[i]-custom: Object;
}

export interface colorTypings {
}

export interface backgroundColorTypings {
}

export interface textStyleTypings {
  color: Color;
  fontStyle: string;
  fontWeight: string;
  fontFamily: string;
  fontSize: number;
  lineHeight: number;
  width: number, string;
  height: number, string;
  textBorderColor: string;
  textBorderWidth: number;
  textShadowColor: string;
  textShadowBlur: number;
  textShadowOffsetX: number;
  textShadowOffsetY: number;
}

export interface animationTypings {
}

export interface animationThresholdTypings {
}

export interface animationDurationTypings {
}

export interface animationEasingTypings {
}

export interface animationDelayTypings {
}

export interface animationDurationUpdateTypings {
}

export interface animationEasingUpdateTypings {
}

export interface animationDelayUpdateTypings {
}

export interface blendModeTypings {
}

export interface hoverLayerThresholdTypings {
}

export interface useUTCTypings {
}

