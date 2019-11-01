<template>
  <div class="circle-angle-container">
      <div id="circleId" class="circle-angle-content"></div>
  </div>
</template>
<script>
import { wuhanCircleAngleOption, hubeiCircleAngleOption } from './data.js';
export default {
  name: '',
  props: ['cityName'],
  data() {
    return {
      // cityName: 'wuhan',
      dataObj: {
        wuhan: wuhanCircleAngleOption,
        hubei: hubeiCircleAngleOption
      }
    };
  },
  mounted() {
    this.drawChart();
  },
  methods: {
    drawChart(cityName) {
      if (!cityName) {
        cityName = this.cityName;
      }
      this.charts = this.$echarts.init(document.getElementById('circleId'));
      this.charts.setOption(this.dataObj[cityName], true);
    }
  }
};
</script>

<style lang="scss">
.circle-angle-container {
  width: 100%;
  height: 300px;
  box-sizing: border-box;
  .circle-angle-content {
    width: 100%;
    height: 100%;
    background-color: transparent;
  }
}
</style>
