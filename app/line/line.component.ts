import {Component, OnChanges, AfterViewInit} from "@angular/core";
@Component({
    moduleId: module.id,
    selector: 'my-line',
    templateUrl: 'line.component.html',
    styleUrls: ['line.component.css']
})
export class LineComponent implements OnChanges,AfterViewInit{
    option:any = {
        tooltip: {
            show: true,
            trigger: 'axis'
        },
        toolbox: {
            show: true,
            feature: {
                // dataView: {show: true, readOnly: true},
                // magicType: {show: true, type: ['bar']},
                dataZoom: {show: true},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        dataZoom: [{
          type: 'slider',
          start: 0,
          end: 100
        }],
        legend: {
            selectedMode: true,
            selected: {},
            right: '0px',
            top: '80px',
            orient: 'vertical',
            textStyle: {
                fontSize: 12,
            },
            show: true,
            data: []
        },
        xAxis: {
            data: [1,2,3],
            axisLabel: {
                interval: 0,
            }
        },
        yAxis: [
            {
                type: 'value',
                name: '',
            }
        ],
        series: [1,2,3]
    };

    createCharts() {
        let that = this;
        let dom:any = document.getElementById("myline");
        // let width = dom.clientWidth;
        // let height = dom.clientHeight;
        //this.changeOptionPosition(width, height);
        let myChart:any = echarts.init(dom, 'macarons');
        myChart.setOption(that.option);
    }

    ngOnInit():void{
        let that = this;
        that.createCharts();

    }

    ngAfterViewInit() {
        var that = this;
        // var dataflag = that.dataflag;
        that.lineData = that.data;      //data赋值给linedata

        //清空原始数组
        that.option.legend.data = [];
        that.option.series.data = [];
        that.option.xAxis.data = [];
        that.option.series = [];
        //调用echarts画图
        that.createCharts();
    }
    ngOnChanges() {
        var that = this;
        var dataflag = that.dataflag;
        that.lineData = that.data;

        //清空原始数组
        that.option.legend.data = [];
        that.option.series.data = [];
        that.option.xAxis.data = [];
        that.option.series = [];
        if (dataflag > 1)//can't run that.createCharts when ngOnChanges run firsttime
        {
            that.createCharts();
        }

    }
}