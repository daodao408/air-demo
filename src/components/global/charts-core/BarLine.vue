<template>
  <div class="bar-line-container" :class="heightClass">
      <div :id="barLineId" class="bar-line-content" :class="heightClass"></div>
  </div>
</template>
<script>
import {
  firstBarLineOption,
  secondBarLineOption,
  jtsgfxBarLineOption1Day,
  jtsgfxBarLineOption1Month,
  jtsgfxBarLineOption1Year,
  jtsgfxBarLineOption2Day,
  jtsgfxBarLineOption2Month,
  jtsgfxBarLineOption2Year,
  // jtsgfxBarLineOption3Day,
  // jtsgfxBarLineOption3Month,
  // jtsgfxBarLineOption3Year
  jtsgfxBarLineOption3TB,
  jtsgfxBarLineOption3HB,
  jtsgfxBarLineOptionWuHan,
  jtsgfxBarLineOptionHuangShi
} from './data.js';
import {
  jttsypfxBarLineOption1Day,
  jttsypfxBarLineOption1Month,
  jttsypfxBarLineOption1Year,
  jttsypfxBarLineCompOption3TB,
  jttsypfxBarLineCompOption3HB
} from './jttsypfx_data.js';
// import {
//   zddxfxBarLineOption1Road1,
//   zddxfxBarLineOption1Road2,
//   zddxfxBarLineOption1Road3,
//   zddxfxBarLineOption1Road4
// } from './zddxfx_data.js';
import { jtllfxBarLineOption1Day, jtllfxBarLineOption1Month, jtllfxBarLineOption1Year } from './jtllfx_data.js';
import {
  jtwfsjfxBarLineOption1Day,
  jtwfsjfxBarLineOption1Month,
  jtwfsjfxBarLineOption1Year,
  // jtwfsjfxBarLineOption2Day,
  // jtwfsjfxBarLineOption2Month,
  // jtwfsjfxBarLineOption2Year,
  barLineSevenOption1,
  barLineSevenOption2,
  barLineSevenOption3,
  barLineSevenOption4,
  barLineSevenOption5,
  barLineSevenOption6
} from './jtwfsjfx_data.js';
export default {
  name: '',
  props: ['optionName', 'barLineId', 'heightClass'],
  data() {
    return {
      dataObj: {
        gsjj_hanchuan: firstBarLineOption,
        gsjj_xiantao: secondBarLineOption,
        jtsgfxBarLineOption1Day: jtsgfxBarLineOption1Day,
        jtsgfxBarLineOption1Month: jtsgfxBarLineOption1Month,
        jtsgfxBarLineOption1Year: jtsgfxBarLineOption1Year,
        jtsgfxBarLineOption2Day: jtsgfxBarLineOption2Day,
        jtsgfxBarLineOption2Month: jtsgfxBarLineOption2Month,
        jtsgfxBarLineOption2Year: jtsgfxBarLineOption2Year,
        // jtsgfxBarLineOption3Day: jtsgfxBarLineOption3Day,
        // jtsgfxBarLineOption3Month: jtsgfxBarLineOption3Month,
        // jtsgfxBarLineOption3Year: jtsgfxBarLineOption3Year,
        jtsgfxBarLineOption3TB,
        jtsgfxBarLineOption3HB,
        jttsypfxBarLineOption1Day: jttsypfxBarLineOption1Day,
        jttsypfxBarLineOption1Month: jttsypfxBarLineOption1Month,
        jttsypfxBarLineOption1Year: jttsypfxBarLineOption1Year,
        jttsypfxBarLineCompOption3TB: jttsypfxBarLineCompOption3TB,
        jttsypfxBarLineCompOption3HB: jttsypfxBarLineCompOption3HB,
        // zddxfxBarLineOption1Road1,
        // zddxfxBarLineOption1Road2,
        // zddxfxBarLineOption1Road3,
        // zddxfxBarLineOption1Road4,
        jtllfxBarLineOption1Day,
        jtllfxBarLineOption1Month,
        jtllfxBarLineOption1Year,
        jtwfsjfxBarLineOption1Day,
        jtwfsjfxBarLineOption1Month,
        jtwfsjfxBarLineOption1Year,
        // jtwfsjfxBarLineOption2Day,
        // jtwfsjfxBarLineOption2Month,
        // jtwfsjfxBarLineOption2Year,
        barLineSevenOption1,
        barLineSevenOption2,
        barLineSevenOption3,
        barLineSevenOption4,
        barLineSevenOption5,
        barLineSevenOption6,
        jtsgfxBarLineOptionWuHan,
        jtsgfxBarLineOptionHuangShi
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
