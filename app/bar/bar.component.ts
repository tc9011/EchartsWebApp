import {Component, OnChanges, AfterViewInit} from "@angular/core";
@Component({
    moduleId: module.id,
    selector: 'my-bar',
    templateUrl: 'bar.component.html',
    styleUrls: ['bar.component.css']
})
export class BarComponent implements OnChanges,AfterViewInit {
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
            },
            right: 30
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
        let dom:any = document.getElementById("mybar");
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
        let that = this;
        // var dataflag = that.dataflag;

        //清空原始数组
        that.option.legend.data = [];
        that.option.series.data = [];
        that.option.xAxis.data = [];
        that.option.series = [];
        //调用echarts画图
        that.createCharts();
    }
    ngOnChanges() {
        let that = this;

        //清空原始数组
        that.option.legend.data = [];
        that.option.series.data = [];
        that.option.xAxis.data = [];
        that.option.series = [];
        that.createCharts();
    }
}