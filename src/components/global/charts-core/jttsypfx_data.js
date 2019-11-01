import echarts from 'echarts';

// 重点路段结果分析柱状图option
export const jttsypfxBarLineOption1Day = {
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
        data: [
            '汉川市105省道',
            '洪湖市103省道',
            '云梦县316国道',
            '洪湖市214省道 ',
            '宣恩325省道 ',
            '沙洋县342省道',
            '仙桃市214省道 ',
            '黄梅县G70',
            '漳河新区348国道'
        ], //横坐标
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            interval: 0,
            rotate: 40,
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
        name: '事故数量',
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
        name: '路段',
        type: 'bar',
        barWidth: 15,
        data: [1500, 800, 350, 712, 318, 412, 613, 750, 250], //数据
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
export const jttsypfxBarLineOption1Month = {
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
        data: [
            '汉川市105省道',
            '洪湖市103省道',
            '云梦县316国道',
            '洪湖市214省道 ',
            '宣恩325省道 ',
            '沙洋县342省道',
            '仙桃市214省道 ',
            '黄梅县G70',
            '漳河新区348国道'
        ], //横坐标
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            interval: 0,
            rotate: 40,
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
        name: '事故数量',
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
        name: '事故数量',
        type: 'bar',
        barWidth: 15,
        data: [6500, 1800, 1350, 2712, 1318, 2412, 3613, 5750, 2250], //数据
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
export const jttsypfxBarLineOption1Year = {
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
        data: [
            '汉川市105省道',
            '洪湖市103省道',
            '云梦县316国道',
            '洪湖市214省道 ',
            '宣恩325省道 ',
            '沙洋县342省道',
            '仙桃市214省道 ',
            '黄梅县G70',
            '漳河新区348国道'
        ], //横坐标
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            interval: 0,
            rotate: 40,
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
        name: '事故数量',
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
        name: '事故数量',
        type: 'bar',
        barWidth: 15,
        data: [15000, 6800, 5250, 4712, 7318, 6412, 5613, 8750, 4250], //数据
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

// 路网交通流研判结果面积图 改为柱状图
export const jttsypfxSingleStackedAreaOption1 = {
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
            '神农架林区',
            '恩施州',
            '天门',
            '随州'
        ], //横坐标
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            interval: 0,
            rotate: 40,
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
        name: '流量',
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
        name: '流量',
        type: 'bar',
        barWidth: 12,
        data: [5860, 4500, 4800, 5000, 4800, 5000, 4200, 4500, 5000, 4200, 5000, 4800, 5000, 4200, 4500, 5000, 4200], //数据
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
// export const jttsypfxSingleStackedAreaOption1 = {
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
//             fontSize: 12,
//             color: '#fff',
//             verticalAlign: 'left',
//             align: 'left'
//         },
//         data: ['万辆']
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
//                 fontSize: 12
//             }
//         },
//         data: [
//             '武汉',
//             '黄石',
//             '十堰',
//             '宜昌',
//             '荆州',
//             '襄樊',
//             '鄂州',
//             '荆门',
//             '黄冈',
//             '孝感',
//             '咸宁',
//             '仙桃',
//             '潜江',
//             '神农架林区',
//             '恩施州',
//             '天门',
//             '随州'
//         ]
//     }],
//     yAxis: [{
//         name: '万辆',
//         nameLocation: 'end',
//         nameTextStyle: {
//             color: '#fff',
//             fontSize: 12,
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
//         name: '车辆数量',
//         type: 'line',
//         areaStyle: {},
//         data: [5860, 4500, 4800, 5000, 4800, 5000, 4200, 4500, 5000, 4200, 5000, 4800, 5000, 4200, 4500, 5000, 4200],
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

// 路网交通违法研判结果展示柱状图
export const jttsypfxBarLineCompOption1TB = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: 20,
        borderWidth: 0,
        y2: 45
    },
    legend: {
        show: true,
        icon: 'square',
        top: 40,
        right: 12,
        itemWidth: 15,
        itemHeight: 10,
        itemGap: 15,
        selectedMode: false,
        textStyle: {
            fontSize: 12,
            color: '#fff',
            verticalAlign: 'left',
            align: 'left'
        }
    },
    xAxis: [{
        type: 'category',
        show: true,
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitArea: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            interval: 0,
            rotate: 40,
            show: true,
            splitNumber: 15,
            textStyle: {
                color: '#fff',
                fontFamily: '微软雅黑',
                fontSize: 12
            }
        },
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
            '神农架林区',
            '恩施州',
            '天门',
            '随州'
        ]
    }],
    yAxis: [{
        type: 'value',
        show: true,
        splitLine: {
            show: false
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#184580'
            }
        },
        axisLabel: {
            show: false,
            color: '#fff',
            margin: 10
        },
        axisTick: {
            show: false
        },
        splitArea: {
            show: false
        }
    }],
    series: [{
            name: '当年违法总量',
            type: 'bar',
            stack: '总量',
            barMaxWidth: 12,
            barGap: 10,
            itemStyle: {
                normal: {
                    barBorderRadius: 0,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#55ffe9' }, //柱图渐变色
                        { offset: 1, color: '#003f9e' } //柱图渐变色
                    ]),
                    label: {
                        show: false,
                        textStyle: {
                            color: '#7fb3df'
                        },
                        position: 'right',
                        formatter: function(p) {
                            return p.value > 0 ? p.value : '';
                        }
                    }
                }
            },
            data: [3709, 3200, 2800, 2400, 2000, 1700, 1400, 1200, 900, 800, 720, 600, 540, 500, 475, 425, 400]
        },
        {
            name: '同比减少',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#ffcc51' }, //柱图渐变色
                        { offset: 1, color: '#ff4229' } //柱图渐变色
                    ]),
                    barBorderRadius: 0,
                    label: {
                        show: false,
                        position: 'top',
                        color: '#fff',
                        formatter: function(p) {
                            return p.value > 0 ? '-' + p.value + '' : '';
                        }
                    }
                }
            },
            data: [800, 0, 0, 900, 761, 500, 0, 300, 200, 0, 200, 300, 350, 0, 240, 120, 0]
        },
        {
            name: '同比增长',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#5777ff' }, //柱图渐变色
                        { offset: 1, color: '#9511d2' } //柱图渐变色
                    ]),
                    barBorderRadius: 0,
                    label: {
                        show: false,
                        position: 'top',
                        color: '#fff',
                        formatter: function(p) {
                            return p.value > 0 ? '+' + p.value + '' : '';
                        }
                    }
                }
            },
            data: [0, 876, 800, 0, 0, 0, 300, 0, 0, 200, 0, 0, 0, 200, 0, 0, 150]
        }
    ]
};
export const jttsypfxBarLineCompOption1HB = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: 20,
        borderWidth: 0,
        y2: 45
    },
    legend: {
        show: true,
        icon: 'square',
        top: 40,
        right: 12,
        itemWidth: 15,
        itemHeight: 10,
        itemGap: 15,
        selectedMode: false,
        textStyle: {
            fontSize: 12,
            color: '#fff',
            verticalAlign: 'left',
            align: 'left'
        }
    },
    xAxis: [{
        type: 'category',
        show: true,
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitArea: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            interval: 0,
            rotate: 40,
            show: true,
            splitNumber: 15,
            textStyle: {
                color: '#fff',
                fontFamily: '微软雅黑',
                fontSize: 12
            }
        },
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
            '神农架林区',
            '恩施州',
            '天门',
            '随州'
        ]
    }],
    yAxis: [{
        type: 'value',
        show: true,
        splitLine: {
            show: false
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#184580'
            }
        },
        axisLabel: {
            show: false,
            color: '#fff',
            margin: 10
        },
        axisTick: {
            show: false
        },
        splitArea: {
            show: false
        }
    }],
    // dataZoom: [{
    //         show: false,
    //         height: 15,
    //         xAxisIndex: [0],
    //         bottom: 10,
    //         start: 0,
    //         end: 80
    //     },
    //     {
    //         type: 'inside',
    //         show: false,
    //         height: 5,
    //         xAxisIndex: [0],
    //         start: 1,
    //         end: 35
    //     }
    // ],
    series: [{
            name: '当月违法总量',
            type: 'bar',
            stack: '总量',
            barMaxWidth: 12,
            barGap: 20,
            itemStyle: {
                normal: {
                    barBorderRadius: 0,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#55ffe9' }, //柱图渐变色
                        { offset: 1, color: '#003f9e' } //柱图渐变色
                    ]),
                    label: {
                        show: false,
                        textStyle: {
                            color: '#7fb3df'
                        },
                        position: 'right',
                        formatter: function(p) {
                            return p.value > 0 ? p.value : '';
                        }
                    }
                }
            },
            data: [300, 285, 260, 240, 215, 180, 160, 135, 120, 100, 80, 70, 60, 50, 40, 30, 10]
        },
        {
            name: '同比减少',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#ffcc51' }, //柱图渐变色
                        { offset: 1, color: '#ff4229' } //柱图渐变色
                    ]),
                    barBorderRadius: 0,
                    label: {
                        show: false,
                        position: 'top',
                        color: '#fff',
                        formatter: function(p) {
                            return p.value > 0 ? '-' + p.value + '' : '';
                        }
                    }
                }
            },
            data: [70, 0, 0, 50, 45, 50, 0, 45, 30, 0, 50, 0, 0, 0, 15, 8, 2]
        },
        {
            name: '同比增长',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#5777ff' }, //柱图渐变色
                        { offset: 1, color: '#9511d2' } //柱图渐变色
                    ]),
                    barBorderRadius: 0,
                    label: {
                        show: false,
                        position: 'top',
                        color: '#fff',
                        formatter: function(p) {
                            return p.value > 0 ? '+' + p.value + '' : '';
                        }
                    }
                }
            },
            data: [0, 65, 50, 0, 0, 0, 60, 0, 0, 30, 0, 25, 20, 10, 0, 0, 0]
        }
    ]
};

