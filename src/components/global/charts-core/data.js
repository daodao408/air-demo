import echarts from 'echarts';
// 湖北省和武汉市的圆环图表option
export const wuhanCircleAngleOption = {
    backgroundColor: 'transparent',
    tooltip: {
        trigger: 'item',
        formatter: '{b} : {d}% <br/> {c}'
    },
    graphic: [{
            type: 'text',
            left: '15%',
            top: '48%',
            style: {
                text: '过车数量',
                fill: '#fff',
                width: 30,
                height: 30,
                fontSize: 14
            }
        },
        {
            type: 'text',
            left: '15%',
            top: '58%',
            style: {
                text: '占比分析',
                fill: '#fff',
                width: 30,
                height: 30,
                fontSize: 14
            }
        }
    ],
    legend: [{
            orient: 'horizontal',
            icon: 'square',
            left: '50%',
            y: '36%',
            itemWidth: 15,
            itemHeight: 10,
            itemGap: 15,
            selectedMode: false,
            textStyle: {
                fontSize: 14,
                color: '#fff',
                verticalAlign: 'left',
                align: 'left'
            },
            data: ['本地车辆'],
            formatter: function(name) {
                return name + '： 73%   8840辆';
            }
        },
        {
            orient: 'horizontal',
            icon: 'square',
            left: '50%',
            y: '60%',
            itemWidth: 15,
            itemHeight: 10,
            itemGap: 15,
            selectedMode: false,
            textStyle: {
                fontSize: 14,
                color: '#fff',
                verticalAlign: 'left',
                align: 'left'
            },
            data: ['外地车辆'],
            formatter: function(name) {
                return name + '： 27%   3350辆';
            }
        }
    ],
    series: [{
        type: 'pie',
        radius: ['50%', '65%'],
        center: ['20%', '55%'],
        color: ['#42BFFF', '#FDFF2B'],
        data: [{
                value: 8840,
                name: '本地车辆'
            },
            {
                value: 3350,
                name: '外地车辆'
            }
        ],
        labelLine: {
            normal: {
                show: false,
                length: 20,
                length2: 20,
                lineStyle: {
                    color: '#12EABE',
                    width: 2
                }
            }
        },
        label: {
            normal: {
                show: false,
                formatter: '{c|{c}}\n{hr|}\n{d|{d}%}',
                rich: {
                    b: {
                        fontSize: 20,
                        color: '#12EABE',
                        align: 'left',
                        padding: 4
                    },
                    hr: {
                        borderColor: '#12EABE',
                        width: '100%',
                        borderWidth: 2,
                        height: 0
                    },
                    d: {
                        fontSize: 20,
                        color: '#fff',
                        align: 'left',
                        padding: 4
                    },
                    c: {
                        fontSize: 20,
                        color: '#fff',
                        align: 'left',
                        padding: 4
                    }
                }
            }
        }
    }]
};
export const hubeiCircleAngleOption = {
    backgroundColor: 'transparent',
    tooltip: {
        trigger: 'item',
        formatter: '{b} : {d}% <br/> {c}'
    },
    graphic: [{
            type: 'text',
            left: '15%',
            top: '48%',
            style: {
                text: '过车数量',
                fill: '#fff',
                width: 30,
                height: 30,
                fontSize: 14
            }
        },
        {
            type: 'text',
            left: '15%',
            top: '58%',
            style: {
                text: '占比分析',
                fill: '#fff',
                width: 30,
                height: 30,
                fontSize: 14
            }
        }
    ],
    legend: [{
            orient: 'horizontal',
            icon: 'square',
            left: '50%',
            y: '36%',
            itemWidth: 15,
            itemHeight: 10,
            itemGap: 15,
            selectedMode: false,
            textStyle: {
                fontSize: 14,
                color: '#fff',
                verticalAlign: 'left',
                align: 'left'
            },
            data: ['本地车辆'],
            formatter: function(name) {
                return name + '： 88%   9999400辆';
            }
        },
        {
            orient: 'horizontal',
            icon: 'square',
            left: '50%',
            y: '60%',
            itemWidth: 15,
            itemHeight: 10,
            itemGap: 15,
            selectedMode: false,
            textStyle: {
                fontSize: 14,
                color: '#fff',
                verticalAlign: 'left',
                align: 'left'
            },
            data: ['外地车辆'],
            formatter: function(name) {
                return name + '： 12%   1335000辆';
            }
        }
    ],
    series: [{
        type: 'pie',
        radius: ['50%', '65%'],
        center: ['20%', '55%'],
        color: ['#42BFFF', '#FDFF2B'],
        data: [{
                value: 9999400,
                name: '本地车辆'
            },
            {
                value: 1335000,
                name: '外地车辆'
            }
        ],
        labelLine: {
            normal: {
                show: false,
                length: 20,
                length2: 20,
                lineStyle: {
                    color: '#12EABE',
                    width: 2
                }
            }
        },
        label: {
            normal: {
                show: false,
                formatter: '{c|{c}}\n{hr|}\n{d|{d}%}',
                rich: {
                    b: {
                        fontSize: 20,
                        color: '#12EABE',
                        align: 'left',
                        padding: 4
                    },
                    hr: {
                        borderColor: '#12EABE',
                        width: '100%',
                        borderWidth: 2,
                        height: 0
                    },
                    d: {
                        fontSize: 20,
                        color: '#fff',
                        align: 'left',
                        padding: 4
                    },
                    c: {
                        fontSize: 20,
                        color: '#fff',
                        align: 'left',
                        padding: 4
                    }
                }
            }
        }
    }]
};

