import iconMap from '@/mapicons/icon.js';
const res = {
    emergency_dot: [{
            postionMap: {
                lng: 114.100416,
                lat: 30.778234
            }, // 覆盖物点坐标
            isShowFlag: true,
            msg: '警情数量3',
            iconurl: iconMap.icon_event_danger_blue
        },
        {
            postionMap: {
                lng: 111.202841,
                lat: 30.71467
            }, // 覆盖物点坐标
            isShowFlag: true,
            msg: '警情数量3',
            iconurl: iconMap.icon_event_danger_red
        },
        {
            postionMap: {
                lng: 110.972875,
                lat: 32.353423
            }, // 覆盖物点坐标
            isShowFlag: true,
            msg: '警情数量3',
            iconurl: iconMap.icon_event_danger_purple
        }
    ],
    mapConfig: {
        zoneStyle: {
            zoneName: '湖北省',
            strokeWeight: 3,
            strokeColor: 'blue', // 线条颜色
            fillColor: '' // 填充颜色
        },
        center: { lng: 112.309286, lat: 31.014132 },
        scrollWheelZoomFlag: true,
        pointArr: [{
                id: 'trafficJam_1',
                postionMap: {
                    lng: 114.309286,
                    lat: 30.614132
                }, // 覆盖物点坐标
                iconurl: iconMap._2,
                isShowFlag: true
            },
            {
                id: 'trafficJam_2',
                postionMap: {
                    lng: 112.141103,
                    lat: 31.245704
                }, // 覆盖物点坐标
                iconurl: iconMap._2,
                isShowFlag: true
            },
            {
                id: 'trafficJam_3',
                postionMap: {
                    lng: 113.125359,
                    lat: 30.188659
                }, // 覆盖物点坐标
                iconurl: iconMap._2,
                isShowFlag: true
            },
            {
                id: 'badweather_1',
                postionMap: {
                    lng: 115.503448,
                    lat: 30.047961
                }, // 覆盖物点坐标
                iconurl: iconMap._11,
                isShowFlag: false
            },
            {
                id: 'badweather_2',
                postionMap: {
                    lng: 110.986673,
                    lat: 32.406115
                }, // 覆盖物点坐标
                iconurl: iconMap._11,
                isShowFlag: false
            },
            {
                id: 'badweather_3',
                postionMap: {
                    lng: 113.258739,
                    lat: 32.022909
                }, // 覆盖物点坐标
                iconurl: iconMap._11,
                isShowFlag: false
            },
            {
                id: 'serviceZone_1',
                postionMap: {
                    lng: 113.672678,
                    lat: 31.811059
                }, // 覆盖物点坐标
                iconurl: iconMap._12,
                isShowFlag: false
            },
            {
                id: 'serviceZone_2',
                postionMap: {
                    lng: 110.719912,
                    lat: 31.663652
                }, // 覆盖物点坐标
                iconurl: iconMap._12,
                isShowFlag: false
            },
            {
                id: 'serviceZone_3',
                postionMap: {
                    lng: 109.266526,
                    lat: 29.996673
                }, // 覆盖物点坐标
                iconurl: iconMap._12,
                isShowFlag: false
            },
            {
                id: 'park_1',
                postionMap: {
                    lng: 110.370602,
                    lat: 30.479171
                }, // 覆盖物点坐标
                iconurl: iconMap._10,
                isShowFlag: false
            },
            {
                id: 'park_2',
                postionMap: {
                    lng: 115.043277,
                    lat: 31.190362
                }, // 覆盖物点坐标
                iconurl: iconMap._10,
                isShowFlag: false
            },
            {
                id: 'park_3',
                postionMap: {
                    lng: 111.906538,
                    lat: 32.095373
                }, // 覆盖物点坐标
                iconurl: iconMap._10,
                isShowFlag: false
            },
            {
                id: 'hospital_1',
                postionMap: {
                    lng: 110.628165,
                    lat: 32.231582
                }, // 覆盖物点坐标
                iconurl: iconMap._4,
                isShowFlag: false
            },
            {
                id: 'hospital_2',
                postionMap: {
                    lng: 113.893446,
                    lat: 31.032064
                }, // 覆盖物点坐标
                iconurl: iconMap._4,
                isShowFlag: false
            },
            {
                id: 'hospital_3',
                postionMap: {
                    lng: 113.166753,
                    lat: 30.49983
                }, // 覆盖物点坐标
                iconurl: iconMap._4,
                isShowFlag: false
            },
            {
                id: 'fireAgent_1',
                postionMap: {
                    lng: 113.001416,
                    lat: 30.844985
                }, // 覆盖物点坐标
                iconurl: iconMap._13,
                isShowFlag: false
            },
            {
                id: 'fireAgent_2',
                postionMap: {
                    lng: 114.394772,
                    lat: 29.962636
                }, // 覆盖物点坐标
                iconurl: iconMap._13,
                isShowFlag: false
            },
            {
                id: 'fireAgent_3',
                postionMap: {
                    lng: 110.558936,
                    lat: 31.026123
                }, // 覆盖物点坐标
                iconurl: iconMap._13,
                isShowFlag: false
            },
            {
                id: 'guardrail_1',
                postionMap: {
                    lng: 112.559881,
                    lat: 29.935854
                }, // 覆盖物点坐标
                iconurl: iconMap._6,
                isShowFlag: false
            },
            {
                id: 'guardrail_2',
                postionMap: {
                    lng: 111.207441,
                    lat: 31.645947
                }, // 覆盖物点坐标
                iconurl: iconMap._6,
                isShowFlag: false
            },
            {
                id: 'guardrail_3',
                postionMap: {
                    lng: 112.794207,
                    lat: 31.405614
                }, // 覆盖物点坐标
                iconurl: iconMap._6,
                isShowFlag: false
            },
            {
                id: 'denoter_1',
                postionMap: {
                    lng: 114.19724,
                    lat: 30.463235
                }, // 覆盖物点坐标
                iconurl: iconMap._14,
                isShowFlag: false
            },
            {
                id: 'denoter_2',
                postionMap: {
                    lng: 111.533993,
                    lat: 31.08552
                }, // 覆盖物点坐标
                iconurl: iconMap._14,
                isShowFlag: false
            },
            {
                id: 'denoter_3',
                postionMap: {
                    lng: 113.783062,
                    lat: 30.022693
                }, // 覆盖物点坐标
                iconurl: iconMap._14,
                isShowFlag: false
            },
            {
                id: 'Downhill_1',
                postionMap: {
                    lng: 113.866089,
                    lat: 30.765579
                }, // 覆盖物点坐标
                iconurl: iconMap._15,
                isShowFlag: false
            },
            {
                id: 'Downhill_2',
                postionMap: {
                    lng: 112.221592,
                    lat: 30.764333
                }, // 覆盖物点坐标
                iconurl: iconMap._15,
                isShowFlag: false
            },
            {
                id: 'Downhill_3',
                postionMap: {
                    lng: 114.355678,
                    lat: 31.287188
                }, // 覆盖物点坐标
                iconurl: iconMap._15,
                isShowFlag: false
            },
            {
                id: 'tunnel_1',
                postionMap: {
                    lng: 114.491597,
                    lat: 30.74969
                }, // 覆盖物点坐标
                iconurl: iconMap._16,
                isShowFlag: false
            },
            {
                id: 'tunnel_2',
                postionMap: {
                    lng: 115.459516,
                    lat: 30.637145
                }, // 覆盖物点坐标
                iconurl: iconMap._16,
                isShowFlag: false
            },
            {
                id: 'tunnel_3',
                postionMap: {
                    lng: 110.216286,
                    lat: 29.998675
                }, // 覆盖物点坐标
                iconurl: iconMap._16,
                isShowFlag: false
            },
            {
                id: 'policeMan_1',
                postionMap: {
                    lng: 111.253673,
                    lat: 30.511037
                }, // 覆盖物点坐标
                iconurl: iconMap._9,
                isShowFlag: false
            },
            {
                id: 'policeMan_2',
                postionMap: {
                    lng: 115.661886,
                    lat: 30.954797
                }, // 覆盖物点坐标
                iconurl: iconMap._9,
                isShowFlag: false
            },
            {
                id: 'policeMan_3',
                postionMap: {
                    lng: 113.987732,
                    lat: 29.372145
                }, // 覆盖物点坐标
                iconurl: iconMap._9,
                isShowFlag: false
            },
            {
                id: 'policeCar_1',
                postionMap: {
                    lng: 112.228729,
                    lat: 30.143951
                }, // 覆盖物点坐标
                iconurl: iconMap._3,
                isShowFlag: false
            },
            {
                id: 'policeCar_2',
                postionMap: {
                    lng: 109.793148,
                    lat: 32.386603
                }, // 覆盖物点坐标
                iconurl: iconMap._3,
                isShowFlag: false
            },
            {
                id: 'policeCar_3',
                postionMap: {
                    lng: 110.050711,
                    lat: 33.055355
                }, // 覆盖物点坐标
                iconurl: iconMap._3,
                isShowFlag: false
            },
            {
                id: 'taopai_1',
                postionMap: {
                    lng: 114.890657,
                    lat: 30.471838
                }, // 覆盖物点坐标
                iconurl: iconMap.taopai,
                isShowFlag: false,
                showWin: false,
                popInfo: {
                    carNum: '鄂AED453',
                    carNumType: '小型轿车',
                    carColor: '白色',
                    carType: '宝骏牌',
                    carDirection: '由东向西',
                    carSpeed: '80km/h',
                    yjInfo: '疑似套牌车辆',
                    carTime: '2019-07-01 16:32:24',
                    carPlace: '黄冈市老年大学'
                }
            },
            {
                id: 'taopai_2',
                postionMap: {
                    lng: 114.543408,
                    lat: 30.583329
                }, // 覆盖物点坐标
                iconurl: iconMap.taopai,
                isShowFlag: false,
                showWin: false,
                popInfo: {
                    carNum: '鄂AED478',
                    carNumType: '小型轿车',
                    carColor: '白色',
                    carType: '别克牌',
                    carDirection: '由东向西',
                    carSpeed: '90km/h',
                    yjInfo: '疑似套牌车辆',
                    carTime: '2019-01-18 12:39:24',
                    carPlace: '武汉德天深孔机械有限公司'
                }
            },
            {
                id: 'taopai_3',
                postionMap: {
                    lng: 114.398529,
                    lat: 30.688728
                }, // 覆盖物点坐标
                iconurl: iconMap.taopai,
                isShowFlag: false,
                showWin: false,
                popInfo: {
                    carNum: '鄂AKL878',
                    carNumType: '小型轿车',
                    carColor: '黑色',
                    carType: '福特牌',
                    carDirection: '由东向西',
                    carSpeed: '90km/h',
                    yjInfo: '疑似套牌车辆',
                    carTime: '2019-02-01 07:45:24',
                    carPlace: '武汉江北快速路'
                }
            },
            {
                id: 'taopai_4',
                postionMap: {
                    lng: 114.52846,
                    lat: 30.483291
                }, // 覆盖物点坐标
                iconurl: iconMap.taopai,
                isShowFlag: false,
                showWin: false,
                popInfo: {
                    carNum: '鄂ACN128',
                    carNumType: '小型轿车',
                    carColor: '棕色',
                    carType: '雪佛兰牌',
                    carDirection: '由东向西',
                    carSpeed: '90km/h',
                    yjInfo: '疑似套牌车辆',
                    carTime: '2019-03-09 19:32:24',
                    carPlace: '东湖高新区高科园二路'
                }
            },
            {
                id: 'taopai_5',
                postionMap: {
                    lng: 114.336438,
                    lat: 30.358223
                }, // 覆盖物点坐标
                iconurl: iconMap.taopai,
                isShowFlag: false,
                showWin: false,
                popInfo: {
                    carNum: '鄂ACQ358',
                    carNumType: '小型轿车',
                    carColor: '棕色',
                    carType: '奥迪牌',
                    carDirection: '由东向西',
                    carSpeed: '90km/h',
                    yjInfo: '疑似套牌车辆',
                    carTime: '2019-04-08 16:09:24',
                    carPlace: '武汉市江夏区熊廷弼街'
                }
            },
            {
                id: 'taopai_6',
                postionMap: {
                    lng: 114.695185,
                    lat: 30.409067
                }, // 覆盖物点坐标
                iconurl: iconMap.taopai,
                isShowFlag: false,
                showWin: false,
                popInfo: {
                    carNum: '鄂AV5X12',
                    carNumType: '小型轿车',
                    carColor: '白色',
                    carType: '起亚牌',
                    carDirection: '由东向西',
                    carSpeed: '90km/h',
                    yjInfo: '疑似套牌车辆',
                    carTime: '2019-03-02 09:32:24',
                    carPlace: '鄂州市鄂咸高速'
                }
            },
            {
                id: 'taopai_7',
                postionMap: {
                    lng: 114.315741,
                    lat: 30.607203
                }, // 覆盖物点坐标
                iconurl: iconMap.taopai,
                isShowFlag: false,
                showWin: false,
                popInfo: {
                    carNum: '鄂AC5C34',
                    carNumType: '小型轿车',
                    carColor: '白色',
                    carType: '东风牌',
                    carDirection: '由东向西',
                    carSpeed: '85km/h',
                    yjInfo: '疑似套牌车辆',
                    carTime: '2019-05-18 10:15:28',
                    carPlace: '鄂州市鄂咸高速'
                }
            },
            {
                id: 'taopai_8',
                postionMap: {
                    lng: 110.744941,
                    lat: 32.112885
                }, // 覆盖物点坐标
                iconurl: iconMap.taopai,
                isShowFlag: false,
                showWin: false,
                popInfo: {
                    carNum: '鄂CBN634',
                    carNumType: '小型轿车',
                    carColor: '白色',
                    carType: '路虎牌',
                    carDirection: '由东向西',
                    carSpeed: '98km/h',
                    yjInfo: '疑似套牌车辆',
                    carTime: '2019-06-25 11:24:28',
                    carPlace: '十堰市房县下邓家营村'
                }
            },
            {
                id: 'taopai_9',
                postionMap: {
                    lng: 110.979506,
                    lat: 32.034557
                }, // 覆盖物点坐标
                iconurl: iconMap.taopai,
                isShowFlag: false,
                showWin: false,
                popInfo: {
                    carNum: '鄂CB7B45',
                    carNumType: '小型轿车',
                    carColor: '蓝色',
                    carType: '大众牌',
                    carDirection: '由东向西',
                    carSpeed: '80km/h',
                    yjInfo: '疑似套牌车辆',
                    carTime: '2019-06-29 14:24:28',
                    carPlace: '十堰市青峰镇荆竹沟'
                }
            },
            {
                id: 'taopai_10',
                postionMap: {
                    lng: 110.775411,
                    lat: 32.296688
                }, // 覆盖物点坐标
                iconurl: iconMap.taopai,
                isShowFlag: false,
                showWin: false,
                popInfo: {
                    carNum: '鄂C67NB1',
                    carNumType: '小型轿车',
                    carColor: '黑色',
                    carType: '大众牌',
                    carDirection: '由东向西',
                    carSpeed: '85km/h',
                    yjInfo: '疑似套牌车辆',
                    carTime: '2019-06-05 16:25:28',
                    carPlace: '十堰市呼北高速'
                }
            },
            {
                id: 'taopai_11',
                postionMap: {
                    lng: 111.231894,
                    lat: 30.795996
                }, // 覆盖物点坐标
                iconurl: iconMap.taopai,
                isShowFlag: false,
                showWin: false,
                popInfo: {
                    carNum: '鄂E5M5M8',
                    carNumType: '小型轿车',
                    carColor: '黑色',
                    carType: '马自达牌',
                    carDirection: '由西向东',
                    carSpeed: '85km/h',
                    yjInfo: '疑似套牌车辆',
                    carTime: '2019-05-29 10:25:05',
                    carPlace: '宜昌市木鱼槽隧道'
                }
            },
            {
                id: 'taopai_12',
                postionMap: {
                    lng: 111.59984,
                    lat: 30.74635
                }, // 覆盖物点坐标
                iconurl: iconMap.taopai,
                isShowFlag: false,
                showWin: false,
                popInfo: {
                    carNum: '鄂E95MN2',
                    carNumType: '小型轿车',
                    carColor: '黑色',
                    carType: '本田牌',
                    carDirection: '由西向东',
                    carSpeed: '85km/h',
                    yjInfo: '疑似套牌车辆',
                    carTime: '2019-06-29 12:38:05',
                    carPlace: '宜昌市沪蓉高速服务区'
                }
            },
            {
                id: 'taopai_13',
                postionMap: {
                    lng: 111.774615,
                    lat: 30.44793
                }, // 覆盖物点坐标
                iconurl: iconMap.taopai,
                isShowFlag: false,
                showWin: false,
                popInfo: {
                    carNum: '鄂ECB556',
                    carNumType: '小型轿车',
                    carColor: '黑色',
                    carType: '长城牌',
                    carDirection: '由西向东',
                    carSpeed: '80km/h',
                    yjInfo: '疑似套牌车辆',
                    carTime: '2019-07-03 14:47:31',
                    carPlace: '宜昌市枝江市汽车客运站'
                }
            },
            {
                id: 'taopai_14',
                postionMap: {
                    lng: 111.418167,
                    lat: 30.354234
                }, // 覆盖物点坐标
                iconurl: iconMap.taopai,
                isShowFlag: false,
                showWin: false,
                popInfo: {
                    carNum: '鄂EHG756',
                    carNumType: '小型轿车',
                    carColor: '黑色',
                    carType: '丰田牌',
                    carDirection: '由西向东',
                    carSpeed: '85km/h',
                    yjInfo: '疑似套牌车辆',
                    carTime: '2019-07-05 16:21:01',
                    carPlace: '宜昌市岳宜高速浑水堰'
                }
            },
            {
                id: 'taopai_15',
                postionMap: {
                    lng: 111.379073,
                    lat: 30.565419
                }, // 覆盖物点坐标
                iconurl: iconMap.taopai,
                isShowFlag: false,
                showWin: false,
                popInfo: {
                    carNum: '鄂EFH546',
                    carNumType: '小型轿车',
                    carColor: '黑色',
                    carType: '大众牌',
                    carDirection: '由西向东',
                    carSpeed: '85km/h',
                    yjInfo: '疑似套牌车辆',
                    carTime: '2019-07-07 10:08:01',
                    carPlace: '宜昌市沪渝高速渔洋溪'
                }
            },
            {
                id: 'taopai_16',
                postionMap: {
                    lng: 111.551547,
                    lat: 30.553478
                }, // 覆盖物点坐标
                iconurl: iconMap.taopai,
                isShowFlag: false,
                showWin: false,
                popInfo: {
                    carNum: '鄂ET7T76',
                    carNumType: '小型轿车',
                    carColor: '黑色',
                    carType: '众泰牌',
                    carDirection: '由南向北',
                    carSpeed: '85km/h',
                    yjInfo: '疑似套牌车辆',
                    carTime: '2019-07-08 22:18:08',
                    carPlace: '宜昌市枝江市汪兰路'
                }
            },
            {
                id: 'wupai_1',
                postionMap: {
                    lng: 115.059682,
                    lat: 30.855537
                }, // 覆盖物点坐标
                iconurl: iconMap.wupai,
                isShowFlag: false
            },
            {
                id: 'wupai_2',
                postionMap: {
                    lng: 113.955844,
                    lat: 30.338277
                }, // 覆盖物点坐标
                iconurl: iconMap.wupai,
                isShowFlag: false
            },
            {
                id: 'wupai_3',
                postionMap: {
                    lng: 111.490606,
                    lat: 31.16455
                }, // 覆盖物点坐标
                iconurl: iconMap.wupai,
                isShowFlag: false
            },
            {
                id: 'led_1',
                postionMap: {
                    lng: 110.340775,
                    lat: 31.913016
                }, // 覆盖物点坐标
                iconurl: iconMap.led,
                isShowFlag: false
            },
            {
                id: 'led_2',
                postionMap: {
                    lng: 110.046418,
                    lat: 29.970538
                }, // 覆盖物点坐标
                iconurl: iconMap.led,
                isShowFlag: false
            },
            {
                id: 'led_3',
                postionMap: {
                    lng: 110.911091,
                    lat: 30.274422
                }, // 覆盖物点坐标
                iconurl: iconMap.led,
                isShowFlag: false
            },
            {
                id: 'kakou_1',
                postionMap: {
                    lng: 115.611601,
                    lat: 30.561439
                }, // 覆盖物点坐标
                iconurl: iconMap.kakou,
                isShowFlag: false
            },
            {
                id: 'kakou_2',
                postionMap: {
                    lng: 114.654941,
                    lat: 30.266437
                }, // 覆盖物点坐标
                iconurl: iconMap.kakou,
                isShowFlag: false
            },
            {
                id: 'kakou_3',
                postionMap: {
                    lng: 114.599749,
                    lat: 30.934868
                }, // 覆盖物点坐标
                iconurl: iconMap.kakou,
                isShowFlag: false
            },
            {
                id: 'suniu_1',
                postionMap: {
                    lng: 111.131859,
                    lat: 31.606485
                }, // 覆盖物点坐标
                iconurl: iconMap.suniu,
                isShowFlag: false
            },
            {
                id: 'suniu_2',
                postionMap: {
                    lng: 113.008383,
                    lat: 31.417341
                }, // 覆盖物点坐标
                iconurl: iconMap.suniu,
                isShowFlag: false
            },
            {
                id: 'suniu_3',
                postionMap: {
                    lng: 114.415776,
                    lat: 31.306829
                }, // 覆盖物点坐标
                iconurl: iconMap.suniu,
                isShowFlag: false
            },
            {
                id: 'gaosu_1',
                postionMap: {
                    lng: 112.162108,
                    lat: 30.903144
                }, // 覆盖物点坐标
                iconurl: iconMap.gaosu,
                isShowFlag: false
            },
            {
                id: 'gaosu_2',
                postionMap: {
                    lng: 114.87111,
                    lat: 30.752309
                }, // 覆盖物点坐标
                iconurl: iconMap.gaosu,
                isShowFlag: false
            }
            // {
            //     id: 'suniu_1',
            //     postionMap: {
            //         lng: 114.890657,
            //         lat: 30.471838
            //     }, // 覆盖物点坐标
            //     iconurl: iconMap.suniu,
            //     isShowFlag: false
            // },
            // {
            //     id: 'suniu_2',
            //     postionMap: {
            //         lng: 114.543408,
            //         lat: 30.583329
            //     }, // 覆盖物点坐标
            //     iconurl: iconMap.suniu,
            //     isShowFlag: false
            // },
            // {
            //     id: 'suniu_3',
            //     postionMap: {
            //         lng: 114.398529,
            //         lat: 30.688728
            //     }, // 覆盖物点坐标
            //     iconurl: iconMap.suniu,
            //     isShowFlag: false
            // },
            // {
            //     id: 'suniu_4',
            //     postionMap: {
            //         lng: 114.52846,
            //         lat: 30.483291
            //     }, // 覆盖物点坐标
            //     iconurl: iconMap.suniu,
            //     isShowFlag: false
            // },
            // {
            //     id: 'suniu_5',
            //     postionMap: {
            //         lng: 114.336438,
            //         lat: 30.358223
            //     }, // 覆盖物点坐标
            //     iconurl: iconMap.suniu,
            //     isShowFlag: false
            // },
            // {
            //     id: 'suniu_6',
            //     postionMap: {
            //         lng: 114.695185,
            //         lat: 30.409067
            //     }, // 覆盖物点坐标
            //     iconurl: iconMap.suniu,
            //     isShowFlag: false
            // },
            // {
            //     id: 'suniu_7',
            //     postionMap: {
            //         lng: 114.315741,
            //         lat: 30.607203
            //     }, // 覆盖物点坐标
            //     iconurl: iconMap.suniu,
            //     isShowFlag: false
            // }
        ],
        zoom: 8,
        mapStyle: {
            styleJson: [{
                    featureType: 'estatelabel',
                    elementType: 'labels.text.fill',
                    stylers: {
                        color: '#8d694eff'
                    }
                },
                {
                    featureType: 'restaurantlabel',
                    elementType: 'labels',
                    stylers: {
                        visibility: 'off'
                    }
                },
                {
                    featureType: 'restaurantlabel',
                    elementType: 'labels.icon',
                    stylers: {
                        visibility: 'off'
                    }
                },
                {
                    featureType: 'lifeservicelabel',
                    elementType: 'labels',
                    stylers: {
                        visibility: 'off'
                    }
                },
                {
                    featureType: 'lifeservicelabel',
                    elementType: 'labels.icon',
                    stylers: {
                        visibility: 'off'
                    }
                },
                {
                    featureType: 'transportationlabel',
                    elementType: 'labels.icon',
                    stylers: {
                        visibility: 'off'
                    }
                },
                {
                    featureType: 'transportationlabel',
                    elementType: 'labels',
                    stylers: {
                        visibility: 'on'
                    }
                },
                {
                    featureType: 'financelabel',
                    elementType: 'labels.icon',
                    stylers: {
                        visibility: 'off'
                    }
                },
                {
                    featureType: 'financelabel',
                    elementType: 'labels',
                    stylers: {
                        visibility: 'off'
                    }
                },
                {
                    featureType: 'land',
                    elementType: 'geometry',
                    stylers: {
                        color: '#ffffffff'
                    }
                },
                {
                    featureType: 'building',
                    elementType: 'geometry.fill',
                    stylers: {
                        color: '#e7dfd6ff'
                    }
                },
                {
                    featureType: 'building',
                    elementType: 'geometry.stroke',
                    stylers: {
                        color: '#b9a797ff'
                    }
                },
                {
                    featureType: 'estatelabel',
                    elementType: 'labels.text.stroke',
                    stylers: {
                        color: '#ebe1d8ff'
                    }
                },
                {
                    featureType: 'estatelabel',
                    elementType: 'labels.icon',
                    stylers: {
                        visibility: 'off'
                    }
                },
                {
                    featureType: 'estatelabel',
                    elementType: 'labels.text',
                    stylers: {
                        fontsize: 28
                    }
                },
                {
                    featureType: 'manmade',
                    elementType: 'labels.text.fill',
                    stylers: {
                        color: '#72533aff'
                    }
                },
                {
                    featureType: 'manmade',
                    elementType: 'geometry',
                    stylers: {
                        color: '#ecececff'
                    }
                },
                {
                    featureType: 'manmade',
                    elementType: 'labels.text',
                    stylers: {
                        fontsize: 36
                    }
                },
                {
                    featureType: 'manmade',
                    elementType: 'labels.text.stroke',
                    stylers: {
                        color: '#b6997fff'
                    }
                },
                {
                    featureType: 'green',
                    elementType: 'geometry',
                    stylers: {
                        color: '#ecececff'
                    }
                },
                {
                    featureType: 'education',
                    elementType: 'geometry',
                    stylers: {
                        color: '#ecececff'
                    }
                },
                {
                    featureType: 'medical',
                    elementType: 'geometry',
                    stylers: {
                        color: '#ecececff'
                    }
                },
                {
                    featureType: 'scenicspots',
                    elementType: 'geometry',
                    stylers: {
                        color: '#ecececff'
                    }
                },
                {
                    featureType: 'entertainment',
                    elementType: 'geometry',
                    stylers: {
                        visibility: 'off'
                    }
                },
                {
                    featureType: 'estate',
                    elementType: 'geometry',
                    stylers: {
                        color: '#ecececff'
                    }
                },
                {
                    featureType: 'shopping',
                    elementType: 'geometry',
                    stylers: {
                        color: '#ecececff',
                        visibility: 'on'
                    }
                },
                {
                    featureType: 'transportation',
                    elementType: 'geometry',
                    stylers: {
                        color: '#ecececff'
                    }
                },
                {
                    featureType: 'transportation',
                    elementType: 'labels.text.fill',
                    stylers: {
                        color: '#72533aff'
                    }
                },
                {
                    featureType: 'transportation',
                    elementType: 'labels.text.stroke',
                    stylers: {
                        color: '#b6997fff'
                    }
                },
                {
                    featureType: 'transportation',
                    elementType: 'labels.text',
                    stylers: {
                        fontsize: 36
                    }
                },
                {
                    featureType: 'medical',
                    elementType: 'labels.text.fill',
                    stylers: {
                        color: '#72533aff'
                    }
                },
                {
                    featureType: 'medical',
                    elementType: 'labels.text.stroke',
                    stylers: {
                        color: '#b6997fff'
                    }
                },
                {
                    featureType: 'medical',
                    elementType: 'labels.text',
                    stylers: {
                        fontsize: 36
                    }
                },
                {
                    featureType: 'education',
                    elementType: 'labels.text.fill',
                    stylers: {
                        color: '#72533aff'
                    }
                },
                {
                    featureType: 'education',
                    elementType: 'labels.text.stroke',
                    stylers: {
                        color: '#b6997fff'
                    }
                },
                {
                    featureType: 'education',
                    elementType: 'labels.text',
                    stylers: {
                        fontsize: 36
                    }
                },
                {
                    featureType: 'carservicelabel',
                    elementType: 'labels',
                    stylers: {
                        visibility: 'off'
                    }
                },
                {
                    featureType: 'carservicelabel',
                    elementType: 'labels.icon',
                    stylers: {
                        visibility: 'off'
                    }
                },
                {
                    featureType: 'shoppinglabel',
                    elementType: 'labels.icon',
                    stylers: {
                        visibility: 'off'
                    }
                },
                {
                    featureType: 'hotellabel',
                    elementType: 'labels.icon',
                    stylers: {
                        visibility: 'off'
                    }
                },
                {
                    featureType: 'governmentlabel',
                    elementType: 'labels.icon',
                    stylers: {
                        visibility: 'off'
                    }
                },
                {
                    featureType: 'companylabel',
                    elementType: 'labels.icon',
                    stylers: {
                        visibility: 'off'
                    }
                },
                {
                    featureType: 'businesstowerlabel',
                    elementType: 'labels.icon',
                    stylers: {
                        visibility: 'off'
                    }
                },
                {
                    featureType: 'entertainmentlabel',
                    elementType: 'labels',
                    stylers: {
                        visibility: 'off'
                    }
                },
                {
                    featureType: 'entertainmentlabel',
                    elementType: 'labels.icon',
                    stylers: {
                        visibility: 'off'
                    }
                },
                {
                    featureType: 'medicallabel',
                    elementType: 'labels.icon',
                    stylers: {
                        visibility: 'off'
                    }
                },
                {
                    featureType: 'educationlabel',
                    elementType: 'labels.icon',
                    stylers: {
                        visibility: 'off'
                    }
                },
                {
                    featureType: 'scenicspotslabel',
                    elementType: 'labels.icon',
                    stylers: {
                        visibility: 'off'
                    }
                },
                {
                    featureType: 'airportlabel',
                    elementType: 'labels.icon',
                    stylers: {
                        visibility: 'off'
                    }
                },
                {
                    featureType: 'airportlabel',
                    elementType: 'labels.text',
                    stylers: {
                        fontsize: 36
                    }
                },
                {
                    featureType: 'airportlabel',
                    elementType: 'labels.text.fill',
                    stylers: {
                        color: '#72533aff'
                    }
                },
                {
                    featureType: 'airportlabel',
                    elementType: 'labels.text.stroke',
                    stylers: {
                        color: '#b6997fff'
                    }
                },
                {
                    featureType: 'scenicspotslabel',
                    elementType: 'labels.text',
                    stylers: {
                        fontsize: 28
                    }
                },
                {
                    featureType: 'scenicspotslabel',
                    elementType: 'labels.text.fill',
                    stylers: {
                        color: '#4a4a4aff'
                    }
                },
                {
                    featureType: 'scenicspotslabel',
                    elementType: 'labels.text.stroke',
                    stylers: {
                        color: '#ffffffff'
                    }
                },
                {
                    featureType: 'educationlabel',
                    elementType: 'labels.text.fill',
                    stylers: {
                        color: '#8d694eff'
                    }
                },
                {
                    featureType: 'educationlabel',
                    elementType: 'labels.text.stroke',
                    stylers: {
                        color: '#ebe1d8ff'
                    }
                },
                {
                    featureType: 'educationlabel',
                    elementType: 'labels.text',
                    stylers: {
                        fontsize: 26
                    }
                },
                {
                    featureType: 'medicallabel',
                    elementType: 'labels.text.fill',
                    stylers: {
                        color: '#8d694eff'
                    }
                },
                {
                    featureType: 'medicallabel',
                    elementType: 'labels.text.stroke',
                    stylers: {
                        color: '#ebe1d8ff'
                    }
                },
                {
                    featureType: 'medicallabel',
                    elementType: 'labels.text',
                    stylers: {
                        fontsize: 24
                    }
                },
                {
                    featureType: 'businesstowerlabel',
                    elementType: 'labels.text.stroke',
                    stylers: {
                        color: '#ebe1d8ff'
                    }
                },
                {
                    featureType: 'businesstowerlabel',
                    elementType: 'labels.text.fill',
                    stylers: {
                        color: '#8d694eff'
                    }
                },
                {
                    featureType: 'businesstowerlabel',
                    elementType: 'labels.text',
                    stylers: {
                        fontsize: 24
                    }
                },
                {
                    featureType: 'companylabel',
                    elementType: 'labels',
                    stylers: {
                        visibility: 'off'
                    }
                },
                {
                    featureType: 'hotellabel',
                    elementType: 'labels.text.fill',
                    stylers: {
                        color: '#8d694eff'
                    }
                },
                {
                    featureType: 'hotellabel',
                    elementType: 'labels.text.stroke',
                    stylers: {
                        color: '#ebe1d8ff'
                    }
                },
                {
                    featureType: 'hotellabel',
                    elementType: 'labels.text',
                    stylers: {
                        fontsize: 24
                    }
                },
                {
                    featureType: 'shoppinglabel',
                    elementType: 'labels.text.fill',
                    stylers: {
                        color: '#8d694eff'
                    }
                },
                {
                    featureType: 'shoppinglabel',
                    elementType: 'labels.text.stroke',
                    stylers: {
                        color: '#ebe1d8ff'
                    }
                },
                {
                    featureType: 'transportationlabel',
                    elementType: 'labels.text.fill',
                    stylers: {
                        color: '#4a4a4aff'
                    }
                },
                {
                    featureType: 'transportationlabel',
                    elementType: 'labels.text',
                    stylers: {
                        fontsize: 24
                    }
                },
                {
                    featureType: 'scenicspots',
                    elementType: 'labels.text.fill',
                    stylers: {
                        color: '#72533aff'
                    }
                },
                {
                    featureType: 'scenicspots',
                    elementType: 'labels.text.stroke',
                    stylers: {
                        color: '#b6997fff'
                    }
                },
                {
                    featureType: 'scenicspots',
                    elementType: 'labels.text',
                    stylers: {
                        fontsize: 36
                    }
                },
                {
                    featureType: 'governmentlabel',
                    elementType: 'labels.text.fill',
                    stylers: {
                        color: '#4a4a4aff'
                    }
                },
                {
                    featureType: 'scenicspotslabel',
                    elementType: 'labels',
                    stylers: {
                        visibility: 'off'
                    }
                },
                {
                    featureType: 'district',
                    elementType: 'labels.text.fill',
                    stylers: {
                        color: '#ffffffff'
                    }
                },
                {
                    featureType: 'district',
                    elementType: 'labels.text.stroke',
                    stylers: {
                        color: '#72533aff',
                        weight: 3.5
                    }
                },
                {
                    featureType: 'town',
                    elementType: 'labels.text.stroke',
                    stylers: {
                        color: '#72533aff',
                        weight: 3
                    }
                },
                {
                    featureType: 'town',
                    elementType: 'labels.text.fill',
                    stylers: {
                        color: '#ffffffff'
                    }
                },
                {
                    featureType: 'village',
                    elementType: 'labels.text.stroke',
                    stylers: {
                        color: '#ffffffff',
                        weight: 2.5
                    }
                },
                {
                    featureType: 'village',
                    elementType: 'labels.text.fill',
                    stylers: {
                        color: '#72533aff',
                        weight: 40
                    }
                },
                {
                    featureType: 'village',
                    elementType: 'labels.text',
                    stylers: {
                        fontsize: 20
                    }
                },
                {
                    featureType: 'highway',
                    elementType: 'geometry.fill',
                    stylers: {
                        color: '#fdf0daff'
                    }
                },
                {
                    featureType: 'highway',
                    elementType: 'geometry.stroke',
                    stylers: {
                        color: '#ffd993ff'
                    }
                },
                {
                    featureType: 'highway',
                    elementType: 'labels.text.fill',
                    stylers: {
                        color: '#000000ff'
                    }
                },
                {
                    featureType: 'highway',
                    elementType: 'labels.text.stroke',
                    stylers: {
                        color: '#ffffffff'
                    }
                },
                {
                    featureType: 'nationalway',
                    elementType: 'geometry.fill',
                    stylers: {
                        color: '#fdf0daff'
                    }
                },
                {
                    featureType: 'nationalway',
                    elementType: 'geometry.stroke',
                    stylers: {
                        color: '#ffd993ff'
                    }
                },
                {
                    featureType: 'nationalway',
                    elementType: 'labels.text.fill',
                    stylers: {
                        color: '#000000ff'
                    }
                },
                {
                    featureType: 'nationalway',
                    elementType: 'labels.text.stroke',
                    stylers: {
                        color: '#ffffffff'
                    }
                },
                {
                    featureType: 'provincialway',
                    elementType: 'geometry.stroke',
                    stylers: {
                        color: '#ffd993ff'
                    }
                },
                {
                    featureType: 'provincialway',
                    elementType: 'geometry.fill',
                    stylers: {
                        color: '#fdf0daff'
                    }
                },
                {
                    featureType: 'provincialway',
                    elementType: 'labels.text.fill',
                    stylers: {
                        color: '#000000ff'
                    }
                },
                {
                    featureType: 'provincialway',
                    elementType: 'labels.text.stroke',
                    stylers: {
                        color: '#ffffffff'
                    }
                },
                {
                    featureType: 'subway',
                    elementType: 'geometry.fill',
                    stylers: {
                        color: '#f5a117ff'
                    }
                },
                {
                    featureType: 'manmade',
                    elementType: 'labels',
                    stylers: {
                        visibility: 'on'
                    }
                }
            ]
        }
    },
    emergency_dot_detail: [{
            id: 'd-0',
            postionMap: {
                lng: 114.378276,
                lat: 30.52458
            }, // 覆盖物点坐标
            isShowFlag: true,
            showWin: false
        },
        {
            id: 'd-1',
            postionMap: {
                lng: 114.430019,
                lat: 30.612143
            }, // 覆盖物点坐标
            isShowFlag: true,
            showWin: false
        },
        {
            id: 'd-2',
            postionMap: {
                lng: 114.288589,
                lat: 30.577824
            }, // 覆盖物点坐标
            isShowFlag: true,
            showWin: false
        }
    ],
    mapAreaArr: [{
            id: 'wh',
            zoneName: '武汉市',
            strokeWeight: 3,
            strokeColor: 'red', // 线条颜色
            fillColor: '#73d18f', // 填充颜色
            postionMap: {
                lng: 114.415776,
                lat: 30.704627
            }
        },
        {
            id: 'hs',
            zoneName: '黄石市',
            strokeWeight: 3,
            strokeColor: 'purple', // 线条颜色
            fillColor: '#d1ca58', // 填充颜色
            postionMap: {
                lng: 114.976894,
                lat: 30.034592
            }
        },
        {
            id: 'sy',
            zoneName: '十堰市',
            strokeWeight: 3,
            strokeColor: 'blue', // 线条颜色
            fillColor: '#6fbcd1', // 填充颜色
            postionMap: {
                lng: 110.754714,
                lat: 32.670947
            }
        },
        {
            id: 'yc',
            zoneName: '宜昌市',
            strokeWeight: 3,
            strokeColor: 'blue', // 线条颜色
            fillColor: '#dd6bd3', // 填充颜色
            postionMap: {
                lng: 111.233044,
                lat: 30.736417
            }
        },
        {
            id: 'xy',
            zoneName: '襄阳市',
            strokeWeight: 3,
            strokeColor: 'blue', // 线条颜色
            fillColor: '#9faadd', // 填充颜色
            postionMap: {
                lng: 112.097717,
                lat: 32.054146
            }
        },
        {
            id: 'ez',
            zoneName: '鄂州市',
            strokeWeight: 3,
            strokeColor: 'blue', // 线条颜色
            fillColor: '#ddaf00', // 填充颜色
            postionMap: {
                lng: 114.673339,
                lat: 30.481798
            }
        },
        {
            id: 'jm',
            zoneName: '荆门市',
            strokeWeight: 3,
            strokeColor: 'blue', // 线条颜色
            fillColor: '#dd7700', // 填充颜色
            postionMap: {
                lng: 112.14371,
                lat: 31.101245
            }
        },
        {
            id: 'xg',
            zoneName: '孝感市',
            strokeWeight: 3,
            strokeColor: 'blue', // 线条颜色
            fillColor: '#dd4c57', // 填充颜色
            postionMap: {
                lng: 113.84546,
                lat: 31.12499
            }
        },
        {
            id: 'jz',
            zoneName: '荆州市',
            strokeWeight: 3,
            strokeColor: 'blue', // 线条颜色
            fillColor: '#8352dd', // 填充颜色
            postionMap: {
                lng: 112.162108,
                lat: 30.354234
            }
        },
        {
            id: 'hg',
            zoneName: '黄冈市',
            strokeWeight: 3,
            strokeColor: 'blue', // 线条颜色
            fillColor: '#5673dd', // 填充颜色
            postionMap: {
                lng: 115.188463,
                lat: 30.784083
            }
        },
        {
            id: 'sz',
            zoneName: '随州市',
            strokeWeight: 3,
            strokeColor: 'blue', // 线条颜色
            fillColor: '#a9d6dd', // 填充颜色
            postionMap: {
                lng: 113.321137,
                lat: 31.740227
            }
        },
        {
            id: 'xt',
            zoneName: '仙桃市',
            strokeWeight: 3,
            strokeColor: 'blue', // 线条颜色
            fillColor: '#009ddd', // 填充颜色
            postionMap: {
                lng: 113.321137,
                lat: 30.370189
            }
        },
        {
            id: 'qj',
            zoneName: '潜江市',
            strokeWeight: 3,
            strokeColor: 'blue', // 线条颜色
            fillColor: '#a5dd0c', // 填充颜色
            postionMap: {
                lng: 112.668033,
                lat: 30.426009
            }
        },
        {
            id: 'tm',
            zoneName: '天门市',
            strokeWeight: 3,
            strokeColor: 'blue', // 线条颜色
            fillColor: '#dd8799', // 填充颜色
            postionMap: {
                lng: 113.008383,
                lat: 30.744363
            }
        },
        {
            id: 'slj',
            zoneName: '神龙架林区',
            strokeWeight: 3,
            strokeColor: 'blue', // 线条颜色
            fillColor: '#ddaf99', // 填充颜色
            postionMap: {
                lng: 110.294782,
                lat: 31.637971
            }
        },
        {
            id: 'xn',
            zoneName: '咸宁市',
            strokeWeight: 3,
            strokeColor: 'blue', // 线条颜色
            fillColor: '#dd00b5', // 填充颜色
            postionMap: {
                lng: 114.001837,
                lat: 29.721934
            }
        },
        {
            id: 'es',
            zoneName: '恩施土家族苗族自治州',
            strokeWeight: 3,
            strokeColor: 'blue', // 线条颜色
            fillColor: '#00afdd', // 填充颜色
            postionMap: {
                lng: 109.15415,
                lat: 30.234491
            }
        }
    ]
};
export default res;