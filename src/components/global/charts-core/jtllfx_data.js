import echarts from 'echarts';

// 交通流量车速统计分析柱状图option
export const jtllfxBarLineOption1Day = {
    backgroundColor: 'transparent',
    tooltip: {},
    grid: {
        left: 24,
        right: 60,
        bottom: 25,
        containLabel: true
    },
    legend: {
        show: false
    },
    xAxis: {
        name: '公里/小时',
        nameLocation: 'end',
        nameTextStyle: {
            color: '#fff',
            fontSize: 12,
            padding: [-15, 0, 0, -15]
        },

        data: ['120以上', '100-120', '60-100', '60'], //横坐标
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            interval: 0,
            textStyle: {
                color: '#fff',
                fontSize: 12
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
        name: '数量',
        nameLocation: 'end',
        nameTextStyle: {
            color: '#fff',
            fontSize: 12,
            padding: [0, 0, 10, 0]
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#154780', //网格横线颜色
                width: 1,
                type: 'dashed'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#fff',
                fontSize: 12 //坐标值得具体的颜色
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
        name: '车辆数量',
        type: 'bar',
        barWidth: 15,
        data: [1500, 1160, 60, 25], //数据
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
                    { offset: 1, color: '#1C52BF' } //柱图渐变色
                ])
            }
        }
    }]
};

export const jtllfxBarLineOption1Month = {
    backgroundColor: 'transparent',
    tooltip: {},
    grid: {
        left: 24,
        right: 60,
        bottom: 25,
        containLabel: true
    },
    legend: {
        show: false
    },
    xAxis: {
        name: '公里/小时',
        nameLocation: 'end',
        nameTextStyle: {
            color: '#fff',
            fontSize: 12,
            padding: [-15, 0, 0, -15]
        },

        data: ['120以上', '100-120', '60-100', '60'], //横坐标
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            interval: 0,
            textStyle: {
                color: '#fff',
                fontSize: 12
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
        name: '数量',
        nameLocation: 'end',
        nameTextStyle: {
            color: '#fff',
            fontSize: 12,
            padding: [0, 0, 10, 0]
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#154780', //网格横线颜色
                width: 1,
                type: 'dashed'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#fff',
                fontSize: 12 //坐标值得具体的颜色
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
        name: '车辆数量',
        type: 'bar',
        barWidth: 15,
        data: [45000, 35000, 3000, 120], //数据
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
                    { offset: 1, color: '#1C52BF' } //柱图渐变色
                ])
            }
        }
    }]
};

export const jtllfxBarLineOption1Year = {
    backgroundColor: 'transparent',
    tooltip: {},
    grid: {
        left: 24,
        right: 60,
        bottom: 25,
        containLabel: true
    },
    legend: {
        show: false
    },
    xAxis: {
        name: '公里/小时',
        nameLocation: 'end',
        nameTextStyle: {
            color: '#fff',
            fontSize: 12,
            padding: [-15, 0, 0, -15]
        },

        data: ['120以上', '100-120', '60-100', '60'], //横坐标
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            interval: 0,
            textStyle: {
                color: '#fff',
                fontSize: 12
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
        name: '数量',
        nameLocation: 'end',
        nameTextStyle: {
            color: '#fff',
            fontSize: 12,
            padding: [0, 0, 10, 0]
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#154780', //网格横线颜色
                width: 1,
                type: 'dashed'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#fff',
                fontSize: 12 //坐标值得具体的颜色
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
        name: '车辆数量',
        type: 'bar',
        barWidth: 15,
        data: [500000, 400000, 24000, 8600], //数据
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
                    { offset: 1, color: '#1C52BF' } //柱图渐变色
                ])
            }
        }
    }]
};

