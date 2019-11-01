<template>
  <!--警情大数据-->
  <div class="jqdsjPage">
    <div class="bg-jqdsj-close" @click="closeJqdsjPage"></div>
    <div class="jqdsjPage-title">警情信息展示</div>
    <div class="jqdsjPage-top clearfloat">
      <div class="jqdsjPage-line-chart-container">
        <div class="jqdsjPage-line-chart-content">
          <div class="border-top-left"></div>
          <div class="border-top-right"></div>
          <div class="border-bottom-left"></div>
          <div class="border-bottom-right"></div>
          <div class="jqdsjPage-line-chart-title">各时段警情数量</div>
          <div class="jqdsjPage-line-chart-chose">
            <el-date-picker
                class="line-chart-time"
                v-model="timeValue"
                type="datetime"
                :clearable="false"
                placeholder="请选择开始时间">
            </el-date-picker>
            <el-cascader class="zhidui-cascader"
                v-model="zhiduiValue"
                :options="zhiduiOptions"
                @change="handleCascaderChange">
            </el-cascader>
          </div>
          <bar-line :optionName="zhiduiName" :barLineId="barLineId" :heightClass="heightClass" ref="barLineRef"></bar-line>
        </div>
      </div>
      <div class="jqdsjPage-top-right">
        <div class="jqdsjPage-top-zhidui-list">
          <div class="border-top-left"></div>
          <div class="border-top-right"></div>
          <div class="border-bottom-left"></div>
          <div class="border-bottom-right"></div>
          <div class="jqdsjPage-top-zhidui-list-title">各支队当前警情数量</div>
          <ul class="clearfloat">
            <li>
              <div>武汉市公安局交通警察支队: 50</div>
              <div>黄石市公安局交通警察支队: 60</div>
              <div>鄂州市公安局交通警察支队: 40</div>
              <div>宜昌市公安局交通警察支队: 70</div>
              <span></span>
            </li>
            <li>
              <div>咸宁市公安局交通警察支队: 50</div>
              <div>孝感市公安局交通警察支队: 60</div>
              <div>仙桃市公安局交通警察支队: 40</div>
              <div>潜江市公安局交通警察支队: 70</div>
              <span></span>
            </li>
            <li>
              <div>黄冈市公安局交通警察支队: 50</div>
              <div>十堰市公安局交通警察支队: 60</div>
              <div>高速一支队: 40</div>
              <div>高速二支队: 70</div>
              <span></span>
            </li>
            <li>
              <div>高速三支队: 50</div>
              <div>高速四支队: 60</div>
              <div>高速五支队: 40</div>
              <div>高速六支队: 70</div>
            </li>
          </ul>
        </div>
        <div class="jqdsjPage-top-jingqing-circle">
          <div class="border-top-left"></div>
          <div class="border-top-right"></div>
          <div class="border-bottom-left"></div>
          <div class="border-bottom-right"></div>
          <div class="jqdsjPage-top-zhidui-list-title">各类警情事件占比</div>
          <div class="jqdsjPage-select-zone">
            <el-select class="jqdsjPage-select-two-words" v-model="dateValue1" placeholder="请选择"  @change="changeDateValue('one')">
                <el-option
                v-for="item in dateOptions1"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
          </div>
          <zhidui-circle-change :optionName="dateValue1" :jqdsjZhiduiCircleId="dateValue1" :heightClass="jqdsjZhiduiCircleObj.heightClass" ref="zhiduiCircleChangeRef"></zhidui-circle-change>
        </div>
      </div>
    </div>
    <div class="jqdsjPage-bottom clearfloat">
      <div class="jqdsjPage-bottom-content clearfloat">
        <div class="jqdsjPage-bottom-top clearfloat">
          <div class="jqdsjPage-bottom-title">当前警情事件</div>
          <div class="jqdsjPage-bottom-table-filter" v-show="radioValue === 'jtsj'">
            <div class="jqdsjPage-table-filter-list">
              <span>警情类型：</span>
              <el-input type="text" v-model="jqEvent.jqType" placeholder="请输入警情类型"></el-input>
            </div>
            <div class="jqdsjPage-table-filter-list">
              <span>名称：</span>
              <el-input type="text" v-model="jqEvent.jqName" placeholder="请输入名称"></el-input>
            </div>
            <div class="jqdsjPage-table-filter-list">
              <span>处理单位：</span>
              <el-input type="text" v-model="jqEvent.jqCldw" placeholder="请输入处理单位"></el-input>
            </div>
            <div class="jqdsjPage-table-filter-list">
              <span>警情级别：</span>
              <el-input type="text" v-model="jqEvent.jqLevel" placeholder="请输入警情级别"></el-input>
            </div>
            <div class="jqdsjPage-table-filter-list">
              <el-button type="primary" class="confirm-btn" @click="queryJQ">查询</el-button>
            </div>
          </div>
          <div class="jqdsjPage-bottom-table-filter" v-show="radioValue === 'wfyj'">
            <div class="jqdsjPage-table-filter-list">
              <span>预警类型：</span>
              <el-input type="text" v-model="YjEvent.yjType" placeholder="请输入预警类型"></el-input>
            </div>
            <div class="jqdsjPage-table-filter-list">
              <span>名称：</span>
              <el-input type="text" v-model="YjEvent.yjName" placeholder="请输入名称"></el-input>
            </div>
            <div class="jqdsjPage-table-filter-list">
              <span>管辖单位：</span>
              <el-input type="text" v-model="YjEvent.yjGxdw" placeholder="请输入管辖单位"></el-input>
            </div>
            <div class="jqdsjPage-table-filter-list">
              <span>预警级别：</span>
              <el-input type="text" v-model="YjEvent.yjLevel" placeholder="请输入预警级别"></el-input>
            </div>
            <div class="jqdsjPage-table-filter-list">
              <el-button type="primary" class="confirm-btn">查询</el-button>
            </div>
          </div>
          <div class="jqdsjPage-bottom-chose">
            <el-radio v-model="radioValue" label="jtsj" @change="radioChange">交通事件</el-radio>
            <el-radio v-model="radioValue" label="wfyj" @change="radioChange">违法预警</el-radio>
          </div>
        </div>
        <div class="jqdsjPage-bottom-table">
          <el-table
              class="jtxxypxtPage-table"
              :data="tableData"
              height="230"
              v-show="radioValue === 'jtsj'">
              <el-table-column
                  label="警情类型"
                  prop="jqType"
                  min-width="15%">
              </el-table-column>
              <el-table-column
                  label="名称"
                  prop="jqName"
                  min-width="15%">
              </el-table-column>
              <el-table-column
                  label="地点"
                  prop="jqPlace"
                  min-width="25%">
              </el-table-column>
              <el-table-column
                  label="处理单位"
                  prop="processingUnit"
                  min-width="15%">
              </el-table-column>
              <el-table-column
                  label="事件"
                  prop="jqEvent"
                  min-width="20%">
              </el-table-column>
              <el-table-column
                  label="警情级别"
                  prop="jqLevel"
                  min-width="10%">
              </el-table-column>
          </el-table>
          <el-table
              class="jtxxypxtPage-table"
              :data="tableData2"
              height="230"
              v-show="radioValue === 'wfyj'">
              <el-table-column
                  label="预警类型"
                  prop="yjType"
                  min-width="15%">
              </el-table-column>
              <el-table-column
                  label="名称"
                  prop="yjName"
                  min-width="20%">
              </el-table-column>
              <el-table-column
                  label="地点"
                  prop="yjPlace"
                  min-width="30%">
              </el-table-column>
              <el-table-column
                  label="管辖单位"
                  prop="yjGxdw"
                  min-width="25%">
              </el-table-column>
              <el-table-column
                  label="警情级别"
                  prop="yjLevel"
                  min-width="10%">
              </el-table-column>
          </el-table>    
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BarLine from '@/components/global/charts-core/BarLine.vue';
import ZhiduiCircleChange from '@/components/global/charts-core/ZhiduiCircleChange.vue';

