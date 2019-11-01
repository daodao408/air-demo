<template>
  <div class="bar-line-mix-container" :class="heightClass">
      <div :id="barLineMixId" class="bar-line-mix-content" :class="heightClass"></div>
  </div>
</template>
<script>
import {
  jttsypfxCircleCompOption5Month,
  jttsypfxCircleCompOption5Quarter,
  jttsypfxCircleCompOption5HalfYear
} from './jttsypfx_data.js';
export default {
  name: '',
  props: ['optionName', 'barLineMixId', 'heightClass'],
  data() {
    return {
      dataObj: {
        jttsypfxCircleCompOption5Month,
        jttsypfxCircleCompOption5Quarter,
        jttsypfxCircleCompOption5HalfYear
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
      this.charts = this.$echarts.init(document.getElementById(this.barLineMixId));
      this.charts.setOption(this.dataObj[optionName], true);
    }
  }
};
</script>

<style lang="scss">
.bar-line-mix-container {
  width: 100%;
  box-sizing: border-box;
  .bar-line-mix-content {
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
