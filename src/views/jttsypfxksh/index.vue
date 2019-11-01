<template>
  <!--警情大数据-->
  <div class="jtsgypfxPage">
    <jtksh-head :headTitle="headTitle"></jtksh-head>
    <div class="jtsgypfxPage-content clearfloat">
      <div class="jtsgypfxPage-left-zone">
        <div class="jtsgypfxPage-line-chart-content">
          <div class="jtsgypfxPage-line-chart-title">重点路段结果分析展示</div>
          <div class="jtsgypfxPage-line-chart-detail">
            <div class="border-top-left"></div>
            <div class="border-top-right"></div>
            <div class="border-bottom-left"></div>
            <div class="border-bottom-right"></div>
            <div class="jtsgypfxPage-select-zone">
              <el-select v-model="dateValue1" placeholder="请选择"  @change="changeDateValue('one')">
                  <el-option
                  v-for="item in dateOptions1"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                  </el-option>
              </el-select>
            </div>
            <bar-line :optionName="dateValue1" :barLineId="dateValue1" :heightClass="barLineObj.heightClass" ref="barLineRef1"></bar-line>
          </div>
        </div>
        <div class="jtsgypfxPage-line-chart-content marginTop24">
          <div class="jtsgypfxPage-line-chart-title">路网交通流量研判结果展示</div>
          <div class="jtsgypfxPage-line-chart-detail">
            <div class="border-top-left"></div>
            <div class="border-top-right"></div>
            <div class="border-bottom-left"></div>
            <div class="border-bottom-right"></div>
            <div class="jtsgypfxPage-time-zone">
              <el-input v-model="timeStartStr" placeholder="请选择时间" :readonly="true" suffix-icon="el-icon-date"></el-input>
              <span class="time-text">至</span>
              <el-input v-model="timeEndStr" placeholder="请选择时间" :readonly="true" suffix-icon="el-icon-date"></el-input>
            </div>
            <single-stacked-area :optionName="singleStackedAreaObj.jttsypfxSingleStackedAreaOption1" :stackedAreaId="singleStackedAreaObj.optionId1" :heightClass="singleStackedAreaObj.heightClass" ref="singleStackedAreaRef"></single-stacked-area>
          </div>
        </div>
        <div class="jtsgypfxPage-line-chart-content marginTop24">
          <div class="jtsgypfxPage-line-chart-title">路网交通违法研判结果展示</div>
          <div class="jtsgypfxPage-line-chart-detail">
            <div class="border-top-left"></div>
            <div class="border-top-right"></div>
            <div class="border-bottom-left"></div>
            <div class="border-bottom-right"></div>
            <div class="jtsgypfxPage-select-zone">
              <el-select v-model="dateValueN1" placeholder="请选择">
                  <el-option
                  v-for="item in dateOptionsN1"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                  </el-option>
              </el-select>
              <el-select class="jtsgypfxPage-select-five-words" v-model="scoreSelectValue" placeholder="请选择" >
                  <el-option
                  v-for="item in scoreSelectOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                  </el-option>
              </el-select>
              <el-select class="jtsgypfxPage-select-two-words" v-model="dateValue2" placeholder="请选择"  @change="changeDateValue('two')">
                  <el-option
                  v-for="item in dateOptions2"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                  </el-option>
              </el-select>
            </div>
            <bar-line-t-b :optionName="dateValue2" :barLineId="dateValue2" :heightClass="barLineObj.heightClass" ref="barLineTBRef1"></bar-line-t-b>
          </div>
        </div>
        
      </div>
      <div class="jtsgypfxPage-middle-zone">
        <div class="jtsgypfxPage-line-chart-content">
          <div class="jtsgypfxPage-line-chart-title">警力资源优化研判结果展示</div> 
          <div class="jtsgypfxPage-middle-container">
            <div class="border-top-left"></div>
            <div class="border-top-right"></div>
            <div class="border-bottom-left"></div>
            <div class="border-bottom-right"></div>
            <div class="jtsgypfxPage-map-zone">
              <span class="jtsgypfxPage-map-img"></span>
              <span class="jtsgypfxPage-map-name-text"></span>
              <span class="jtsgypfxPage-map-pop"></span>
            </div>
            <div class="jtsgypfxPage-middle-bottom">
              <div class="jtsgypfxPage-select-zone clearfloat">
                <el-select v-model="dateValue6" placeholder="请选择" @change="changeDateValue('six')">
                    <el-option
                    v-for="item in dateOptions6"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                <!-- <el-select class="jtsgypfxPage-select-five-words" v-model="scoreSelectValue" placeholder="请选择" >
                    <el-option
                    v-for="item in scoreSelectOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                <el-select class="jtsgypfxPage-select-two-words" v-model="totalScoreSelectValue" placeholder="请选择" >
                    <el-option
                    v-for="item in totalScoreSelectOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select> -->
              </div>
              <div class="bar-line-mix-legend clearfloat">
                <div class="bar-line-mix-legend-red">
                  <span v-show="dateValue6 === 'jttsypfxCircleCompOption5Month'">今年日均工作量</span>
                  <span v-show="dateValue6 === 'jttsypfxCircleCompOption5Quarter'">今年月均均工作量</span>
                  <span v-show="dateValue6 === 'jttsypfxCircleCompOption5HalfYear'">今年年均工作量</span>
                </div>
                <div class="bar-line-mix-legend-green">
                  <span v-show="dateValue6 === 'jttsypfxCircleCompOption5Month'">去年日均工作量</span>
                  <span v-show="dateValue6 === 'jttsypfxCircleCompOption5Quarter'">去年月均工作量</span>
                  <span v-show="dateValue6 === 'jttsypfxCircleCompOption5HalfYear'">去年年均工作量</span>
                </div>
              </div>
              <div class="bar-line-mix-hr-month" v-show="dateValue6 === 'jttsypfxCircleCompOption5Month'">
                <div class="bar-line-mix-hr-green">
                  <span>44</span>
                </div>
                <div class="bar-line-mix-hr-red">
                  <span>33</span>
                </div>
              </div>
              <div class="bar-line-mix-hr-Quarter" v-show="dateValue6 === 'jttsypfxCircleCompOption5Quarter'">
                <div class="bar-line-mix-hr-green">
                  <span>1485</span>
                </div>
                <div class="bar-line-mix-hr-red">
                  <span>1120</span>
                </div>
              </div>
              <div class="bar-line-mix-hr-Year" v-show="dateValue6 === 'jttsypfxCircleCompOption5HalfYear'">
                <div class="bar-line-mix-hr-green">
                  <span>16210</span>
                </div>
                <div class="bar-line-mix-hr-red">
                  <span>12050</span>
                </div>
              </div>
              <bar-line-mix :optionName="dateValue6" :barLineMixId="dateValue6" :heightClass="barLineMixObj.heightClass" ref="barLineMixRef1"></bar-line-mix>  
            </div>
          </div>
        </div>
      </div>
      <div class="jtsgypfxPage-right-zone">
        <div class="jtsgypfxPage-line-chart-content">
          <div class="jtsgypfxPage-line-chart-title">路网交通事故研判分析结果展示</div>
          <div class="jtsgypfxPage-line-chart-detail">
            <div class="border-top-left"></div>
            <div class="border-top-right"></div>
            <div class="border-bottom-left"></div>
            <div class="border-bottom-right"></div>
            <div class="jtsgypfxPage-select-zone">
              <el-select class="jtsgypfxPage-select-two-words" v-model="dateValue3" placeholder="请选择"  @change="changeDateValue('three')">
                  <el-option
                  v-for="item in dateOptions3"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                  </el-option>
              </el-select>
            </div>
            <bar-line-t-b :optionName="dateValue3" :barLineId="dateValue3" :heightClass="barLineObj.heightClass" ref="barLineTBRef2"></bar-line-t-b>
          </div>
        </div>
        <div class="jtsgypfxPage-line-chart-content marginTop24">
          <div class="jtsgypfxPage-line-chart-title">交通警情研判结果分析</div>
          <div class="jtsgypfxPage-line-chart-detail">
            <div class="border-top-left"></div>
            <div class="border-top-right"></div>
            <div class="border-bottom-left"></div>
            <div class="border-bottom-right"></div>
            <div class="jtsgypfxPage-select-zone">
              <el-select class="jtsgypfxPage-select-two-words" v-model="dateValue4" placeholder="请选择"  @change="changeDateValue('four')">
                  <el-option
                  v-for="item in dateOptions4"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                  </el-option>
              </el-select>
            </div>
            <bar-line :optionName="dateValue4" :barLineId="dateValue4" :heightClass="barLineObj.heightClass" ref="barLineRef2"></bar-line>
          </div>
        </div>
        <div class="jtsgypfxPage-line-chart-content marginTop24">
          <div class="jtsgypfxPage-line-chart-title">路网交通气象研判结果分析</div>
          <div class="jtsgypfxPage-line-chart-detail">
            <div class="border-top-left"></div>
            <div class="border-top-right"></div>
            <div class="border-bottom-left"></div>
            <div class="border-bottom-right"></div>
            <div class="jtsgypfxPage-select-zone">
              <el-select class="jtsgypfxPage-select-two-words" v-model="dateValue5" placeholder="请选择"  @change="changeDateValue('five')">
                  <el-option
                  v-for="item in dateOptions5"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                  </el-option>
              </el-select>
            </div>
            <jttsypfx-circle :optionName="dateValue5" :jttsypfxCircleId="dateValue5" :heightClass="circleChartObj.heightClass" ref="jttsypfxCircleRef1"></jttsypfx-circle>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BarLine from '@/components/global/charts-core/BarLine.vue';
