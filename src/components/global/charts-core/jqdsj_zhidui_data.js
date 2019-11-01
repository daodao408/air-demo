import echarts from 'echarts';

// 交通态势研判分析柱状图option
export const jqdsjZhiduiCircleOptionDay = {
    backgroundColor: 'transparent',
    title: {
        show: false
    },
    tooltip: {
        trigger: 'item',
        formatter: '{b} : {c} <br/> {d}%'
    },
    legend: {
        show: false
    },
    grid: {},
    series: [{
        name: '',
        type: 'pie',
        radius: ['25%', '38%'],
        center: ['50%', '33%'],
        hoverAnimation: true,
        color: ['#CE7F61', '#B852B6', '#3DA58E', '#3973BC', '#CBAD33', '#BFCC34', '#69A7CE'],
        label: {
            normal: {
                formatter: function(params) {
                    var total = 0; //总数量
                    var percent = 0; //各种占比
                    // echartData.forEach(function(value, index, array) {
                    //   total += value.value;
                    // });
                    let echartData = [{
                            value: 1,
                            name: '重大事故'
                        },
                        {
                            value: 1000,
                            name: '一般事故'
                        },

                        {
                            value: 10,
                            name: '特大事故'
                        },
                        {
                            value: 1500,
                            name: '违章行为'
                        },
                        {
                            value: 10,
                            name: '天灾风险'
                        },
                        {
                            value: 500,
                            name: '交通拥挤'
                        },
                        {
                            value: 100,
                            name: '肇事逃逸'
                        }
                    ];
                    for (let i = 0; i < echartData.length; i++) {
                        total += echartData[i].value;
                    }
                    percent = ((params.value / total) * 100).toFixed(1);
                    return '{white|' + params.name + '}' + ' ' + '{white|' + '(' + percent + '%)' + '}';
                },
                rich: {
                    yellow: {
                        color: '#ffc72b',
                        fontSize: 14,
                        padding: [5, 4],
                        align: 'center'
                    },
                    total: {
                        color: '#ffc72b',
                        fontSize: 14,
                        align: 'center'
                    },
                    white: {
                        color: '#fff',
                        align: 'center',
                        fontSize: 14,
                        opcity: 0.85,
                        padding: [30, 3, 10, 0]
                    },
                    blue: {
                        color: '#49dff0',
                        fontSize: 14,
                        align: 'center'
                    }
                }
            }
        },
        labelLine: {
            normal: {
                length: 20,
                length2: 15,
                lineStyle: {
                    color: '#fff',
                    opcity: 0.8
                }
            }
        },
        data: [{
                value: 1,
                name: '重大事故'
            },
            {
                value: 1000,
                name: '一般事故'
            },
            {
                value: 10,
                name: '特大事故'
            },
            {
                value: 1500,
                name: '违章行为'
            },

            {
                value: 10,
                name: '天灾风险'
            },
            {
                value: 500,
                name: '交通拥挤'
            },
            {
                value: 100,
                name: '肇事逃逸'
            }
        ]
    }]
};