// 湖北省和武汉市的堆叠面积图option
export const wuhanStackedAreaOption = {
    title: {
        show: false,
        text: '堆叠区域图'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        orient: 'horizontal',
        icon: 'square',
        right: 24,
        top: 0,
        itemWidth: 15,
        itemHeight: 10,
        itemGap: 15,
        selectedMode: false,
        textStyle: {
            fontSize: 14,
            color: '#fff',
            verticalAlign: 'left',
            align: 'left'
        },
        data: ['本地车辆', '外地车辆']
    },
    grid: {
        left: '0',
        right: 30,
        bottom: '0',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                color: '#fff',
                width: '1' //坐标线的宽度
            }
        },
        data: ['0时', '1时', '2时', '3时', '4时', '5时', '6时', '7时', '8时', '9时', '10时', '11时', '12时']
    }],
    yAxis: [{
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        },
        axisLabel: {
            margin: 10
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#8e98a6',
                type: 'dashed'
            }
        }, //去除网格线
        splitArea: {
            show: false
        } //保留网格区域
    }],
    series: [{
            name: '本地车辆',
            type: 'line',
            data: [1120, 3132, 1301, 990, 1870, 2300, 3200, 3412, 3820, 5400, 6000, 5800, 6100],
            smooth: true,
            showSymbol: false,
            zlevel: 3,
            areaStyle: {
                normal: {
                    color: '#42BFFF',
                    opacity: 0.35
                }
            },
            itemStyle: {
                normal: {
                    color: '#45aeff',
                    lineStyle: {
                        width: 2, //折线宽度
                        color: '#45aeff' //折线颜色
                    }
                }
            }
        },
        {
            name: '外地车辆',
            type: 'line',
            data: [500, 2150, 1500, 1200, 1000, 2200, 5000, 4000, 4100, 2400, 5000, 7000, 4500],
            smooth: true,
            showSymbol: false,
            zlevel: 3,
            areaStyle: {
                normal: {
                    color: '#FDFF2B',
                    opacity: 0.35
                }
            },
            itemStyle: {
                normal: {
                    color: '#FDFF2B',
                    lineStyle: {
                        width: 2, //折线宽度
                        color: '#FDFF2B' //折线颜色
                    }
                }
            }
        }
    ]
};
export const hubeiStackedAreaOption = {
    title: {
        show: false,
        text: '堆叠区域图'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        orient: 'horizontal',
        icon: 'square',
        right: 24,
        top: 0,
        itemWidth: 15,
        itemHeight: 10,
        itemGap: 15,
        selectedMode: false,
        textStyle: {
            fontSize: 14,
            color: '#fff',
            verticalAlign: 'left',
            align: 'left'
        },
        data: ['本地车辆', '外地车辆']
    },
    grid: {
        left: '0',
        right: 30,
        bottom: '0',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                color: '#fff',
                width: '1' //坐标线的宽度
            }
        },
        data: ['0时', '1时', '2时', '3时', '4时', '5时', '6时', '7时', '8时', '9时', '10时', '11时', '12时']
    }],
    yAxis: [{
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        },
        axisLabel: {
            margin: 10
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#8e98a6',
                type: 'dashed'
            }
        }, //去除网格线
        splitArea: {
            show: false
        } //保留网格区域
    }],
    series: [{
            name: '本地车辆',
            type: 'line',
            areaStyle: {},
            data: [112000, 313200, 130100, 99000, 187000, 230000, 320000, 341200, 382000, 540000, 600000, 580000, 610000],
            smooth: true,
            showSymbol: false,
            zlevel: 3,
            areaStyle: {
                normal: {
                    color: '#42BFFF',
                    opacity: 0.35
                }
            },
            itemStyle: {
                normal: {
                    color: '#45aeff',
                    lineStyle: {
                        width: 2, //折线宽度
                        color: '#45aeff' //折线颜色
                    }
                }
            }
        },
        {
            name: '外地车辆',
            type: 'line',
            areaStyle: {},
            data: [500000, 215000, 150000, 1200000, 100000, 22000, 50000, 400000, 4100000, 240000, 500000, 7000000, 4500000],
            smooth: true,
            showSymbol: false,
            zlevel: 3,
            areaStyle: {
                normal: {
                    color: '#FDFF2B',
                    opacity: 0.35
                }
            },
            itemStyle: {
                normal: {
                    color: '#FDFF2B',
                    lineStyle: {
                        width: 2, //折线宽度
                        color: '#FDFF2B' //折线颜色
                    }
                }
            }
        }
    ]
};

// 交通支队柱状图option
export const firstBarLineOption = {
    backgroundColor: 'transparent',
    tooltip: {},
    grid: {
        left: 24,
        right: 30,
        bottom: 20,
        containLabel: true
    },
    legend: {
        show: false
    },
    xAxis: {
        data: ['0时-3时', '3时-6时', '6时-9时', '9时-12时', '12时-15时', '15时-18时', '18时-21时', '21时-24时'], //横坐标
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            textStyle: {
                color: '#fff',
                fontSize: 14
            }
        },
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#184580',
                width: '1  ' //坐标线的宽度
            }
        }
    },
    yAxis: {
        name: '警情数量',
        nameLocation: 'end',
        nameTextStyle: {
            color: '#fff',
            fontSize: 14,
            padding: [0, 0, 10, 0]
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#154780', //网格横线颜色
                width: 1,
                type: 'dashed'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#fff',
                fontSize: 14 //坐标值得具体的颜色
            }
        },
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#184580',
                width: '1  ' //坐标线的宽度
            }
        }
    },
    series: [{
        name: '警情类型',
        type: 'bar',
        barWidth: 25,
        data: [500, 800, 2500, 5500, 3500, 4000, 2500, 1500], //数据
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: '#37B7E3' }, //柱图渐变色
                    { offset: 0.5, color: '#2881D1' }, //柱图渐变色
                    { offset: 1, color: '#1C52BF' } //柱图渐变色
                ])
            },
            emphasis: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: '#37B7E3' }, //柱图渐变色
                    { offset: 0.5, color: '#2881D1' }, //柱图渐变色
                    { offset: 1, color: '#1C52BF' } //柱图渐变色
                ])
            }
        }
    }]
};

export const secondBarLineOption = {
    backgroundColor: 'transparent',
    tooltip: {},
    grid: {
        left: 24,
        right: 30,
        bottom: 20,
        containLabel: true
    },
    legend: {
        show: false
    },
    xAxis: {
        data: ['0时-3时', '3时-6时', '6时-9时', '9时-12时', '12时-15时', '15时-18时', '18时-21时', '21时-24时'], //横坐标
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            textStyle: {
                color: '#fff',
                fontSize: 14
            }
        },
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#184580',
                width: '1  ' //坐标线的宽度
            }
        }
    },
    yAxis: {
        name: '警情数量',
        nameLocation: 'end',
        nameTextStyle: {
            color: '#fff',
            fontSize: 14,
            padding: [0, 0, 10, 0]
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#154780', //网格横线颜色
                width: 1,
                type: 'dashed'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#fff',
                fontSize: 14 //坐标值得具体的颜色
            }
        },
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#184580',
                width: '1  ' //坐标线的宽度
            }
        }
    },
    series: [{
        name: '警情类型',
        type: 'bar',
        barWidth: 25,
        data: [300, 560, 1800, 3800, 2400, 4200, 2000, 1200], //数据
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: '#37B7E3' }, //柱图渐变色
                    { offset: 0.5, color: '#2881D1' }, //柱图渐变色
                    { offset: 1, color: '#1C52BF' } //柱图渐变色
                ])
            },
            emphasis: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: '#37B7E3' }, //柱图渐变色
                    { offset: 0.5, color: '#2881D1' }, //柱图渐变色
                    { offset: 1, color: '#1C52BF' } //柱图渐变色
                ])
            }
        }
    }]
};

