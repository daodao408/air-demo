import echarts from 'echarts';

// 高龄大车违法分析柱状图option
export const jtwfsjfxBarLineOption1Day = {
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
        data: ['非法改装', '非法拼组装机动车', '机动车逾期未检验', '报废机动车上路行驶', '机动车无证'], //横坐标
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
            },
            formatter: value => {
                let ret = ''; //拼接加\n返回的类目项
                let maxLength = 5; //每项显示文字个数
                let valLength = value.length; //X轴类目项的文字个数
                let rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
                if (rowN > 1) {
                    //如果类目项的文字大于3,
                    for (let i = 0; i < rowN; i++) {
                        let temp = ''; //每次截取的字符串
                        let start = i * maxLength; //开始截取的位置
                        let end = start + maxLength; //结束截取的位置
                        //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
                        if (i === rowN - 1) {
                            temp = value.substring(start, end);
                        } else {
                            temp = value.substring(start, end) + '\n';
                        }
                        ret += temp; //凭借最终的字符串
                    }

                    if (ret.length > 12) {
                        return ret.substring(0, 12) + '...';
                    } else {
                        return ret;
                    }
                } else {
                    return value;
                }
            }
        }
    },
    yAxis: {
        name: '',
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
    },
    series: [{
        name: '违法数量',
        type: 'bar',
        barWidth: 15,
        data: [320, 350, 950, 850, 620], //数据
        label: {
            normal: {
                show: true,
                position: 'top',
                textStyle: {
                    fontSize: 12,
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
                }
            }
        },
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
export const jtwfsjfxBarLineOption1Month = {
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
        data: ['非法改装', '非法拼组装机动车', '机动车逾期未检验', '报废机动车上路行驶', '机动车无证'], //横坐标
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
            },
            formatter: value => {
                let ret = ''; //拼接加\n返回的类目项
                let maxLength = 5; //每项显示文字个数
                let valLength = value.length; //X轴类目项的文字个数
                let rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
                if (rowN > 1) {
                    //如果类目项的文字大于3,
                    for (let i = 0; i < rowN; i++) {
                        let temp = ''; //每次截取的字符串
                        let start = i * maxLength; //开始截取的位置
                        let end = start + maxLength; //结束截取的位置
                        //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
                        if (i === rowN - 1) {
                            temp = value.substring(start, end);
                        } else {
                            temp = value.substring(start, end) + '\n';
                        }
                        ret += temp; //凭借最终的字符串
                    }

                    if (ret.length > 12) {
                        return ret.substring(0, 12) + '...';
                    } else {
                        return ret;
                    }
                } else {
                    return value;
                }
            }
        }
    },
    yAxis: {
        name: '',
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
    },
    series: [{
        name: '违法数量',
        type: 'bar',
        barWidth: 15,
        data: [1000, 1150, 2800, 2400, 1850], //数据
        label: {
            normal: {
                show: true,
                position: 'top',
                textStyle: {
                    fontSize: 12,
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
                }
            }
        },
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
export const jtwfsjfxBarLineOption1Year = {
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
        data: ['非法改装', '非法拼组装机动车', '机动车逾期未检验', '报废机动车上路行驶', '机动车无证'], //横坐标
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
            },
            formatter: value => {
                let ret = ''; //拼接加\n返回的类目项
                let maxLength = 5; //每项显示文字个数
                let valLength = value.length; //X轴类目项的文字个数
                let rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
                if (rowN > 1) {
                    //如果类目项的文字大于3,
                    for (let i = 0; i < rowN; i++) {
                        let temp = ''; //每次截取的字符串
                        let start = i * maxLength; //开始截取的位置
                        let end = start + maxLength; //结束截取的位置
                        //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
                        if (i === rowN - 1) {
                            temp = value.substring(start, end);
                        } else {
                            temp = value.substring(start, end) + '\n';
                        }
                        ret += temp; //凭借最终的字符串
                    }

                    if (ret.length > 12) {
                        return ret.substring(0, 12) + '...';
                    } else {
                        return ret;
                    }
                } else {
                    return value;
                }
            }
        }
    },
    yAxis: {
        name: '',
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
    },
    series: [{
        name: '违法数量',
        type: 'bar',
        barWidth: 15,
        data: [13500, 12594, 31520, 20150, 16500], //数据
        label: {
            normal: {
                show: true,
                position: 'top',
                textStyle: {
                    fontSize: 12,
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
                }
            }
        },
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

// 未处理违法车辆分析柱状图option
// export const jtwfsjfxBarLineOption2Day = {
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
//         data: ['3分以下', '3分以上6分以下', '6分以上9分以下', '9分以上12分以下 ', '12分及以上 '], //横坐标
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
//             },
//             formatter: value => {
//                 let ret = ''; //拼接加\n返回的类目项
//                 let maxLength = 4; //每项显示文字个数
//                 let valLength = value.length; //X轴类目项的文字个数
//                 let rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
//                 if (rowN > 1) {
//                     //如果类目项的文字大于3,
//                     for (let i = 0; i < rowN; i++) {
//                         let temp = ''; //每次截取的字符串
//                         let start = i * maxLength; //开始截取的位置
//                         let end = start + maxLength; //结束截取的位置
//                         //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
//                         if (i === rowN - 1) {
//                             temp = value.substring(start, end);
//                         } else {
//                             temp = value.substring(start, end) + '\n';
//                         }
//                         ret += temp; //凭借最终的字符串
//                     }

//                     if (ret.length > 12) {
//                         return ret.substring(0, 12) + '...';
//                     } else {
//                         return ret;
//                     }
//                 } else {
//                     return value;
//                 }
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
//         name: '违法数量',
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
//         name: '违法数量',
//         type: 'bar',
//         barWidth: 15,
//         data: [640, 480, 420, 350, 300], //数据
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
// export const jtwfsjfxBarLineOption2Month = {
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
//         data: ['3分以下', '3分以上6分以下', '6分以上9分以下', '9分以上12分以下 ', '12分及以上 '], //横坐标
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
//             },
//             formatter: value => {
//                 let ret = ''; //拼接加\n返回的类目项
//                 let maxLength = 4; //每项显示文字个数
//                 let valLength = value.length; //X轴类目项的文字个数
//                 let rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
//                 if (rowN > 1) {
//                     //如果类目项的文字大于3,
//                     for (let i = 0; i < rowN; i++) {
//                         let temp = ''; //每次截取的字符串
//                         let start = i * maxLength; //开始截取的位置
//                         let end = start + maxLength; //结束截取的位置
//                         //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
//                         if (i === rowN - 1) {
//                             temp = value.substring(start, end);
//                         } else {
//                             temp = value.substring(start, end) + '\n';
//                         }
//                         ret += temp; //凭借最终的字符串
//                     }

//                     if (ret.length > 12) {
//                         return ret.substring(0, 12) + '...';
//                     } else {
//                         return ret;
//                     }
//                 } else {
//                     return value;
//                 }
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
//         name: '违法数量',
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
//         name: '违法数量',
//         type: 'bar',
//         barWidth: 15,
//         data: [1550, 1340, 1200, 1050, 920], //数据
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
// export const jtwfsjfxBarLineOption2Year = {
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
//         data: ['3分以下', '3分以上6分以下', '6分以上9分以下', '9分以上12分以下 ', '12分及以上 '], //横坐标
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
//             },
//             formatter: value => {
//                 let ret = ''; //拼接加\n返回的类目项
//                 let maxLength = 4; //每项显示文字个数
//                 let valLength = value.length; //X轴类目项的文字个数
//                 let rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
//                 if (rowN > 1) {
//                     //如果类目项的文字大于3,
//                     for (let i = 0; i < rowN; i++) {
//                         let temp = ''; //每次截取的字符串
//                         let start = i * maxLength; //开始截取的位置
//                         let end = start + maxLength; //结束截取的位置
//                         //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
//                         if (i === rowN - 1) {
//                             temp = value.substring(start, end);
//                         } else {
//                             temp = value.substring(start, end) + '\n';
//                         }
//                         ret += temp; //凭借最终的字符串
//                     }

//                     if (ret.length > 12) {
//                         return ret.substring(0, 12) + '...';
//                     } else {
//                         return ret;
//                     }
//                 } else {
//                     return value;
//                 }
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
//         name: '违法数量',
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
//         name: '违法数量',
//         type: 'bar',
//         barWidth: 15,
//         data: [14350, 12500, 10000, 11000, 9500], //数据
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

export const jtwfsjfxBarLineRotationOption = {
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
        top: 30,
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
            '鄂AT5Y76',
            '鄂ACR456',
            '鄂AB8U78',
            '鄂AM987G',
            '鄂A98C67',
            '鄂AT88T6',
            '鄂AP8J67',
            '鄂AL8L56',
            '鄂AR9Y45',
            '鄂A3T4E3'
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
        name: '违法未处理时长',
        type: 'bar',
        barWidth: 18,
        data: [132, 137, 145, 168, 195, 219, 235, 252, 278, 312],
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

// 重点车辆异常处理分析
export const barLineSevenOption1 = {
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
        data: ['公路客运车', '旅游客运车', '营转非大客车', '危险品运输车 ', '校车黄标车 ', '货车', '老旧车 '], //横坐标
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
        name: '重点车辆未按路线行驶数量统计',
        nameLocation: 'end',
        nameTextStyle: {
            color: '#fff',
            fontSize: 12,
            padding: [0, 0, 10, 30]
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
        name: '数量',
        type: 'bar',
        barWidth: 15,
        data: [3056, 5165, 9500, 11000, 28570, 25600, 38500], //数据
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
export const barLineSevenOption2 = {
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
        data: ['公路客运车', '旅游客运车', '营转非大客车', '危险品运输车 ', '校车黄标车 ', '货车', '老旧车 '], //横坐标
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
        name: '重点车辆违法行为数量统计',
        nameLocation: 'end',
        nameTextStyle: {
            color: '#fff',
            fontSize: 12,
            padding: [0, 0, 10, 20]
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
        name: '数量',
        type: 'bar',
        barWidth: 15,
        data: [3500, 4700, 8760, 13500, 24000, 22000, 35250], //数据
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
export const barLineSevenOption3 = {
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
        data: ['公路客运车', '旅游客运车', '营转非大客车', '危险品运输车 ', '校车黄标车 ', '货车', '老旧车 '], //横坐标
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
        name: '重点车辆违法未处理数量统计',
        nameLocation: 'end',
        nameTextStyle: {
            color: '#fff',
            fontSize: 12,
            padding: [0, 0, 10, 20]
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
        name: '数量',
        type: 'bar',
        barWidth: 15,
        data: [3150, 4158, 7540, 15240, 18560, 17580, 31256], //数据
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
export const barLineSevenOption4 = {
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
        data: ['公路客运车', '旅游客运车', '营转非大客车', '危险品运输车 ', '校车黄标车 ', '货车', '老旧车 '], //横坐标
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
        name: '重点车辆检验逾期数量统计',
        nameLocation: 'end',
        nameTextStyle: {
            color: '#fff',
            fontSize: 12,
            padding: [0, 0, 10, 20]
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
        name: '数量',
        type: 'bar',
        barWidth: 15,
        data: [4510, 4420, 6580, 10052, 14520, 24223, 28954], //数据
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
export const barLineSevenOption5 = {
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
        data: ['公路客运车', '旅游客运车', '营转非大客车', '危险品运输车 ', '校车黄标车 ', '货车', '老旧车 '], //横坐标
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
        name: '重点车辆逾期未报废数量统计',
        nameLocation: 'end',
        nameTextStyle: {
            color: '#fff',
            fontSize: 12,
            padding: [0, 0, 10, 20]
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
        name: '数量',
        type: 'bar',
        barWidth: 15,
        data: [3685, 3520, 4856, 7530, 12560, 22578, 31254], //数据
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
export const barLineSevenOption6 = {
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
        data: ['公路客运车', '旅游客运车', '营转非大客车', '危险品运输车 ', '校车黄标车 ', '货车', '老旧车 '], //横坐标
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
        name: '重点车辆强制措施未裁决数量统计',
        nameLocation: 'end',
        nameTextStyle: {
            color: '#fff',
            fontSize: 12,
            padding: [0, 0, 10, 45]
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
        name: '数量',
        type: 'bar',
        barWidth: 15,
        data: [1245, 2125, 2450, 2510, 3500, 4865, 8950], //数据
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

// 一车几证占比  一证几车占比 圆环图
export const jtwfsjfxCircleOption1 = {
    color: [
        new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#1eebfd' }, //柱图渐变色
            { offset: 1, color: '#0fd692' } //柱图渐变色
        ]),
        '#1e99fd'
    ],
    title: {
        show: false
    },
    tooltip: {
        show: true
    },
    legend: {
        show: false
    },
    toolbox: {
        show: false
    },
    series: [{
            name: '',
            type: 'pie',
            radius: ['45%', '60%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                    value: 36000,
                    name: '一证三车'
                },
                {
                    value: 24000,
                    name: '一证两车'
                }
            ]
        },
        {
            name: '',
            type: 'pie',
            clockWise: false,
            radius: ['85%', '85%'],
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    labelLine: {
                        show: false
                    }
                }
            },
            data: [{
                    value: 120,
                    name: '',
                    itemStyle: {
                        normal: {
                            borderWidth: 1,
                            borderType: 'dashed',
                            borderColor: '#1e99fd'
                        }
                    }
                },
                {
                    value: 4,
                    name: '',
                    itemStyle: {
                        normal: {
                            label: {
                                show: true
                            },
                            labelLine: {
                                show: true
                            },
                            color: 'rgba(0, 0, 0, 0)',
                            borderColor: 'rgba(0, 0, 0, 0)',
                            borderWidth: 5
                        }
                    }
                },
                {
                    value: 60,
                    name: '',
                    itemStyle: {
                        normal: {
                            borderWidth: 1,
                            borderType: 'dashed',
                            borderColor: '#1e99fd'
                        }
                    }
                },
                {
                    value: 4,
                    name: '',
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            },
                            color: 'rgba(0, 0, 0, 0)',
                            borderColor: 'rgba(0, 0, 0, 0)',
                            borderWidth: 0
                        }
                    }
                },
                {
                    value: 60,
                    name: '',
                    itemStyle: {
                        normal: {
                            borderWidth: 1,
                            borderType: 'dashed',
                            borderColor: '#1e99fd'
                        }
                    }
                },
                {
                    value: 4,
                    name: '',
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            },
                            color: 'rgba(0, 0, 0, 0)',
                            borderColor: 'rgba(0, 0, 0, 0)',
                            borderWidth: 0
                        }
                    }
                }
            ]
        }
    ]
};
export const jtwfsjfxCircleOption2 = {
    color: [
        new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#1eebfd' }, //柱图渐变色
            { offset: 1, color: '#0fd692' } //柱图渐变色
        ]),
        '#1e99fd'
    ],
    title: {
        show: false
    },
    tooltip: {
        show: true
    },
    legend: {
        show: false
    },
    toolbox: {
        show: false
    },
    series: [{
            name: '',
            type: 'pie',
            radius: ['45%', '60%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                    value: 36000,
                    name: '一车三证'
                },
                {
                    value: 24000,
                    name: '一车两证'
                }
            ]
        },
        {
            name: '',
            type: 'pie',
            clockWise: false,
            radius: ['85%', '85%'],
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    labelLine: {
                        show: false
                    }
                }
            },
            data: [{
                    value: 120,
                    name: '',
                    itemStyle: {
                        normal: {
                            borderWidth: 1,
                            borderType: 'dashed',
                            borderColor: '#1e99fd'
                        }
                    }
                },
                {
                    value: 4,
                    name: '',
                    itemStyle: {
                        normal: {
                            label: {
                                show: true
                            },
                            labelLine: {
                                show: true
                            },
                            color: 'rgba(0, 0, 0, 0)',
                            borderColor: 'rgba(0, 0, 0, 0)',
                            borderWidth: 5
                        }
                    }
                },
                {
                    value: 60,
                    name: '',
                    itemStyle: {
                        normal: {
                            borderWidth: 1,
                            borderType: 'dashed',
                            borderColor: '#1e99fd'
                        }
                    }
                },
                {
                    value: 4,
                    name: '',
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            },
                            color: 'rgba(0, 0, 0, 0)',
                            borderColor: 'rgba(0, 0, 0, 0)',
                            borderWidth: 0
                        }
                    }
                },
                {
                    value: 60,
                    name: '',
                    itemStyle: {
                        normal: {
                            borderWidth: 1,
                            borderType: 'dashed',
                            borderColor: '#1e99fd'
                        }
                    }
                },
                {
                    value: 4,
                    name: '',
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            },
                            color: 'rgba(0, 0, 0, 0)',
                            borderColor: 'rgba(0, 0, 0, 0)',
                            borderWidth: 0
                        }
                    }
                }
            ]
        }
    ]
};

