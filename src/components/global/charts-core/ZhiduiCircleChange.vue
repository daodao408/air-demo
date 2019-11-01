<template>
  <div class="jqdsj-circle-container" :class="heightClass">
      <div :id="jqdsjZhiduiCircleId" class="jqdsj-circle-content" :class="heightClass"></div>
  </div>
</template>
<script>
import {
  jqdsjZhiduiCircleOptionDay,
  jqdsjZhiduiCircleOptionMonth,
  jqdsjZhiduiCircleOptionYear
} from './jqdsj_zhidui_data.js';
export default {
  name: '',
  props: ['optionName', 'jqdsjZhiduiCircleId', 'heightClass'],
  data() {
    return {
      dataObj: {
        jqdsjZhiduiCircleOptionDay,
        jqdsjZhiduiCircleOptionMonth,
        jqdsjZhiduiCircleOptionYear
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
      this.charts = this.$echarts.init(document.getElementById(this.jqdsjZhiduiCircleId));
      this.charts.setOption(this.dataObj[optionName], true);
    }
  }
};
</script>

<style lang="scss">
.jqdsj-circle-container {
  width: 100%;
  box-sizing: border-box;
  .jqdsj-circle-content {
    width: 100%;
    background-color: transparent;
  }
}
.height350 {
  height: 350px;
}
</style>
