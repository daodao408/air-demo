<template>
  <div class="stacked-area-container">
      <div id="stackedAreaId" class="stacked-area-content"></div>
  </div>
</template>
<script>
import { wuhanStackedAreaOption, hubeiStackedAreaOption } from './data.js';
export default {
  name: '',
  props: ['cityName'],
  data() {
    return {
      dataObj: {
        wuhan: wuhanStackedAreaOption,
        hubei: hubeiStackedAreaOption
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
      this.charts = this.$echarts.init(document.getElementById('stackedAreaId'));
      this.charts.setOption(this.dataObj[cityName], true);
    }
  }
};
</script>

<style lang="scss">
.stacked-area-container {
  width: 100%;
  height: 300px;
  box-sizing: border-box;
  .stacked-area-content {
    width: 100%;
    height: 100%;
    background-color: transparent;
  }
}
</style>
