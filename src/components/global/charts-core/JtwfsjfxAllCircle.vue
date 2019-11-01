<template>
  <div class="jtwfsjfx-circle-container" :class="heightClass">
      <div :id="jtwfsjfxAllCircleId" class="jtwfsjfx-circle-content" :class="heightClass"></div>
  </div>
</template>
<script>
import {
  jtwfsjfxAllCircleOption3Day,
  jtwfsjfxAllCircleOption3Month,
  jtwfsjfxAllCircleOption3Year
} from './jtwfsjfx_data.js';
export default {
  name: '',
  props: ['optionName', 'jtwfsjfxAllCircleId', 'heightClass'],
  data() {
    return {
      dataObj: {
        jtwfsjfxAllCircleOption3Day,
        jtwfsjfxAllCircleOption3Month,
        jtwfsjfxAllCircleOption3Year
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
      this.charts = this.$echarts.init(document.getElementById(this.jtwfsjfxAllCircleId));
      this.charts.setOption(this.dataObj[optionName], true);
    }
  }
};
</script>

<style lang="scss">
.jtwfsjfx-circle-container {
  width: 100%;
  box-sizing: border-box;
  .jtwfsjfx-circle-content {
    width: 100%;
    background-color: transparent;
  }
}
.height204 {
  height: 204px;
}
</style>