// 各地市交通流量排名横向柱状图option
export const jtllfxBarLineRotationOption2Day = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: '{a} <br/>{b} :  {c}' + '辆'
    },
    legend: {
        show: false
    },
    grid: {
        left: 20,
        right: 45,
        bottom: 15,
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false,
            interval: 0,
            textStyle: {
                color: '#fff',
                fontSize: 12
            }
        },
        axisLine: {
            show: false,
            lineStyle: {
                type: 'solid',
                color: '#184580',
                width: '1  ' //坐标线的宽度
            }
        }
    },
    yAxis: {
        type: 'category',
        data: [
            '湖北高警三支队荆州大队',
            '湖北高警三支队荆门大队',
            '湖北高警二支队鄂州大队',
            '湖北高警二支队黄石大队',
            '湖北高警二支队黄梅大队',
            '湖北高警一支队孝感大队',
            '湖北高警一支队仙桃大队',
            '湖北高警一支队汉川大队'
        ],
        axisTick: {
            show: false
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#154780', //网格横线颜色
                width: 1,
                type: 'dashed'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#fff',
                fontSize: 12 //坐标值得具体的颜色
            }
        },
        axisLine: {
            show: false,
            lineStyle: {
                type: 'solid',
                color: '#184580',
                width: '0  ' //坐标线的宽度
            }
        }
    },
    series: [{
        name: '高速流量数据',
        type: 'bar',
        barWidth: 10,
        data: [3, 8, 10, 15, 20, 24, 30, 45],
        label: {
            normal: {
                show: true,
                position: 'right',
                textStyle: {
                    color: '#fff'
                }
            }
        },
        itemStyle: {
            normal: {
                barBorderRadius: 5,
                color: function(params) {
                    let colorList = [
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            { offset: 0, color: '#118ad4' }, //柱图渐变色
                            { offset: 1, color: '#fce01f' } //柱图渐变色
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            { offset: 0, color: '#118ad4' }, //柱图渐变色
                            { offset: 1, color: '#fce01f' } //柱图渐变色
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
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    { offset: 0, color: '#118ad4' }, //柱图渐变色
                    { offset: 1, color: '#fce01f' } //柱图渐变色
                ])
            }
        }
    }]
};
export const jtllfxBarLineRotationOption2Month = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: '{a} <br/>{b} :  {c}' + '辆'
    },
    legend: {
        show: false
    },
    grid: {
        left: 20,
        right: 45,
        bottom: 15,
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false,
            interval: 0,
            textStyle: {
                color: '#fff',
                fontSize: 12
            }
        },
        axisLine: {
            show: false,
            lineStyle: {
                type: 'solid',
                color: '#184580',
                width: '1  ' //坐标线的宽度
            }
        }
    },
    yAxis: {
        type: 'category',
        data: [
            '湖北高警三支队荆州大队',
            '湖北高警三支队荆门大队',
            '湖北高警二支队鄂州大队',
            '湖北高警二支队黄石大队',
            '湖北高警二支队黄梅大队',
            '湖北高警一支队孝感大队',
            '湖北高警一支队仙桃大队',
            '湖北高警一支队汉川大队'
        ],
        axisTick: {
            show: false
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#154780', //网格横线颜色
                width: 1,
                type: 'dashed'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#fff',
                fontSize: 12 //坐标值得具体的颜色
            }
        },
        axisLine: {
            show: false,
            lineStyle: {
                type: 'solid',
                color: '#184580',
                width: '0  ' //坐标线的宽度
            }
        }
    },
    series: [{
        name: '高速流量数据',
        type: 'bar',
        barWidth: 10,
        data: [100, 235, 300, 385, 525, 615, 785, 1200],
        label: {
            normal: {
                show: true,
                position: 'right',
                textStyle: {
                    color: '#fff'
                }
            }
        },
        itemStyle: {
            normal: {
                barBorderRadius: 5,
                color: function(params) {
                    let colorList = [
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            { offset: 0, color: '#118ad4' }, //柱图渐变色
                            { offset: 1, color: '#fce01f' } //柱图渐变色
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            { offset: 0, color: '#118ad4' }, //柱图渐变色
                            { offset: 1, color: '#fce01f' } //柱图渐变色
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
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    { offset: 0, color: '#118ad4' }, //柱图渐变色
                    { offset: 1, color: '#fce01f' } //柱图渐变色
                ])
            }
        }
    }]
};
export const jtllfxBarLineRotationOption2Year = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: '{a} <br/>{b} :  {c}' + '辆'
    },
    legend: {
        show: false
    },
    grid: {
        left: 20,
        right: 45,
        bottom: 15,
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false,
            interval: 0,
            textStyle: {
                color: '#fff',
                fontSize: 12
            }
        },
        axisLine: {
            show: false,
            lineStyle: {
                type: 'solid',
                color: '#184580',
                width: '1  ' //坐标线的宽度
            }
        }
    },
    yAxis: {
        type: 'category',
        data: [
            '湖北高警三支队荆州大队',
            '湖北高警三支队荆门大队',
            '湖北高警二支队鄂州大队',
            '湖北高警二支队黄石大队',
            '湖北高警二支队黄梅大队',
            '湖北高警一支队孝感大队',
            '湖北高警一支队仙桃大队',
            '湖北高警一支队汉川大队'
        ],
        axisTick: {
            show: false
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#154780', //网格横线颜色
                width: 1,
                type: 'dashed'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#fff',
                fontSize: 12 //坐标值得具体的颜色
            }
        },
        axisLine: {
            show: false,
            lineStyle: {
                type: 'solid',
                color: '#184580',
                width: '0  ' //坐标线的宽度
            }
        }
    },
    series: [{
        name: '高速流量数据',
        type: 'bar',
        barWidth: 10,
        data: [1000, 2350, 2800, 3650, 4800, 5400, 7450, 9800],
        label: {
            normal: {
                show: true,
                position: 'right',
                textStyle: {
                    color: '#fff'
                }
            }
        },
        itemStyle: {
            normal: {
                barBorderRadius: 5,
                color: function(params) {
                    let colorList = [
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            { offset: 0, color: '#118ad4' }, //柱图渐变色
                            { offset: 1, color: '#fce01f' } //柱图渐变色
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            { offset: 0, color: '#118ad4' }, //柱图渐变色
                            { offset: 1, color: '#fce01f' } //柱图渐变色
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
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    { offset: 0, color: '#118ad4' }, //柱图渐变色
                    { offset: 1, color: '#fce01f' } //柱图渐变色
                ])
            }
        }
    }]
};

