<template>
  <div class="bar-line-rotation-container" :class="heightClass">
      <div :id="barLineRotationId" class="bar-line-rotation-content" :class="heightClass"></div>
  </div>
</template>
<script>
import {
  zddxfxBarLineRotationOption1,
  zddxfxBarRotationCompOptionNum,
  zddxfxBarRotationCompOptionFrequency
} from './zddxfx_data.js';
import {
  jtllfxBarLineRotationOption2Day,
  jtllfxBarLineRotationOption2Month,
  jtllfxBarLineRotationOption2Year,
  jtllfxBarLineRotationOption3Day,
  jtllfxBarLineRotationOption3Month,
  jtllfxBarLineRotationOption3Year
} from './jtllfx_data.js';
import { jtwfsjfxBarLineRotationOption } from './jtwfsjfx_data.js';
export default {
  name: '',
  props: ['optionName', 'barLineRotationId', 'heightClass'],
  data() {
    return {
      dataObj: {
        zddxfxBarLineRotationOption1,
        zddxfxBarRotationCompOptionNum,
        zddxfxBarRotationCompOptionFrequency,
        jtllfxBarLineRotationOption2Day,
        jtllfxBarLineRotationOption2Month,
        jtllfxBarLineRotationOption2Year,
        jtllfxBarLineRotationOption3Day,
        jtllfxBarLineRotationOption3Month,
        jtllfxBarLineRotationOption3Year,
        jtwfsjfxBarLineRotationOption
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
      this.charts = this.$echarts.init(document.getElementById(this.barLineRotationId));
      this.charts.setOption(this.dataObj[optionName], true);
    }
  }
};
</script>

<style lang="scss">
.bar-line-rotation-container {
  width: 100%;
  box-sizing: border-box;
  .bar-line-rotation-content {
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
