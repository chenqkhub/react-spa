import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import { Row, Col } from 'antd'
const line_option_1 = {
    title: {
        text: 'Authentication Requests'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['Guest', 'BYOD', 'Employee', 'Unknown']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2019-7-20', '2019-7-21', '2019-7-22', '2019-7-23', '2019-7-24', '2019-7-25', '2019-7-26']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: 'Guest',
            type: 'line',
            stack: 'Numbers',
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: 'BYOD',
            type: 'line',
            stack: 'Numbers',
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: 'Employee',
            type: 'line',
            stack: 'Numbers',
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: 'Unknown',
            type: 'line',
            stack: 'Numbers',
            data: [320, 332, 301, 334, 390, 330, 320]
        }
    ]
};
const line_option_2 = {
    title: {
        text: 'Connected Device'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['Guest', 'BYOD', 'Employee', 'Unknown']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2019-7-20', '2019-7-21', '2019-7-22', '2019-7-23', '2019-7-24', '2019-7-25', '2019-7-26']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: 'Guest',
            type: 'line',
            stack: 'Numbers',
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: 'BYOD',
            type: 'line',
            stack: 'Numbers',
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: 'Employee',
            type: 'line',
            stack: 'Numbers',
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: 'Unknown',
            type: 'line',
            stack: 'Numbers',
            data: [320, 332, 301, 334, 390, 330, 320]
        }
    ]
};
const stack_option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['Success', 'Failure']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['2019/08/05', '2019/08/06', '2019/08/07', '2019/08/08', '2019/08/09', '2019/08/10', '2019/08/11']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [

        {
            name: 'Success',
            type: 'bar',
            stack: '广告',
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: 'Failure',
            type: 'bar',
            stack: '广告',
            data: [150, 232, 201, 154, 190, 330, 410]
        }

    ]
};
const bar_option = {
    legend: {},
    tooltip: {},
    dataset: {
        source: [
            ['product', 'BYOD', 'Guest', 'Employee', 'Unknow'],
            ['2019/08/01', 43.3, 85.8, 93.7, 33.2],
            ['2019/08/02', 83.1, 73.4, 55.1, 33.2],
            ['2019/08/03', 86.4, 65.2, 82.5, 33.2],
            ['2019/08/04', 72.4, 53.9, 39.1, 33.2]
        ]
    },
    xAxis: { type: 'category' },
    yAxis: {},
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [
        { type: 'bar' },
        { type: 'bar' },
        { type: 'bar' },
        { type: 'bar' }
    ]
}
const pie_option_1 = {
    title: {
        text: 'Device Category',
        subtext: '',
        x: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['Computer', 'Mobile', 'Tablet', 'Game Console', 'Digital Media receiver', 'others']
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                { value: 335, name: 'Computer' },
                { value: 310, name: 'Mobile' },
                { value: 234, name: 'Tablet' },
                { value: 135, name: 'Game Console' },
                { value: 1548, name: 'Digital Media receiver' },
                { value: 1548, name: 'others' }
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
const pie_option_2 = {
    title: {
        text: 'Device Family',
        subtext: '',
        x: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['Alcatel-lucent', 'Apple', 'Samsung', 'Huawei', 'Microsoft', 'LG', 'Lenovo']
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                { value: 335, name: 'Alcatel-lucent' },
                { value: 310, name: 'Apple' },
                { value: 234, name: 'Samsung' },
                { value: 135, name: 'Huawei' },
                { value: 1548, name: 'Microsoft' },
                { value: 1548, name: 'LG' },
                { value: 1548, name: 'Lenovo' }
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            EventsDict: {}
        }
    }
    getOption = () => {

    }
    render() {
        return (

            <div>
                <Row>
                    <Col span={12}>
                        <ReactEcharts
                            option={line_option_1}
                            notMerge={true}
                            lazyUpdate={true}
                            theme={"theme_name"}
                            onChartReady={this.onChartReadyCallback}
                            onEvents={this.EventsDict}
                            opts={line_option_1} />
                    </Col>
                    <Col span={12}>
                        <ReactEcharts
                            option={pie_option_1}
                            notMerge={true}
                            lazyUpdate={true}
                            theme={"theme_name"}
                            onChartReady={this.onChartReadyCallback}
                            onEvents={this.EventsDict}
                            opts={pie_option_1} />
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col span={12}>
                        <ReactEcharts
                            option={line_option_2}
                            notMerge={true}
                            lazyUpdate={true}
                            theme={"theme_name"}
                            onChartReady={this.onChartReadyCallback}
                            onEvents={this.EventsDict}
                            opts={line_option_2} />
                    </Col>
                    <Col span={12}>
                        <ReactEcharts
                            option={pie_option_2}
                            notMerge={true}
                            lazyUpdate={true}
                            theme={"theme_name"}
                            onChartReady={this.onChartReadyCallback}
                            onEvents={this.EventsDict}
                            opts={pie_option_2} />
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col span={12}>
                        <ReactEcharts
                            option={stack_option}
                            notMerge={true}
                            lazyUpdate={true}
                            theme={"theme_name"}
                            onChartReady={this.onChartReadyCallback}
                            onEvents={this.EventsDict}
                            opts={stack_option} />
                    </Col>
                    <Col span={12}>
                        <ReactEcharts
                            option={bar_option}
                            notMerge={true}
                            lazyUpdate={true}
                            theme={"theme_name"}
                            onChartReady={this.onChartReadyCallback}
                            onEvents={this.EventsDict}
                            opts={bar_option} />
                    </Col>
                </Row>
            </div>

        );
    }
}

export default Dashboard;