// 各个高峰拥堵路段排名横向柱状图option
export const jtllfxBarLineRotationOption3Day = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: '{a} <br/>{b} :  {c}'
    },
    legend: {
        show: false
    },
    grid: {
        left: 20,
        right: 45,
        bottom: 15,
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false,
            interval: 0,
            textStyle: {
                color: '#fff',
                fontSize: 12
            }
        },
        axisLine: {
            show: false,
            lineStyle: {
                type: 'solid',
                color: '#184580',
                width: '1  ' //坐标线的宽度
            }
        }
    },
    yAxis: {
        type: 'category',
        data: ['金桥大道', '中北路', '光谷创业街', '塔子湖东路', '关山大道', '珞狮路', '民族大道', '大学园路'],
        axisTick: {
            show: false
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#154780', //网格横线颜色
                width: 1,
                type: 'dashed'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#fff',
                fontSize: 12 //坐标值得具体的颜色
            }
        },
        axisLine: {
            show: false,
            lineStyle: {
                type: 'solid',
                color: '#184580',
                width: '0  ' //坐标线的宽度
            }
        }
    },
    series: [{
        name: '高峰拥堵延时指数',
        type: 'bar',
        barWidth: 10,
        data: [2.36, 2.45, 2.53, 2.57, 2.6, 2.72, 3.04, 3.28],
        label: {
            normal: {
                show: true,
                position: 'right',
                textStyle: {
                    color: '#fff'
                }
            }
        },
        itemStyle: {
            normal: {
                barBorderRadius: 5,
                color: function(params) {
                    let colorList = [
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            { offset: 0, color: '#118ad4' }, //柱图渐变色
                            { offset: 1, color: '#fce01f' } //柱图渐变色
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            { offset: 0, color: '#118ad4' }, //柱图渐变色
                            { offset: 1, color: '#fce01f' } //柱图渐变色
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
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    { offset: 0, color: '#118ad4' }, //柱图渐变色
                    { offset: 1, color: '#fce01f' } //柱图渐变色
                ])
            }
        }
    }]
};
export const jtllfxBarLineRotationOption3Month = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: '{a} <br/>{b} :  {c}'
    },
    legend: {
        show: false
    },
    grid: {
        left: 20,
        right: 45,
        bottom: 15,
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false,
            interval: 0,
            textStyle: {
                color: '#fff',
                fontSize: 12
            }
        },
        axisLine: {
            show: false,
            lineStyle: {
                type: 'solid',
                color: '#184580',
                width: '1  ' //坐标线的宽度
            }
        }
    },
    yAxis: {
        type: 'category',
        data: ['金桥大道', '中北路', '光谷创业街', '塔子湖东路', '关山大道', '珞狮路', '民族大道', '大学园路'],
        axisTick: {
            show: false
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#154780', //网格横线颜色
                width: 1,
                type: 'dashed'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#fff',
                fontSize: 12 //坐标值得具体的颜色
            }
        },
        axisLine: {
            show: false,
            lineStyle: {
                type: 'solid',
                color: '#184580',
                width: '0  ' //坐标线的宽度
            }
        }
    },
    series: [{
        name: '高峰拥堵延时指数',
        type: 'bar',
        barWidth: 10,
        data: [2.36, 2.75, 3.31, 3.75, 4.27, 4.78, 5.24, 5.58],
        label: {
            normal: {
                show: true,
                position: 'right',
                textStyle: {
                    color: '#fff'
                }
            }
        },
        itemStyle: {
            normal: {
                barBorderRadius: 5,
                color: function(params) {
                    let colorList = [
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            { offset: 0, color: '#118ad4' }, //柱图渐变色
                            { offset: 1, color: '#fce01f' } //柱图渐变色
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            { offset: 0, color: '#118ad4' }, //柱图渐变色
                            { offset: 1, color: '#fce01f' } //柱图渐变色
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
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    { offset: 0, color: '#118ad4' }, //柱图渐变色
                    { offset: 1, color: '#fce01f' } //柱图渐变色
                ])
            }
        }
    }]
};
export const jtllfxBarLineRotationOption3Year = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: '{a} <br/>{b} :  {c}'
    },
    legend: {
        show: false
    },
    grid: {
        left: 20,
        right: 45,
        bottom: 15,
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false,
            interval: 0,
            textStyle: {
                color: '#fff',
                fontSize: 12
            }
        },
        axisLine: {
            show: false,
            lineStyle: {
                type: 'solid',
                color: '#184580',
                width: '1  ' //坐标线的宽度
            }
        }
    },
    yAxis: {
        type: 'category',
        data: ['金桥大道', '中北路', '光谷创业街', '塔子湖东路', '关山大道', '珞狮路', '民族大道', '大学园路'],
        axisTick: {
            show: false
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#154780', //网格横线颜色
                width: 1,
                type: 'dashed'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#fff',
                fontSize: 12 //坐标值得具体的颜色
            }
        },
        axisLine: {
            show: false,
            lineStyle: {
                type: 'solid',
                color: '#184580',
                width: '0  ' //坐标线的宽度
            }
        }
    },
    series: [{
        name: '高峰拥堵延时指数',
        type: 'bar',
        barWidth: 10,
        data: [2.21, 2.84, 3.11, 3.64, 4.36, 4.95, 5.44, 6.21],
        label: {
            normal: {
                show: true,
                position: 'right',
                textStyle: {
                    color: '#fff'
                }
            }
        },
        itemStyle: {
            normal: {
                barBorderRadius: 5,
                color: function(params) {
                    let colorList = [
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            { offset: 0, color: '#118ad4' }, //柱图渐变色
                            { offset: 1, color: '#fce01f' } //柱图渐变色
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            { offset: 0, color: '#118ad4' }, //柱图渐变色
                            { offset: 1, color: '#fce01f' } //柱图渐变色
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
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    { offset: 0, color: '#118ad4' }, //柱图渐变色
                    { offset: 1, color: '#fce01f' } //柱图渐变色
                ])
            }
        }
    }]
};