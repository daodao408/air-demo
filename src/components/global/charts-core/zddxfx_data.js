import echarts from 'echarts';

// 各种类型事故多发路段柱状图
// export const zddxfxBarLineOption1Road1 = {
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
//         data: ['光谷大道', '雄楚大道', '光谷三路', '解放大道', '龙阳大道', '和平大道', '发展大道'], //横坐标
//         axisTick: {
//             show: false
//         },
//         splitLine: {
//             show: false
//         },
//         axisLabel: {
//             interval: 0,
//             rotate: 40,
//             textStyle: {
//                 color: '#fff',
//                 fontSize: 12
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
//         name: '次数',
//         nameLocation: 'end',
//         nameTextStyle: {
//             color: '#fff',
//             fontSize: 12,
//             padding: [0, 0, 10, 0]
//         },
//         splitLine: {
//             show: false,
//             lineStyle: {
//                 color: '#154780', //网格横线颜色
//                 width: 1,
//                 type: 'dashed'
//             }
//         },
//         axisLabel: {
//             textStyle: {
//                 color: '#fff',
//                 fontSize: 12 //坐标值得具体的颜色
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
//         name: '路段',
//         type: 'bar',
//         barWidth: 18,
//         data: [5375, 4800, 3260, 2710, 1356, 750, 350], //数据
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
//                     { offset: 1, color: '#1C52BF' } //柱图渐变色
//                 ])
//             }
//         }
//     }]
// };
// export const zddxfxBarLineOption1Road2 = {
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
//         data: ['外环横店桥', '后观湖大桥', '外环干汊湖大桥', '外环北湖特大桥', '外环府河桥', '马家湖大桥', '外环滠水桥'], //横坐标
//         axisTick: {
//             show: false
//         },
//         splitLine: {
//             show: false
//         },
//         axisLabel: {
//             interval: 0,
//             rotate: 40,
//             textStyle: {
//                 color: '#fff',
//                 fontSize: 12
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
//         name: '次数',
//         nameLocation: 'end',
//         nameTextStyle: {
//             color: '#fff',
//             fontSize: 12,
//             padding: [0, 0, 10, 0]
//         },
//         splitLine: {
//             show: false,
//             lineStyle: {
//                 color: '#154780', //网格横线颜色
//                 width: 1,
//                 type: 'dashed'
//             }
//         },
//         axisLabel: {
//             textStyle: {
//                 color: '#fff',
//                 fontSize: 12 //坐标值得具体的颜色
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
//         name: '路段',
//         type: 'bar',
//         barWidth: 18,
//         data: [540, 485, 385, 360, 257, 178, 90], //数据
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
//                     { offset: 1, color: '#1C52BF' } //柱图渐变色
//                 ])
//             }
//         }
//     }]
// };
// export const zddxfxBarLineOption1Road3 = {
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
//         data: ['友谊大道隧道', '武昌区长江隧道', '沙湖大桥长江隧道', '宝盖山隧道', '东湖隧道', '长江隧道', '水果湖隧道'], //横坐标
//         axisTick: {
//             show: false
//         },
//         splitLine: {
//             show: false
//         },
//         axisLabel: {
//             interval: 0,
//             rotate: 40,
//             textStyle: {
//                 color: '#fff',
//                 fontSize: 12
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
//         name: '次数',
//         nameLocation: 'end',
//         nameTextStyle: {
//             color: '#fff',
//             fontSize: 12,
//             padding: [0, 0, 10, 0]
//         },
//         splitLine: {
//             show: false,
//             lineStyle: {
//                 color: '#154780', //网格横线颜色
//                 width: 1,
//                 type: 'dashed'
//             }
//         },
//         axisLabel: {
//             textStyle: {
//                 color: '#fff',
//                 fontSize: 12 //坐标值得具体的颜色
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
//         name: '路段',
//         type: 'bar',
//         barWidth: 18,
//         data: [5375, 4780, 3105, 2650, 1280, 658, 350], //数据
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
//                     { offset: 1, color: '#1C52BF' } //柱图渐变色
//                 ])
//             }
//         }
//     }]
// };
// export const zddxfxBarLineOption1Road4 = {
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
//         data: ['长丰桥', '晴川桥', '月湖桥', '天兴州长江大桥', '鹦鹉洲长江大桥', '白沙洲大桥', '长江二桥'], //横坐标
//         axisTick: {
//             show: false
//         },
//         splitLine: {
//             show: false
//         },
//         axisLabel: {
//             interval: 0,
//             rotate: 40,
//             textStyle: {
//                 color: '#fff',
//                 fontSize: 12
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
//         name: '次数',
//         nameLocation: 'end',
//         nameTextStyle: {
//             color: '#fff',
//             fontSize: 12,
//             padding: [0, 0, 10, 0]
//         },
//         splitLine: {
//             show: false,
//             lineStyle: {
//                 color: '#154780', //网格横线颜色
//                 width: 1,
//                 type: 'dashed'
//             }
//         },
//         axisLabel: {
//             textStyle: {
//                 color: '#fff',
//                 fontSize: 12 //坐标值得具体的颜色
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
//         name: '路段',
//         type: 'bar',
//         barWidth: 18,
//         data: [560, 482, 395, 350, 275, 140, 92], //数据
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
//                     { offset: 1, color: '#1C52BF' } //柱图渐变色
//                 ])
//             }
//         }
//     }]
// };
// export const zddxfxBarLineOption1Road1 = {
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
//         data: ['光谷大道', '雄楚大道', '光谷三路', '解放大道', '龙阳大道', '和平大道', '发展大道'], //横坐标
//         axisTick: {
//             show: false
//         },
//         splitLine: {
//             show: false
//         },
//         axisLabel: {
//             interval: 0,
//             rotate: 40,
//             textStyle: {
//                 color: '#fff',
//                 fontSize: 12
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
//         name: '次数',
//         nameLocation: 'end',
//         nameTextStyle: {
//             color: '#fff',
//             fontSize: 12,
//             padding: [0, 0, 10, 0]
//         },
//         splitLine: {
//             show: false,
//             lineStyle: {
//                 color: '#154780', //网格横线颜色
//                 width: 1,
//                 type: 'dashed'
//             }
//         },
//         axisLabel: {
//             textStyle: {
//                 color: '#fff',
//                 fontSize: 12 //坐标值得具体的颜色
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
//         name: '路段',
//         type: 'bar',
//         barWidth: 18,
//         data: [5375, 4800, 3260, 2710, 1356, 750, 350], //数据
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
//                     { offset: 1, color: '#1C52BF' } //柱图渐变色
//                 ])
//             }
//         }
//     }]
// };
export const zddxfxBarLineOption1Road1TB = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        borderWidth: 0,
        y2: 45
    },
    legend: {
        show: true,
        icon: 'square',
        top: 45,
        left: 20,
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
            show: true,
            splitNumber: 15,
            textStyle: {
                color: '#fff',
                fontFamily: '微软雅黑',
                fontSize: 12
            }
        },
        data: ['光谷大道', '雄楚大道', '光谷三路', '解放大道', '龙阳大道', '和平大道', '发展大道']
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
            name: '事故多发路段当年违法次数',
            type: 'bar',
            stack: '次数',
            barMaxWidth: 16,
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
            data: [985, 865, 812, 756, 725, 680, 659]
        },
        {
            name: '同比减少',
            type: 'bar',
            stack: '次数',
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
            data: [100, 0, 0, 85, 76, 50, 0]
        },
        {
            name: '同比增长',
            type: 'bar',
            stack: '次数',
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
            data: [0, 68, 63, 0, 0, 0, 40]
        }
    ]
};
export const zddxfxBarLineOption1Road1HB = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        borderWidth: 0,
        y2: 45
    },
    legend: {
        show: true,
        icon: 'square',
        top: 45,
        left: 20,
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
            show: true,
            splitNumber: 15,
            textStyle: {
                color: '#fff',
                fontFamily: '微软雅黑',
                fontSize: 12
            }
        },
        data: ['光谷大道', '雄楚大道', '光谷三路', '解放大道', '龙阳大道', '和平大道', '发展大道']
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
            name: '事故多发路段当月违法次数',
            type: 'bar',
            stack: '次数',
            barMaxWidth: 16,
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
            data: [95, 88, 82, 78, 72, 65, 60]
        },
        {
            name: '同比减少',
            type: 'bar',
            stack: '次数',
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
            data: [10, 0, 0, 8, 5, 6, 0]
        },
        {
            name: '同比增长',
            type: 'bar',
            stack: '次数',
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
            data: [0, 7, 6, 0, 0, 0, 5]
        }
    ]
};
// export const zddxfxBarLineOption1Road2 = {
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
//         data: ['外环横店桥', '后观湖大桥', '外环干汊湖大桥', '外环北湖特大桥', '外环府河桥', '马家湖大桥', '外环滠水桥'], //横坐标
//         axisTick: {
//             show: false
//         },
//         splitLine: {
//             show: false
//         },
//         axisLabel: {
//             interval: 0,
//             rotate: 40,
//             textStyle: {
//                 color: '#fff',
//                 fontSize: 12
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
//         name: '次数',
//         nameLocation: 'end',
//         nameTextStyle: {
//             color: '#fff',
//             fontSize: 12,
//             padding: [0, 0, 10, 0]
//         },
//         splitLine: {
//             show: false,
//             lineStyle: {
//                 color: '#154780', //网格横线颜色
//                 width: 1,
//                 type: 'dashed'
//             }
//         },
//         axisLabel: {
//             textStyle: {
//                 color: '#fff',
//                 fontSize: 12 //坐标值得具体的颜色
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
//         name: '路段',
//         type: 'bar',
//         barWidth: 18,
//         data: [540, 485, 385, 360, 257, 178, 90], //数据
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
//                     { offset: 1, color: '#1C52BF' } //柱图渐变色
//                 ])
//             }
//         }
//     }]
// };
export const zddxfxBarLineOption1Road2TB = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        borderWidth: 0,
        y2: 45
    },
    legend: {
        show: true,
        icon: 'square',
        top: 45,
        left: 20,
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
            show: true,
            splitNumber: 15,
            textStyle: {
                color: '#fff',
                fontFamily: '微软雅黑',
                fontSize: 12
            }
        },
        data: ['外环横店桥', '后观湖大桥', '外环干汊湖大桥', '外环北湖特大桥', '外环府河桥', '马家湖大桥', '外环滠水桥']
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
            name: '团雾多发路段当年违法次数',
            type: 'bar',
            stack: '次数',
            barMaxWidth: 16,
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
            data: [865, 826, 785, 763, 740, 685, 628]
        },
        {
            name: '同比减少',
            type: 'bar',
            stack: '次数',
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
            data: [86, 0, 0, 75, 70, 64, 0]
        },
        {
            name: '同比增长',
            type: 'bar',
            stack: '次数',
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
            data: [0, 80, 73, 0, 0, 0, 60]
        }
    ]
};
export const zddxfxBarLineOption1Road2HB = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        borderWidth: 0,
        y2: 45
    },
    legend: {
        show: true,
        icon: 'square',
        top: 45,
        left: 20,
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
            show: true,
            splitNumber: 15,
            textStyle: {
                color: '#fff',
                fontFamily: '微软雅黑',
                fontSize: 12
            }
        },
        data: ['外环横店桥', '后观湖大桥', '外环干汊湖大桥', '外环北湖特大桥', '外环府河桥', '马家湖大桥', '外环滠水桥']
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
            name: '团雾多发路段当月违法次数',
            type: 'bar',
            stack: '次数',
            barMaxWidth: 16,
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
            data: [115, 108, 96, 90, 85, 78, 70]
        },
        {
            name: '同比减少',
            type: 'bar',
            stack: '次数',
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
            data: [12, 0, 0, 9, 7, 5, 0]
        },
        {
            name: '同比增长',
            type: 'bar',
            stack: '次数',
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
            data: [0, 8, 6, 0, 0, 0, 5]
        }
    ]
};
// export const zddxfxBarLineOption1Road3 = {
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
//         data: ['友谊大道隧道', '武昌区长江隧道', '沙湖大桥长江隧道', '宝盖山隧道', '东湖隧道', '长江隧道', '水果湖隧道'], //横坐标
//         axisTick: {
//             show: false
//         },
//         splitLine: {
//             show: false
//         },
//         axisLabel: {
//             interval: 0,
//             rotate: 40,
//             textStyle: {
//                 color: '#fff',
//                 fontSize: 12
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
//         name: '次数',
//         nameLocation: 'end',
//         nameTextStyle: {
//             color: '#fff',
//             fontSize: 12,
//             padding: [0, 0, 10, 0]
//         },
//         splitLine: {
//             show: false,
//             lineStyle: {
//                 color: '#154780', //网格横线颜色
//                 width: 1,
//                 type: 'dashed'
//             }
//         },
//         axisLabel: {
//             textStyle: {
//                 color: '#fff',
//                 fontSize: 12 //坐标值得具体的颜色
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
//         name: '路段',
//         type: 'bar',
//         barWidth: 18,
//         data: [5375, 4780, 3105, 2650, 1280, 658, 350], //数据
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
//                     { offset: 1, color: '#1C52BF' } //柱图渐变色
//                 ])
//             }
//         }
//     }]
// };
export const zddxfxBarLineOption1Road3TB = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        borderWidth: 0,
        y2: 45
    },
    legend: {
        show: true,
        icon: 'square',
        top: 45,
        left: 20,
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
            show: true,
            splitNumber: 15,
            textStyle: {
                color: '#fff',
                fontFamily: '微软雅黑',
                fontSize: 12
            }
        },
        data: ['友谊大道隧道', '武昌区长江隧道', '沙湖大桥长江隧道', '宝盖山隧道', '东湖隧道', '长江隧道', '水果湖隧道']
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
            name: '隧道多发路段当年违法次数',
            type: 'bar',
            stack: '次数',
            barMaxWidth: 16,
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
            data: [765, 725, 686, 652, 620, 600, 581]
        },
        {
            name: '同比减少',
            type: 'bar',
            stack: '次数',
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
            data: [98, 0, 0, 85, 76, 58, 0]
        },
        {
            name: '同比增长',
            type: 'bar',
            stack: '次数',
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
            data: [0, 85, 80, 0, 0, 0, 49]
        }
    ]
};
export const zddxfxBarLineOption1Road3HB = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        borderWidth: 0,
        y2: 45
    },
    legend: {
        show: true,
        icon: 'square',
        top: 45,
        left: 20,
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
            show: true,
            splitNumber: 15,
            textStyle: {
                color: '#fff',
                fontFamily: '微软雅黑',
                fontSize: 12
            }
        },
        data: ['友谊大道隧道', '武昌区长江隧道', '沙湖大桥长江隧道', '宝盖山隧道', '东湖隧道', '长江隧道', '水果湖隧道']
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
            name: '隧道多发路段当月违法次数',
            type: 'bar',
            stack: '次数',
            barMaxWidth: 16,
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
            data: [78, 72, 65, 60, 55, 51, 48]
        },
        {
            name: '同比减少',
            type: 'bar',
            stack: '次数',
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
            data: [6, 0, 0, 5, 5, 4, 0]
        },
        {
            name: '同比增长',
            type: 'bar',
            stack: '次数',
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
            data: [0, 4, 4, 0, 0, 0, 3]
        }
    ]
};
// export const zddxfxBarLineOption1Road4 = {
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
//         data: ['长丰桥', '晴川桥', '月湖桥', '天兴州长江大桥', '鹦鹉洲长江大桥', '白沙洲大桥', '长江二桥'], //横坐标
//         axisTick: {
//             show: false
//         },
//         splitLine: {
//             show: false
//         },
//         axisLabel: {
//             interval: 0,
//             rotate: 40,
//             textStyle: {
//                 color: '#fff',
//                 fontSize: 12
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
//         name: '次数',
//         nameLocation: 'end',
//         nameTextStyle: {
//             color: '#fff',
//             fontSize: 12,
//             padding: [0, 0, 10, 0]
//         },
//         splitLine: {
//             show: false,
//             lineStyle: {
//                 color: '#154780', //网格横线颜色
//                 width: 1,
//                 type: 'dashed'
//             }
//         },
//         axisLabel: {
//             textStyle: {
//                 color: '#fff',
//                 fontSize: 12 //坐标值得具体的颜色
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
//         name: '路段',
//         type: 'bar',
//         barWidth: 18,
//         data: [560, 482, 395, 350, 275, 140, 92], //数据
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
//                     { offset: 1, color: '#1C52BF' } //柱图渐变色
//                 ])
//             }
//         }
//     }]
// };
export const zddxfxBarLineOption1Road4TB = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        borderWidth: 0,
        y2: 45
    },
    legend: {
        show: true,
        icon: 'square',
        top: 45,
        left: 20,
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
            show: true,
            splitNumber: 15,
            textStyle: {
                color: '#fff',
                fontFamily: '微软雅黑',
                fontSize: 12
            }
        },
        data: ['长丰桥', '晴川桥', '月湖桥', '天兴州长江大桥', '鹦鹉洲长江大桥', '白沙洲大桥', '长江二桥']
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
            name: '桥梁多发路段当年违法次数',
            type: 'bar',
            stack: '次数',
            barMaxWidth: 16,
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
            data: [686, 654, 625, 589, 564, 532, 510]
        },
        {
            name: '同比减少',
            type: 'bar',
            stack: '次数',
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
            data: [80, 0, 0, 75, 65, 59, 0]
        },
        {
            name: '同比增长',
            type: 'bar',
            stack: '次数',
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
            data: [0, 78, 72, 0, 0, 0, 54]
        }
    ]
};
export const zddxfxBarLineOption1Road4HB = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        borderWidth: 0,
        y2: 45
    },
    legend: {
        show: true,
        icon: 'square',
        top: 45,
        left: 20,
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
            show: true,
            splitNumber: 15,
            textStyle: {
                color: '#fff',
                fontFamily: '微软雅黑',
                fontSize: 12
            }
        },
        data: ['长丰桥', '晴川桥', '月湖桥', '天兴州长江大桥', '鹦鹉洲长江大桥', '白沙洲大桥', '长江二桥']
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
            name: '桥梁多发路段当月违法次数',
            type: 'bar',
            stack: '次数',
            barMaxWidth: 16,
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
            data: [90, 85, 80, 73, 70, 65, 61]
        },
        {
            name: '同比减少',
            type: 'bar',
            stack: '次数',
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
            data: [8, 0, 0, 7, 6, 5, 0]
        },
        {
            name: '同比增长',
            type: 'bar',
            stack: '次数',
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
            data: [0, 7, 8, 0, 0, 0, 5]
        }
    ]
};