// 未处理时长违法统计圆环图
export const jtwfsjfxAllCircleOption3Day = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}人 ({d}%)'
    },
    color: ['#457BAA', '#FFE00C', '#839BF1', '#0B2FCB', '#890ACB', '#00D253', '#FF702A'],
    series: [{
        name: '未处理时长违法统计数量',
        type: 'pie',
        radius: '50%',
        label: {
            normal: {
                formatter: function(e) {
                    if (e.percent === 0) {
                        return '';
                    } else {
                        return (
                            '' +
                            '{blue|' +
                            e.name +
                            '}' +
                            '\n\n' +
                            '{blue|' +
                            e.value +
                            '}' +
                            '{blue|' +
                            '人，' +
                            e.percent +
                            '%' +
                            '}'
                        );
                    }
                },
                rich: {
                    blue: {
                        color: '#7fb3df',
                        fontSize: 12,
                        align: 'center'
                    }
                }
            }
        },
        data: [{
                value: 1200,
                name: '一周以下'
            },
            {
                value: 1450,
                name: '半个月'
            },
            {
                value: 1350,
                name: '1个月'
            },
            {
                value: 1542,
                name: '3个月'
            },
            {
                value: 1625,
                name: '6个月'
            },
            {
                value: 1150,
                name: '1年'
            },
            {
                value: 1245,
                name: '一年以上'
            }
        ]
    }]
};
export const jtwfsjfxAllCircleOption3Month = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}人 ({d}%)'
    },
    color: ['#457BAA', '#FFE00C', '#839BF1', '#0B2FCB', '#890ACB', '#00D253', '#FF702A'],
    series: [{
        name: '未处理时长违法统计数量',
        type: 'pie',
        radius: '50%',
        label: {
            normal: {
                formatter: function(e) {
                    if (e.percent === 0) {
                        return '';
                    } else {
                        return (
                            '' +
                            '{blue|' +
                            e.name +
                            '}' +
                            '\n\n' +
                            '{blue|' +
                            e.value +
                            '}' +
                            '{blue|' +
                            '人，' +
                            e.percent +
                            '%' +
                            '}'
                        );
                    }
                },
                rich: {
                    blue: {
                        color: '#7fb3df',
                        fontSize: 12,
                        align: 'center'
                    }
                }
            }
        },
        data: [{
                value: 35000,
                name: '一周以下'
            },
            {
                value: 36000,
                name: '半个月'
            },
            {
                value: 37500,
                name: '1个月'
            },
            {
                value: 39500,
                name: '3个月'
            },
            {
                value: 38250,
                name: '6个月'
            },
            {
                value: 27125,
                name: '1年'
            },
            {
                value: 28100,
                name: '一年以上'
            }
        ]
    }]
};
export const jtwfsjfxAllCircleOption3Year = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}人 ({d}%)'
    },
    color: ['#457BAA', '#FFE00C', '#839BF1', '#0B2FCB', '#890ACB', '#00D253', '#FF702A'],
    series: [{
        name: '未处理时长违法统计数量',
        type: 'pie',
        radius: '50%',
        label: {
            normal: {
                formatter: function(e) {
                    if (e.percent === 0) {
                        return '';
                    } else {
                        return (
                            '' +
                            '{blue|' +
                            e.name +
                            '}' +
                            '\n\n' +
                            '{blue|' +
                            e.value +
                            '}' +
                            '{blue|' +
                            '人，' +
                            e.percent +
                            '%' +
                            '}'
                        );
                    }
                },
                rich: {
                    blue: {
                        color: '#7fb3df',
                        fontSize: 12,
                        align: 'center'
                    }
                }
            }
        },
        data: [{
                value: 240050,
                name: '一周以下'
            },
            {
                value: 350080,
                name: '半个月'
            },
            {
                value: 345000,
                name: '1个月'
            },
            {
                value: 389000,
                name: '3个月'
            },
            {
                value: 310500,
                name: '6个月'
            },
            {
                value: 270000,
                name: '1年'
            },
            {
                value: 260000,
                name: '一年以上'
            }
        ]
    }]
};