export default {
  name: 'Jqdsj',
  components: {
    BarLine,
    ZhiduiCircleChange
  },
  data() {
    return {
      zhiduiName: 'gsjj_hanchuan',
      heightClass: 'height360',
      barLineId: 'barLineId1',
      zhiduiValue: ['gsjj', 'gsjj_hanchuan'],
      zhiduiOptions: [
        {
          value: 'gsjj',
          label: '高速交警',
          children: [
            {
              value: 'gsjj_hanchuan',
              label: '湖北高警一支队汉川大队'
            },
            {
              value: 'gsjj_xiantao',
              label: '湖北高警一支队仙桃大队'
            },
            {
              value: 'gsjj_xiaogan',
              label: '湖北高警一支队孝感大队'
            },
            {
              value: 'gsjj_huangmei',
              label: '湖北高警二支队黄梅大队'
            },
            {
              value: 'gsjj_huangshi',
              label: '湖北高警二支队黄石大队'
            },
            {
              value: 'gsjj_ezhou',
              label: '湖北高警二支队鄂州大队'
            },
            {
              value: 'gsjj_jingmen',
              label: '湖北高警三支队荆门大队'
            },
            {
              value: 'gsjj_gongan',
              label: '湖北高警三支队公安大队'
            },
            {
              value: 'gsjj_jingzhou',
              label: '湖北高警三支队荆州大队'
            }
          ]
        },
        {
          value: 'cqjj',
          label: '城区交警',
          children: [
            {
              value: 'cqjj_wuhan',
              label: '武汉市'
            },
            {
              value: 'cqjj_huangshi',
              label: '黄石市'
            },
            {
              value: 'cqjj_ezhou',
              label: '鄂州市'
            },
            {
              value: 'cqjj_yichang',
              label: '宜昌市'
            },
            {
              value: 'cqjj_xianning',
              label: '咸宁市'
            },
            {
              value: 'cqjj_xiaogan',
              label: '孝感市'
            },
            {
              value: 'cqjj_xiantao',
              label: '仙桃市'
            },
            {
              value: 'cqjj_qianjiang',
              label: '潜江市'
            },
            {
              value: 'cqjj_huanggang',
              label: '黄冈市'
            },
            {
              value: 'cqjj_shiyan',
              label: '十堰市'
            },
            {
              value: 'cqjj_xiangfan',
              label: '襄樊市'
            },
            {
              value: 'cqjj_tianmen',
              label: '天门市'
            },
            {
              value: 'cqjj_enshi',
              label: '恩施州'
            },
            {
              value: 'cqjj_shennongjia',
              label: '神农架林区'
            },
            {
              value: 'cqjj_jingzhou',
              label: '荆州市'
            },
            {
              value: 'cqjj_jingmen',
              label: '荆门市'
            },
            {
              value: 'cqjj_suizhou',
              label: '随州市'
            }
          ]
        }
      ],
      jqdsjZhiduiCircleObj: {
        heightClass: 'height350'
      },
      dateValue1: 'jqdsjZhiduiCircleOptionDay',
      dateOptions1: [
        {
          value: 'jqdsjZhiduiCircleOptionDay',
          label: '日'
        },
        {
          value: 'jqdsjZhiduiCircleOptionMonth',
          label: '月'
        },
        {
          value: 'jqdsjZhiduiCircleOptionYear',
          label: '年'
        }
      ],
      timeValue: '',
      radioValue: 'jtsj',
      tableData: [
        {
          jqType: '重大事故',
          jqName: '化学运输车辆侧翻',
          jqPlace: '湖北省武汉市洪山区三环线白沙洲大桥',
          processingUnit: '交警一大队',
          jqEvent: '运送剧毒化学品车辆在高速道路发生侧翻',
          jqLevel: '重大'
        },
        {
          jqType: '特大事故',
          jqName: '高速公路多车追尾',
          jqPlace: 'G42沪蓉高速823KM',
          processingUnit: '交警一大队',
          jqEvent: 'G42沪蓉高速823KM发生5车连环追尾事故',
          jqLevel: '特大'
        },
        {
          jqType: '天灾风险',
          jqName: '高速公路发生多处团雾天气 ',
          jqPlace: 'G50沪渝高速340KM-434KM',
          processingUnit: '交警一大队',
          jqEvent: 'G50沪渝高速340KM-434KM出现多处团雾天气',
          jqLevel: '特大'
        },
        {
          jqType: '违章行为',
          jqName: '违法长时间占用应急车道',
          jqPlace: 'G4京港澳高速945KM',
          processingUnit: '交警一大队',
          jqEvent: 'G4京港澳高速945KM有车辆长时间占用应急车道',
          jqLevel: '一般'
        },
        {
          jqType: '交通拥挤',
          jqName: '高速公路交通枢纽发生拥堵',
          jqPlace: 'G70福银1032KM',
          processingUnit: '交警一大队',
          jqEvent: 'G70福银1032KM发生长约3公里拥堵事件',
          jqLevel: '一般'
        }
      ],
      tableData1: [
        {
          jqType: '重大事故',
          jqName: '化学运输车辆侧翻',
          jqPlace: '湖北省武汉市洪山区三环线白沙洲大桥',
          processingUnit: '交警一大队',
          jqEvent: '运送剧毒化学品车辆在高速道路发生侧翻',
          jqLevel: '重大'
        },
        {
          jqType: '特大事故',
          jqName: '高速公路多车追尾',
          jqPlace: 'G42沪蓉高速823KM',
          processingUnit: '交警一大队',
          jqEvent: 'G42沪蓉高速823KM发生5车连环追尾事故',
          jqLevel: '特大'
        },
        {
          jqType: '天灾风险',
          jqName: '高速公路发生多处团雾天气 ',
          jqPlace: 'G50沪渝高速340KM-434KM',
          processingUnit: '交警一大队',
          jqEvent: 'G50沪渝高速340KM-434KM出现多处团雾天气',
          jqLevel: '特大'
        },
        {
          jqType: '违章行为',
          jqName: '违法长时间占用应急车道',
          jqPlace: 'G4京港澳高速945KM',
          processingUnit: '交警一大队',
          jqEvent: 'G4京港澳高速945KM有车辆长时间占用应急车道',
          jqLevel: '一般'
        },
        {
          jqType: '交通拥挤',
          jqName: '高速公路交通枢纽发生拥堵',
          jqPlace: 'G70福银1032KM',
          processingUnit: '交警一大队',
          jqEvent: 'G70福银1032KM发生长约3公里拥堵事件',
          jqLevel: '一般'
        }
      ],
      tableData2: [
        {
          yjType: '无牌车辆',
          yjName: 'xxxx交通事故名称',
          yjPlace: '湖北省武汉市关山大道与新竹路交叉路口',
          yjGxdw: '交警一大队',
          yjLevel: '高'
        },
        {
          yjType: '套牌车辆',
          yjName: 'xxxx交通事故名称',
          yjPlace: '湖北省武汉市关山大道与南湖大道交叉路口',
          yjGxdw: '交警一大队',
          yjLevel: '高'
        },
        {
          yjType: '逾期未检',
          yjName: 'xxxx交通事故名称',
          yjPlace: '湖北省武汉市关山大道与雄楚大道交叉路口',
          yjGxdw: '交警一大队',
          yjLevel: '一般'
        },
        {
          yjType: '逾期报废',
          yjName: 'xxxx交通事故名称',
          yjPlace: '湖北省武汉市关山大道与珞喻路交叉路口',
          yjGxdw: '交警一大队',
          yjLevel: '一般'
        },
        {
          yjType: '套牌车辆',
          yjName: 'xxxx交通事故名称',
          yjPlace: '湖北省武汉市关山大道与珞喻路交叉路口',
          yjGxdw: '交警一大队',
          yjLevel: '高'
        }
      ],
      tableDataQuery: [
        {
          jqType: '重大事故',
          jqName: '化学运输车辆侧翻',
          jqPlace: '湖北省武汉市洪山区三环线白沙洲大桥',
          processingUnit: '交警一大队',
          jqEvent: '运送剧毒化学品车辆在高速道路发生侧翻',
          jqLevel: '重大'
        }
      ],
      jqEvent: {
        jqType: '',
        jqName: '',
        jqCldw: '',
        jqLevel: ''
      },

      YjEvent: {
        yjType: '',
        yjName: '',
        yjGxdw: '',
        yjLevel: ''
      }
    };
  },
  created() {
    this.timeValue = new Date();
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.barLineRef.drawChart(this.zhiduiValue[1]);
      // this.$refs.zhiduiCircleRef.drawChart();
      this.tableData = this.tableData1;
    });
  },
  methods: {
    // 区域下拉框选择
    changeZhiduiName(selectedVal) {
      this.$refs.barLineRef.drawChart(selectedVal);
    },

    // 支队下拉框切换
    handleCascaderChange(arrValue) {
      if (arrValue.length > 1) {
        this.$refs.barLineRef.drawChart(arrValue[1]);
      }
    },

    // 表格radio切换
    radioChange(value) {
      this.radioValue = value;
      // if (value === 'jtsj') {
      //   this.tableData = this.tableData1;
      // } else {
      //   this.tableData = this.tableData2;
      // }
    },

    // 日月年下拉框选择
    changeDateValue(name) {
      if (name === 'one') {
        this.$refs.zhiduiCircleChangeRef.drawChart(this.dateValue1);
      }
    },

    //警情表格查询按钮点击
    queryJQ() {
      if (this.jqEvent.jqType === '重大事故') {
        this.tableData = this.tableDataQuery;
      } else {
        this.tableData = this.tableData1;
      }
    },

    // 点击关闭按钮关闭弹出框
    closeJqdsjPage() {
      this.$emit('close');
    }
  }
};
</script>

