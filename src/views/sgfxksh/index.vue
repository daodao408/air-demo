<template>
  <!--警情大数据-->
  <div class="sgfxPage">
    <jtksh-head :headTitle="headTitle"></jtksh-head>
    <div class="sgfxPage-content clearfloat">
      <div class="sgfxPage-left-zone">
        <div class="sgfxPage-line-chart-content">
          <div class="sgfxPage-line-chart-title">交通事故时间段分析</div>
          <div class="sgfxPage-line-chart-detail">
            <div class="border-top-left"></div>
            <div class="border-top-right"></div>
            <div class="border-bottom-left"></div>
            <div class="border-bottom-right"></div>
            <div class="sgfxPage-select-zone">
              <el-select v-model="dateValue4" placeholder="请选择"  @change="changeDateValue('four')">
                  <el-option
                  v-for="item in dateOptions4"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                  </el-option>
              </el-select>
            </div>
            <single-stacked-area :optionName="dateValue4" :stackedAreaId="dateValue4" :heightClass="singleStackedAreaObj.heightClass" ref="singleStackedAreaRef4"></single-stacked-area>
          </div>
        </div>
        <div class="sgfxPage-line-chart-content marginTop24">
          <div class="sgfxPage-line-chart-title">交通事故成因分析</div>
          <div class="sgfxPage-line-chart-detail">
            <div class="border-top-left"></div>
            <div class="border-top-right"></div>
            <div class="border-bottom-left"></div>
            <div class="border-bottom-right"></div>
            <div class="sgfxPage-select-zone">
              <el-select v-model="dateValue2" placeholder="请选择"  @change="changeDateValue('two')">
                  <el-option
                  v-for="item in dateOptions2"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                  </el-option>
              </el-select>
            </div>
            <bar-line :optionName="dateValue2" :barLineId="dateValue2" :heightClass="barLineObj.heightClass" ref="barLineRef2"></bar-line>
          </div>
        </div>
      </div>
      <div class="sgfxPage-middle-zone">
        <div class="sgfxPage-line-chart-content">
          <div class="sgfxPage-line-chart-title">交通事故热点分析</div> 
          <div class="sgfxPage-middle-container">
            <div class="border-top-left"></div>
            <div class="border-top-right"></div>
            <div class="border-bottom-left"></div>
            <div class="border-bottom-right"></div>
            <div class="sgfxPage-select-zone">
              <el-select class="sgfxPage-select-four-words" v-model="dateValue5" placeholder="请选择"  @change="changeDateValue('six')">
                  <el-option
                  v-for="item in dateOptions5"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                  </el-option>
              </el-select>
            </div>
            <div class="sgfxPage-map-zone" v-show="dateValue5 === 'sgrd'">
              <span class="sgfxPage-map-img"></span>
              <span class="sgfxPage-map-name-text"></span>
              <span class="sgfxPage-map-pop"></span>
            </div>
            <div class="sgfxPage-map-zone" v-show="dateValue5 === 'sgyj'">
              <span class="sgfxPage-map-img"></span>
              <span class="sgfxPage-map-name-text"></span>
              <span class="sgfxPage-map-weather"></span>
            </div>
            <div class="sgfxPage-middle-bottom clearfloat">
              <div class="sgfxPage-middle-bottom-left">
                <sgfx-circle ref="sgfxCircleRef"></sgfx-circle>
              </div>
              <div class="sgfxPage-middle-bottom-right">
                <ul>
                  <li v-for="(item,index) in sgfxCircleDetailData" :key="index">
                    <div class="sgfxPage-middle-circle-text">
                      <span>{{item.name}}：</span>
                      <b>{{item.percentValue}}</b>
                    </div>
                    <div class="sgfxPage-middle-circle-num">
                      <i v-for="(item1,index1) in item.value" :key="index1">{{item1}}</i>
                      <span>个</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- <hubei-map></hubei-map>    -->
      </div>
      <div class="sgfxPage-right-zone">
        <div class="sgfxPage-line-chart-content">
          <div class="sgfxPage-line-chart-title">交通事故辖区分析</div>
          <div class="sgfxPage-line-chart-detail">
            <div class="border-top-left"></div>
            <div class="border-top-right"></div>
            <div class="border-bottom-left"></div>
            <div class="border-bottom-right"></div>
            <div class="sgfxPage-select-zone">
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
        <div class="sgfxPage-line-chart-content marginTop24">
          <div class="sgfxPage-line-chart-title">交通事故变化趋势分析</div>
          <div class="sgfxPage-line-chart-detail">
            <div class="border-top-left"></div>
            <div class="border-top-right"></div>
            <div class="border-bottom-left"></div>
            <div class="border-bottom-right"></div>
            <div class="sgfxPage-select-zone">
              <el-select class="sgfxPage-select-two-words" v-model="dateValue3" placeholder="请选择"  @change="changeDateValue('three')">
                  <el-option
                  v-for="item in dateOptions3"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                  </el-option>
              </el-select>
              <el-select class="sgfxPage-select-two-words marginLeft8" v-model="dateCityValue" placeholder="请选择"  @change="changeDateValue('five')">
                  <el-option
                  v-for="item in dateCityOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                  </el-option>
              </el-select>
            </div>
            <!-- <single-stacked-area :optionName="dateValue3" :stackedAreaId="dateValue3" :heightClass="singleStackedAreaObj.heightClass" ref="singleStackedAreaRef3"></single-stacked-area> -->
            <bar-line :optionName="barLineDoubleChangeValue" :barLineId="barLineDoubleChangeValue" :heightClass="barLineObj.heightClass" ref="barLineRef3"></bar-line>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BarLine from '@/components/global/charts-core/BarLine.vue';
