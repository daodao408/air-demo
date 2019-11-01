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
          value: 200,
          name: '重大事故'
        },
        {
          value: 2000,
          name: '交通拥挤'
        },
        {
          value: 2000,
          name: '一般事故'
        },
        {
          value: 250,
          name: '天灾风险'
        },
        {
          value: 400,
          name: '肇事逃逸'
        },
        {
          value: 1500,
          name: '违章行为'
        },
        {
          value: 150,
          name: '特大事故'
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
                    for (let i = 0; i < echartData.length; i++) {
                      total += echartData[i].value;
                    }
                    percent = (params.value / total * 100).toFixed(1);
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
  margin-top: 10px;
  box-sizing: border-box;
  .zhidui-circle-content {
    width: 100%;
    height: 350px;
    background-color: transparent;
  }
}
</style>