import SingleStackedArea from '@/components/global/charts-core/SingleStackedArea.vue';
import JtkshHead from '@/components/global/jtksh-head';
import BarLineTB from '@/components/global/charts-core/BarLineTB.vue';
import JttsypfxCircle from '@/components/global/charts-core/JttsypfxCircle.vue';
import BarLineMix from '@/components/global/charts-core/BarLineMix.vue';
import DateTimeFormat from 'format-date-time';

export default {
  name: 'Sgfxksh',
  components: {
    JtkshHead,
    BarLine,
    SingleStackedArea,
    BarLineTB,
    JttsypfxCircle,
    BarLineMix
    // HubeiMap
  },
  data() {
    return {
      headTitle: '交通态势研判分析',
      barLineObj: {
        heightClass: 'height250'
      },
      singleStackedAreaObj: {
        heightClass: 'height250',
        jttsypfxSingleStackedAreaOption1: 'jttsypfxSingleStackedAreaOption1',
        optionId1: 'jttsypfxSingleStackedAreaId1'
      },
      circleChartObj: {
        heightClass: 'height250'
      },
      barLineMixObj: {
        heightClass: 'height350'
      },
      sgfxCircleDetailData: [
        {
          value: [2, 0, 0, 0],
          name: '武汉市',
          percentValue: '24%'
        },
        {
          value: [1, 0, 0, 0],
          name: '荆州市',
          percentValue: '12%'
        },
        {
          value: [9, 0, 0],
          name: '咸宁市',
          percentValue: '11%'
        },
        {
          value: [1, 1, 0, 0],
          name: '十堰市',
          percentValue: '13%'
        },
        {
          value: [1, 9, 0, 0],
          name: '宜昌市',
          percentValue: '23%'
        },
        {
          value: [1, 5, 0, 0],
          name: '襄樊市',
          percentValue: '18%'
        }
      ],
      dateValueN1: '0',
      dateOptionsN1: [
        {
          value: '0',
          label: '日'
        },
        {
          value: '1',
          label: '月'
        },
        {
          value: '2',
          label: '年'
        }
      ],
      dateValue1: 'jttsypfxBarLineOption1Day',
      dateOptions1: [
        {
          value: 'jttsypfxBarLineOption1Day',
          label: '日'
        },
        {
          value: 'jttsypfxBarLineOption1Month',
          label: '月'
        },
        {
          value: 'jttsypfxBarLineOption1Year',
          label: '年'
        }
      ],
      dateValue2: 'jttsypfxBarLineCompOption1TB',
      dateOptions2: [
        {
          value: 'jttsypfxBarLineCompOption1TB',
          label: '同比'
        },
        {
          value: 'jttsypfxBarLineCompOption1HB',
          label: '环比'
        }
      ],
      dateValue3: 'jttsypfxBarLineCompOption2TB',
      dateOptions3: [
        {
          value: 'jttsypfxBarLineCompOption2TB',
          label: '同比'
        },
        {
          value: 'jttsypfxBarLineCompOption2HB',
          label: '环比'
        }
      ],
      dateValue4: 'jttsypfxBarLineCompOption3TB',
      dateOptions4: [
        {
          value: 'jttsypfxBarLineCompOption3TB',
          label: '同比'
        },
        {
          value: 'jttsypfxBarLineCompOption3HB',
          label: '环比'
        }
      ],
      dateValue5: 'jttsypfxCircleCompOption4TB',
      dateOptions5: [
        {
          value: 'jttsypfxCircleCompOption4TB',
          label: '同比'
        },
        {
          value: 'jttsypfxCircleCompOption4HB',
          label: '环比'
        }
      ],
      dateValue6: 'jttsypfxCircleCompOption5Month',
      dateOptions6: [
        {
          value: 'jttsypfxCircleCompOption5Month',
          label: '日'
        },
        {
          value: 'jttsypfxCircleCompOption5Quarter',
          label: '月'
        },
        {
          value: 'jttsypfxCircleCompOption5HalfYear',
          label: '年'
        }
      ],
      scoreSelectValue: '1',
      scoreSelectOptions: [
        {
          value: '1',
          label: '1分~3分'
        },
        {
          value: '2',
          label: '3分~6分'
        },
        {
          value: '3',
          label: '6分~9分'
        },
        {
          value: '4',
          label: '9分~12分'
        }
      ],
      totalScoreSelectValue: '1',
      totalScoreSelectOptions: [
        {
          value: '1',
          label: '1分'
        },
        {
          value: '2',
          label: '2分'
        },
        {
          value: '3',
          label: '3分'
        },
        {
          value: '4',
          label: '4分'
        },
        {
          value: '5',
          label: '5分'
        },
        {
          value: '6',
          label: '6分'
        },
        {
          value: '7',
          label: '7分'
        },
        {
          value: '8',
          label: '8分'
        },
        {
          value: '9',
          label: '9分'
        },
        {
          value: '10',
          label: '10分'
        },
        {
          value: '11',
          label: '11分'
        },
        {
          value: '12',
          label: '12分'
        }
      ],
      timeStartStr: '2019年7月',
      timeEndStr: '2019年7月'
    };
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      // const defaultFormatter = new DateTimeFormat();
      // this.timeStartStr = defaultFormatter.now('YYYY年MM月DD日');
    });
  },
  methods: {
    // 日月年下拉框选择
    changeDateValueLine(name) {},
    // 日月年下拉框选择
    changeDateValue(name) {
      if (name === 'one') {
        this.$refs.barLineRef1.drawChart(this.dateValue1);
      } else if (name === 'two') {
        this.$refs.barLineTBRef1.drawChart(this.dateValue2);
      } else if (name === 'three') {
        this.$refs.barLineTBRef2.drawChart(this.dateValue3);
      } else if (name === 'four') {
        this.$refs.barLineRef2.drawChart(this.dateValue4);
      } else if (name === 'five') {
        this.$refs.jttsypfxCircleRef1.drawChart(this.dateValue5);
      } else if (name === 'six') {
        this.$refs.barLineMixRef1.drawChart(this.dateValue6);
      }
    }
  }
};
</script>

