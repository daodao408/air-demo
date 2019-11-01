<template>
  <div class="zhidui-circle-container">
      <div id="zhiduiCircleId" class="zhidui-circle-content"></div>
  </div>
</template>
<script>
export default {
  name: '',
  data() {
    return {};
  },
  mounted() {
    this.$nextTick(() => {
      this.drawChart();
    });
  },
  methods: {
    drawChart(dataOption) {
      let echartData = [
        {
          value: 2000,
          name: '武汉'
        },
        {
          value: 1000,
          name: '黄石'
        },
        {
          value: 900,
          name: '十堰'
        },
        {
          value: 1100,
          name: '荆州'
        },
        {
          value: 1900,
          name: '宜昌'
        },
        {
          value: 1500,
          name: '襄樊'
        },
        {
          value: 1000,
          name: '鄂州'
        },
        {
          value: 1000,
          name: '荆门'
        },
        {
          value: 900,
          name: '黄冈'
        },
        {
          value: 1100,
          name: '孝感'
        },
        {
          value: 1900,
          name: '咸宁'
        },
        {
          value: 1500,
          name: '仙桃'
        },
        {
          value: 1000,
          name: '潜江'
        },
        {
          value: 900,
          name: '神农架林区'
        },
        {
          value: 1100,
          name: '恩施州'
        },
        {
          value: 1900,
          name: '天门'
        },
        {
          value: 1500,
          name: '随州'
        }
      ];
      if (!dataOption) {
        dataOption = {
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
          series: [
            {
              name: '',
              type: 'pie',
              radius: ['25%', '40%'],
              center: ['55%', '45%'],
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
                    for (let i = 0; i < echartData.length; i++) {
                      total += echartData[i].value;
                    }
                    percent = (params.value / total * 100).toFixed(0);
                    return '{blue|' + params.name + '}' + ' ' + '{blue|' + percent + '%' + '}';
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
                      color: '#7fb3df',
                      fontSize: 14,
                      align: 'center'
                    }
                  }
                }
              },
              labelLine: {
                normal: {
                  length: 10,
                  length2: 15,
                  lineStyle: {
                    color: '#7fb3df',
                    opcity: 0.8
                  }
                }
              },
              data: echartData
            }
          ]
        };
      }
      this.charts = this.$echarts.init(document.getElementById('zhiduiCircleId'));
      this.charts.setOption(dataOption, true);
    }
  }
};
</script>

<style lang="scss">
.zhidui-circle-container {
  width: 100%;
  height: 350px;
  box-sizing: border-box;
  .zhidui-circle-content {
    width: 100%;
    height: 350px;
    background-color: transparent;
  }
}
</style>