// 交通事故分析柱状图option
export const jtsgfxBarLineOption1Day = {
    backgroundColor: 'transparent',
    tooltip: {},
    grid: {
        left: 24,
        right: 30,
        bottom: 10,
        containLabel: true
    },
    legend: {
        show: false
    },
    xAxis: {
        data: [
            '武汉',
            '黄石',
            '十堰',
            '宜昌',
            '荆州',
            '襄樊',
            '鄂州',
            '荆门',
            '黄冈',
            '孝感',
            '咸宁',
            '仙桃',
            '潜江',
            '神农架',
            '恩施',
            '天门',
            '随州'
        ], //横坐标
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            rotate: 40,
            textStyle: {
                color: '#fff',
                fontSize: 14
            }
        },
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#184580',
                width: '1  ' //坐标线的宽度
            }
        }
    },
    yAxis: {
        name: '事故数量',
        nameLocation: 'end',
        nameTextStyle: {
            color: '#fff',
            fontSize: 14,
            padding: [0, 0, 10, 0]
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#154780', //网格横线颜色
                width: 1,
                type: 'dashed'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#fff',
                fontSize: 14 //坐标值得具体的颜色
            }
        },
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#184580',
                width: '1  ' //坐标线的宽度
            }
        }
    },
    series: [{
        name: '事故数量',
        type: 'bar',
        barWidth: 12,
        data: [1500, 800, 350, 712, 318, 412, 613, 750, 250, 800, 350, 712, 318, 412, 613, 750, 250], //数据
        itemStyle: {
            normal: {
                color: function(params) {
                    let colorList = [
                        new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#3896ff' }, //柱图渐变色
                            { offset: 1, color: '#002254' } //柱图渐变色
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#55ffe9' }, //柱图渐变色
                            { offset: 1, color: '#003f9e' } //柱图渐变色
                        ])
                    ];
                    if (params.dataIndex % 2 === 0) {
                        return colorList[0];
                    } else {
                        return colorList[1];
                    }
                }
            },
            emphasis: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: '#37B7E3' }, //柱图渐变色
                    { offset: 1, color: '#1C52BF' } //柱图渐变色
                ])
            }
        }
    }]
};

export const jtsgfxBarLineOption1Month = {
    backgroundColor: 'transparent',
    tooltip: {},
    grid: {
        left: 24,
        right: 30,
        bottom: 10,
        containLabel: true
    },
    legend: {
        show: false
    },
    xAxis: {
        data: [
            '武汉',
            '黄石',
            '十堰',
            '宜昌',
            '荆州',
            '襄樊',
            '鄂州',
            '荆门',
            '黄冈',
            '孝感',
            '咸宁',
            '仙桃',
            '潜江',
            '神农架',
            '恩施',
            '天门',
            '随州'
        ], //横坐标
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            rotate: 40,
            textStyle: {
                color: '#fff',
                fontSize: 14
            }
        },
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#184580',
                width: '1  ' //坐标线的宽度
            }
        }
    },
    yAxis: {
        name: '事故数量',
        nameLocation: 'end',
        nameTextStyle: {
            color: '#fff',
            fontSize: 14,
            padding: [0, 0, 10, 0]
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#154780', //网格横线颜色
                width: 1,
                type: 'dashed'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#fff',
                fontSize: 14 //坐标值得具体的颜色
            }
        },
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#184580',
                width: '1  ' //坐标线的宽度
            }
        }
    },
    series: [{
        name: '事故数量',
        type: 'bar',
        barWidth: 12,
        data: [6500, 1800, 1350, 2712, 1318, 2412, 3613, 5750, 2250, 1800, 1350, 2712, 1318, 2412, 3613, 5750, 2250], //数据
        itemStyle: {
            normal: {
                color: function(params) {
                    let colorList = [
                        new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#3896ff' }, //柱图渐变色
                            { offset: 1, color: '#002254' } //柱图渐变色
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#55ffe9' }, //柱图渐变色
                            { offset: 1, color: '#003f9e' } //柱图渐变色
                        ])
                    ];
                    if (params.dataIndex % 2 === 0) {
                        return colorList[0];
                    } else {
                        return colorList[1];
                    }
                }
            },
            emphasis: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: '#37B7E3' }, //柱图渐变色
                    { offset: 1, color: '#1C52BF' } //柱图渐变色
                ])
            }
        }
    }]
};

export const jtsgfxBarLineOption1Year = {
    backgroundColor: 'transparent',
    tooltip: {},
    grid: {
        left: 24,
        right: 30,
        bottom: 10,
        containLabel: true
    },
    legend: {
        show: false
    },
    xAxis: {
        data: [
            '武汉',
            '黄石',
            '十堰',
            '宜昌',
            '荆州',
            '襄樊',
            '鄂州',
            '荆门',
            '黄冈',
            '孝感',
            '咸宁',
            '仙桃',
            '潜江',
            '神农架',
            '恩施',
            '天门',
            '随州'
        ], //横坐标
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            rotate: 40,
            textStyle: {
                color: '#fff',
                fontSize: 14
            }
        },
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#184580',
                width: '1  ' //坐标线的宽度
            }
        }
    },
    yAxis: {
        name: '事故数量',
        nameLocation: 'end',
        nameTextStyle: {
            color: '#fff',
            fontSize: 14,
            padding: [0, 0, 10, 0]
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#154780', //网格横线颜色
                width: 1,
                type: 'dashed'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#fff',
                fontSize: 14 //坐标值得具体的颜色
            }
        },
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#184580',
                width: '1  ' //坐标线的宽度
            }
        }
    },
    series: [{
        name: '事故数量',
        type: 'bar',
        barWidth: 12,
        data: [15000, 6800, 5250, 4712, 7318, 6412, 5613, 8750, 4250, 6800, 5250, 4712, 7318, 6412, 5613, 8750, 4250], //数据
        itemStyle: {
            normal: {
                color: function(params) {
                    let colorList = [
                        new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#3896ff' }, //柱图渐变色
                            { offset: 1, color: '#002254' } //柱图渐变色
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#55ffe9' }, //柱图渐变色
                            { offset: 1, color: '#003f9e' } //柱图渐变色
                        ])
                    ];
                    if (params.dataIndex % 2 === 0) {
                        return colorList[0];
                    } else {
                        return colorList[1];
                    }
                }
            },
            emphasis: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: '#37B7E3' }, //柱图渐变色
                    { offset: 1, color: '#1C52BF' } //柱图渐变色
                ])
            }
        }
    }]
};

