<template>
  <div class="single-stacked-area-container" :class="heightClass">
      <div :id="stackedAreaId" class="single-stacked-area-content" :class="heightClass"></div>
  </div>
</template>
<script>
import {
  jtsgfxSingleStackedAreaOption4Day,
  jtsgfxSingleStackedAreaOption4Month,
  jtsgfxSingleStackedAreaOption4Year
  // jtsgfxSingleStackedAreaOption3Day,
  // jtsgfxSingleStackedAreaOption3Month,
  // jtsgfxSingleStackedAreaOption3Year
} from './data.js';
import { jttsypfxSingleStackedAreaOption1 } from './jttsypfx_data.js';
import {
  // jtwfsjfxSingleStackedAreaOption4Day,
  // jtwfsjfxSingleStackedAreaOption4Month,
  // jtwfsjfxSingleStackedAreaOption4Year,
  jtwfsjfxSingleStackedAreaOption4WuHanDay,
  jtwfsjfxSingleStackedAreaOption4WuHanMonth,
  jtwfsjfxSingleStackedAreaOption4WuHanYear,
  jtwfsjfxSingleStackedAreaOption4HuangShiDay,
  jtwfsjfxSingleStackedAreaOption4HuangShiMonth,
  jtwfsjfxSingleStackedAreaOption4HuangShiYear,
  jtwfsjfxSingleStackedAreaOption4WuHanDay1,
  jtwfsjfxSingleStackedAreaOption4WuHanMonth1,
  jtwfsjfxSingleStackedAreaOption4WuHanYear1,
  jtwfsjfxSingleStackedAreaOption4HuangShiDay1,
  jtwfsjfxSingleStackedAreaOption4HuangShiMonth1,
  jtwfsjfxSingleStackedAreaOption4HuangShiYear1
} from './jtwfsjfx_data.js';

export default {
  name: '',
  props: ['optionName', 'stackedAreaId', 'heightClass'],
  data() {
    return {
      dataObj: {
        jtsgfxSingleStackedAreaOption4Day,
        jtsgfxSingleStackedAreaOption4Month,
        jtsgfxSingleStackedAreaOption4Year,
        // jtsgfxSingleStackedAreaOption3Day,
        // jtsgfxSingleStackedAreaOption3Month,
        // jtsgfxSingleStackedAreaOption3Year,
        jttsypfxSingleStackedAreaOption1: jttsypfxSingleStackedAreaOption1,
        // jtwfsjfxSingleStackedAreaOption4Day,
        // jtwfsjfxSingleStackedAreaOption4Month,
        // jtwfsjfxSingleStackedAreaOption4Year,
        jtwfsjfxSingleStackedAreaOption4WuHanDay,
        jtwfsjfxSingleStackedAreaOption4WuHanMonth,
        jtwfsjfxSingleStackedAreaOption4WuHanYear,
        jtwfsjfxSingleStackedAreaOption4HuangShiDay,
        jtwfsjfxSingleStackedAreaOption4HuangShiMonth,
        jtwfsjfxSingleStackedAreaOption4HuangShiYear,
        jtwfsjfxSingleStackedAreaOption4WuHanDay1,
        jtwfsjfxSingleStackedAreaOption4WuHanMonth1,
        jtwfsjfxSingleStackedAreaOption4WuHanYear1,
        jtwfsjfxSingleStackedAreaOption4HuangShiDay1,
        jtwfsjfxSingleStackedAreaOption4HuangShiMonth1,
        jtwfsjfxSingleStackedAreaOption4HuangShiYear1
      }
    };
  },
  mounted() {
    this.drawChart();
  },
  methods: {
    drawChart(optionName) {
      if (!optionName) {
        optionName = this.optionName;
      }
      this.charts = this.$echarts.init(document.getElementById(this.stackedAreaId));
      this.charts.setOption(this.dataObj[optionName], true);
    }
  }
};
</script>

<style lang="scss">
.single-stacked-area-container {
  width: 100%;
  height: 300px;
  box-sizing: border-box;
  .single-stacked-area-content {
    width: 100%;
    height: 100%;
    background-color: transparent;
  }
}
.height410 {
  height: 410px;
}
.height250 {
  height: 250px;
}
</style>