import SingleStackedArea from '@/components/global/charts-core/SingleStackedArea.vue';
import SgfxCircle from '@/components/global/charts-core/SgfxCircle.vue';
// import HubeiMap from '@/components/global/charts-core/HubeiMap.vue';
import JtkshHead from '@/components/global/jtksh-head';

export default {
  name: 'Sgfxksh',
  components: {
    JtkshHead,
    BarLine,
    SingleStackedArea,
    SgfxCircle
    // HubeiMap
  },
  data() {
    return {
      headTitle: '交通事故分析',
      barLineObj: {
        heightClass: 'height410',
        jtsgfxBarLineOption1: 'jtsgfxBarLineOption1',
        optionId1: 'jtsgfxBarLineId1',
        jtsgfxBarLineOption2: 'jtsgfxBarLineOption2',
        optionId2: 'jtsgfxBarLineId2',
        jtsgfxBarLineOption3: 'jtsgfxBarLineOption3',
        optionId3: 'jtsgfxBarLineId3'
      },
      singleStackedAreaObj: {
        heightClass: 'height410',
        jtsgfxSingleStackedAreaOption1: 'jtsgfxSingleStackedAreaOption1',
        optionId1: 'singleStackedAreaId1'
      },
      sgfxCircleDetailData: [
        {
          value: [3, 5, 4, 8],
          name: '武汉市',
          percentValue: '24%'
        },
        {
          value: [2, 7, 8, 1],
          name: '荆州市',
          percentValue: '12%'
        },
        {
          value: [9, 7, 5],
          name: '咸宁市',
          percentValue: '11%'
        },
        {
          value: [3, 1, 2, 4],
          name: '十堰市',
          percentValue: '13%'
        },
        {
          value: [2, 9, 5, 2],
          name: '宜昌市',
          percentValue: '23%'
        },
        {
          value: [1, 5, 1, 7],
          name: '襄樊市',
          percentValue: '18%'
        }
      ],
      dateValue1: 'jtsgfxBarLineOption1Day',
      dateOptions1: [
        {
          value: 'jtsgfxBarLineOption1Day',
          label: '日'
        },
        {
          value: 'jtsgfxBarLineOption1Month',
          label: '月'
        },
        {
          value: 'jtsgfxBarLineOption1Year',
          label: '年'
        }
      ],
      dateValue2: 'jtsgfxBarLineOption2Day',
      dateOptions2: [
        {
          value: 'jtsgfxBarLineOption2Day',
          label: '日'
        },
        {
          value: 'jtsgfxBarLineOption2Month',
          label: '月'
        },
        {
          value: 'jtsgfxBarLineOption2Year',
          label: '年'
        }
      ],
      dateValue3: 'jtsgfxBarLineOption3TB',
      dateOptions3: [
        {
          value: 'jtsgfxBarLineOption3TB',
          label: '同比'
        },
        {
          value: 'jtsgfxBarLineOption3HB',
          label: '环比'
        }
      ],
      dateValue4: 'jtsgfxSingleStackedAreaOption4Day',
      dateOptions4: [
        {
          value: 'jtsgfxSingleStackedAreaOption4Day',
          label: '日'
        },
        {
          value: 'jtsgfxSingleStackedAreaOption4Month',
          label: '月'
        },
        {
          value: 'jtsgfxSingleStackedAreaOption4Year',
          label: '年'
        }
      ],
      dateValue5: 'sgrd',
      dateOptions5: [
        {
          value: 'sgrd',
          label: '事故热点'
        },
        {
          value: 'sgyj',
          label: '事故预警'
        }
      ],
      dateCityValue: 'wuhan',
      dateCityOptions: [
        {
          value: 'wuhan',
          label: '武汉'
        },
        {
          value: 'huangshi',
          label: '黄石'
        },
        {
          value: 'xiangfan',
          label: '襄樊'
        },
        {
          value: 'jingzhou',
          label: '荆州'
        },
        {
          value: 'yichang',
          label: '宜昌'
        },
        {
          value: 'shiyan',
          label: '十堰'
        },
        {
          value: 'xiaogan',
          label: '孝感'
        },
        {
          value: 'jingmen',
          label: '荆门'
        },
        {
          value: 'ezhou',
          label: '鄂州'
        },
        {
          value: 'huanggang',
          label: '黄冈'
        },
        {
          value: 'xianning',
          label: '咸宁'
        },
        {
          value: 'suizhou',
          label: '随州'
        },
        {
          value: 'qianjiang',
          label: '潜江'
        },
        {
          value: 'xiantao',
          label: '仙桃'
        },
        {
          value: 'shennongjia',
          label: '神农架'
        },
        {
          value: 'enshi',
          label: '恩施'
        },
        {
          value: 'tianmen',
          label: '天门'
        }
      ],
      barLineDoubleChangeValue: 'jtsgfxBarLineOption3TB',
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
      if (name === 'one') {
        this.$refs.barLineRef1.drawChart(this.dateValue1);
      } else if (name === 'two') {
        this.$refs.barLineRef2.drawChart(this.dateValue2);
      } else if (name === 'three') {
        if (this.dateValue3 == 'jtsgfxBarLineOption3TB') {
          this.barLineDoubleChangeValue = 'jtsgfxBarLineOption3TB';
        } else if (this.dateValue3 == 'jtsgfxBarLineOption3HB') {
          this.barLineDoubleChangeValue = 'jtsgfxBarLineOption3HB';
        }
        this.$refs.barLineRef3.drawChart(this.barLineDoubleChangeValue);
      } else if (name === 'four') {
        this.$refs.singleStackedAreaRef4.drawChart(this.dateValue4);
      } else if (name === 'five') {
        if (this.dateCityValue === 'wuhan') {
          this.barLineDoubleChangeValue = 'jtsgfxBarLineOptionWuHan';
        } else if (this.dateCityValue === 'huangshi') {
          this.barLineDoubleChangeValue = 'jtsgfxBarLineOptionHuangShi';
        }
        this.$refs.barLineRef3.drawChart(this.barLineDoubleChangeValue);
      }
    }
  }
};
</script>