export const jtsgfxBarLineOption2Day = {
    backgroundColor: 'transparent',
    tooltip: {},
    grid: {
        left: 24,
        right: 30,
        bottom: 20,
        containLabel: true
    },
    legend: {
        show: false
    },
    xAxis: {
        data: ['超速行驶', '超载', '疲劳驾驶', '酒后驾驶', '违反法规', '无证驾驶'], //横坐标
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            textStyle: {
                color: '#fff',
                fontSize: 14
            }
        },
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#184580',
                width: '1  ' //坐标线的宽度
            }
        }
    },
    yAxis: {
        name: '事故数量',
        nameLocation: 'end',
        nameTextStyle: {
            color: '#fff',
            fontSize: 14,
            padding: [0, 0, 10, 0]
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#154780', //网格横线颜色
                width: 1,
                type: 'dashed'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#fff',
                fontSize: 14 //坐标值得具体的颜色
            }
        },
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#184580',
                width: '1  ' //坐标线的宽度
            }
        }
    },
    series: [{
        name: '事故类型',
        type: 'bar',
        barWidth: 20,
        data: [5000, 8000, 3500, 800, 3800, 1200], //数据
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: '#36b8e3' }, //柱图渐变色
                    { offset: 1, color: '#1c52bf' } //柱图渐变色
                ])
            },
            emphasis: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: '#37B7E3' }, //柱图渐变色
                    { offset: 0.5, color: '#2881D1' }, //柱图渐变色
                    { offset: 1, color: '#1C52BF' } //柱图渐变色
                ])
            }
        }
    }]
};
export const jtsgfxBarLineOption2Month = {
    backgroundColor: 'transparent',
    tooltip: {},
    grid: {
        left: 24,
        right: 30,
        bottom: 20,
        containLabel: true
    },
    legend: {
        show: false
    },
    xAxis: {
        data: ['超速行驶', '超载', '疲劳驾驶', '酒后驾驶', '违反法规', '无证驾驶'], //横坐标
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            textStyle: {
                color: '#fff',
                fontSize: 14
            }
        },
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#184580',
                width: '1  ' //坐标线的宽度
            }
        }
    },
    yAxis: {
        name: '事故数量',
        nameLocation: 'end',
        nameTextStyle: {
            color: '#fff',
            fontSize: 14,
            padding: [0, 0, 10, 0]
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#154780', //网格横线颜色
                width: 1,
                type: 'dashed'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#fff',
                fontSize: 14 //坐标值得具体的颜色
            }
        },
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#184580',
                width: '1  ' //坐标线的宽度
            }
        }
    },
    series: [{
        name: '事故类型',
        type: 'bar',
        barWidth: 20,
        data: [15000, 18000, 10500, 2400, 12600, 3600], //数据
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: '#36b8e3' }, //柱图渐变色
                    { offset: 1, color: '#1c52bf' } //柱图渐变色
                ])
            },
            emphasis: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: '#37B7E3' }, //柱图渐变色
                    { offset: 0.5, color: '#2881D1' }, //柱图渐变色
                    { offset: 1, color: '#1C52BF' } //柱图渐变色
                ])
            }
        }
    }]
};
export const jtsgfxBarLineOption2Year = {
    backgroundColor: 'transparent',
    tooltip: {},
    grid: {
        left: 24,
        right: 30,
        bottom: 20,
        containLabel: true
    },
    legend: {
        show: false
    },
    xAxis: {
        data: ['超速行驶', '超载', '疲劳驾驶', '酒后驾驶', '违反法规', '无证驾驶'], //横坐标
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            textStyle: {
                color: '#fff',
                fontSize: 14
            }
        },
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#184580',
                width: '1  ' //坐标线的宽度
            }
        }
    },
    yAxis: {
        name: '事故数量',
        nameLocation: 'end',
        nameTextStyle: {
            color: '#fff',
            fontSize: 14,
            padding: [0, 0, 10, 0]
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#154780', //网格横线颜色
                width: 1,
                type: 'dashed'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#fff',
                fontSize: 14 //坐标值得具体的颜色
            }
        },
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#184580',
                width: '1  ' //坐标线的宽度
            }
        }
    },
    series: [{
        name: '事故类型',
        type: 'bar',
        barWidth: 20,
        data: [5000000, 8000000, 3500000, 800000, 3800000, 1200000], //数据
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: '#36b8e3' }, //柱图渐变色
                    { offset: 1, color: '#1c52bf' } //柱图渐变色
                ])
            },
            emphasis: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: '#37B7E3' }, //柱图渐变色
                    { offset: 0.5, color: '#2881D1' }, //柱图渐变色
                    { offset: 1, color: '#1C52BF' } //柱图渐变色
                ])
            }
        }
    }]
};