<style lang="scss">
$BaseColor: #7fb3df;
.jtsgypfxPage {
  width: 100%;
  height: 100%;
  position: relative;
  background: url('../../assets/images/jtkshxt/bg_ksh.png') no-repeat center center;
  background-size: 100% 100%;
  .jtsgypfxPage-line-chart-title {
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
  .jtsgypfxPage-select-zone {
    position: absolute;
    right: 15px;
    top: 10px;
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
            width: 120px;
          }
        }
      }
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
  .jtsgypfxPage-time-zone {
    position: absolute;
    right: 20px;
    top: 15px;
    z-index: 999;
    &.time-year-month-date {
      .el-input {
        width: 160px;
        .el-input__inner {
          width: 100%;
          border-radius: 0;
        }
      }
    }
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
        font-size: 12px;
        padding: 0 10px;
      }
    }
  }
  .jtsgypfxPage-content {
    width: 100%;
    padding-top: 15px;
    padding: 20px 24px 20px 24px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    .jtsgypfxPage-line-chart-content {
      width: 100%;
      &.marginTop24 {
        margin-top: 40px;
      }
      .jtsgypfxPage-line-chart-detail {
        width: 100%;
        margin-top: 15px;
        border: 2px solid #173077;
        position: relative;
        box-sizing: border-box;
      }
    }
    .jtsgypfxPage-left-zone {
      float: left;
      width: 28%;
      padding-right: 24px;
      box-sizing: border-box;
    }
    .jtsgypfxPage-middle-zone {
      float: left;
      width: 44%;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      .jtsgypfxPage-middle-container {
        width: 100%;
        margin-top: 15px;
        height: 908px;
        border: 2px solid #173077;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        position: relative;
        .jtsgypfxPage-map-zone {
          width: 100%;
          height: 450px;
          text-align: center;
          position: relative;
          span {
            display: inline-block;
            width: 739.1px;
            height: 467.4px;
            &.jtsgypfxPage-map-img {
              position: absolute;
              z-index: 9;
              top: 0px;
              left: 50%;
              margin-left: -369px;
              background: url('../../assets/images/jtkshxt/bg_map_base.png') no-repeat center center;
              background-size: 100% 100%;
            }
            &.jtsgypfxPage-map-name-text {
              position: absolute;
              z-index: 10;
              top: -15px;
              left: 50%;
              margin-left: -369px;
              background: url('../../assets/images/jtkshxt/bg_map_name.png') no-repeat center center;
              background-size: 100% 100%;
            }
            &.jtsgypfxPage-map-pop {
              position: absolute;
              z-index: 11;
              top: 15px;
              left: 50%;
              margin-left: -359px;
              background: url('../../assets/images/jtkshxt/bg_map_pop3.png') no-repeat center center;
              background-size: 100% 100%;
            }
          }
        }
        .jtsgypfxPage-middle-bottom {
          width: 100%;
          margin-top: 50px;
          padding-top: 40px;
          position: relative;
          .bar-line-mix-hr-month {
            position: absolute;
            width: calc(100% - 104px);
            height: 350px;
            top: 0;
            left: 54px;
            .bar-line-mix-hr-green {
              position: absolute;
              width: 100%;
              height: 1px;
              bottom: 110px;
              left: 0;
              z-index: 999;
              border-top: 1px dashed #1bff4b;
              span {
                position: absolute;
                color: #7fb3df;
                font-size: 12px;
                right: -20px;
                top: -8px;
              }
            }
            .bar-line-mix-hr-red {
              position: absolute;
              width: 100%;
              height: 1px;
              bottom: 80px;
              left: 0;
              z-index: 999;
              border-top: 1px dashed #ff0000;
              span {
                position: absolute;
                color: #7fb3df;
                font-size: 12px;
                right: -20px;
                top: -8px;
              }
            }
          }
          .bar-line-mix-hr-Quarter {
            position: absolute;
            width: calc(100% - 114px);
            height: 350px;
            top: 0;
            left: 54px;
            .bar-line-mix-hr-green {
              position: absolute;
              width: 100%;
              height: 1px;
              bottom: 120px;
              left: 10px;
              z-index: 999;
              border-top: 1px dashed #1bff4b;
              span {
                position: absolute;
                color: #7fb3df;
                font-size: 12px;
                right: -30px;
                top: -8px;
              }
            }
            .bar-line-mix-hr-red {
              position: absolute;
              width: 100%;
              height: 1px;
              bottom: 90px;
              left: 10px;
              z-index: 999;
              border-top: 1px dashed #ff0000;
              span {
                position: absolute;
                color: #7fb3df;
                font-size: 12px;
                right: -30px;
                top: -8px;
              }
            }
          }
          .bar-line-mix-hr-Year {
            position: absolute;
            width: calc(100% - 124px);
            height: 350px;
            top: 0;
            left: 54px;
            .bar-line-mix-hr-green {
              position: absolute;
              width: 100%;
              height: 1px;
              bottom: 135px;
              left: 18px;
              z-index: 999;
              border-top: 1px dashed #1bff4b;
              span {
                position: absolute;
                color: #7fb3df;
                font-size: 12px;
                right: -35px;
                top: -8px;
              }
            }
            .bar-line-mix-hr-red {
              position: absolute;
              width: 100%;
              height: 1px;
              bottom: 100px;
              left: 18px;
              border-top: 1px dashed #ff0000;
              z-index: 999;
              span {
                position: absolute;
                color: #7fb3df;
                font-size: 12px;
                right: -35px;
                top: -8px;
              }
            }
          }
          .bar-line-mix-legend {
            position: absolute;
            left: 40px;
            top: 15px;
            height: 20px;
            .bar-line-mix-legend-red {
              float: left;
              position: relative;
              &::before {
                display: inline-block;
                content: '';
                position: absolute;
                width: 10px;
                height: 4px;
                background-color: #f00;
                top: 7px;
                left: 18px;
              }
              span {
                color: $BaseColor;
                font-size: 12px;
                padding-left: 35px;
                position: relative;
              }
            }
            .bar-line-mix-legend-green {
              float: left;
              position: relative;
              &::before {
                display: inline-block;
                content: '';
                position: absolute;
                width: 10px;
                height: 4px;
                background-color: #1bff4b;
                top: 7px;
                left: 18px;
              }
              span {
                color: $BaseColor;
                font-size: 12px;
                padding-left: 35px;
              }
            }
          }
        }
      }
    }
    .jtsgypfxPage-right-zone {
      float: left;
      width: 28%;
      padding-left: 24px;
      box-sizing: border-box;
    }
  }
}
</style>
