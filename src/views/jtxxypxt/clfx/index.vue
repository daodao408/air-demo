<template>
    <!--车辆分析-->
    <div class="clfxPage">
        <div class="clfxPage-top clearfloat">
            <div class="border-top-left"></div>
            <div class="border-top-right"></div>
            <div class="border-bottom-left"></div>
            <div class="border-bottom-right"></div>
            <div class="clfxPage-top-select">
                <ul>
                    <li>
                        <span>区域选择</span>
                        <el-select v-model="zoneValue" placeholder="请选择"  @change="changeCityName">
                            <el-option
                            v-for="item in zoneOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </li>
                    <li>
                        <span>开始时间</span>
                        <el-date-picker
                            v-model="startVal"
                            type="datetime"
                            :clearable="false"
                            placeholder="请选择开始时间">
                        </el-date-picker>
                    </li>
                    <li>
                        <span>结束时间</span>
                        <el-date-picker
                            v-model="endVal"
                            type="datetime"
                            :clearable="false"
                            placeholder="请选择结束时间">
                        </el-date-picker>
                    </li>
                </ul>
            </div>
            <div class="clfxPage-top-circle">
                <div class="clfxPage-top-circle-title">本、外地车辆过车数量分析</div>
                <circle-angle :cityName="cityName" ref="circleRef"></circle-angle>
            </div>
            <div class="clfxPage-top-area-line">
                <div class="clfxPage-top-circle-title">本、外地车辆活跃度分析</div>  
                <stacked-area :cityName="cityName" ref="stackedAreaRef"></stacked-area>
            </div>
        </div>
        <div class="clfxPage-bottom clearfloat">
           <div class="clfxPage-bottom-left"> 
             <div class="clfxPage-bottom-table">
               <div class="border-top-left"></div>
               <div class="border-top-right"></div>
               <div class="border-bottom-left"></div>
               <div class="border-bottom-right"></div>
               <div class="clfxPage-bottom-title">同车同地点多次违法分析</div>
               <el-table
                  class="jtxxypxtPage-table"
                  :data="tableData1"
                  :row-key="getTable1RowKeys"
                  :expand-row-keys="table1Expands"
                  height="335">
                  <el-table-column type="expand">
                      <template slot-scope="props">
                          <el-form label-position="top" inline class="demo-table-expand ycdz-table-expand">
                              <el-form-item label="在本地点违法行为" style="width: 40%;">
                                  <span>{{ props.row.illegalAct1 }}</span>
                              </el-form-item>
                              <el-form-item label="在本地点违法时间" style="width: 40%;">
                                  <span>{{ props.row.illegalTime1 }}</span>
                              </el-form-item>
                              <el-form-item label="处理结果" style="width: 20%;">
                                  <span>{{ props.row.processingResult1 }}</span>
                              </el-form-item>
                          </el-form>
                          <el-form label-position="top" v-for="(item,index) in props.row.childrenDetail" :key="index" inline class="demo-table-expand ycdz-table-expand">
                              <el-form-item style="width: 40%;">
                                  <span>{{ item.illegalAct }}</span>
                              </el-form-item>
                              <el-form-item style="width: 40%;">
                                  <span>{{ item.illegalTime }}</span>
                              </el-form-item>
                              <el-form-item style="width: 20%;">
                                  <span>{{ item.processingResult }}</span>
                              </el-form-item>
                          </el-form>
                      </template>
                  </el-table-column>
                  <!-- <el-table-column type="expand">
                      <template slot-scope="props">
                          <el-form label-position="top" inline class="demo-table-expand clfx-table-expand">
                              <el-form-item label="在本地点违法时间">
                                  <span>{{ props.row.illegalTime }}</span>
                              </el-form-item>
                              <el-form-item label="在本地点违法行为">
                                  <span>{{ props.row.illegalAct }}</span>
                              </el-form-item>
                              <el-form-item label="处理结果">
                                  <span>{{ props.row.processingResult }}</span>
                              </el-form-item>
                          </el-form>
                      </template>
                  </el-table-column> -->
                  <el-table-column
                      label="车牌号"
                      prop="carNum"
                      min-width="30%">
                  </el-table-column>
                  <el-table-column
                      label="违法地点"
                      prop="illegalPlace"
                      min-width="45%">
                  </el-table-column>
                  <el-table-column
                      label="违法次数"
                      prop="illegalNum"
                      min-width="25%">
                  </el-table-column>
              </el-table>  
             </div>
           </div>
           <div class="clfxPage-bottom-right">
             <div class="clfxPage-bottom-table">
               <div class="border-top-left"></div>
               <div class="border-top-right"></div>
               <div class="border-bottom-left"></div>
               <div class="border-bottom-right"></div>
               <div class="clfxPage-bottom-title">交通违法分析</div>
               <div class="clfxPage-bottom-filter">
                 <span>违法行为：</span>
                <el-select v-model="wfValue" placeholder="请选择"  @change="changeWfName">
                            <el-option
                            v-for="item in wfOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>  
               </div>
               <el-table
                  class="jtxxypxtPage-table"
                  :data="tableData2"
                  height="335">
                  <el-table-column
                      label="车牌号"
                      prop="carNum"
                      min-width="10%">
                  </el-table-column>
                  <el-table-column
                      label="违法行为"
                      prop="illegalAct"
                      :show-overflow-tooltip="true"
                      min-width="15%">
                  </el-table-column>
                  <el-table-column
                      label="违法地点"
                      prop="illegalPlace"
                      min-width="35%">
                  </el-table-column>
                  <el-table-column
                      label="处理结果"
                      prop="processingResult"
                      min-width="18%">
                  </el-table-column>
                  <el-table-column
                      label="违法时间"
                      prop="illegalTime"
                      min-width="22%">
                  </el-table-column>
              </el-table>  
             </div>
           </div>
        </div>
    </div>