<style lang="scss">
$BaseColor: #7fb3df;
.sgfxPage {
  width: 100%;
  height: 100%;
  position: relative;
  background: url('../../assets/images/jtkshxt/bg_ksh.png') no-repeat center center;
  background-size: 100% 100%;
  .sgfxPage-line-chart-title {
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
  .sgfxPage-select-zone {
    position: absolute;
    right: 20px;
    top: 15px;
    z-index: 999;
    .sgfxPage-select-two-words {
      &.el-select {
        .el-input {
          .el-input__inner {
            width: 70px;
          }
        }
      }
    }
    .sgfxPage-select-four-words {
      &.el-select {
        .el-input {
          .el-input__inner {
            width: 95px;
          }
        }
      }
    }
    .marginLeft8 {
      margin-left: 8px;
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
  .sgfxPage-time-zone {
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
  .sgfxPage-content {
    width: 100%;
    padding-top: 15px;
    padding: 20px 24px 20px 24px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    .sgfxPage-line-chart-content {
      width: 100%;
      &.marginTop24 {
        margin-top: 40px;
      }
      .sgfxPage-line-chart-detail {
        width: 100%;
        margin-top: 15px;
        border: 2px solid #173077;
        position: relative;
        box-sizing: border-box;
      }
    }
    .sgfxPage-left-zone {
      float: left;
      width: 28%;
      padding-right: 24px;
      box-sizing: border-box;
    }
    .sgfxPage-middle-zone {
      float: left;
      width: 44%;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      .sgfxPage-middle-container {
        width: 100%;
        margin-top: 15px;
        height: 900px;
        border: 2px solid #173077;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        position: relative;
        .sgfxPage-map-zone {
          width: 100%;
          height: 450px;
          text-align: center;
          position: relative;
          span {
            display: inline-block;
            width: 739.1px;
            height: 467.4px;
            &.sgfxPage-map-img {
              position: absolute;
              z-index: 9;
              top: 0px;
              left: 50%;
              margin-left: -369px;
              background: url('../../assets/images/jtkshxt/bg_map_base.png') no-repeat center center;
              background-size: 100% 100%;
            }
            &.sgfxPage-map-name-text {
              position: absolute;
              z-index: 10;
              top: -15px;
              left: 50%;
              margin-left: -369px;
              background: url('../../assets/images/jtkshxt/bg_map_name.png') no-repeat center center;
              background-size: 100% 100%;
            }
            &.sgfxPage-map-pop {
              position: absolute;
              z-index: 11;
              top: -30px;
              left: 50%;
              margin-left: -389px;
              background: url('../../assets/images/jtkshxt/bg_map_pop2.png') no-repeat center center;
              background-size: 100% 100%;
            }
            &.sgfxPage-map-weather {
              position: absolute;
              z-index: 11;
              top: -30px;
              left: 50%;
              margin-left: -389px;
              background: url('../../assets/images/jtkshxt/bg_map_weather.png') no-repeat center center;
              background-size: 100% 100%;
            }
          }
        }
        .sgfxPage-middle-bottom {
          width: 100%;
          padding-top: 20px;
          .sgfxPage-middle-bottom-left {
            float: left;
            width: 50%;
            padding: 0 20px 0 20px;
            box-sizing: border-box;
          }
          .sgfxPage-middle-bottom-right {
            float: left;
            width: 45%;
            padding-left: 0;
            box-sizing: border-box;
            margin-top: 10px;
            ul {
              width: 100%;
              li {
                float: left;
                width: 50%;
                padding-left: 30px;
                padding-bottom: 25px;
                box-sizing: border-box;
                &:last-child {
                  padding-bottom: 0;
                }
                .sgfxPage-middle-circle-text {
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
                .sgfxPage-middle-circle-num {
                  width: 100%;
                  margin-top: 15px;
                  i {
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
    .sgfxPage-right-zone {
      float: left;
      width: 28%;
      padding-left: 24px;
      box-sizing: border-box;
    }
  }
}
</style>
