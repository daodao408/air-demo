<template>
  <!--警情大数据-->
  <div class="jtllfxPage">
    <jtksh-head :headTitle="headTitle"></jtksh-head>
    <div class="jtllfxPage-content clearfloat">
      <div class="jtllfxPage-left-zone">
        <div class="jtllfxPage-line-chart-content">
          <div class="jtllfxPage-line-chart-title">出入省流量分析</div>
          <div class="jtllfxPage-line-chart-detail">
            <div class="border-top-left"></div>
            <div class="border-top-right"></div>
            <div class="border-bottom-left"></div>
            <div class="border-bottom-right"></div>
            <div class="jtllfxPage-zone-1">
              <div class="jtllfxPage-zone-1-title">
                <ol class="clearfloat">
                  <li>省际卡口</li>
                  <li>出省流量</li>
                  <li>入省流量</li>
                </ol>
              </div>
              <div class="jtllfxPage-zone-1-content">
                <ul>
                  <li class="clearfloat" v-for="(item,index) in csllDataArr" :key="index">
                    <div class="jtllfxPage-zone-1-content-left">{{item.name}}</div>
                    <div class="jtllfxPage-zone-1-content-center">{{item.outProvince}}</div>
                    <div class="jtllfxPage-zone-1-content-right">{{item.inProvince}}</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="jtllfxPage-line-chart-content marginTop24">
          <div class="jtllfxPage-line-chart-title">车速统计</div>
          <div class="jtllfxPage-line-chart-detail">
            <div class="border-top-left"></div>
            <div class="border-top-right"></div>
            <div class="border-bottom-left"></div>
            <div class="border-bottom-right"></div>
            <div class="jtllfxPage-select-zone">
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
      </div>
      <div class="jtllfxPage-middle-zone">
        <div class="jtllfxPage-line-chart-content">
          <div class="jtllfxPage-line-chart-title">区域交通流量分析</div> 
          <div class="jtllfxPage-middle-container">
            <div class="border-top-left"></div>
            <div class="border-top-right"></div>
            <div class="border-bottom-left"></div>
            <div class="border-bottom-right"></div>
            <div class="jtllfxPage-time-zone">
              <el-input v-model="timeStartStr" placeholder="请选择时间" :readonly="true" suffix-icon="el-icon-date"></el-input>
              <span class="time-text">至</span>
              <el-input v-model="timeEndStr" placeholder="请选择时间" :readonly="true" suffix-icon="el-icon-date"></el-input>
            </div>
            <div class="jtllfxPage-map-legend">
              <ul>
                <li>
                  <i class="map-legend-green"></i>
                  <span>交通正常</span>
                </li>
                <li>
                  <i class="map-legend-yellow"></i>
                  <span>轻度拥堵</span>
                </li>
                <li>
                  <i class="map-legend-red"></i>
                  <span>严重拥堵</span>
                </li>
              </ul>
            </div>
            <div class="jtllfxPage-map-zone">
              <span class="jtllfxPage-map-img"></span>
              <span class="jtllfxPage-map-name-text"></span>
              <span class="jtllfxPage-map-pop"></span>
            </div>
            <div class="jtllfxPage-middle-bottom clearfloat">
              <div class="jtllfxPage-middle-bottom-content">
                <div class="jtllfxPage-middle-bottom-content-title">区域流量显示</div>
                <div class="carousel-arrow carousel-arrow-left" @click="carouselPrev"></div>
                <div class="carousel-arrow carousel-arrow-right" @click="carouselNext"></div>
                <div class="middle-carousel-container">
                  <el-carousel trigger="click" height="280px" arrow="always" :autoplay="false" ref="carouselRef">
                    <el-carousel-item v-for="(item,index) in jtllDetailDataAllArr" :key="index">
                      <ul>
                          <li v-for="(item1,index1) in item" :key="index1">
                            <div class="jtllfxPage-middle-circle-text">
                              <span>{{item1.name}}：</span>
                              <b>{{item1.percentValue}}</b>
                            </div>
                            <div class="jtllfxPage-middle-circle-num">
                              <i v-for="(item2,index2) in item1.value" :key="index2">{{item2}}</i>
                              <span>辆/h</span>
                            </div>
                          </li>
                        </ul>
                    </el-carousel-item>
                  </el-carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <hubei-map></hubei-map>    -->
      </div>
      <div class="jtllfxPage-right-zone">
        <div class="jtllfxPage-line-chart-content">
          <div class="jtllfxPage-line-chart-title">各高警大队交通流量排名</div>
          <div class="jtllfxPage-line-chart-detail">
            <div class="border-top-left"></div>
            <div class="border-top-right"></div>
            <div class="border-bottom-left"></div>
            <div class="border-bottom-right"></div>
            <div class="jtllfxPage-select-zone">
              <el-select v-model="dateValue2" placeholder="请选择"  @change="changeDateValue('two')">
                  <el-option
                  v-for="item in dateOptions2"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                  </el-option>
              </el-select>
            </div>
            <bar-line-rotation :optionName="dateValue2" :barLineRotationId="dateValue2" :heightClass="barLineRotationObj.heightClass" ref="barLineRotationRef1"></bar-line-rotation>
          </div>
        </div>
        <div class="jtllfxPage-line-chart-content marginTop24">
          <div class="jtllfxPage-line-chart-title">各个高峰拥堵路段排名</div>
          <div class="jtllfxPage-line-chart-detail">
            <div class="border-top-left"></div>
            <div class="border-top-right"></div>
            <div class="border-bottom-left"></div>
            <div class="border-bottom-right"></div>
            <div class="jtllfxPage-select-zone">
              <el-select v-model="dateValue3" placeholder="请选择"  @change="changeDateValue('three')">
                  <el-option
                  v-for="item in dateOptions3"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                  </el-option>
              </el-select>
            </div>
            <bar-line-rotation :optionName="dateValue3" :barLineRotationId="dateValue3" :heightClass="barLineRotationObj.heightClass" ref="barLineRotationRef2"></bar-line-rotation>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BarLine from '@/components/global/charts-core/BarLine.vue';