// 路段事故统计排名top10数据
export const zddxfxBarLineRotationOption1 = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: '{a} <br/>{b} : {c}'
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
            rotate: 40,
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
            '长江隧道',
            '解放大道',
            '发展大道',
            '长丰桥',
            '和平大道',
            '滠水桥',
            '长江大桥',
            '长江隧道',
            '三环线',
            '晴川桥'
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
        name: '路段事故数量',
        type: 'bar',
        barWidth: 18,
        data: [238, 945, 1850, 2845, 3260, 4930, 5750, 6450, 7125, 7860],
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

// 七类重点车辆统计柱状对比图
// export const zddxfxBarAndLineMixOptionTB = {
//     title: {
//         show: false
//     },

//     grid: {
//         left: '3%',
//         right: '5%',
//         bottom: '3%',
//         containLabel: true
//     },
//     tooltip: {
//         trigger: 'axis',
//         axisPointer: {
//             type: 'shadow',
//             label: {
//                 show: true
//             }
//         }
//     },
//     legend: {
//         show: false,
//         align: 'left',
//         left: 10,
//         top: 30
//     },
//     xAxis: [{
//         type: 'category',

//         axisTick: {
//             show: false
//         },
//         splitLine: {
//             show: false
//         },
//         axisLabel: {
//             interval: 0,
//             textStyle: {
//                 color: '#fff',
//                 fontSize: 12
//             }
//         },
//         axisLine: {
//             lineStyle: {
//                 type: 'solid',
//                 color: '#184580',
//                 width: '1  ' //坐标线的宽度
//             }
//         },
//         data: ['公路客运车', '旅游客运车', '营转非大客车', '危险品运输车', '校车黄标车', '货车', '老旧车']
//     }],
//     yAxis: [{
//             type: 'value',
//             name: '',
//             position: 'left',
//             axisTick: {
//                 show: true
//             },
//             splitLine: {
//                 show: false
//             },
//             axisLabel: {
//                 interval: 0,
//                 textStyle: {
//                     color: '#fff',
//                     fontSize: 12
//                 }
//             },
//             axisLine: {
//                 lineStyle: {
//                     type: 'solid',
//                     color: '#184580',
//                     width: '1  ' //坐标线的宽度
//                 }
//             }
//         },
//         {
//             show: false,
//             type: 'value',
//             name: '',
//             position: 'right',
//             axisLine: {
//                 lineStyle: {
//                     color: '#1ea49f'
//                 }
//             }
//         }
//     ],
//     series: [{
//             name: '违法次数',
//             stack: '总量',
//             barWidth: 30,
//             color: '#6ab1b0',
//             type: 'bar',
//             data: [1000, 1630, 1400, 1630, 1850, 2100, 2300],
//             itemStyle: {
//                 normal: {
//                     color: function(params) {
//                         let colorList = [
//                             new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//                                 { offset: 0, color: '#55ffe9' }, //柱图渐变色
//                                 { offset: 1, color: '#003f9e' } //柱图渐变色
//                             ]),
//                             new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//                                 { offset: 0, color: '#3896ff' }, //柱图渐变色
//                                 { offset: 1, color: '#002254' } //柱图渐变色
//                             ])
//                         ];
//                         if (params.dataIndex % 2 === 0) {
//                             return colorList[0];
//                         } else {
//                             return colorList[1];
//                         }
//                     }
//                 },
//                 emphasis: {
//                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//                         { offset: 0, color: '#37B7E3' }, //柱图渐变色
//                         { offset: 1, color: '#1C52BF' } //柱图渐变色
//                     ])
//                 }
//             }
//         },
//         {
//             name: '环比',
//             type: 'line',
//             yAxisIndex: 0,
//             smooth: true,
//             showSymbol: true,
//             symbolSize: 6,
//             data: [120, 324, 280, 360, 640, 510, 830],
//             itemStyle: {
//                 normal: {
//                     color: '#F19149',
//                     backgroundColor: '#f00',
//                     lineStyle: {
//                         width: 2, //折线宽度
//                         color: '#F19149' //折线颜色
//                     }
//                 }
//             }
//         }
//     ]
// };