</template>

<script>
import circleAngle from '@/components/global/charts-core/CircleAngle';
import StackedArea from '@/components/global/charts-core/StackedArea';
export default {
  name: 'Clfx',
  components: {
    circleAngle,
    StackedArea
  },
  data() {
    return {
      cityName: 'wuhan',
      zoneValue: 'wuhan',
      zoneOptions: [
        {
          value: 'hubei',
          label: '湖北省'
        },
        {
          value: 'wuhan',
          label: '武汉市'
        },
        {
          value: 'huangshi',
          label: '黄石市'
        },
        {
          value: 'xiangyang',
          label: '襄阳市'
        },
        {
          value: 'jingzhou',
          label: '荆州市'
        },
        {
          value: 'yichang',
          label: '宜昌市'
        },
        {
          value: 'shiyan',
          label: '十堰市'
        },
        {
          value: 'xiaogan',
          label: '孝感市'
        },
        {
          value: 'jingmen',
          label: '荆门市'
        },
        {
          value: 'ezhou',
          label: '鄂州市'
        },
        {
          value: 'huanggang',
          label: '黄冈市'
        },
        {
          value: 'xianning',
          label: '咸宁市'
        },
        {
          value: 'suizhou',
          label: '随州市'
        }
      ],
      startVal: '',
      endVal: '',
      tableData1: [
        {
          carNum: '鄂A33B56',
          illegalPlace: '湖北省武汉市关山大道与新竹路交叉路口',
          illegalNum: '13',
          illegalTime1: '2019年2月9日 17:29:10',
          illegalAct1: '不礼让行人',
          processingResult1: '罚款100元',
          childrenDetail: [
            {
              illegalTime: '2019年3月2日 10:11:05',
              illegalAct: '不礼让行人',
              processingResult: '罚款100元'
            },
            {
              illegalTime: '2019年3月12日 16:34:05',
              illegalAct: '闯红灯',
              processingResult: '罚款200元'
            },
            {
              illegalTime: '2019年4月2日 08:11:05',
              illegalAct: '机动车违反规定使用专用车道',
              processingResult: '罚款100元'
            },
            {
              illegalTime: '2019年4月22日 11:11:05',
              illegalAct: '机动车不在机动车道内行驶',
              processingResult: '罚款100元'
            },
            {
              illegalTime: '2019年4月29日 12:49:05',
              illegalAct: '驾驶人未按规定使用安全带',
              processingResult: '罚款100元'
            },
            {
              illegalTime: '2019年5月5日 16:34:05',
              illegalAct: '闯红灯',
              processingResult: '罚款200元'
            },
            {
              illegalTime: '2019年5月14日 21:24:05',
              illegalAct: '闯红灯',
              processingResult: '罚款200元'
            },
            {
              illegalTime: '2019年5月17日 13:28:05',
              illegalAct: '闯红灯',
              processingResult: '罚款200元'
            },
            {
              illegalTime: '2019年5月24日 17:57:09',
              illegalAct: '闯红灯',
              processingResult: '罚款200元'
            },
            {
              illegalTime: '2019年5月26日 18:31:29',
              illegalAct: '闯红灯',
              processingResult: '罚款200元'
            },
            {
              illegalTime: '2019年5月30日 14:39:05',
              illegalAct: '闯红灯',
              processingResult: '罚款200元'
            },
            {
              illegalTime: '2019年6月19日 15:29:08',
              illegalAct: '闯红灯',
              processingResult: '罚款200元'
            }
          ]
        },
        {
          carNum: '鄂A89C56',
          illegalPlace: '湖北省武汉市关山大道与南湖大道交叉路口',
          illegalNum: '11',
          illegalTime1: '2019年1月27日 15:36:09',
          illegalAct1: '不礼让行人',
          processingResult1: '罚款100元',
          childrenDetail: [
            {
              illegalTime: '2019年2月1日 10:11:05',
              illegalAct: '不礼让行人',
              processingResult: '罚款100元'
            },
            {
              illegalTime: '2019年2月12日 16:34:05',
              illegalAct: '闯红灯',
              processingResult: '罚款200元'
            },
            {
              illegalTime: '2019年2月22日 08:11:05',
              illegalAct: '机动车违反规定使用专用车道',
              processingResult: '罚款100元'
            },
            {
              illegalTime: '2019年3月25日 11:11:05',
              illegalAct: '机动车不在机动车道内行驶',
              processingResult: '罚款100元'
            },
            {
              illegalTime: '2019年3月30日 12:49:05',
              illegalAct: '驾驶人未按规定使用安全带',
              processingResult: '罚款100元'
            },
            {
              illegalTime: '2019年4月5日 16:34:05',
              illegalAct: '闯红灯',
              processingResult: '罚款200元'
            },
            {
              illegalTime: '2019年4月16日 21:24:05',
              illegalAct: '闯红灯',
              processingResult: '罚款200元'
            },
            {
              illegalTime: '2019年4月23日 13:28:05',
              illegalAct: '闯红灯',
              processingResult: '罚款200元'
            },
            {
              illegalTime: '2019年4月29日 17:57:09',
              illegalAct: '闯红灯',
              processingResult: '罚款200元'
            },
            {
              illegalTime: '2019年5月27日 18:31:29',
              illegalAct: '闯红灯',
              processingResult: '罚款200元'
            }
          ]
        },
        {
          carNum: '鄂A89C48',
          illegalPlace: '湖北省武汉市关山大道与雄楚大道交叉路口',
          illegalNum: '8',
          illegalTime1: '2019年1月2日 09:28:05',
          illegalAct1: '不礼让行人',
          processingResult1: '罚款100元',
          childrenDetail: [
            {
              illegalTime: '2019年1月12日 10:11:05',
              illegalAct: '不礼让行人',
              processingResult: '罚款100元'
            },
            {
              illegalTime: '2019年1月17日 16:34:05',
              illegalAct: '闯红灯',
              processingResult: '罚款200元'
            },
            {
              illegalTime: '2019年1月25日 08:11:05',
              illegalAct: '机动车违反规定使用专用车道',
              processingResult: '罚款100元'
            },
            {
              illegalTime: '2019年2月13日 11:11:05',
              illegalAct: '机动车不在机动车道内行驶',
              processingResult: '罚款100元'
            },
            {
              illegalTime: '2019年2月26日 12:49:05',
              illegalAct: '驾驶人未按规定使用安全带',
              processingResult: '罚款100元'
            },
            {
              illegalTime: '2019年3月15日 16:34:05',
              illegalAct: '闯红灯',
              processingResult: '罚款200元'
            },
            {
              illegalTime: '2019年4月19日 21:24:05',
              illegalAct: '闯红灯',
              processingResult: '罚款200元'
            }
          ]
        },
        {
          carNum: '鄂A89C32',
          illegalPlace: '湖北省武汉市关山大道与珞喻路交叉路口',
          illegalNum: '7',
          illegalTime1: '2019年1月9日 16:15:10',
          illegalAct1: '不礼让行人',
          processingResult1: '罚款100元',
          childrenDetail: [
            {
              illegalTime: '2019年1月24日 10:11:05',
              illegalAct: '不礼让行人',
              processingResult: '罚款100元'
            },
            {
              illegalTime: '2019年1月27日 16:34:05',
              illegalAct: '闯红灯',
              processingResult: '罚款200元'
            },
            {
              illegalTime: '2019年2月25日 08:11:05',
              illegalAct: '机动车违反规定使用专用车道',
              processingResult: '罚款100元'
            },
            {
              illegalTime: '2019年3月13日 11:11:05',
              illegalAct: '机动车不在机动车道内行驶',
              processingResult: '罚款100元'
            },
            {
              illegalTime: '2019年4月26日 12:49:05',
              illegalAct: '驾驶人未按规定使用安全带',
              processingResult: '罚款100元'
            },
            {
              illegalTime: '2019年5月28日 16:34:05',
              illegalAct: '闯红灯',
              processingResult: '罚款200元'
            }
          ]
        }
      ],
      // 获取row的key值
      getTable1RowKeys(row) {
        return row.carNum;
      },
      // 要展开的行，数值的元素是row的key值
      table1Expands: [],
      tableData2: [
        {
          carNum: '鄂A33B56',
          illegalAct: '违反警告标线指示',
          illegalPlace: '湖北省武汉市关山大道与新竹路交叉路口',
          processingResult: '罚款100元',
          illegalTime: '2019年3月12日 10:11:05'
        },
        {
          carNum: '鄂A89C56',
          illegalAct: '机动车违反规定使用专用车道',
          illegalPlace: '湖北省武汉市关山大道与南湖大道交叉路口',
          processingResult: '罚款100元',
          illegalTime: '2019年4月20日 12:11:05'
        },
        {
          carNum: '鄂A89C48',
          illegalAct: '机动车不在机动车道内行驶',
          illegalPlace: '湖北省武汉市关山大道与雄楚大道交叉路口',
          processingResult: '罚款100元',
          illegalTime: '2019年5月28日 16:11:05'
        },
        {
          carNum: '鄂A89C32',
          illegalAct: '在禁止掉头或者禁止左转弯标志、标线的地点掉头',
          illegalPlace: '湖北省武汉市关山大道与珞喻路交叉路口',
          processingResult: '罚款100元',
          illegalTime: '2019年6月25日 12:11:05'
        },
        {
          carNum: '鄂A89C32',
          illegalAct: '驾驶人未按规定使用安全带',
          illegalPlace: '湖北省武汉市关山大道与珞喻路交叉路口',
          processingResult: '罚款100元',
          illegalTime: '2019年6月29日 12:11:05'
        }
      ],
      tableDataFilter: [
        {
          carNum: '鄂A33B56',
          illegalAct: '违反警告标线指示',
          illegalPlace: '湖北省武汉市关山大道与新竹路交叉路口',
          processingResult: '罚款100元',
          illegalTime: '2019年3月12日 10:11:05'
        }
      ],
      tableData2All: [
        {
          carNum: '鄂A33B56',
          illegalAct: '违反警告标线指示',
          illegalPlace: '湖北省武汉市关山大道与新竹路交叉路口',
          processingResult: '罚款100元',
          illegalTime: '2019年3月12日 10:11:05'
        },
        {
          carNum: '鄂A89C56',
          illegalAct: '机动车违反规定使用专用车道',
          illegalPlace: '湖北省武汉市关山大道与南湖大道交叉路口',
          processingResult: '罚款100元',
          illegalTime: '2019年4月20日 12:11:05'
        },
        {
          carNum: '鄂A89C48',
          illegalAct: '机动车不在机动车道内行驶',
          illegalPlace: '湖北省武汉市关山大道与雄楚大道交叉路口',
          processingResult: '罚款100元',
          illegalTime: '2019年5月28日 16:11:05'
        },
        {
          carNum: '鄂A89C32',
          illegalAct: '在禁止掉头或者禁止左转弯标志、标线的地点掉头',
          illegalPlace: '湖北省武汉市关山大道与珞喻路交叉路口',
          processingResult: '罚款100元',
          illegalTime: '2019年6月25日 12:11:05'
        },
        {
          carNum: '鄂A89C32',
          illegalAct: '驾驶人未按规定使用安全带',
          illegalPlace: '湖北省武汉市关山大道与珞喻路交叉路口',
          processingResult: '罚款100元',
          illegalTime: '2019年6月29日 12:11:05'
        }
      ],
      wfValue: '0',
      wfOptions: [
        {
          value: '0',
          label: '全部'
        },
        {
          value: '1',
          label: '违反警告标线指示'
        },
        {
          value: '2',
          label: '机动车违反规定使用专用车道'
        },
        {
          value: '3',
          label: '机动车不在机动车道内行驶'
        },
        {
          value: '4',
          label: '在禁止掉头或者禁止左转弯标志、标线的地点掉头'
        },
        {
          value: '5',
          label: '驾驶人未按规定使用安全带'
        }
      ]
    };
  },
  created() {
    this.startVal = new Date(new Date(new Date().toLocaleDateString()).getTime());
    this.endVal = new Date();
  },
  mounted() {
    // this.table1Expands.push(this.tableData1[0].carNum);
  },
  methods: {
    // 区域下拉框选择
    changeCityName(selectedVal) {
      this.$refs.circleRef.drawChart(selectedVal);
      this.$refs.stackedAreaRef.drawChart(selectedVal);
    },
    // 违法下拉框选择
    changeWfName(selectedVal) {
      if (selectedVal === '1') {
        this.tableData2 = this.tableDataFilter;
      } else if (selectedVal === '0') {
        this.tableData2 = this.tableData2All;
      }
    }
  }
};
</script>