import BarLineRotation from '@/components/global/charts-core/BarLineRotation.vue';
import SingleStackedArea from '@/components/global/charts-core/SingleStackedArea.vue';
// import HubeiMap from '@/components/global/charts-core/HubeiMap.vue';
import JtkshHead from '@/components/global/jtksh-head';

export default {
  name: 'Jtllfxksh',
  components: {
    JtkshHead,
    BarLine,
    BarLineRotation
  },
  data() {
    return {
      headTitle: '交通流量分析',
      csllDataArr: [
        {
          name: '总和',
          outProvince: '211344辆/h',
          inProvince: '111344辆/h'
        },
        {
          name: '武汉某某卡口',
          outProvince: '61344辆/h',
          inProvince: '61344辆/h'
        },
        {
          name: '宜昌某某卡口',
          outProvince: '41344辆/h',
          inProvince: '31344辆/h'
        },
        {
          name: '十堰某某卡口',
          outProvince: '31344辆/h',
          inProvince: '31344辆/h'
        },
        {
          name: '黄冈某某卡口',
          outProvince: '21344辆/h',
          inProvince: '11344辆/h'
        },
        {
          name: '咸宁某某卡口',
          outProvince: '11344辆/h',
          inProvince: '10344辆/h'
        },
        {
          name: '黄石某某卡口',
          outProvince: '25123辆/h',
          inProvince: '30520辆/h'
        }
      ],
      barLineObj: {
        heightClass: 'height410'
      },
      barLineRotationObj: {
        heightClass: 'height410'
      },
      jtllDetailDataAllArr: [
        [
          {
            value: [1, 4, 5, 0, 5],
            name: '武汉市',
            percentValue: '23%'
          },
          {
            value: [7, 2, 0, 8],
            name: '荆州市',
            percentValue: '10%'
          },
          {
            value: [4, 5, 0, 5],
            name: '荆门市',
            percentValue: '7%'
          },
          {
            value: [4, 0, 0, 6],
            name: '襄樊市',
            percentValue: '8%'
          },
          {
            value: [3, 1, 0, 3],
            name: '咸宁市',
            percentValue: '5%'
          },
          {
            value: [5, 9, 0, 5],
            name: '宜昌市',
            percentValue: '8%'
          },
          {
            value: [2, 8, 0, 6],
            name: '黄冈市',
            percentValue: '6%'
          },
          {
            value: [2, 5, 0, 0],
            name: '天门市',
            percentValue: '5%'
          },
          {
            value: [2, 5, 8, 0],
            name: '十堰市',
            percentValue: '5%'
          }
        ],
        [
          {
            value: [1, 7, 0, 0],
            name: '随州市',
            percentValue: '3%'
          },
          {
            value: [1, 9, 5, 5],
            name: '潜江市',
            percentValue: '4%'
          },
          {
            value: [1, 6, 8, 5],
            name: '黄石市',
            percentValue: '3%'
          },
          {
            value: [1, 2, 5, 6],
            name: '鄂州市',
            percentValue: '2%'
          },
          {
            value: [1, 5, 5, 7],
            name: '孝感市',
            percentValue: '3%'
          },
          {
            value: [1, 5, 1, 9],
            name: '恩施州',
            percentValue: '3%'
          },
          {
            value: [1, 0, 0, 2],
            name: '神农架林区',
            percentValue: '2%'
          },
          {
            value: [1, 4, 5, 5],
            name: '仙桃市',
            percentValue: '3%'
          }
        ]
      ],
      // 车速统计切换
      dateValue1: 'jtllfxBarLineOption1Day',
      dateOptions1: [
        {
          value: 'jtllfxBarLineOption1Day',
          label: '日'
        },
        {
          value: 'jtllfxBarLineOption1Month',
          label: '月'
        },
        {
          value: 'jtllfxBarLineOption1Year',
          label: '年'
        }
      ],
      // 各地市交通流量排名切换
      dateValue2: 'jtllfxBarLineRotationOption2Day',
      dateOptions2: [
        {
          value: 'jtllfxBarLineRotationOption2Day',
          label: '日'
        },
        {
          value: 'jtllfxBarLineRotationOption2Month',
          label: '月'
        },
        {
          value: 'jtllfxBarLineRotationOption2Year',
          label: '年'
        }
      ],
      // 各个高峰拥堵路段排名切换
      dateValue3: 'jtllfxBarLineRotationOption3Day',
      dateOptions3: [
        {
          value: 'jtllfxBarLineRotationOption3Day',
          label: '日'
        },
        {
          value: 'jtllfxBarLineRotationOption3Month',
          label: '月'
        },
        {
          value: 'jtllfxBarLineRotationOption3Year',
          label: '年'
        }
      ],
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
        this.$refs.barLineRotationRef1.drawChart(this.dateValue2);
      } else if (name === 'three') {
        this.$refs.barLineRotationRef2.drawChart(this.dateValue3);
      }
    },
    // 走马灯控件左箭头点击切换前一页
    carouselPrev() {
      this.$refs.carouselRef.prev();
    },
    // 走马灯控件左箭头点击切换下一页一页
    carouselNext() {
      this.$refs.carouselRef.next();
    }
  }
};
</script>

