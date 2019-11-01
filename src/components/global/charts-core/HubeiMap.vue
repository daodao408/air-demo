<template>
  <div class="hubei-map-container">
      <div id="mapId" class="hubei-map-content"></div>
  </div>
</template>
<script>
import MapJson from '@/components/global/charts-core/mapJson.js';
import 'echarts/lib/chart/map';
import 'echarts/map/js/china.js';
import 'echarts-gl/dist/echarts-gl.js';
export default {
  name: '',
  props: [],
  data() {
    return {
      mapOption: {}
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.drawChart();
    });
  },
  methods: {
    drawChart(mapOption) {
      let geoCoordMap = {
        荆州: [112.239741, 30.335165],
        宜昌: [111.3, 30.7],
        武汉: [114.31, 30.52]
      };
      var data = [
        {
          name: '荆州',
          value: 390,
          alarm_num: 54
        },
        {
          name: '宜昌',
          value: 119
        },
        {
          name: '武汉',
          value: 55,
          alarm_num: 9
        }
      ];
      if (!mapOption) {
        this.mapOption = {
          title: {
            text: '湖北行政区划3D地图',
            x: 'center',
            top: '0',
            textStyle: {
              color: '#fff',
              fontSize: 24
            }
          },
          tooltip: {
            show: true
            // formatter:(params)=>{
            //   let data = "测试1:"+params.name + "<br/>"+"值:"+ params.value[2]+"<br/>"+"地理坐标:[" + params.value[0]+","+params.value[1] +"]";
            //   return data;
            // },
          },
          // visualMap: [
          //   {
          //     show: false,
          //     type: 'continuous',
          //     seriesIndex: 0,
          //     text: ['bar3D'],
          //     calculable: true,
          //     max: 300,
          //     inRange: {
          //       color: ['#87aa66', '#eba438', '#d94d4c']
          //     }
          //   },
          //   {
          //     show: false,
          //     type: 'continuous',
          //     seriesIndex: 1,
          //     text: ['scatter3D'],
          //     left: 'right',
          //     max: 100,
          //     calculable: true,
          //     inRange: {
          //       color: ['#000', 'blue', 'purple']
          //     }
          //   }
          // ],
          geo3D: {
            map: 'HUBEI',
            roam: false,
            width: '100%',
            height: 500,
            top: 0,
            zoom: 1.5,
            label: {
              show: true,
              textStyle: {
                color: '#fff', //地图初始化区域字体颜色
                fontSize: 12,
                opacity: 1,
                backgroundColor: 'rgba(255,255,255,0)'
                //backgroundColor: 'rgba(53,171,199,0)'
              }
            },
            itemStyle: {
              color: '#5c9ef5',
              // color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
              //   {
              //     offset: 0,
              //     color: '#1c78f1'
              //   },
              //   {
              //     offset: 1,
              //     color: '#5c9ef5'
              //   }
              // ]),
              opacity: 1,
              borderWidth: 1,
              borderColor: '#054daf'
            },
            emphasis: {
              //当鼠标放上去  地区区域是否显示名称
              label: {
                show: true,
                textStyle: {
                  color: '#fff',
                  fontSize: 12,
                  backgroundColor: 'rgba(0,23,11,0)'
                }
              },
              itemStyle: {
                color: '#5c9ef5',
                opacity: 0.5
              }
            },
            //shading: 'color',
            light: {
              //光照阴影
              main: {
                color: '#fff', //光照颜色
                intensity: 1.2, //光照强度
                shadowQuality: 'high', //阴影亮度
                shadow: false, //是否显示阴影
                alpha: 500,
                beta: 100
              },
              ambient: {
                intensity: 0.3
              }
            }
          },
          series: [
            //画线

            {
              type: 'lines3D',
              coordinateSystem: 'geo3D',
              effect: {
                show: true,
                trailWidth: 4,
                trailOpacity: 0.5,
                trailLength: 0.3,
                constantSpeed: 5
              },

              blendMode: 'lighter',

              lineStyle: {
                width: 0.2,
                opacity: 0.05
              },

              data: []
            }
          ]
        };
      }
      this.$echarts.registerMap('HUBEI', MapJson.HUBEI);
      this.charts = this.$echarts.init(document.getElementById('mapId'));
      this.charts.setOption(this.mapOption, true);
    },

    convertData(data) {
      var res = [];
      for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
          res.push({
            name: data[i].name,
            value: geoCoord.concat(data[i].value)
          });
        }
      }
      return res;
    }
  }
};
</script>

<style lang="scss">
.hubei-map-container {
  width: 100%;
  height: 600px;
  margin-top: 10px;
  box-sizing: border-box;
  .hubei-map-content {
    width: 100%;
    height: 600px;
    background-color: transparent;
  }
}
</style>