// 路网交通事故研判分析结果展示柱状图
export const jttsypfxBarLineCompOption2TB = {
    tooltip: {
        show: true,
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        //left: 50,
        borderWidth: 0,
        y2: 45
    },
    legend: {
        show: true,
        icon: 'square',
        top: 40,
        right: 12,
        itemWidth: 15,
        itemHeight: 10,
        itemGap: 15,
        selectedMode: false,
        textStyle: {
            fontSize: 12,
            color: '#fff',
            verticalAlign: 'left',
            align: 'left'
        }
    },
    xAxis: [{
        type: 'category',
        show: true,
        splitLine: {
            show: false
        },
        axisTick: {
            show: false,
            lineStyle: {
                color: '#184580'
            }
        },
        splitArea: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#184580'
            }
        },
        axisLabel: {
            interval: 0,
            rotate: 0,
            show: true,
            // splitNumber: 15,
            textStyle: {
                color: '#fff',
                fontFamily: '微软雅黑',
                fontSize: 12
            }
        },
        data: ['简易程序事故', '伤人事故', '财产损失事故', '死亡事故']
    }],
    yAxis: [{
        type: 'value',
        show: true,
        splitLine: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#184580'
            }
        },
        axisLabel: {
            show: true,
            color: '#fff',
            margin: 10
        },
        axisTick: {
            show: false
        },
        splitArea: {
            show: false
        }
    }],
    series: [{
            name: '当年违法总量',
            type: 'bar',
            stack: '总量',
            barMaxWidth: 25,
            barGap: '10%',
            itemStyle: {
                normal: {
                    barBorderRadius: 0,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#55ffe9' }, //柱图渐变色
                        { offset: 1, color: '#003f9e' } //柱图渐变色
                    ]),
                    label: {
                        show: false,
                        textStyle: {
                            color: '#7fb3df'
                        },
                        position: 'right',
                        formatter: function(p) {
                            return p.value > 0 ? p.value : '';
                        }
                    }
                }
            },
            data: [6709, 2800, 3000, 1000]
        },
        {
            name: '同比减少',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#ffcc51' }, //柱图渐变色
                        { offset: 1, color: '#ff4229' } //柱图渐变色
                    ]),
                    barBorderRadius: 0,
                    label: {
                        show: false,
                        position: 'top',
                        color: '#fff',
                        formatter: function(p) {
                            return p.value > 0 ? '-' + p.value + '' : '';
                        }
                    }
                }
            },
            data: [1000, 0, 0, 100]
        },
        {
            name: '同比增长',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#5777ff' }, //柱图渐变色
                        { offset: 1, color: '#9511d2' } //柱图渐变色
                    ]),
                    barBorderRadius: 0,
                    label: {
                        show: false,
                        position: 'top',
                        color: '#fff',
                        formatter: function(p) {
                            return p.value > 0 ? '+' + p.value + '' : '';
                        }
                    }
                }
            },
            data: [0, 600, 400, 0]
        }
    ]
};
export const jttsypfxBarLineCompOption2HB = {
    tooltip: {
        show: true,
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        //left: 50,
        borderWidth: 0,
        y2: 45
    },
    legend: {
        show: true,
        icon: 'square',
        top: 40,
        right: 12,
        itemWidth: 15,
        itemHeight: 10,
        itemGap: 15,
        selectedMode: false,
        textStyle: {
            fontSize: 12,
            color: '#fff',
            verticalAlign: 'left',
            align: 'left'
        }
    },
    xAxis: [{
        type: 'category',
        show: true,
        splitLine: {
            show: false
        },
        axisTick: {
            show: false,
            lineStyle: {
                color: '#184580'
            }
        },
        splitArea: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#184580'
            }
        },
        axisLabel: {
            interval: 0,
            rotate: 0,
            show: true,
            // splitNumber: 15,
            textStyle: {
                color: '#fff',
                fontFamily: '微软雅黑',
                fontSize: 12
            }
        },
        data: ['简易程序事故', '伤人事故', '财产损失事故', '死亡事故']
    }],
    yAxis: [{
        type: 'value',
        show: true,
        splitLine: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#184580'
            }
        },
        axisLabel: {
            show: true,
            color: '#fff',
            margin: 10
        },
        axisTick: {
            show: true
        },
        splitArea: {
            show: false
        }
    }],
    series: [{
            name: '当月违法总量',
            type: 'bar',
            stack: '总量',
            barMaxWidth: 25,
            barGap: '10%',
            itemStyle: {
                normal: {
                    barBorderRadius: 0,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#55ffe9' }, //柱图渐变色
                        { offset: 1, color: '#003f9e' } //柱图渐变色
                    ]),
                    label: {
                        show: false,
                        textStyle: {
                            color: '#7fb3df'
                        },
                        position: 'right',
                        formatter: function(p) {
                            return p.value > 0 ? p.value : '';
                        }
                    }
                }
            },
            data: [600, 260, 250, 15]
        },
        {
            name: '同比减少',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#ffcc51' }, //柱图渐变色
                        { offset: 1, color: '#ff4229' } //柱图渐变色
                    ]),
                    barBorderRadius: 0,
                    label: {
                        show: false,
                        position: 'top',
                        color: '#fff',
                        formatter: function(p) {
                            return p.value > 0 ? '-' + p.value + '' : '';
                        }
                    }
                }
            },
            data: [120, 0, 0, 3]
        },
        {
            name: '同比增长',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#5777ff' }, //柱图渐变色
                        { offset: 1, color: '#9511d2' } //柱图渐变色
                    ]),
                    barBorderRadius: 0,
                    label: {
                        show: false,
                        position: 'top',
                        color: '#fff',
                        formatter: function(p) {
                            return p.value > 0 ? '+' + p.value + '' : '';
                        }
                    }
                }
            },
            data: [0, 87, 60, 0]
        }
    ]
};

