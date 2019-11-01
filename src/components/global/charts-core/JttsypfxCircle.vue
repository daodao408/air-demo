<template>
  <div class="jttsypfx-circle-container" :class="heightClass">
      <div :id="jttsypfxCircleId" class="jttsypfx-circle-content" :class="heightClass"></div>
  </div>
</template>
<script>
import { jttsypfxCircleCompOption4TB, jttsypfxCircleCompOption4HB } from './jttsypfx_data.js';
import { zddxfxCircleOption } from './zddxfx_data.js';
export default {
  name: '',
  props: ['optionName', 'jttsypfxCircleId', 'heightClass'],
  data() {
    return {
      dataObj: {
        jttsypfxCircleCompOption4TB,
        jttsypfxCircleCompOption4HB,
        zddxfxCircleOption
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
      this.charts = this.$echarts.init(document.getElementById(this.jttsypfxCircleId));
      this.charts.setOption(this.dataObj[optionName], true);
    }
  }
};
</script>

<style lang="scss">
.jttsypfx-circle-container {
  width: 100%;
  box-sizing: border-box;
  .jttsypfx-circle-content {
    width: 100%;
    background-color: transparent;
  }
}
.height250 {
  height: 250px;
}
</style>