<style lang="scss">
$BaseColor: #7fb3df;
.jtllfxPage {
  width: 100%;
  height: 100%;
  position: relative;
  background: url('../../assets/images/jtkshxt/bg_ksh.png') no-repeat center center;
  background-size: 100% 100%;
  .jtllfxPage-line-chart-title {
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
  .jtllfxPage-select-zone {
    position: absolute;
    right: 20px;
    top: 15px;
    z-index: 999;
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
  .jtllfxPage-time-zone {
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
  .jtllfxPage-content {
    width: 100%;
    padding-top: 15px;
    padding: 20px 24px 20px 24px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    .jtllfxPage-line-chart-content {
      width: 100%;
      &.marginTop24 {
        margin-top: 40px;
      }
      .jtllfxPage-line-chart-detail {
        width: 100%;
        margin-top: 15px;
        border: 2px solid #173077;
        position: relative;
        box-sizing: border-box;
      }
    }
    .jtllfxPage-left-zone {
      float: left;
      width: 28%;
      padding-right: 24px;
      box-sizing: border-box;
      .jtllfxPage-zone-1 {
        width: 100%;
        height: 410px;
        padding: 0 24px;
        box-sizing: border-box;
        .jtllfxPage-zone-1-title {
          width: 100%;
          border-bottom: 1px dashed #163369;
          ol {
            width: 100%;
            padding-top: 30px;
            padding-bottom: 20px;
            li {
              float: left;
              width: 40%;
              text-align: left;
              color: #fff;
              font-size: 16px;
              font-weight: 700;
              letter-spacing: 1.5px;
              &:last-child {
                width: 20%;
                text-align: right;
              }
            }
          }
        }
        .jtllfxPage-zone-1-content {
          width: 100%;
          ul {
            width: 100%;
            li {
              width: 100%;
              margin-top: 28px;
              &:first-child {
                div {
                  color: #026eb3;
                }
              }
              div {
                float: left;

                color: #01a5cd;
                font-size: 14px;
                &.jtllfxPage-zone-1-content-left {
                  width: 40%;
                  text-align: left;
                }
                &.jtllfxPage-zone-1-content-center {
                  width: 40%;
                  text-align: left;
                }
                &.jtllfxPage-zone-1-content-right {
                  width: 20%;
                  text-align: right;
                }
              }
            }
          }
        }
      }
    }
    .jtllfxPage-middle-zone {
      float: left;
      width: 44%;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      .jtllfxPage-middle-container {
        width: 100%;
        margin-top: 15px;
        height: 900px;
        border: 2px solid #173077;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        position: relative;
        .jtllfxPage-map-legend {
          position: absolute;
          top: 75px;
          left: 30px;
          ul {
            li {
              margin-top: 10px;
              &:first-child {
                margin-top: 0;
              }
              i {
                display: inline-block;
                width: 26px;
                height: 10px;
                vertical-align: top;
                margin-top: 4px;
                &.map-legend-green {
                  background: url('../../assets/images/jtkshxt/map_liuliang_legend_green.png') no-repeat center center;
                }
                &.map-legend-yellow {
                  background: url('../../assets/images/jtkshxt/map_liuliang_legend_yellow.png') no-repeat center center;
                }
                &.map-legend-red {
                  background: url('../../assets/images/jtkshxt/map_liuliang_legend_red.png') no-repeat center center;
                }
              }
              span {
                display: inline-block;
                color: #9fd8ee;
                font-size: 14px;
                margin-left: 10px;
                letter-spacing: 1.5px;
              }
            }
          }
        }
        .jtllfxPage-map-zone {
          width: 100%;
          height: 450px;
          text-align: center;
          position: relative;
          span {
            display: inline-block;
            width: 739.1px;
            height: 467.4px;
            &.jtllfxPage-map-img {
              position: absolute;
              z-index: 9;
              top: 0px;
              left: 50%;
              margin-left: -369px;
              background: url('../../assets/images/jtkshxt/bg_map_base.png') no-repeat center center;
              background-size: 100% 100%;
            }
            &.jtllfxPage-map-name-text {
              position: absolute;
              z-index: 10;
              top: -15px;
              left: 50%;
              margin-left: -369px;
              background: url('../../assets/images/jtkshxt/bg_map_name.png') no-repeat center center;
              background-size: 100% 100%;
            }
            &.jtllfxPage-map-pop {
              position: absolute;
              z-index: 11;
              top: -23px;
              left: 50%;
              margin-left: -365px;
              background: url('../../assets/images/jtkshxt/bg_map_road_line.png') no-repeat center center;
              background-size: 100% 100%;
            }
          }
        }
        .jtllfxPage-middle-bottom {
          width: 100%;
          padding-top: 20px;
          .jtllfxPage-middle-bottom-content {
            width: 100%;
            //padding: 0 30px;
            box-sizing: border-box;
            margin-top: 10px;
            position: relative;
            .jtllfxPage-middle-bottom-content-title {
              width: 100%;
              color: #9fd8ee;
              text-indent: 30px;
              font-size: 18px;
              font-weight: 600;
              letter-spacing: 1.8px;
              margin-bottom: 25px;
            }
            .carousel-arrow {
              position: absolute;
              width: 12px;
              height: 31px;
              cursor: pointer;
              &.carousel-arrow-left {
                top: 50%;
                left: 35px;
                background: url('../../assets/images/jtkshxt/el-carousel-arrow-left.png') no-repeat center center;
                background-size: 100% 100%;
              }
              &.carousel-arrow-right {
                top: 50%;
                right: 35px;
                background: url('../../assets/images/jtkshxt/el-carousel-arrow-right.png') no-repeat center center;
                background-size: 100% 100%;
              }
            }
            .middle-carousel-container {
              width: 100%;
              padding: 0 50px;
              box-sizing: border-box;
              .el-carousel {
                position: relative;
                box-sizing: border-box;
                .el-carousel__container {
                  width: 100%;
                  .el-carousel__arrow {
                    display: inline-block;
                    width: 12px;
                    height: 31px;
                    display: none;
                    i {
                      &.el-icon-arrow-left {
                        &:before {
                          content: '';
                        }
                      }
                      &.el-icon-arrow-right {
                        &:before {
                          content: '';
                        }
                      }
                    }
                    &.el-carousel__arrow--left {
                      background: url('../../assets/images/jtkshxt/el-carousel-arrow-left.png') no-repeat center center;
                      background-size: 100% 100%;
                    }
                    &.el-carousel__arrow--right {
                      background: url('../../assets/images/jtkshxt/el-carousel-arrow-right.png') no-repeat center center;
                      background-size: 100% 100%;
                    }
                  }
                  .el-carousel__item {
                    width: calc(100% - 30px);
                    margin: 0 0 0 30px;
                    box-sizing: border-box;
                  }
                }
              }
            }

            ul {
              width: 100%;
              &.el-carousel__indicators {
                width: auto;
                display: none;
              }
              li {
                float: left;
                width: calc(38% - 40px);
                margin-right: 20px;
                padding-bottom: 25px;
                box-sizing: border-box;
                &:last-child {
                  padding-bottom: 0;
                }
                &:nth-child(3n) {
                  width: 24%;
                  margin-right: 0;
                }
                .jtllfxPage-middle-circle-text {
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
                .jtllfxPage-middle-circle-num {
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
    .jtllfxPage-right-zone {
      float: left;
      width: 28%;
      padding-left: 24px;
      box-sizing: border-box;
    }
  }
}
</style>