// 交通警情研判结果分析柱状图数据
export const jttsypfxBarLineCompOption3TB = {
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
        data: ['特大交通事故', '重大交通事故', '一般轻微事故'], //横坐标
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
        name: '事故数量',
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
        name: '当年事故数量',
        type: 'bar',
        barWidth: 15,
        data: [20, 40, 1350], //数据
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
export const jttsypfxBarLineCompOption3HB = {
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
        data: ['特大交通事故', '重大交通事故', '一般轻微事故'], //横坐标
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
        name: '事故数量',
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
        name: '当月事故数量',
        type: 'bar',
        barWidth: 15,
        data: [5, 15, 200], //数据
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

// 路网交通气象研判结果分析
export const jttsypfxCircleCompOption4TB = {
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
        radius: ['32%', '50%'],
        center: ['50%', '50%'],
        hoverAnimation: true,
        color: ['#CE7F61', '#B852B6', '#3DA58E', '#3973BC', '#CBAD33', '#BFCC34', '#69A7CE'],
        label: {
            normal: {
                formatter: function(params) {
                    let total = 0; //总数量
                    let percent = 0; //各种占比
                    let echartData = [{
                            value: 100,
                            name: '晴转多云'
                        },
                        {
                            value: 60,
                            name: '雨天'
                        },
                        {
                            value: 30,
                            name: '雾天'
                        },
                        {
                            value: 30,
                            name: '雪天'
                        },
                        {
                            value: 100,
                            name: '晴'
                        },
                        {
                            value: 65,
                            name: '阴'
                        }
                    ];
                    for (let i = 0; i < echartData.length; i++) {
                        total += echartData[i].value;
                    }
                    percent = ((params.value / total) * 100).toFixed(0);
                    return '{blue|' + params.name + '}' + ' ' + '{blue|' + percent + '%' + '}';
                },
                rich: {
                    yellow: {
                        color: '#ffc72b',
                        fontSize: 12,
                        padding: [5, 4],
                        align: 'center'
                    },
                    total: {
                        color: '#ffc72b',
                        fontSize: 12,
                        align: 'center'
                    },
                    white: {
                        color: '#fff',
                        align: 'center',
                        fontSize: 12,
                        opcity: 0.85,
                        padding: [30, 3, 10, 0]
                    },
                    blue: {
                        color: '#7fb3df',
                        fontSize: 12,
                        align: 'center'
                    }
                }
            }
        },
        labelLine: {
            normal: {
                length: 15,
                length2: 20,
                lineStyle: {
                    color: '#7fb3df',
                    opcity: 0.8
                }
            }
        },
        data: [{
                value: 100,
                name: '晴转多云'
            },
            {
                value: 60,
                name: '雨天'
            },
            {
                value: 30,
                name: '雾天'
            },
            {
                value: 30,
                name: '雪天'
            },
            {
                value: 100,
                name: '晴'
            },
            {
                value: 65,
                name: '阴'
            }
        ]
    }]
};
export const jttsypfxCircleCompOption4HB = {
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
        radius: ['32%', '50%'],
        center: ['50%', '50%'],
        hoverAnimation: true,
        color: ['#CE7F61', '#B852B6', '#3DA58E', '#3973BC', '#CBAD33', '#BFCC34', '#69A7CE'],
        label: {
            normal: {
                formatter: function(params) {
                    var total = 0; //总数量
                    var percent = 0; //各种占比
                    let echartData = [{
                            value: 8,
                            name: '晴转多云'
                        },
                        {
                            value: 5,
                            name: '雨天'
                        },
                        {
                            value: 3,
                            name: '雾天'
                        },
                        {
                            value: 4,
                            name: '雪天'
                        },
                        {
                            value: 6,
                            name: '晴'
                        },
                        {
                            value: 5,
                            name: '阴'
                        }
                    ];
                    for (let i = 0; i < echartData.length; i++) {
                        total += echartData[i].value;
                    }
                    percent = ((params.value / total) * 100).toFixed(0);
                    return '{blue|' + params.name + '}' + ' ' + '{blue|' + percent + '%' + '}';
                },
                rich: {
                    yellow: {
                        color: '#ffc72b',
                        fontSize: 12,
                        padding: [5, 4],
                        align: 'center'
                    },
                    total: {
                        color: '#ffc72b',
                        fontSize: 12,
                        align: 'center'
                    },
                    white: {
                        color: '#fff',
                        align: 'center',
                        fontSize: 12,
                        opcity: 0.85,
                        padding: [30, 3, 10, 0]
                    },
                    blue: {
                        color: '#7fb3df',
                        fontSize: 12,
                        align: 'center'
                    }
                }
            }
        },
        labelLine: {
            normal: {
                length: 15,
                length2: 20,
                lineStyle: {
                    color: '#7fb3df',
                    opcity: 0.8
                }
            }
        },
        data: [{
                value: 8,
                name: '晴转多云'
            },
            {
                value: 5,
                name: '雨天'
            },
            {
                value: 3,
                name: '雾天'
            },
            {
                value: 4,
                name: '雪天'
            },
            {
                value: 6,
                name: '晴'
            },
            {
                value: 5,
                name: '阴'
            }
        ]
    }]
};

