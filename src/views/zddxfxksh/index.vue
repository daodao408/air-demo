<template>
  <!--警情大数据-->
  <div class="zddxfxPage">
    <jtksh-head :headTitle="headTitle"></jtksh-head>
    <div class="zddxfxPage-content clearfloat">
      <div class="zddxfxPage-left-zone">
        <div class="zddxfxPage-line-chart-content">
          <div class="zddxfxPage-line-chart-title">重点路段通行情况</div>
          <div class="zddxfxPage-line-chart-detail">
            <div class="border-top-left"></div>
            <div class="border-top-right"></div>
            <div class="border-bottom-left"></div>
            <div class="border-bottom-right"></div>
            <div class="zddxfxPage-select-zone">
              <el-select class="jtsgypfxPage-select-two-words" v-model="dateValueTHB" placeholder="请选择"  @change="changeDateValue('four')">
                  <el-option
                  v-for="item in dateOptionsTHB"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                  </el-option>
              </el-select>
              <el-select class="jtsgypfxPage-select-six-words marginLeft5" v-model="dateValue1" placeholder="请选择"  @change="changeDateValue('one')">
                  <el-option
                  v-for="item in dateOptions1"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                  </el-option>
              </el-select>
            </div>
            <bar-line-t-b :optionName="barLineCompTBChangeValue" :barLineId="barLineCompTBChangeValue" :heightClass="barLineObj.heightClass" ref="barLineTBRef"></bar-line-t-b>
          </div>
        </div>
        <div class="zddxfxPage-line-chart-content marginTop24">
          <div class="zddxfxPage-line-chart-title">路段事故统计排名TOP10</div>
          <div class="zddxfxPage-line-chart-detail">
            <div class="border-top-left"></div>
            <div class="border-top-right"></div>
            <div class="border-bottom-left"></div>
            <div class="border-bottom-right"></div>
            <div class="zddxfxPage-time-zone">
              <el-input v-model="timeStartStr" placeholder="请选择时间" :readonly="true" suffix-icon="el-icon-date"></el-input>
              <span class="time-text">至</span>
              <el-input v-model="timeEndStr" placeholder="请选择时间" :readonly="true" suffix-icon="el-icon-date"></el-input>
            </div>
            <bar-line-rotation :optionName="barLineRotationObj.optionName1" :barLineRotationId="barLineRotationObj.optionId1" :heightClass="barLineRotationObj.heightClass" ref="barLineRotationRef"></bar-line-rotation>
          </div>
        </div>
      </div>
      <div class="zddxfxPage-middle-zone">
        <div class="zddxfxPage-line-chart-content">
          <div class="zddxfxPage-middle-container">
            <div class="zddxfxPage-line-chart-content">
              <div class="zddxfxPage-line-chart-title">七类重点车辆统计</div>
              <div class="zddxfxPage-line-chart-detail">
                <div class="border-top-left"></div>
                <div class="border-top-right"></div>
                <div class="border-bottom-left"></div>
                <div class="border-bottom-right"></div>
                <div class="zddxfxPage-select-zone">
                  <el-select class="jtsgypfxPage-select-two-words" v-model="dateValue2" placeholder="请选择"  @change="changeDateValue('two')">
                    <el-option
                    v-for="item in dateOptions2"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                  </el-select>
                </div>
                <bar-line-t-b :optionName="dateValue2" :barLineId="dateValue2" :heightClass="barLineTBObj.heightClass" ref="barLineTBRef1"></bar-line-t-b>
                <!-- <bar-and-line-mix :optionName="dateValue2" :barAndLineMixId="dateValue2" :heightClass="barAndLineMixObj.heightClass" ref="barAndLineMixRef"></bar-and-line-mix> -->
              </div>
            </div>
            <div class="zddxfxPage-line-chart-content marginTop24">
              <div class="zddxfxPage-line-chart-title">五类重点违法行为统计</div>
              <div class="zddxfxPage-line-chart-detail">
                <div class="border-top-left"></div>
                <div class="border-top-right"></div>
                <div class="border-bottom-left"></div>
                <div class="border-bottom-right"></div>
                <jttsypfx-circle :optionName="zddxfxCircleObj.optionName" :jttsypfxCircleId="zddxfxCircleObj.optionId" :heightClass="zddxfxCircleObj.heightClass" ref="zddxfxCircleRef"></jttsypfx-circle>
              </div>
            </div>
          </div>
        </div>
        <!-- <hubei-map></hubei-map>    -->
      </div>
      <div class="zddxfxPage-right-zone">
        <div class="zddxfxPage-line-chart-content">
          <div class="zddxfxPage-line-chart-title">重点车辆和重点驾驶人统计</div>
          <div class="zddxfxPage-line-chart-detail">
            <div class="border-top-left"></div>
            <div class="border-top-right"></div>
            <div class="border-bottom-left"></div>
            <div class="border-bottom-right"></div>
            <div class="zddxfxPage-important-car-people">
              <ul class="clearfloat">
                <li v-for="(item,index) in importantCarPeopleDataArr" :key="index">
                  <div>
                    <span v-for="(item1,index1) in item.value" :key="index1">{{item1}}</span>
                    <b>个</b>
                  </div>
                  <p>{{item.name}}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="zddxfxPage-line-chart-content marginTop24">
          <div class="zddxfxPage-line-chart-title">重点人员违法统计</div>
          <div class="zddxfxPage-line-chart-detail">
            <div class="border-top-left"></div>
            <div class="border-top-right"></div>
            <div class="border-bottom-left"></div>
            <div class="border-bottom-right"></div>
            <div class="zddxfxPage-select-zone">
              <el-select class="jtsgypfxPage-select-five-words" v-model="dateValue4" placeholder="请选择"  @change="changeDateValue('three')">
                  <el-option
                  v-for="item in dateOptions4"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                  </el-option>
              </el-select>
            </div>
            <bar-line-rotation :optionName="dateValue4" :barLineRotationId="dateOptions4" :heightClass="barLineRotationObj.heightClass" ref="barLineRotationRef1"></bar-line-rotation>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import BarLine from '@/components/global/charts-core/BarLine.vue';
