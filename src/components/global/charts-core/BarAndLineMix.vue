<template>
  <div class="bar-and-line-mix-container" :class="heightClass">
      <div :id="barAndLineMixId" class="bar-and-line-mix-content" :class="heightClass"></div>
  </div>
</template>
<script>
import { zddxfxBarAndLineMixOptionTB, zddxfxBarAndLineMixOptionHB } from './zddxfx_data.js';
export default {
  name: '',
  props: ['optionName', 'barAndLineMixId', 'heightClass'],
  data() {
    return {
      dataObj: {
        zddxfxBarAndLineMixOptionTB,
        zddxfxBarAndLineMixOptionHB
      }
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.drawChart();
    });
  },
  methods: {
    drawChart(optionName) {
      if (!optionName) {
        optionName = this.optionName;
      }
      this.charts = this.$echarts.init(document.getElementById(this.barAndLineMixId));
      this.charts.setOption(this.dataObj[optionName], true);
    }
  }
};
</script>

<style lang="scss">
.bar-and-line-mix-container {
  width: 100%;
  box-sizing: border-box;
  .bar-and-line-mix-content {
    width: 100%;
    background-color: transparent;
  }
}
.height360 {
  height: 360px;
}
.height410 {
  height: 410px;
}
.height250 {
  height: 250px;
}
.height350 {
  height: 350px;
}
</style>