// 交通事故变化趋势折线图option
export const jtsgfxBarLineOption3TB = {
    backgroundColor: 'transparent',
    tooltip: {},
    grid: {
        left: 24,
        right: 30,
        bottom: 20,
        containLabel: true
    },
    legend: {
        show: false
    },
    xAxis: {
        data: ['死亡事故', '伤人事故', '财产损失事故', '简易程序事故'], //横坐标
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            textStyle: {
                color: '#fff',
                fontSize: 14
            }
        },
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#184580',
                width: '1  ' //坐标线的宽度
            }
        }
    },
    yAxis: {
        name: '事故数量',
        nameLocation: 'end',
        nameTextStyle: {
            color: '#fff',
            fontSize: 14,
            padding: [0, 0, 10, 0]
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#154780', //网格横线颜色
                width: 1,
                type: 'dashed'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#fff',
                fontSize: 14 //坐标值得具体的颜色
            }
        },
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#184580',
                width: '1  ' //坐标线的宽度
            }
        }
    },
    series: [{
        name: '事故类型',
        type: 'bar',
        barWidth: 30,
        data: [18, 543, 759, 1254], //数据
        itemStyle: {
            normal: {
                color: function(params) {
                    let colorList = [
                        new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#55ffe9' }, //柱图渐变色
                            { offset: 1, color: '#003f9e' } //柱图渐变色
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#3896ff' }, //柱图渐变色
                            { offset: 1, color: '#002254' } //柱图渐变色
                        ])
                    ];
                    if (params.dataIndex % 2 === 0) {
                        return colorList[0];
                    } else {
                        return colorList[1];
                    }
                }
            },
            emphasis: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: '#37B7E3' }, //柱图渐变色
                    { offset: 0.5, color: '#2881D1' }, //柱图渐变色
                    { offset: 1, color: '#1C52BF' } //柱图渐变色
                ])
            }
        }
    }]
};
export const jtsgfxBarLineOption3HB = {
    backgroundColor: 'transparent',
    tooltip: {},
    grid: {
        left: 24,
        right: 30,
        bottom: 20,
        containLabel: true
    },
    legend: {
        show: false
    },
    xAxis: {
        data: ['死亡事故', '伤人事故', '财产损失事故', '简易程序事故'], //横坐标
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            textStyle: {
                color: '#fff',
                fontSize: 14
            }
        },
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#184580',
                width: '1  ' //坐标线的宽度
            }
        }
    },
    yAxis: {
        name: '事故数量',
        nameLocation: 'end',
        nameTextStyle: {
            color: '#fff',
            fontSize: 14,
            padding: [0, 0, 10, 0]
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#154780', //网格横线颜色
                width: 1,
                type: 'dashed'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#fff',
                fontSize: 14 //坐标值得具体的颜色
            }
        },
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#184580',
                width: '1  ' //坐标线的宽度
            }
        }
    },
    series: [{
        name: '事故类型',
        type: 'bar',
        barWidth: 30,
        data: [50, 4536, 7489, 10245], //数据
        itemStyle: {
            normal: {
                color: function(params) {
                    let colorList = [
                        new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#55ffe9' }, //柱图渐变色
                            { offset: 1, color: '#003f9e' } //柱图渐变色
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#3896ff' }, //柱图渐变色
                            { offset: 1, color: '#002254' } //柱图渐变色
                        ])
                    ];
                    if (params.dataIndex % 2 === 0) {
                        return colorList[0];
                    } else {
                        return colorList[1];
                    }
                }
            },
            emphasis: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: '#37B7E3' }, //柱图渐变色
                    { offset: 0.5, color: '#2881D1' }, //柱图渐变色
                    { offset: 1, color: '#1C52BF' } //柱图渐变色
                ])
            }
        }
    }]
};
export const jtsgfxBarLineOptionWuHan = {
    backgroundColor: 'transparent',
    tooltip: {},
    grid: {
        left: 24,
        right: 30,
        bottom: 20,
        containLabel: true
    },
    legend: {
        show: false
    },
    xAxis: {
        data: ['死亡事故', '伤人事故', '财产损失事故', '简易程序事故'], //横坐标
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            textStyle: {
                color: '#fff',
                fontSize: 14
            }
        },
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#184580',
                width: '1  ' //坐标线的宽度
            }
        }
    },
    yAxis: {
        name: '事故数量',
        nameLocation: 'end',
        nameTextStyle: {
            color: '#fff',
            fontSize: 14,
            padding: [0, 0, 10, 0]
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#154780', //网格横线颜色
                width: 1,
                type: 'dashed'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#fff',
                fontSize: 14 //坐标值得具体的颜色
            }
        },
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#184580',
                width: '1  ' //坐标线的宽度
            }
        }
    },
    series: [{
        name: '事故类型',
        type: 'bar',
        barWidth: 30,
        data: [3, 90, 240, 452], //数据
        itemStyle: {
            normal: {
                color: function(params) {
                    let colorList = [
                        new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#55ffe9' }, //柱图渐变色
                            { offset: 1, color: '#003f9e' } //柱图渐变色
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#3896ff' }, //柱图渐变色
                            { offset: 1, color: '#002254' } //柱图渐变色
                        ])
                    ];
                    if (params.dataIndex % 2 === 0) {
                        return colorList[0];
                    } else {
                        return colorList[1];
                    }
                }
            },
            emphasis: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: '#37B7E3' }, //柱图渐变色
                    { offset: 0.5, color: '#2881D1' }, //柱图渐变色
                    { offset: 1, color: '#1C52BF' } //柱图渐变色
                ])
            }
        }
    }]
};
export const jtsgfxBarLineOptionHuangShi = {
    backgroundColor: 'transparent',
    tooltip: {},
    grid: {
        left: 24,
        right: 30,
        bottom: 20,
        containLabel: true
    },
    legend: {
        show: false
    },
    xAxis: {
        data: ['死亡事故', '伤人事故', '财产损失事故', '简易程序事故'], //横坐标
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            textStyle: {
                color: '#fff',
                fontSize: 14
            }
        },
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#184580',
                width: '1  ' //坐标线的宽度
            }
        }
    },
    yAxis: {
        name: '事故数量',
        nameLocation: 'end',
        nameTextStyle: {
            color: '#fff',
            fontSize: 14,
            padding: [0, 0, 10, 0]
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#154780', //网格横线颜色
                width: 1,
                type: 'dashed'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#fff',
                fontSize: 14 //坐标值得具体的颜色
            }
        },
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#184580',
                width: '1  ' //坐标线的宽度
            }
        }
    },
    series: [{
        name: '事故类型',
        type: 'bar',
        barWidth: 30,
        data: [1, 45, 112, 256], //数据
        itemStyle: {
            normal: {
                color: function(params) {
                    let colorList = [
                        new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#55ffe9' }, //柱图渐变色
                            { offset: 1, color: '#003f9e' } //柱图渐变色
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#3896ff' }, //柱图渐变色
                            { offset: 1, color: '#002254' } //柱图渐变色
                        ])
                    ];
                    if (params.dataIndex % 2 === 0) {
                        return colorList[0];
                    } else {
                        return colorList[1];
                    }
                }
            },
            emphasis: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: '#37B7E3' }, //柱图渐变色
                    { offset: 0.5, color: '#2881D1' }, //柱图渐变色
                    { offset: 1, color: '#1C52BF' } //柱图渐变色
                ])
            }
        }
    }]
};
// export const jtsgfxBarLineOption3Day = {
//     backgroundColor: 'transparent',
//     tooltip: {},
//     grid: {
//         left: 24,
//         right: 30,
//         bottom: 20,
//         containLabel: true
//     },
//     legend: {
//         show: false
//     },
//     xAxis: {
//         data: ['死亡事故', '伤人事故', '财产损失事故', '简易程序事故'], //横坐标
//         axisTick: {
//             show: false
//         },
//         axisLabel: {
//             interval: 0,
//             textStyle: {
//                 color: '#fff',
//                 fontSize: 14
//             }
//         },
//         axisLine: {
//             lineStyle: {
//                 type: 'solid',
//                 color: '#184580',
//                 width: '1  ' //坐标线的宽度
//             }
//         }
//     },
//     yAxis: {
//         name: '事故数量',
//         nameLocation: 'end',
//         nameTextStyle: {
//             color: '#fff',
//             fontSize: 14,
//             padding: [0, 0, 10, 0]
//         },
//         splitLine: {
//             show: true,
//             lineStyle: {
//                 color: '#154780', //网格横线颜色
//                 width: 1,
//                 type: 'dashed'
//             }
//         },
//         axisLabel: {
//             textStyle: {
//                 color: '#fff',
//                 fontSize: 14 //坐标值得具体的颜色
//             }
//         },
//         axisLine: {
//             lineStyle: {
//                 type: 'solid',
//                 color: '#184580',
//                 width: '1  ' //坐标线的宽度
//             }
//         }
//     },
//     series: [{
//         name: '事故类型',
//         type: 'bar',
//         barWidth: 30,
//         data: [500, 800, 200, 800], //数据
//         itemStyle: {
//             normal: {
//                 color: function(params) {
//                     let colorList = [
//                         new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//                             { offset: 0, color: '#55ffe9' }, //柱图渐变色
//                             { offset: 1, color: '#003f9e' } //柱图渐变色
//                         ]),
//                         new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//                             { offset: 0, color: '#3896ff' }, //柱图渐变色
//                             { offset: 1, color: '#002254' } //柱图渐变色
//                         ])
//                     ];
//                     if (params.dataIndex % 2 === 0) {
//                         return colorList[0];
//                     } else {
//                         return colorList[1];
//                     }
//                 }
//             },
//             emphasis: {
//                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//                     { offset: 0, color: '#37B7E3' }, //柱图渐变色
//                     { offset: 0.5, color: '#2881D1' }, //柱图渐变色
//                     { offset: 1, color: '#1C52BF' } //柱图渐变色
//                 ])
//             }
//         }
//     }]
// };
// export const jtsgfxBarLineOption3Month = {
//     backgroundColor: 'transparent',
//     tooltip: {},
//     grid: {
//         left: 24,
//         right: 30,
//         bottom: 20,
//         containLabel: true
//     },
//     legend: {
//         show: false
//     },
//     xAxis: {
//         data: ['死亡事故', '伤人事故', '财产损失事故', '简易程序事故'], //横坐标
//         axisTick: {
//             show: false
//         },
//         axisLabel: {
//             interval: 0,
//             textStyle: {
//                 color: '#fff',
//                 fontSize: 14
//             }
//         },
//         axisLine: {
//             lineStyle: {
//                 type: 'solid',
//                 color: '#184580',
//                 width: '1  ' //坐标线的宽度
//             }
//         }
//     },
//     yAxis: {
//         name: '事故数量',
//         nameLocation: 'end',
//         nameTextStyle: {
//             color: '#fff',
//             fontSize: 14,
//             padding: [0, 0, 10, 0]
//         },
//         splitLine: {
//             show: true,
//             lineStyle: {
//                 color: '#154780', //网格横线颜色
//                 width: 1,
//                 type: 'dashed'
//             }
//         },
//         axisLabel: {
//             textStyle: {
//                 color: '#fff',
//                 fontSize: 14 //坐标值得具体的颜色
//             }
//         },
//         axisLine: {
//             lineStyle: {
//                 type: 'solid',
//                 color: '#184580',
//                 width: '1  ' //坐标线的宽度
//             }
//         }
//     },
//     series: [{
//         name: '事故类型',
//         type: 'bar',
//         barWidth: 30,
//         data: [15000, 24000, 6000, 24000], //数据
//         itemStyle: {
//             normal: {
//                 color: function(params) {
//                     let colorList = [
//                         new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//                             { offset: 0, color: '#55ffe9' }, //柱图渐变色
//                             { offset: 1, color: '#003f9e' } //柱图渐变色
//                         ]),
//                         new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//                             { offset: 0, color: '#3896ff' }, //柱图渐变色
//                             { offset: 1, color: '#002254' } //柱图渐变色
//                         ])
//                     ];
//                     if (params.dataIndex % 2 === 0) {
//                         return colorList[0];
//                     } else {
//                         return colorList[1];
//                     }
//                 }
//             },
//             emphasis: {
//                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//                     { offset: 0, color: '#37B7E3' }, //柱图渐变色
//                     { offset: 0.5, color: '#2881D1' }, //柱图渐变色
//                     { offset: 1, color: '#1C52BF' } //柱图渐变色
//                 ])
//             }
//         }
//     }]
// };
// export const jtsgfxBarLineOption3Year = {
//     backgroundColor: 'transparent',
//     tooltip: {},
//     grid: {
//         left: 24,
//         right: 30,
//         bottom: 20,
//         containLabel: true
//     },
//     legend: {
//         show: false
//     },
//     xAxis: {
//         data: ['死亡事故', '伤人事故', '财产损失事故', '简易程序事故'], //横坐标
//         axisTick: {
//             show: false
//         },
//         axisLabel: {
//             interval: 0,
//             textStyle: {
//                 color: '#fff',
//                 fontSize: 14
//             }
//         },
//         axisLine: {
//             lineStyle: {
//                 type: 'solid',
//                 color: '#184580',
//                 width: '1  ' //坐标线的宽度
//             }
//         }
//     },
//     yAxis: {
//         name: '事故数量',
//         nameLocation: 'end',
//         nameTextStyle: {
//             color: '#fff',
//             fontSize: 14,
//             padding: [0, 0, 10, 0]
//         },
//         splitLine: {
//             show: true,
//             lineStyle: {
//                 color: '#154780', //网格横线颜色
//                 width: 1,
//                 type: 'dashed'
//             }
//         },
//         axisLabel: {
//             textStyle: {
//                 color: '#fff',
//                 fontSize: 14 //坐标值得具体的颜色
//             }
//         },
//         axisLine: {
//             lineStyle: {
//                 type: 'solid',
//                 color: '#184580',
//                 width: '1  ' //坐标线的宽度
//             }
//         }
//     },
//     series: [{
//         name: '事故类型',
//         type: 'bar',
//         barWidth: 30,
//         data: [200000, 320000, 80000, 320000], //数据
//         itemStyle: {
//             normal: {
//                 color: function(params) {
//                     let colorList = [
//                         new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//                             { offset: 0, color: '#55ffe9' }, //柱图渐变色
//                             { offset: 1, color: '#003f9e' } //柱图渐变色
//                         ]),
//                         new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//                             { offset: 0, color: '#3896ff' }, //柱图渐变色
//                             { offset: 1, color: '#002254' } //柱图渐变色
//                         ])
//                     ];
//                     if (params.dataIndex % 2 === 0) {
//                         return colorList[0];
//                     } else {
//                         return colorList[1];
//                     }
//                 }
//             },
//             emphasis: {
//                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//                     { offset: 0, color: '#37B7E3' }, //柱图渐变色
//                     { offset: 0.5, color: '#2881D1' }, //柱图渐变色
//                     { offset: 1, color: '#1C52BF' } //柱图渐变色
//                 ])
//             }
//         }
//     }]
// };

