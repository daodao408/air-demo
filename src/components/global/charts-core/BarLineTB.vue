<template>
  <div class="bar-line-container" :class="heightClass">
      <div :id="barLineId" class="bar-line-content" :class="heightClass"></div>
  </div>
</template>
<script>
import {
  jttsypfxBarLineCompOption1TB,
  jttsypfxBarLineCompOption1HB,
  jttsypfxBarLineCompOption2TB,
  jttsypfxBarLineCompOption2HB
} from './jttsypfx_data.js';
import {
  zddxfxBarLineCompOptionTB,
  zddxfxBarLineCompOptionHB,
  zddxfxBarLineOption1Road1TB,
  zddxfxBarLineOption1Road1HB,
  zddxfxBarLineOption1Road2TB,
  zddxfxBarLineOption1Road2HB,
  zddxfxBarLineOption1Road3TB,
  zddxfxBarLineOption1Road3HB,
  zddxfxBarLineOption1Road4TB,
  zddxfxBarLineOption1Road4HB
} from './zddxfx_data.js';
export default {
  name: '',
  props: ['optionName', 'barLineId', 'heightClass'],
  data() {
    return {
      dataObj: {
        jttsypfxBarLineCompOption1TB: jttsypfxBarLineCompOption1TB,
        jttsypfxBarLineCompOption1HB: jttsypfxBarLineCompOption1HB,
        jttsypfxBarLineCompOption2TB: jttsypfxBarLineCompOption2TB,
        jttsypfxBarLineCompOption2HB: jttsypfxBarLineCompOption2HB,
        zddxfxBarLineCompOptionTB,
        zddxfxBarLineCompOptionHB,
        zddxfxBarLineOption1Road1TB,
        zddxfxBarLineOption1Road1HB,
        zddxfxBarLineOption1Road2TB,
        zddxfxBarLineOption1Road2HB,
        zddxfxBarLineOption1Road3TB,
        zddxfxBarLineOption1Road3HB,
        zddxfxBarLineOption1Road4TB,
        zddxfxBarLineOption1Road4HB
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
      this.charts = this.$echarts.init(document.getElementById(this.barLineId));
      this.charts.setOption(this.dataObj[optionName], true);
    }
  }
};
</script>

<style lang="scss">
.bar-line-container {
  width: 100%;
  box-sizing: border-box;
  .bar-line-content {
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
</style>