// export const zddxfxBarAndLineMixOptionHB = {
//     title: {
//         show: false
//     },

//     grid: {
//         left: '3%',
//         right: '5%',
//         bottom: '3%',
//         containLabel: true
//     },
//     tooltip: {
//         trigger: 'axis',
//         axisPointer: {
//             type: 'shadow',
//             label: {
//                 show: true
//             }
//         }
//     },
//     legend: {
//         show: false,
//         align: 'left',
//         left: 10,
//         top: 30
//     },
//     xAxis: [{
//         type: 'category',

//         axisTick: {
//             show: false
//         },
//         splitLine: {
//             show: false
//         },
//         axisLabel: {
//             interval: 0,
//             textStyle: {
//                 color: '#fff',
//                 fontSize: 12
//             }
//         },
//         axisLine: {
//             lineStyle: {
//                 type: 'solid',
//                 color: '#184580',
//                 width: '1  ' //坐标线的宽度
//             }
//         },
//         data: ['公路客运车', '旅游客运车', '营转非大客车', '危险品运输车', '校车黄标车', '货车', '老旧车']
//     }],
//     yAxis: [{
//             type: 'value',
//             name: '',
//             position: 'left',
//             axisTick: {
//                 show: true
//             },
//             splitLine: {
//                 show: false
//             },
//             axisLabel: {
//                 interval: 0,
//                 textStyle: {
//                     color: '#fff',
//                     fontSize: 12
//                 }
//             },
//             axisLine: {
//                 lineStyle: {
//                     type: 'solid',
//                     color: '#184580',
//                     width: '1  ' //坐标线的宽度
//                 }
//             }
//         },
//         {
//             show: false,
//             type: 'value',
//             name: '',
//             position: 'right',
//             axisLine: {
//                 lineStyle: {
//                     color: '#1ea49f'
//                 }
//             }
//         }
//     ],
//     series: [{
//             name: '违法次数',
//             stack: '总量',
//             barWidth: 30,
//             color: '#6ab1b0',
//             type: 'bar',
//             data: [100, 163, 145, 190, 235, 350, 420],
//             itemStyle: {
//                 normal: {
//                     color: function(params) {
//                         let colorList = [
//                             new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//                                 { offset: 0, color: '#55ffe9' }, //柱图渐变色
//                                 { offset: 1, color: '#003f9e' } //柱图渐变色
//                             ]),
//                             new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//                                 { offset: 0, color: '#3896ff' }, //柱图渐变色
//                                 { offset: 1, color: '#002254' } //柱图渐变色
//                             ])
//                         ];
//                         if (params.dataIndex % 2 === 0) {
//                             return colorList[0];
//                         } else {
//                             return colorList[1];
//                         }
//                     }
//                 },
//                 emphasis: {
//                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//                         { offset: 0, color: '#37B7E3' }, //柱图渐变色
//                         { offset: 1, color: '#1C52BF' } //柱图渐变色
//                     ])
//                 }
//             }
//         },
//         {
//             name: '环比',
//             type: 'line',
//             yAxisIndex: 0,
//             smooth: true,
//             showSymbol: true,
//             symbolSize: 6,
//             data: [20, 12, 32, 41, 50, 43, 80],
//             itemStyle: {
//                 normal: {
//                     color: '#F19149',
//                     backgroundColor: '#f00',
//                     lineStyle: {
//                         width: 2, //折线宽度
//                         color: '#F19149' //折线颜色
//                     }
//                 }
//             }
//         }
//     ]
// };