// 交通事故时间段分析折线图option
export const jtsgfxSingleStackedAreaOption4Day = {
    title: {
        show: false,
        text: '堆叠区域图'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        show: false,
        orient: 'horizontal',
        icon: 'square',
        left: 24,
        right: 24,
        top: 0,
        itemWidth: 15,
        itemHeight: 10,
        itemGap: 15,
        selectedMode: false,
        textStyle: {
            fontSize: 14,
            color: '#fff',
            verticalAlign: 'left',
            align: 'left'
        },
        data: ['事故数量']
    },
    grid: {
        left: 24,
        right: 30,
        bottom: 24,
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisTick: {
            show: true
        },
        axisLine: {
            lineStyle: {
                color: '#184580'
            }
        },
        axisLabel: {
            margin: 10
        },
        axisLabel: {
            interval: 0,
            rotate: 40,
            textStyle: {
                color: '#fff',
                fontSize: 14
            }
        },
        data: ['0时-3时', '3时-6时', '6时-9时', '9时-12时', '12时-15时', '15时-18时', '18时-21时', '21时-24时']
    }],
    yAxis: [{
        name: '事故数量',
        nameLocation: 'end',
        nameTextStyle: {
            color: '#fff',
            fontSize: 14,
            padding: [0, 0, 10, 0]
        },
        type: 'value',
        axisTick: {
            show: true
        },
        axisLine: {
            lineStyle: {
                color: '#184580'
            }
        },
        axisLabel: {
            color: '#fff',
            margin: 10
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#8e98a6',
                type: 'dashed'
            }
        }, //去除网格线
        splitArea: {
            show: false
        } //保留网格区域
    }],
    series: [{
        name: '事故数量',
        type: 'line',
        areaStyle: {},
        data: [32, 24, 256, 548, 615, 575, 563, 356],
        smooth: true,
        showSymbol: false,
        zlevel: 3,
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: 'rgba(34, 98, 158, 0.8)' },
                        { offset: 1, color: 'rgba(34, 98, 158, 0)' }
                    ])
                    // opacity: 0.35
            }
        },
        itemStyle: {
            normal: {
                color: '#45aeff',
                lineStyle: {
                    width: 2, //折线宽度
                    color: '#46bddc' //折线颜色
                }
            }
        }
    }]
};
export const jtsgfxSingleStackedAreaOption4Month = {
    title: {
        show: false,
        text: '堆叠区域图'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        show: false,
        orient: 'horizontal',
        icon: 'square',
        left: 24,
        right: 24,
        top: 0,
        itemWidth: 15,
        itemHeight: 10,
        itemGap: 15,
        selectedMode: false,
        textStyle: {
            fontSize: 14,
            color: '#fff',
            verticalAlign: 'left',
            align: 'left'
        },
        data: ['事故数量']
    },
    grid: {
        left: 24,
        right: 30,
        bottom: 24,
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisTick: {
            show: true
        },
        axisLine: {
            lineStyle: {
                color: '#184580'
            }
        },
        axisLabel: {
            margin: 10
        },
        axisLabel: {
            textStyle: {
                color: '#fff',
                fontSize: 14
            }
        },
        data: [
            '1日',
            '2日',
            '3日',
            '4日',
            '5日',
            '6日',
            '7日',
            '8日',
            '9日',
            '10日',
            '11日',
            '12日',
            '13日',
            '14日',
            '15日',
            '16日',
            '17日',
            '18日',
            '19日',
            '20日',
            '21日',
            '22日',
            '23日',
            '24日',
            '25日',
            '26日',
            '27日',
            '28日',
            '29日',
            '30日',
            '31日'
        ]
    }],
    yAxis: [{
        name: '事故数量',
        nameLocation: 'end',
        nameTextStyle: {
            color: '#fff',
            fontSize: 14,
            padding: [0, 0, 10, 0]
        },
        type: 'value',
        axisTick: {
            show: true
        },
        axisLine: {
            lineStyle: {
                color: '#184580'
            }
        },
        axisLabel: {
            color: '#fff',
            margin: 10
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#8e98a6',
                type: 'dashed'
            }
        }, //去除网格线
        splitArea: {
            show: false
        } //保留网格区域
    }],
    series: [{
        name: '事故数量',
        type: 'line',
        areaStyle: {},
        data: [
            2025,
            1856,
            2445,
            2156,
            1952,
            2215,
            1963,
            2245,
            2356,
            1963,
            1625,
            1525,
            1465,
            1963,
            1253,
            1125,
            1636,
            1725,
            1250,
            1236,
            1448,
            1635,
            1285,
            1936,
            1752,
            1635,
            1845,
            1579,
            1485,
            1375,
            2057
        ],
        smooth: true,
        showSymbol: false,
        zlevel: 3,
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: 'rgba(34, 98, 158, 0.8)' },
                        { offset: 1, color: 'rgba(34, 98, 158, 0)' }
                    ])
                    // opacity: 0.35
            }
        },
        itemStyle: {
            normal: {
                color: '#45aeff',
                lineStyle: {
                    width: 2, //折线宽度
                    color: '#46bddc' //折线颜色
                }
            }
        }
    }]
};
export const jtsgfxSingleStackedAreaOption4Year = {
    title: {
        show: false,
        text: '堆叠区域图'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        show: false,
        orient: 'horizontal',
        icon: 'square',
        left: 24,
        right: 24,
        top: 0,
        itemWidth: 15,
        itemHeight: 10,
        itemGap: 15,
        selectedMode: false,
        textStyle: {
            fontSize: 14,
            color: '#fff',
            verticalAlign: 'left',
            align: 'left'
        },
        data: ['事故数量']
    },
    grid: {
        left: 24,
        right: 30,
        bottom: 24,
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisTick: {
            show: true
        },
        axisLine: {
            lineStyle: {
                color: '#184580'
            }
        },
        axisLabel: {
            margin: 10
        },
        axisLabel: {
            interval: 0,
            rotate: 40,
            textStyle: {
                color: '#fff',
                fontSize: 14
            }
        },
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    }],
    yAxis: [{
        name: '事故数量',
        nameLocation: 'end',
        nameTextStyle: {
            color: '#fff',
            fontSize: 14,
            padding: [0, 0, 10, 0]
        },
        type: 'value',
        axisTick: {
            show: true
        },
        axisLine: {
            lineStyle: {
                color: '#184580'
            }
        },
        axisLabel: {
            color: '#fff',
            margin: 10
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#8e98a6',
                type: 'dashed'
            }
        }, //去除网格线
        splitArea: {
            show: false
        } //保留网格区域
    }],
    series: [{
        name: '事故数量',
        type: 'line',
        areaStyle: {},
        data: [19638, 16250, 15254, 14652, 19633, 12535, 11256, 16364, 17255, 12508, 12367, 14489],
        smooth: true,
        showSymbol: false,
        zlevel: 3,
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: 'rgba(34, 98, 158, 0.8)' },
                        { offset: 1, color: 'rgba(34, 98, 158, 0)' }
                    ])
                    // opacity: 0.35
            }
        },
        itemStyle: {
            normal: {
                color: '#45aeff',
                lineStyle: {
                    width: 2, //折线宽度
                    color: '#46bddc' //折线颜色
                }
            }
        }
    }]
};