<style lang="scss">
$BlueColor: #207ec0;
.jqdsjPage {
  width: 100%;
  position: relative;
  .bg-jqdsj-close {
    width: 23px;
    height: 23px;
    background: url('../../../assets/images/bg-jqdsj-close.png') no-repeat center;
    position: absolute;
    top: 0px;
    right: 25px;
    cursor: pointer;
  }
  .jqdsjPage-title {
    width: 100%;
    text-align: center;
    margin-top: 20px;
    font-size: 18px;
    letter-spacing: 2px;
    color: rgba(255, 255, 255, 0.75);
  }
  .jqdsjPage-top {
    width: 100%;
    height: 42px;
    padding: 0 24px 0 0;
    box-sizing: border-box;
    .jqdsjPage-line-chart-container {
      float: left;
      width: 50%;
      height: 450px;
      padding-left: 24px;
      padding-top: 20px;
      box-sizing: border-box;
      .jqdsjPage-line-chart-content {
        width: 100%;
        height: 430px;
        background-color: rgba(255, 255, 255, 0.05);
        border: 1px solid #182e65;
        box-sizing: border-box;
        position: relative;
        .jqdsjPage-line-chart-title {
          color: #08cad9;
          font-size: 16px;
          color: $BlueColor;
          position: absolute;
          top: 15px;
          left: 24px;
          letter-spacing: 2px;
          font-weight: 600;
        }
        .jqdsjPage-line-chart-chose {
          width: 100%;
          text-align: right;
          .el-select {
            margin-top: 15px;
            margin-right: 24px;
            .el-input {
              width: 195px;
              .el-input__inner {
                width: 100%;
                color: $BlueColor;
                height: 28px;
                line-height: 28px;
                padding-left: 10px;
                background-color: transparent;
                border: 1px solid $BlueColor;
              }
              .el-input__suffix {
                .el-input__suffix-inner {
                  i {
                    &.el-select__caret {
                      color: $BlueColor;
                      line-height: 28px;
                    }
                  }
                }
              }
            }
          }
          .line-chart-time {
            margin-right: 12px;
            &.el-date-editor {
              margin-top: 15px;
              &.el-input {
                width: 185px;
                .el-input__inner {
                  width: 100%;
                  padding-left: 15px;
                  color: $BlueColor;
                  height: 28px;
                  line-height: 28px;
                  background-color: transparent;
                  border: 1px solid $BlueColor;
                }
                .el-input__prefix {
                  right: 5px;
                  left: inherit;
                  cursor: pointer;
                  i {
                    &.el-input__icon {
                      color: $BlueColor;
                      line-height: 28px;
                    }
                  }
                }
              }
            }
          }
          .zhidui-cascader {
            &.el-cascader {
              margin-top: 15px;
              margin-right: 24px;
              .el-input {
                width: 195px;
                .el-input__inner {
                  width: 100%;
                  color: $BlueColor;
                  height: 28px;
                  line-height: 28px;
                  padding-left: 10px;
                  background-color: transparent;
                  border: 1px solid $BlueColor;
                }
                .el-input__suffix {
                  .el-input__suffix-inner {
                    i {
                      &.el-icon-arrow-down {
                        color: $BlueColor;
                        line-height: 28px;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    .jqdsjPage-top-right {
      float: left;
      width: 50%;
      height: 430px;
      padding-left: 24px;
      padding-top: 20px;
      box-sizing: border-box;
      .jqdsjPage-top-zhidui-list {
        width: 100%;
        height: 190px;
        background-color: rgba(255, 255, 255, 0.05);
        border: 1px solid #182e65;
        box-sizing: border-box;
        position: relative;
        .jqdsjPage-top-zhidui-list-title {
          width: 100%;
          color: #08cad9;
          font-size: 16px;
          color: $BlueColor;
          padding-top: 15px;
          padding-left: 24px;
          letter-spacing: 2px;
          font-weight: 600;
        }
        ul {
          width: 100%;
          height: 150px;
          padding-top: 20px;
          box-sizing: border-box;
          li {
            float: left;
            width: 27%;
            height: 150px;
            padding-left: 24px;
            box-sizing: border-box;
            position: relative;
            &:last-child {
              width: 19%;
            }
            div {
              width: 100%;
              color: #fff;
              font-size: 14px;
              padding-bottom: 16px;
            }
            span {
              position: absolute;
              width: 2px;
              height: 105px;
              right: -4px;
              top: 4px;
              background-color: #285395;
            }
            &:first-child {
              padding-left: 24px;
            }
          }
        }
      }
      .jqdsjPage-top-jingqing-circle {
        width: 100%;
        height: 220px;
        background-color: rgba(255, 255, 255, 0.05);
        border: 1px solid #182e65;
        margin-top: 20px;
        box-sizing: border-box;
        position: relative;
        .jqdsjPage-top-zhidui-list-title {
          position: absolute;
          color: #08cad9;
          font-size: 16px;
          color: $BlueColor;
          top: 15px;
          left: 24px;
          letter-spacing: 2px;
          font-weight: 600;
        }
        .jqdsjPage-select-zone {
          position: absolute;
          right: 15px;
          top: 10px;
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
      }
    }
  }
  .jqdsjPage-bottom {
    width: 100%;
    padding: 24px 24px 0 24px;
    height: 325px;
    box-sizing: border-box;
    position: relative;
    .jqdsjPage-bottom-content {
      width: 100%;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.05);
      border: 1px solid #182e65;
      .jqdsjPage-bottom-top {
        width: 100%;
        padding-top: 15px;
        .jqdsjPage-bottom-title {
          float: left;
          color: #08cad9;
          font-size: 16px;
          color: $BlueColor;
          margin-left: 24px;
          letter-spacing: 2px;
          font-weight: 600;
        }
        .jqdsjPage-bottom-chose {
          float: right;
          margin-right: 24px;
          .el-radio {
            color: #fff;
            &.is-checked {
            }
          }
        }
      }
      .jqdsjPage-bottom-table-filter {
        float: left;
        .jqdsjPage-table-filter-list {
          float: left;
          margin-left: 40px;
          span {
            float: left;
            height: 26px;
            line-height: 26px;
            color: #fff;
            font-size: 14px;
          }
          .el-input {
            float: left;
            width: 140px;
            .el-input__inner {
              width: 100%;
              padding-left: 15px;
              color: $BlueColor;
              height: 26px;
              line-height: 26px;
              color: #7fb3df;
              border-radius: 0;
              background-color: transparent;
              border: 1px solid #7fb3df;
            }
          }
          .el-button {
            width: 50px;
            padding: 0;
            border-radius: 0;
            height: 26px;
            line-height: 26px;
            font-size: 14px;
            text-align: center;
            background: transparent;
            border: 1px solid #4469ba;
            text-align: center;
            color: #8aa9e2;
            span {
              display: inline-block;
              width: 100%;
              text-align: center;
            }
            &:hover {
              background: #4a78d0;
              color: #fff;
            }
          }
        }
      }
      .jqdsjPage-bottom-table {
        width: 100%;
        margin-top: 15px;
        padding: 0 24px;
        box-sizing: border-box;
      }
    }
  }
}
.el-cascader__dropdown {
  background-color: #1e4571;
  border: 0px solid #7fb3df;
  .el-cascader-panel {
    .el-cascader-menu {
      color: #7fb3df;
      border-right: 1px solid #7fb3df;
      &:last-child {
        border-right: none;
      }
      .el-cascader-menu__wrap {
        height: 330px;
        .el-cascader-menu__list {
          .el-cascader-node {
            background-color: #1e4571;
            &:hover {
              background-color: #1e4571 !important;
            }
            &.is-disabled {
              background-color: transparent;
              &:hover {
                background-color: transparent !important;
              }
            }
            .el-cascader-node__label {
              // color: #7fb3df;
            }
          }
        }
      }
    }
  }
  &.el-popper[x-placement^='bottom'] {
    .popper__arrow {
      border-bottom-color: #1f4775;
      &:after {
        border-bottom-color: #1f4775;
      }
    }
  }
}
</style>