export const zddxfxBarLineCompOptionTB = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        borderWidth: 0,
        y2: 45
    },
    legend: {
        show: true,
        icon: 'square',
        top: 30,
        left: 35,
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
            show: true,
            splitNumber: 15,
            textStyle: {
                color: '#fff',
                fontFamily: '微软雅黑',
                fontSize: 12
            }
        },
        data: ['公路客运车', '旅游客运车', '营转非大客车', '危险品运输车', '校车黄标车', '货车', '老旧车']
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
            barMaxWidth: 16,
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
            data: [3709, 3200, 2800, 2400, 2000, 1700, 1400]
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
            data: [800, 0, 0, 900, 761, 500, 0]
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
            data: [0, 876, 800, 0, 0, 0, 300]
        }
    ]
};
export const zddxfxBarLineCompOptionHB = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        borderWidth: 0,
        y2: 45
    },
    legend: {
        show: true,
        icon: 'square',
        top: 30,
        left: 35,
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
            show: true,
            splitNumber: 15,
            textStyle: {
                color: '#fff',
                fontFamily: '微软雅黑',
                fontSize: 12
            }
        },
        data: ['公路客运车', '旅游客运车', '营转非大客车', '危险品运输车', '校车黄标车', '货车', '老旧车']
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
            name: '当月违法总量',
            type: 'bar',
            stack: '总量',
            barMaxWidth: 16,
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
            data: [300, 285, 260, 240, 215, 180, 160]
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
            data: [70, 0, 0, 50, 45, 50, 0]
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
            data: [0, 65, 50, 0, 0, 0, 60]
        }
    ]
};