<style lang="scss">
$BlueColor: #207ec0;
.clfxPage {
  width: 1818px;
  height: 820px;
  position: absolute;
  background-color: transparent;
  left: 45px;
  top: 181px;
  .clfxPage-top {
    position: relative;
    width: 100%;
    height: 380px;
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid #182e65;
    .clfxPage-top-select {
      float: left;
      width: 15%;
      height: 100%;
      padding: 40px 24px 0 24px;
      box-sizing: border-box;
      ul {
        list-style: none;
        li {
          list-style: none;
          width: 100%;
          text-align: left;
          margin-bottom: 35px;
          &:last-child {
            margin-bottom: 0;
          }
          span {
            font-size: 14px;
            color: rgba(255, 255, 255, 1);
          }
          .el-select {
            margin-top: 10px;
            .el-input {
              .el-input__inner {
                padding-left: 15px;
                color: $BlueColor;
                background-color: transparent;
                border: 1px solid $BlueColor;
              }
              .el-input__suffix {
                .el-input__suffix-inner {
                  i {
                    &.el-select__caret {
                      color: $BlueColor;
                    }
                  }
                }
              }
            }
          }
          .el-date-editor {
            margin-top: 10px;
            &.el-input {
              .el-input__inner {
                padding-left: 15px;
                color: $BlueColor;
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
                  }
                }
              }
            }
          }
        }
      }
    }
    .clfxPage-top-circle {
      float: left;
      width: 35%;
      height: 100%;
      padding: 20px 24px 0 44px;
      box-sizing: border-box;
      .clfxPage-top-circle-title {
        text-indent: 15px;
        font-size: 14px;
        color: rgba(255, 255, 255, 1);
      }
    }
    .clfxPage-top-area-line {
      float: left;
      width: 50%;
      height: 100%;
      padding: 20px 0px 0 24px;
      box-sizing: border-box;
      .clfxPage-top-circle-title {
        text-indent: 0px;
        font-size: 14px;
        color: rgba(255, 255, 255, 1);
      }
    }
  }
  .clfxPage-bottom {
    width: 100%;
    padding: 24px 0;
    box-sizing: border-box;
    position: relative;
    .clfxPage-bottom-title {
      width: 100%;
      padding-top: 24px;
      padding-bottom: 20px;
      font-size: 14px;
      color: #fff;
    }
    .clfxPage-bottom-filter {
      position: absolute;
      right: 20px;
      top: 8px;
      span {
        color: #fff;
        font-size: 14px;
      }
      .el-select {
        width: 180px;
        margin-top: 10px;
        .el-input {
          .el-input__inner {
            width: 100%;
            padding-left: 15px;
            color: $BlueColor;
            height: 26px;
            line-height: 26px;
            color: #7fb3df;
            background-color: transparent;
            border: 1px solid #7fb3df;
          }
          .el-input__suffix {
            .el-input__suffix-inner {
              i {
                &.el-select__caret {
                  color: $BlueColor;
                  font-size: 14px;
                  height: 24px;
                  line-height: 24px;
                }
              }
            }
          }
        }
      }
    }
    .clfxPage-bottom-table {
      position: relative;
      width: 100%;
      height: 100%;
      padding: 0 24px;
      background-color: rgba(255, 255, 255, 0.05);
      border: 1px solid #182e65;
      box-sizing: border-box;
      .cell {
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    .clfxPage-bottom-left {
      float: left;
      width: 50%;
      height: 410px;
      padding-right: 12px;
      box-sizing: border-box;
    }
    .clfxPage-bottom-right {
      float: left;
      width: 50%;
      padding-left: 12px;
      height: 410px;
      box-sizing: border-box;
    }
  }
}
</style>