import BarLineRotation from '@/components/global/charts-core/BarLineRotation.vue';
import BarLineTB from '@/components/global/charts-core/BarLineTB.vue';
// import BarAndLineMix from '@/components/global/charts-core/BarAndLineMix.vue';
import JttsypfxCircle from '@/components/global/charts-core/JttsypfxCircle.vue';
import JtkshHead from '@/components/global/jtksh-head';

export default {
  name: 'Zddxfxksh',
  components: {
    JtkshHead,
    // BarLine,
    BarLineRotation,
    BarLineTB,
    // BarAndLineMix,
    JttsypfxCircle
  },
  data() {
    return {
      headTitle: '重点对象分析',
      barLineObj: {
        heightClass: 'height410'
      },
      barLineRotationObj: {
        optionName1: 'zddxfxBarLineRotationOption1',
        optionId1: 'zddxfxBarLineRotationOption1',
        heightClass: 'height410'
      },
      barLineTBObj: {
        heightClass: 'height410'
      },
      zddxfxCircleObj: {
        optionName: 'zddxfxCircleOption',
        optionId: 'zddxfxCircleOption',
        heightClass: 'height410'
      },
      singleStackedAreaObj: {
        heightClass: 'height410',
        jtsgfxSingleStackedAreaOption1: 'jtsgfxSingleStackedAreaOption1',
        optionId1: 'singleStackedAreaId1'
      },
      barLineCompTBChangeValue: 'zddxfxBarLineOption1Road1TB',
      dateValueTHB: 'zddxfxBarLineCompOptionTB1',
      dateOptionsTHB: [
        {
          value: 'zddxfxBarLineCompOptionTB1',
          label: '同比'
        },
        {
          value: 'zddxfxBarLineCompOptionHB1',
          label: '环比'
        }
      ],
      dateValue1: 'zddxfxBarLineOption1Road1',
      dateOptions1: [
        {
          value: 'zddxfxBarLineOption1Road1',
          label: '事故多发路段'
        },
        {
          value: 'zddxfxBarLineOption1Road2',
          label: '团雾多发路段'
        },
        {
          value: 'zddxfxBarLineOption1Road3',
          label: '隧道多发路段'
        },
        {
          value: 'zddxfxBarLineOption1Road4',
          label: '桥梁多发路段'
        }
      ],
      dateValue2: 'zddxfxBarLineCompOptionTB',
      dateOptions2: [
        {
          value: 'zddxfxBarLineCompOptionTB',
          label: '同比'
        },
        {
          value: 'zddxfxBarLineCompOptionHB',
          label: '环比'
        }
      ],
      dateValue3: 'jtsgfxBarLineOption3Day',
      dateOptions3: [
        {
          value: 'jtsgfxBarLineOption3Day',
          label: '日'
        },
        {
          value: 'jtsgfxBarLineOption3Month',
          label: '月'
        },
        {
          value: 'jtsgfxBarLineOption3Year',
          label: '年'
        }
      ],
      dateValue4: 'zddxfxBarRotationCompOptionNum',
      dateOptions4: [
        {
          value: 'zddxfxBarRotationCompOptionNum',
          label: '违法次数'
        },
        {
          value: 'zddxfxBarRotationCompOptionFrequency',
          label: '违法频率'
        }
      ],
      importantCarPeopleDataArr: [
        {
          name: '重点车辆逾期业务数量',
          value: [2, 3, 2, 4]
        },
        {
          name: '重点人员逾期业务数量',
          value: [1, 3, 0, 0]
        },
        {
          name: '重点车辆临时业务数量',
          value: [3, 6, 4, 4]
        },
        {
          name: '重点人员临时业务数量',
          value: [1, 7, 0, 0]
        },
        {
          name: '重点车辆上月严重违法',
          value: [2, 1, 0, 0]
        },
        {
          name: '重点人员上月严重违法',
          value: [1, 3, 4, 4]
        }
      ], // 重点车辆和重点驾驶人数据
      timeStartStr: '2018年7月',
      timeEndStr: '2019年7月'
    };
  },
  created() {},
  mounted() {
    this.$nextTick(() => {});
  },
  methods: {
    // 日月年下拉框选择
    changeDateValueLine(name) {},
    // 日月年下拉框选择
    changeDateValue(name) {
      if (name === 'one' || name === 'four') {
        if (this.dateValueTHB === 'zddxfxBarLineCompOptionTB1' && this.dateValue1 === 'zddxfxBarLineOption1Road1') {
          this.barLineCompTBChangeValue = 'zddxfxBarLineOption1Road1TB';
        } else if (
          this.dateValueTHB === 'zddxfxBarLineCompOptionHB1' &&
          this.dateValue1 === 'zddxfxBarLineOption1Road1'
        ) {
          this.barLineCompTBChangeValue = 'zddxfxBarLineOption1Road1HB';
        } else if (
          this.dateValueTHB === 'zddxfxBarLineCompOptionTB1' &&
          this.dateValue1 === 'zddxfxBarLineOption1Road2'
        ) {
          this.barLineCompTBChangeValue = 'zddxfxBarLineOption1Road2TB';
        } else if (
          this.dateValueTHB === 'zddxfxBarLineCompOptionHB1' &&
          this.dateValue1 === 'zddxfxBarLineOption1Road2'
        ) {
          this.barLineCompTBChangeValue = 'zddxfxBarLineOption1Road2HB';
        } else if (
          this.dateValueTHB === 'zddxfxBarLineCompOptionTB1' &&
          this.dateValue1 === 'zddxfxBarLineOption1Road3'
        ) {
          this.barLineCompTBChangeValue = 'zddxfxBarLineOption1Road3TB';
        } else if (
          this.dateValueTHB === 'zddxfxBarLineCompOptionHB1' &&
          this.dateValue1 === 'zddxfxBarLineOption1Road3'
        ) {
          this.barLineCompTBChangeValue = 'zddxfxBarLineOption1Road3HB';
        } else if (
          this.dateValueTHB === 'zddxfxBarLineCompOptionTB1' &&
          this.dateValue1 === 'zddxfxBarLineOption1Road4'
        ) {
          this.barLineCompTBChangeValue = 'zddxfxBarLineOption1Road4TB';
        } else if (
          this.dateValueTHB === 'zddxfxBarLineCompOptionHB1' &&
          this.dateValue1 === 'zddxfxBarLineOption1Road4'
        ) {
          this.barLineCompTBChangeValue = 'zddxfxBarLineOption1Road4HB';
        }
        this.$refs.barLineTBRef.drawChart(this.barLineCompTBChangeValue);
      } else if (name === 'two') {
        this.$refs.barLineTBRef1.drawChart(this.dateValue2);
      } else if (name === 'three') {
        this.$refs.barLineRotationRef1.drawChart(this.dateValue4);
      }
    }
  }
};
</script>