// 一证三车违法统计折线区域图
// export const jtwfsjfxSingleStackedAreaOption4Day = {
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
//         data: ['一证三车数量']
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
//         name: '一证三车数量',
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
//         name: '一证三车数量',
//         type: 'line',
//         areaStyle: {},
//         data: [82, 120, 256, 320, 425, 405, 385, 245],
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
// export const jtwfsjfxSingleStackedAreaOption4Month = {
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
//         data: ['一证三车数量']
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
//             textStyle: {
//                 color: '#fff',
//                 fontSize: 14
//             }
//         },
//         data: [
//             '1日',
//             '2日',
//             '3日',
//             '4日',
//             '5日',
//             '6日',
//             '7日',
//             '8日',
//             '9日',
//             '10日',
//             '11日',
//             '12日',
//             '13日',
//             '14日',
//             '15日',
//             '16日',
//             '17日',
//             '18日',
//             '19日',
//             '20日',
//             '21日',
//             '22日',
//             '23日',
//             '24日',
//             '25日',
//             '26日',
//             '27日',
//             '28日',
//             '29日',
//             '30日',
//             '31日'
//         ]
//     }],
//     yAxis: [{
//         name: '一证三车数量',
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
//         name: '一证三车数量',
//         type: 'line',
//         areaStyle: {},
//         data: [
//             625,
//             758,
//             636,
//             725,
//             845,
//             913,
//             865,
//             1120,
//             925,
//             758,
//             845,
//             653,
//             785,
//             924,
//             723,
//             625,
//             714,
//             798,
//             658,
//             736,
//             869,
//             880,
//             920,
//             1025,
//             1011,
//             846,
//             925,
//             876,
//             751,
//             814,
//             963
//         ],
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
// export const jtwfsjfxSingleStackedAreaOption4Year = {
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
//         data: ['一证三车数量']
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
//         data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
//     }],
//     yAxis: [{
//         name: '一证三车数量',
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
//         name: '一证三车数量',
//         type: 'line',
//         areaStyle: {},
//         data: [1956, 2145, 1825, 2450, 2645, 2567, 2894, 3312, 2945, 3125, 2546, 3524],
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