// 警力资源优化研判结果分析
export const jttsypfxCircleCompOption5Month = {
    grid: {
        left: 24,
        right: 50,
        bottom: 20,
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'cross' }
    },
    legend: {
        show: true,
        icon: 'square',
        top: 20,
        left: 60,
        itemWidth: 15,
        itemHeight: 10,
        itemGap: 15,
        selectedMode: false,
        textStyle: {
            fontSize: 12,
            color: '#fff',
            verticalAlign: 'left',
            align: 'left'
        },
        data: ['新增环比', '注销环比']
    },
    xAxis: [{
        type: 'category',
        nameTextStyle: {
            fontSize: 12,
            width: 20,
            height: 60
        },
        splitLine: {
            show: false
        },
        axisTick: {
            alignWithLabel: true
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
        },
        data: [
            '湖北高警三支队公安大队',
            '湖北高警三支队荆州大队',
            '湖北高警三支队荆门大队',
            '湖北高警二支队鄂州大队',
            '湖北高警二支队黄石大队',
            '湖北高警二支队黄梅大队',
            '湖北高警一支队孝感大队',
            '湖北高警一支队仙桃大队',
            '湖北高警一支队汉川大队',
            '湖北高警一支队蔡甸大队'
        ]
    }],
    yAxis: [{
            type: 'value',
            name: '工作量',
            nameTextStyle: {
                color: '#fff',
                fontSize: 12,
                padding: [0, 0, 5, 0]
            },
            position: 'left',
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            splitLine: {
                show: false
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
        {
            type: 'value',
            name: '',
            show: false,
            position: 'right',
            axisLine: {
                lineStyle: {
                    color: '#1ea49f'
                }
            },
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ],
    series: [{
        name: '工作量',
        barWidth: 18,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#3896ff' }, //柱图渐变色
            { offset: 1, color: '#002254' } //柱图渐变色
        ]),
        type: 'bar',
        data: [90, 86, 80, 72, 68, 64, 60, 54, 50, 48]
    }]
};
export const jttsypfxCircleCompOption5Quarter = {
    grid: {
        left: 24,
        right: 50,
        bottom: 20,
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'cross' }
    },
    legend: {
        show: true,
        icon: 'square',
        top: 20,
        left: 60,
        itemWidth: 15,
        itemHeight: 10,
        itemGap: 15,
        selectedMode: false,
        textStyle: {
            fontSize: 12,
            color: '#fff',
            verticalAlign: 'left',
            align: 'left'
        },
        data: ['新增环比', '注销环比']
    },
    xAxis: [{
        type: 'category',
        nameTextStyle: {
            fontSize: 12,
            width: 20,
            height: 60
        },
        splitLine: {
            show: false
        },
        axisTick: {
            alignWithLabel: true
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
        },
        data: [
            '湖北高警三支队公安大队',
            '湖北高警三支队荆州大队',
            '湖北高警三支队荆门大队',
            '湖北高警二支队鄂州大队',
            '湖北高警二支队黄石大队',
            '湖北高警二支队黄梅大队',
            '湖北高警一支队孝感大队',
            '湖北高警一支队仙桃大队',
            '湖北高警一支队汉川大队',
            '湖北高警一支队蔡甸大队'
        ]
    }],
    yAxis: [{
            type: 'value',
            name: '工作量',
            nameTextStyle: {
                color: '#fff',
                fontSize: 12,
                padding: [0, 0, 5, 0]
            },
            position: 'left',
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            splitLine: {
                show: false
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
        {
            type: 'value',
            name: '',
            show: false,
            position: 'right',
            axisLine: {
                lineStyle: {
                    color: '#1ea49f'
                }
            },
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ],
    series: [{
        name: '工作量',
        //stack: '总量',
        barWidth: 18,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#3896ff' }, //柱图渐变色
            { offset: 1, color: '#002254' } //柱图渐变色
        ]),
        type: 'bar',
        data: [2720, 2456, 2425, 2120, 1872, 1752, 1600, 1525, 1350, 1258]
    }]
};
export const jttsypfxCircleCompOption5HalfYear = {
    grid: {
        left: 24,
        right: 50,
        bottom: 20,
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'cross' }
    },
    legend: {
        show: true,
        icon: 'square',
        top: 20,
        left: 60,
        itemWidth: 15,
        itemHeight: 10,
        itemGap: 15,
        selectedMode: false,
        textStyle: {
            fontSize: 12,
            color: '#fff',
            verticalAlign: 'left',
            align: 'left'
        },
        data: ['新增环比', '注销环比']
    },
    xAxis: [{
        type: 'category',
        nameTextStyle: {
            fontSize: 12,
            width: 20,
            height: 60
        },
        splitLine: {
            show: false
        },
        axisTick: {
            alignWithLabel: true
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
        },
        data: [
            '湖北高警三支队公安大队',
            '湖北高警三支队荆州大队',
            '湖北高警三支队荆门大队',
            '湖北高警二支队鄂州大队',
            '湖北高警二支队黄石大队',
            '湖北高警二支队黄梅大队',
            '湖北高警一支队孝感大队',
            '湖北高警一支队仙桃大队',
            '湖北高警一支队汉川大队',
            '湖北高警一支队蔡甸大队'
        ]
    }],
    yAxis: [{
            type: 'value',
            name: '工作量',
            nameTextStyle: {
                color: '#fff',
                fontSize: 12,
                padding: [0, 0, 5, 0]
            },
            position: 'left',
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            splitLine: {
                show: false
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
        {
            type: 'value',
            name: '',
            show: false,
            position: 'right',
            axisLine: {
                lineStyle: {
                    color: '#1ea49f'
                }
            },
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ],
    series: [{
        name: '工作量',
        barWidth: 18,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#3896ff' }, //柱图渐变色
            { offset: 1, color: '#002254' } //柱图渐变色
        ]),
        type: 'bar',
        data: [28325, 25175, 24125, 22450, 21025, 20050, 18465, 16125, 14520, 13542]
    }]
};