<style lang="scss">
$BaseColor: #7fb3df;
.zddxfxPage {
  width: 100%;
  height: 100%;
  position: relative;
  background: url('../../assets/images/jtkshxt/bg_ksh.png') no-repeat center center;
  background-size: 100% 100%;
  .zddxfxPage-line-chart-title {
    width: 100%;
    color: $BaseColor;
    text-indent: 12px;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1.5px;
    position: relative;
    &:before {
      content: '';
      display: block;
      position: absolute;
      width: 4px;
      height: 18px;
      background-color: $BaseColor;
      top: 0;
      left: 0;
    }
  }
  .zddxfxPage-select-zone {
    position: absolute;
    right: 20px;
    top: 15px;
    z-index: 999;
    .jtsgypfxPage-select-two-words {
      &.el-select {
        .el-input {
          .el-input__inner {
            width: 70px;
          }
        }
      }
    }
    .jtsgypfxPage-select-five-words {
      margin-left: 5px;
      margin-right: 5px;
      &.el-select {
        .el-input {
          .el-input__inner {
            width: 90px;
          }
        }
      }
    }
    .jtsgypfxPage-select-six-words {
      &.el-select {
        .el-input {
          .el-input__inner {
            padding-left: 10px;
            width: 120px;
          }
        }
      }
    }
    .marginLeft5 {
      margin-left: 5px;
    }
    .el-select {
      .el-input {
        .el-input__inner {
          padding-left: 10px;
          width: 55px;
          height: 22px;
          line-height: 22px;
          font-size: 12px;
          color: #7fb3df;
          background-color: transparent;
          border: 1px solid #7fb3df;
          border-radius: 0;
        }
        .el-input__suffix {
          .el-input__suffix-inner {
            i {
              &.el-select__caret {
                font-size: 14px;
                color: #7fb3df;
                height: 22px;
                line-height: 22px;
              }
            }
          }
        }
      }
    }
  }
  .zddxfxPage-time-zone {
    position: absolute;
    right: 20px;
    top: 15px;
    z-index: 999;
    .el-input {
      float: left;
      width: 100px;
      .el-input__inner {
        padding-left: 10px;
        width: 100%;
        font-size: 12px;
        height: 22px;
        line-height: 22px;
        color: #7fb3df;
        background-color: transparent;
        border: 1px solid #7fb3df;
        border-radius: 0;
      }
      .el-input__suffix {
        .el-input__suffix-inner {
          i {
            &.el-icon-date {
              font-size: 12px;
              color: #ffe00c;
              height: 22px;
              line-height: 22px;
            }
          }
        }
      }
    }
    span {
      &.time-text {
        float: left;
        height: 22px;
        line-height: 24px;
        color: #fff;
        font-size: 14px;
        padding: 0 10px;
      }
    }
  }
  .zddxfxPage-content {
    width: 100%;
    padding-top: 15px;
    padding: 20px 24px 20px 24px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    .zddxfxPage-line-chart-content {
      width: 100%;
      &.marginTop24 {
        margin-top: 40px;
      }
      .zddxfxPage-line-chart-detail {
        width: 100%;
        margin-top: 15px;
        border: 2px solid #173077;
        position: relative;
        box-sizing: border-box;
      }
    }
    .zddxfxPage-left-zone {
      float: left;
      width: 30%;
      padding-right: 24px;
      box-sizing: border-box;
    }
    .zddxfxPage-middle-zone {
      float: left;
      width: 40%;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      .zddxfxPage-middle-container {
        width: 100%;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        position: relative;

        .zddxfxPage-middle-bottom {
          width: 100%;
          padding-top: 20px;
          .zddxfxPage-middle-bottom-left {
            float: left;
            width: 45%;
            padding: 0 20px 0 20px;
            box-sizing: border-box;
          }
          .zddxfxPage-middle-bottom-right {
            float: left;
            width: 55%;
            padding-left: 50px;
            box-sizing: border-box;
            margin-top: 30px;
            ul {
              width: 100%;
              li {
                float: left;
                width: 50%;
                padding-left: 10px;
                padding-bottom: 25px;
                box-sizing: border-box;
                &:last-child {
                  padding-bottom: 0;
                }
                .zddxfxPage-middle-circle-text {
                  width: 100%;
                  span {
                    color: #fff;
                    font-size: 14px;
                  }
                  b {
                    color: #fff;
                    font-weight: normal;
                    font-size: 14px;
                  }
                }
                .zddxfxPage-middle-circle-num {
                  width: 100%;
                  margin-top: 15px;
                  i {
                    display: inline-block;
                    text-align: center;
                    width: 22px;
                    line-height: 36px;
                    height: 36px;
                    color: #fff;
                    background-color: #01a2fc;
                    border: 1px solid #2d37ae;
                    font-style: normal;
                    font-size: 24px;
                    margin-right: 10px;
                    vertical-align: bottom;
                  }
                  span {
                    display: inline-block;
                    color: #fff;
                    margin-left: 5px;
                    font-size: 14px;
                  }
                }
              }
            }
          }
        }
      }
    }
    .zddxfxPage-right-zone {
      float: left;
      width: 30%;
      padding-left: 24px;
      box-sizing: border-box;
      .zddxfxPage-important-car-people {
        width: 100%;
        height: 410px;
        ul {
          width: 100%;
          padding: 0 60px;
          box-sizing: border-box;
          li {
            float: left;
            width: 50%;
            padding-right: 40px;
            box-sizing: border-box;
            &:nth-child(2n) {
              float: right;
              padding-right: 0;
              padding-left: 40px;
            }
            div {
              width: 100%;
              margin-top: 55px;
              span {
                display: inline-block;
                text-align: center;
                width: 20px;
                line-height: 35px;
                height: 36px;
                color: #fff;
                background-color: #01a2fc;
                border: 1px solid #2d37ae;
                font-style: normal;
                font-size: 24px;
                margin-right: 10px;
                vertical-align: bottom;
              }
              b {
                display: inline-block;
                padding-left: 5px;
                color: #fff;
                font-size: 12px;
              }
            }
            p {
              width: 100%;
              color: #fff;
              font-size: 16px;
              margin-top: 10px;
            }
          }
        }
      }
    }
  }
}
</style>