// 交通事故变化趋势折线图option
// export const jtsgfxSingleStackedAreaOption3Day = {
//     title: {
//         show: false,
//         text: '堆叠区域图'
//     },
//     tooltip: {
//         trigger: 'axis',
//         axisPointer: {
//             type: 'cross',
//             label: {
//                 backgroundColor: '#6a7985'
//             }
//         }
//     },
//     legend: {
//         show: false,
//         orient: 'horizontal',
//         icon: 'square',
//         left: 24,
//         right: 24,
//         top: 0,
//         itemWidth: 15,
//         itemHeight: 10,
//         itemGap: 15,
//         selectedMode: false,
//         textStyle: {
//             fontSize: 14,
//             color: '#fff',
//             verticalAlign: 'left',
//             align: 'left'
//         },
//         data: ['事故数量']
//     },
//     grid: {
//         left: 24,
//         right: 30,
//         bottom: 24,
//         containLabel: true
//     },
//     xAxis: [{
//         type: 'category',
//         boundaryGap: false,
//         axisTick: {
//             show: true
//         },
//         axisLine: {
//             lineStyle: {
//                 color: '#184580'
//             }
//         },
//         axisLabel: {
//             margin: 10
//         },
//         axisLabel: {
//             interval: 0,
//             rotate: 40,
//             textStyle: {
//                 color: '#fff',
//                 fontSize: 14
//             }
//         },
//         data: ['0时-3时', '3时-6时', '6时-9时', '9时-12时', '12时-15时', '15时-18时', '18时-21时', '21时-24时']
//     }],
//     yAxis: [{
//         name: '事故数量',
//         nameLocation: 'end',
//         nameTextStyle: {
//             color: '#fff',
//             fontSize: 14,
//             padding: [0, 0, 10, 0]
//         },
//         type: 'value',
//         axisTick: {
//             show: true
//         },
//         axisLine: {
//             lineStyle: {
//                 color: '#184580'
//             }
//         },
//         axisLabel: {
//             color: '#fff',
//             margin: 10
//         },
//         splitLine: {
//             show: false,
//             lineStyle: {
//                 color: '#8e98a6',
//                 type: 'dashed'
//             }
//         }, //去除网格线
//         splitArea: {
//             show: false
//         } //保留网格区域
//     }],
//     series: [{
//         name: '事故数量',
//         type: 'line',
//         areaStyle: {},
//         data: [11200, 12560, 56520, 45000, 58700, 52000, 35005, 21120],
//         smooth: true,
//         showSymbol: false,
//         zlevel: 3,
//         areaStyle: {
//             normal: {
//                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//                         { offset: 0, color: 'rgba(34, 98, 158, 0.8)' },
//                         { offset: 1, color: 'rgba(34, 98, 158, 0)' }
//                     ])
//                     // opacity: 0.35
//             }
//         },
//         itemStyle: {
//             normal: {
//                 color: '#45aeff',
//                 lineStyle: {
//                     width: 2, //折线宽度
//                     color: '#46bddc' //折线颜色
//                 }
//             }
//         }
//     }]
// };
// export const jtsgfxSingleStackedAreaOption3Month = {
//     title: {
//         show: false,
//         text: '堆叠区域图'
//     },
//     tooltip: {
//         trigger: 'axis',
//         axisPointer: {
//             type: 'cross',
//             label: {
//                 backgroundColor: '#6a7985'
//             }
//         }
//     },
//     legend: {
//         show: false,
//         orient: 'horizontal',
//         icon: 'square',
//         left: 24,
//         right: 24,
//         top: 0,
//         itemWidth: 15,
//         itemHeight: 10,
//         itemGap: 15,
//         selectedMode: false,
//         textStyle: {
//             fontSize: 14,
//             color: '#fff',
//             verticalAlign: 'left',
//             align: 'left'
//         },
//         data: ['事故数量']
//     },
//     grid: {
//         left: 24,
//         right: 30,
//         bottom: 24,
//         containLabel: true
//     },
//     xAxis: [{
//         type: 'category',
//         boundaryGap: false,
//         axisTick: {
//             show: true
//         },
//         axisLine: {
//             lineStyle: {
//                 color: '#184580'
//             }
//         },
//         axisLabel: {
//             margin: 10
//         },
//         axisLabel: {
//             interval: 0,
//             rotate: 40,
//             textStyle: {
//                 color: '#fff',
//                 fontSize: 14
//             }
//         },
//         data: ['0时-3时', '3时-6时', '6时-9时', '9时-12时', '12时-15时', '15时-18时', '18时-21时', '21时-24时']
//     }],
//     yAxis: [{
//         name: '事故数量',
//         nameLocation: 'end',
//         nameTextStyle: {
//             color: '#fff',
//             fontSize: 14,
//             padding: [0, 0, 10, 0]
//         },
//         type: 'value',
//         axisTick: {
//             show: true
//         },
//         axisLine: {
//             lineStyle: {
//                 color: '#184580'
//             }
//         },
//         axisLabel: {
//             color: '#fff',
//             margin: 10
//         },
//         splitLine: {
//             show: false,
//             lineStyle: {
//                 color: '#8e98a6',
//                 type: 'dashed'
//             }
//         }, //去除网格线
//         splitArea: {
//             show: false
//         } //保留网格区域
//     }],
//     series: [{
//         name: '事故数量',
//         type: 'line',
//         areaStyle: {},
//         data: [336000, 378600, 1518000, 1450000, 1700000, 1560000, 1050005, 633600],
//         smooth: true,
//         showSymbol: false,
//         zlevel: 3,
//         areaStyle: {
//             normal: {
//                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//                         { offset: 0, color: 'rgba(34, 98, 158, 0.8)' },
//                         { offset: 1, color: 'rgba(34, 98, 158, 0)' }
//                     ])
//                     // opacity: 0.35
//             }
//         },
//         itemStyle: {
//             normal: {
//                 color: '#45aeff',
//                 lineStyle: {
//                     width: 2, //折线宽度
//                     color: '#46bddc' //折线颜色
//                 }
//             }
//         }
//     }]
// };
// export const jtsgfxSingleStackedAreaOption3Year = {
//     title: {
//         show: false,
//         text: '堆叠区域图'
//     },
//     tooltip: {
//         trigger: 'axis',
//         axisPointer: {
//             type: 'cross',
//             label: {
//                 backgroundColor: '#6a7985'
//             }
//         }
//     },
//     legend: {
//         show: false,
//         orient: 'horizontal',
//         icon: 'square',
//         left: 24,
//         right: 24,
//         top: 0,
//         itemWidth: 15,
//         itemHeight: 10,
//         itemGap: 15,
//         selectedMode: false,
//         textStyle: {
//             fontSize: 14,
//             color: '#fff',
//             verticalAlign: 'left',
//             align: 'left'
//         },
//         data: ['事故数量']
//     },
//     grid: {
//         left: 24,
//         right: 30,
//         bottom: 24,
//         containLabel: true
//     },
//     xAxis: [{
//         type: 'category',
//         boundaryGap: false,
//         axisTick: {
//             show: true
//         },
//         axisLine: {
//             lineStyle: {
//                 color: '#184580'
//             }
//         },
//         axisLabel: {
//             margin: 10
//         },
//         axisLabel: {
//             interval: 0,
//             rotate: 40,
//             textStyle: {
//                 color: '#fff',
//                 fontSize: 14
//             }
//         },
//         data: ['0时-3时', '3时-6时', '6时-9时', '9时-12时', '12时-15时', '15时-18时', '18时-21时', '21时-24时']
//     }],
//     yAxis: [{
//         name: '事故数量',
//         nameLocation: 'end',
//         nameTextStyle: {
//             color: '#fff',
//             fontSize: 14,
//             padding: [0, 0, 10, 0]
//         },
//         type: 'value',
//         axisTick: {
//             show: true
//         },
//         axisLine: {
//             lineStyle: {
//                 color: '#184580'
//             }
//         },
//         axisLabel: {
//             color: '#fff',
//             margin: 10
//         },
//         splitLine: {
//             show: false,
//             lineStyle: {
//                 color: '#8e98a6',
//                 type: 'dashed'
//             }
//         }, //去除网格线
//         splitArea: {
//             show: false
//         } //保留网格区域
//     }],
//     series: [{
//         name: '事故数量',
//         type: 'line',
//         areaStyle: {},
//         data: [3360000, 3689000, 15412000, 14500000, 15000000, 15600000, 10500005, 6336000],
//         smooth: true,
//         showSymbol: false,
//         zlevel: 3,
//         areaStyle: {
//             normal: {
//                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//                         { offset: 0, color: 'rgba(34, 98, 158, 0.8)' },
//                         { offset: 1, color: 'rgba(34, 98, 158, 0)' }
//                     ])
//                     // opacity: 0.35
//             }
//         },
//         itemStyle: {
//             normal: {
//                 color: '#45aeff',
//                 lineStyle: {
//                     width: 2, //折线宽度
//                     color: '#46bddc' //折线颜色
//                 }
//             }
//         }
//     }]
// };