// 一证三车违法统计 折线面积图
export const jtwfsjfxSingleStackedAreaOption4WuHanDay = {
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
        data: ['一证三车数量']
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
        name: '一证三车违法数量',
        nameLocation: 'end',
        nameTextStyle: {
            color: '#fff',
            fontSize: 14,
            padding: [0, 0, 10, 20]
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
        name: '一证三车违法数量',
        type: 'line',
        areaStyle: {},
        data: [125, 185, 365, 425, 568, 525, 415, 315],
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
export const jtwfsjfxSingleStackedAreaOption4WuHanMonth = {
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
        data: ['一证三车违法数量']
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
        name: '一证三车违法数量',
        nameLocation: 'end',
        nameTextStyle: {
            color: '#fff',
            fontSize: 14,
            padding: [0, 0, 10, 20]
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
        name: '一证三车违法数量',
        type: 'line',
        areaStyle: {},
        data: [
            758,
            859,
            769,
            898,
            978,
            1025,
            989,
            1350,
            1125,
            869,
            987,
            756,
            845,
            1036,
            846,
            756,
            789,
            859,
            754,
            865,
            982,
            963,
            1032,
            1358,
            1450,
            978,
            1025,
            948,
            872,
            998,
            1145
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
export const jtwfsjfxSingleStackedAreaOption4WuHanYear = {
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
        data: ['一证三车违法数量']
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
        name: '一证三车违法数量',
        nameLocation: 'end',
        nameTextStyle: {
            color: '#fff',
            fontSize: 14,
            padding: [0, 0, 10, 5]
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
        name: '一证三车违法数量',
        type: 'line',
        areaStyle: {},
        data: [2156, 2458, 2215, 2589, 2725, 2658, 3025, 3458, 3056, 3485, 2769, 3865],
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
export const jtwfsjfxSingleStackedAreaOption4HuangShiDay = {
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
        data: ['一证三车违法数量']
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
        name: '一证三车违法数量',
        nameLocation: 'end',
        nameTextStyle: {
            color: '#fff',
            fontSize: 14,
            padding: [0, 0, 10, 20]
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
        name: '一证三车违法数量',
        type: 'line',
        areaStyle: {},
        data: [45, 90, 185, 285, 315, 356, 329, 156],
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
export const jtwfsjfxSingleStackedAreaOption4HuangShiMonth = {
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
        data: ['一证三车违法数量']
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
        name: '一证三车违法数量',
        nameLocation: 'end',
        nameTextStyle: {
            color: '#fff',
            fontSize: 14,
            padding: [0, 0, 10, 20]
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
        name: '一证三车违法数量',
        type: 'line',
        areaStyle: {},
        data: [
            456,
            565,
            645,
            689,
            615,
            725,
            625,
            745,
            756,
            612,
            560,
            512,
            489,
            625,
            435,
            485,
            502,
            536,
            489,
            436,
            516,
            503,
            365,
            638,
            689,
            564,
            698,
            623,
            531,
            598,
            714
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
export const jtwfsjfxSingleStackedAreaOption4HuangShiYear = {
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
        data: ['一证三车违法数量']
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
        name: '一证三车违法数量',
        nameLocation: 'end',
        nameTextStyle: {
            color: '#fff',
            fontSize: 14,
            padding: [0, 0, 10, 5]
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
        name: '一证三车违法数量',
        type: 'line',
        areaStyle: {},
        data: [1037, 1254, 1325, 1025, 1312, 969, 1087, 1063, 936, 968, 1085, 1124],
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
// 一车三证违法统计 折线面积图
export const jtwfsjfxSingleStackedAreaOption4WuHanDay1 = {
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
        data: ['一车三证违法数量']
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
        name: '一车三证违法数量',
        nameLocation: 'end',
        nameTextStyle: {
            color: '#fff',
            fontSize: 14,
            padding: [0, 0, 10, 20]
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
        name: '一车三证违法数量',
        type: 'line',
        areaStyle: {},
        data: [145, 198, 345, 489, 578, 536, 458, 389],
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
export const jtwfsjfxSingleStackedAreaOption4WuHanMonth1 = {
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
        data: ['一车三证违法数量']
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
        name: '一车三证违法数量',
        nameLocation: 'end',
        nameTextStyle: {
            color: '#fff',
            fontSize: 14,
            padding: [0, 0, 10, 20]
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
        name: '一车三证违法数量',
        type: 'line',
        areaStyle: {},
        data: [
            658,
            759,
            645,
            785,
            925,
            1006,
            900,
            1236,
            900,
            736,
            825,
            756,
            845,
            762,
            846,
            756,
            845,
            859,
            823,
            915,
            987,
            1024,
            1158,
            1254,
            1326,
            1028,
            1069,
            825,
            872,
            998,
            1145
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
export const jtwfsjfxSingleStackedAreaOption4WuHanYear1 = {
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
        data: ['一车三证违法数量']
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
        name: '一车三证违法数量',
        nameLocation: 'end',
        nameTextStyle: {
            color: '#fff',
            fontSize: 14,
            padding: [0, 0, 10, 5]
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
        name: '一车三证违法数量',
        type: 'line',
        areaStyle: {},
        data: [1825, 1736, 1625, 2056, 1986, 1635, 1869, 1758, 2436, 2510, 2389, 2310],
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
export const jtwfsjfxSingleStackedAreaOption4HuangShiDay1 = {
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
        data: ['一车三证违法数量']
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
        name: '一车三证违法数量',
        nameLocation: 'end',
        nameTextStyle: {
            color: '#fff',
            fontSize: 14,
            padding: [0, 0, 10, 20]
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
        name: '一车三证违法数量',
        type: 'line',
        areaStyle: {},
        data: [36, 78, 168, 250, 289, 345, 308, 178],
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
export const jtwfsjfxSingleStackedAreaOption4HuangShiMonth1 = {
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
        data: ['一车三证违法数量']
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
        name: '一车三证违法数量',
        nameLocation: 'end',
        nameTextStyle: {
            color: '#fff',
            fontSize: 14,
            padding: [0, 0, 10, 20]
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
        name: '一车三证违法数量',
        type: 'line',
        areaStyle: {},
        data: [
            389,
            489,
            568,
            645,
            589,
            678,
            605,
            715,
            723,
            608,
            545,
            469,
            502,
            608,
            408,
            485,
            502,
            546,
            506,
            478,
            545,
            503,
            425,
            598,
            625,
            564,
            686,
            623,
            531,
            598,
            679
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
export const jtwfsjfxSingleStackedAreaOption4HuangShiYear1 = {
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
        data: ['一车三证违法数量']
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
        name: '一车三证违法数量',
        nameLocation: 'end',
        nameTextStyle: {
            color: '#fff',
            fontSize: 14,
            padding: [0, 0, 10, 5]
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
        name: '一车三证违法数量',
        type: 'line',
        areaStyle: {},
        data: [1245, 1036, 1265, 1125, 1308, 1059, 1103, 1087, 1045, 1065, 1145, 1253],
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