export const jqdsjZhiduiCircleOptionMonth = {
    backgroundColor: 'transparent',
    title: {
        show: false
    },
    tooltip: {
        trigger: 'item',
        formatter: '{b} : {c} <br/> {d}%'
    },
    legend: {
        show: false
    },
    grid: {},
    series: [{
        name: '',
        type: 'pie',
        radius: ['25%', '38%'],
        center: ['50%', '33%'],
        hoverAnimation: true,
        color: ['#CE7F61', '#B852B6', '#3DA58E', '#3973BC', '#CBAD33', '#BFCC34', '#69A7CE'],
        label: {
            normal: {
                formatter: function(params) {
                    var total = 0; //总数量
                    var percent = 0; //各种占比
                    // echartData.forEach(function(value, index, array) {
                    //   total += value.value;
                    // });
                    let echartData = [{
                            value: 45,
                            name: '重大事故'
                        },
                        {
                            value: 35000,
                            name: '一般事故'
                        },
                        {
                            value: 400,
                            name: '特大事故'
                        },
                        {
                            value: 50000,
                            name: '违章行为'
                        },
                        {
                            value: 350,
                            name: '天灾风险'
                        },
                        {
                            value: 20000,
                            name: '交通拥挤'
                        },
                        {
                            value: 3500,
                            name: '肇事逃逸'
                        }
                    ];
                    for (let i = 0; i < echartData.length; i++) {
                        total += echartData[i].value;
                    }
                    percent = ((params.value / total) * 100).toFixed(1);
                    return '{white|' + params.name + '}' + ' ' + '{white|' + '(' + percent + '%)' + '}';
                },
                rich: {
                    yellow: {
                        color: '#ffc72b',
                        fontSize: 14,
                        padding: [5, 4],
                        align: 'center'
                    },
                    total: {
                        color: '#ffc72b',
                        fontSize: 14,
                        align: 'center'
                    },
                    white: {
                        color: '#fff',
                        align: 'center',
                        fontSize: 14,
                        opcity: 0.85,
                        padding: [30, 3, 10, 0]
                    },
                    blue: {
                        color: '#49dff0',
                        fontSize: 14,
                        align: 'center'
                    }
                }
            }
        },
        labelLine: {
            normal: {
                length: 20,
                length2: 15,
                lineStyle: {
                    color: '#fff',
                    opcity: 0.8
                }
            }
        },
        data: [{
                value: 45,
                name: '重大事故'
            },
            {
                value: 35000,
                name: '一般事故'
            },
            {
                value: 400,
                name: '特大事故'
            },
            {
                value: 50000,
                name: '违章行为'
            },
            {
                value: 350,
                name: '天灾风险'
            },
            {
                value: 20000,
                name: '交通拥挤'
            },
            {
                value: 3500,
                name: '肇事逃逸'
            }
        ]
    }]
};

export const jqdsjZhiduiCircleOptionYear = {
    backgroundColor: 'transparent',
    title: {
        show: false
    },
    tooltip: {
        trigger: 'item',
        formatter: '{b} : {c} <br/> {d}%'
    },
    legend: {
        show: false
    },
    grid: {},
    series: [{
        name: '',
        type: 'pie',
        radius: ['25%', '38%'],
        center: ['50%', '33%'],
        hoverAnimation: true,
        color: ['#CE7F61', '#B852B6', '#3DA58E', '#3973BC', '#CBAD33', '#BFCC34', '#69A7CE'],
        label: {
            normal: {
                formatter: function(params) {
                    var total = 0; //总数量
                    var percent = 0; //各种占比
                    // echartData.forEach(function(value, index, array) {
                    //   total += value.value;
                    // });
                    let echartData = [{
                            value: 380,
                            name: '重大事故'
                        },
                        {
                            value: 365000,
                            name: '一般事故'
                        },

                        {
                            value: 3650,
                            name: '特大事故'
                        },
                        {
                            value: 480000,
                            name: '违章行为'
                        },
                        {
                            value: 4000,
                            name: '天灾风险'
                        },
                        {
                            value: 180000,
                            name: '交通拥挤'
                        },
                        {
                            value: 36500,
                            name: '肇事逃逸'
                        }
                    ];
                    for (let i = 0; i < echartData.length; i++) {
                        total += echartData[i].value;
                    }
                    percent = ((params.value / total) * 100).toFixed(1);
                    return '{white|' + params.name + '}' + ' ' + '{white|' + '(' + percent + '%)' + '}';
                },
                rich: {
                    yellow: {
                        color: '#ffc72b',
                        fontSize: 14,
                        padding: [5, 4],
                        align: 'center'
                    },
                    total: {
                        color: '#ffc72b',
                        fontSize: 14,
                        align: 'center'
                    },
                    white: {
                        color: '#fff',
                        align: 'center',
                        fontSize: 14,
                        opcity: 0.85,
                        padding: [30, 3, 10, 0]
                    },
                    blue: {
                        color: '#49dff0',
                        fontSize: 14,
                        align: 'center'
                    }
                }
            }
        },
        labelLine: {
            normal: {
                length: 20,
                length2: 15,
                lineStyle: {
                    color: '#fff',
                    opcity: 0.8
                }
            }
        },
        data: [{
                value: 380,
                name: '重大事故'
            },
            {
                value: 365000,
                name: '一般事故'
            },

            {
                value: 3650,
                name: '特大事故'
            },
            {
                value: 480000,
                name: '违章行为'
            },
            {
                value: 4000,
                name: '天灾风险'
            },
            {
                value: 180000,
                name: '交通拥挤'
            },
            {
                value: 36500,
                name: '肇事逃逸'
            }
        ]
    }]
};