// 五类重点违法行为统计圆环图
export const zddxfxCircleOption = {
    backgroundColor: 'transparent',
    title: {
        show: false
    },
    tooltip: {
        trigger: 'item',
        formatter: function(params) {
            console.log(params);
            return params.seriesName + '<br/>' + params.name + ': ' + params.value + '辆 (' + params.percent + ')';
        }
    },
    legend: {
        show: false
    },
    grid: {},
    series: [{
        name: '违法数量',
        type: 'pie',
        radius: ['32%', '52%'],
        center: ['50%', '50%'],
        hoverAnimation: true,
        color: ['#1073F7', '#EEA743', '#FD5259', '#856AEC', '#07AD71'],
        label: {
            normal: {
                formatter: function(params) {
                    let total = 0; //总数量
                    let percent = 0; //各种占比
                    let echartData = [{
                            value: 630,
                            name: '机动车无证'
                        },
                        {
                            value: 620,
                            name: '报废机动车上路行驶'
                        },
                        {
                            value: 550,
                            name: '机动车逾期未检验'
                        },
                        {
                            value: 135,
                            name: '非法拼组装机动车'
                        },
                        {
                            value: 1548,
                            name: '非法改装'
                        }
                    ];
                    for (let i = 0; i < echartData.length; i++) {
                        total += echartData[i].value;
                    }
                    percent = ((params.value / total) * 100).toFixed(0);
                    return '{blue|数量：}' + '{blue|' + params.value + '}\n' + '{white|' + params.name + '}';
                },
                rich: {
                    yellow: {
                        color: '#ffc72b',
                        fontSize: 14,
                        padding: [0, 4],
                        align: 'center'
                    },
                    total: {
                        color: '#ffc72b',
                        fontSize: 40,
                        align: 'center'
                    },
                    white: {
                        color: '#fff',
                        align: 'left',
                        fontSize: 14,
                        padding: [5, 0]
                    },
                    blue: {
                        color: '#7fb3df',
                        fontSize: 14,
                        align: 'left'
                    },
                    hr: {
                        borderColor: '#0b5263',
                        width: '100%',
                        borderWidth: 1,
                        height: 0,
                        padding: [0, 0, 0, 0]
                    }
                }
            }
        },
        labelLine: {
            normal: {
                length: 55,
                length2: 0,
                lineStyle: {
                    color: '#0b5263'
                }
            }
        },
        data: [{
                value: 630,
                name: '机动车无证'
            },
            {
                value: 620,
                name: '报废机动车上路行驶'
            },
            {
                value: 550,
                name: '机动车逾期未检验'
            },
            {
                value: 135,
                name: '非法拼组装机动车'
            },
            {
                value: 1548,
                name: '非法改装'
            }
        ]
    }]
};

// 重点人员违法统计
export const zddxfxBarRotationCompOptionNum = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: '{a} <br/>{b} : {c}' + '次'
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
            rotate: 40,
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
            '校车黄标车驾驶人',
            '旅游客运车驾驶人',
            '营转非大客车驾驶人',
            '老旧车驾驶人',
            '公路客运车驾驶人',
            '货车驾驶人',
            '危险品运输车驾驶人'
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
        name: '违法数量',
        type: 'bar',
        barWidth: 18,
        data: [320, 1320, 1621, 1850, 2100, 2450, 5548],
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
export const zddxfxBarRotationCompOptionFrequency = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: '{a} <br/>{b} :  {c}' + '次'
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
            rotate: 40,
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
            '校车黄标车驾驶人',
            '旅游客运车驾驶人',
            '营转非大客车驾驶人',
            '老旧车驾驶人',
            '公路客运车驾驶人',
            '货车驾驶人',
            '危险品运输车驾驶人'
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
        name: '违法数量',
        type: 'bar',
        barWidth: 18,
        data: [450, 1150, 2000, 2100, 2450, 3000, 6500],
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