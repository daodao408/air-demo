<template>
  <!--警情大数据-->
  <div class="wfsjfxPage">
    <jtksh-head :headTitle="headTitle"></jtksh-head>
    <div class="wfsjfxPage-content clearfloat">
      <div class="wfsjfxPage-left-zone">
        <div class="wfsjfxPage-line-chart-content">
          <div class="wfsjfxPage-line-chart-title">高龄大车违法分析</div>
          <div class="wfsjfxPage-line-chart-detail">
            <div class="border-top-left"></div>
            <div class="border-top-right"></div>
            <div class="border-bottom-left"></div>
            <div class="border-bottom-right"></div>
            <div class="wfsjfxPage-select-zone">
              <el-select v-model="dateValue1" placeholder="请选择" @change="changeDateValue('one')">
                  <el-option
                  v-for="item in dateOptions1"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                  </el-option>
              </el-select>
              <el-select class="wfsjfxPage-select-five-words" v-model="scoreSelectValue" placeholder="请选择" >
                  <el-option
                  v-for="item in scoreSelectOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                  </el-option>
              </el-select>
              <el-select class="wfsjfxPage-select-two-words" v-model="compareSelectValue" placeholder="请选择">
                  <el-option
                  v-for="item in compareOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                  </el-option>
              </el-select>
            </div>
            <bar-line :optionName="dateValue1" :barLineId="dateValue1" :heightClass="barLineObj.heightClass" ref="barLineRef1"></bar-line>
          </div>
        </div>
        <div class="wfsjfxPage-line-chart-content marginTop24">
          <div class="wfsjfxPage-line-chart-title">未处理违法车辆分析</div>
          <div class="wfsjfxPage-line-chart-detail">
            <div class="border-top-left"></div>
            <div class="border-top-right"></div>
            <div class="border-bottom-left"></div>
            <div class="border-bottom-right"></div>
            <!-- <div class="wfsjfxPage-select-zone">
              <el-select v-model="dateValue2" placeholder="请选择"  @change="changeDateValue('two')">
                  <el-option
                  v-for="item in dateOptions2"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                  </el-option>
              </el-select>
            </div> -->
            <bar-line-rotation :optionName="barLineRotationObj.optionName" :barLineRotationId="barLineRotationObj.optionId" :heightClass="barLineRotationObj.heightClass" ref="barLineRotationRef"></bar-line-rotation>
            <!-- <bar-line :optionName="dateValue2" :barLineId="dateValue2" :heightClass="barLineObj.heightClass" ref="barLineRef2"></bar-line> -->
          </div>
        </div>
      </div>
      <div class="wfsjfxPage-middle-zone">
        <div class="wfsjfxPage-line-chart-content">
          <div class="wfsjfxPage-middle-container">
            <div class="wfsjfxPage-table-zone">
              <div class="wfsjfxPage-line-chart-title">驾驶人同一天不同州市处理有记分非现场违法信息</div>
              <div class="wfsjfxPage-table-container">
                  <el-table
                    class="jtxxypxtPage-table"
                    :data="tableData"
                    height="350">
                    <el-table-column
                        label="驾驶人"
                        prop="driver"
                        min-width="10%">
                    </el-table-column>
                    <el-table-column
                        label="驾驶证编号"
                        prop="driverLicenseNo"
                        min-width="13%">
                    </el-table-column>
                    <el-table-column
                        label="违法行为"
                        prop="illegalBehaviour"
                        :show-overflow-tooltip="true"
                        min-width="13%">
                    </el-table-column>
                    <el-table-column
                        label="违法时间"
                        prop="illegalTime"
                        min-width="23%">
                    </el-table-column>
                    <el-table-column
                        label="违法地点"
                        prop="illegalPlace"
                        :show-overflow-tooltip="true"
                        min-width="20%">
                    </el-table-column>
                    <el-table-column
                        label="处理结果"
                        prop="processingResult"
                        min-width="17%">
                    </el-table-column>
                </el-table>
                <div class="el-pagination-zone clearfloat">
                  <div class="el-pagination-totle-text">共 23 条数据</div>
                  <el-pagination class="znscycydPage-info-pagination"  :current-page="1"
                    :page-sizes="[5, 10, 20]" :page-size="10" layout="prev, pager, next, sizes" :total="23">
                  </el-pagination>
                </div> 
              </div>
            </div>
            <div class="wfsjfxPage-middle-bottom clearfloat">
              <div class="wfsjfxPage-middle-bottom-content">
                <div class="wfsjfxPage-line-chart-title">重点车辆异常处理分析</div>
                <div class="carousel-arrow carousel-arrow-left" @click="carouselPrev"></div>
                <div class="carousel-arrow carousel-arrow-right" @click="carouselNext"></div>
                <div class="middle-carousel-container">
                  <div class="border-top-left"></div>
                  <div class="border-top-right"></div>
                  <div class="border-bottom-left"></div>
                  <div class="border-bottom-right"></div>
                  <div class="middle-carousel-detail">
                    <el-carousel trigger="click" height="410px" arrow="always" :autoplay="false" ref="carouselRef">
                      <el-carousel-item v-for="(item,index) in barLineDataSevenArr" :key="index">
                        <bar-line :optionName="item.chartOption" :barLineId="item.chartOptionId" :heightClass="item.heightClass" ref="barLineRef2"></bar-line>
                      </el-carousel-item>
                    </el-carousel>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <hubei-map></hubei-map>    -->
      </div>
      <div class="wfsjfxPage-right-zone">
        <div class="wfsjfxPage-line-chart-content">
          <el-tabs class="wfsjfxPage-el-tabs" v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="一证三车" name="first">  
            </el-tab-pane>
            <el-tab-pane label="一车三证" name="second">
            </el-tab-pane>
          </el-tabs>
          <div class="wfsjfxPage-line-chart-detail marginTop10" v-if="activeName === 'first'">
            <div class="border-top-left"></div>
            <div class="border-top-right"></div>
            <div class="border-bottom-left"></div>
            <div class="border-bottom-right"></div>
            <div class="wfsjfxPage-select-zone">
              <el-select class="wfsjfxPage-select-two-words" v-model="dateValue4" placeholder="请选择"  @change="changeDateValue('four')">
                  <el-option
                  v-for="item in dateOptions4"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                  </el-option>
              </el-select>
              <el-select class="wfsjfxPage-select-two-words marginLeft8" v-model="dateCityValue" placeholder="请选择"  @change="changeDateValue('five')">
                  <el-option
                  v-for="item in dateCityOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                  </el-option>
              </el-select>
            </div>
            <single-stacked-area :optionName="singleStackedAreaChangeValue" :stackedAreaId="singleStackedAreaChangeValue" :heightClass="singleStackedAreaObj.heightClass" ref="singleStackedAreaRef4"></single-stacked-area>                                                                                                                       
          </div>
          <div class="wfsjfxPage-line-chart-detail marginTop10" v-else>
            <div class="border-top-left"></div>
            <div class="border-top-right"></div>
            <div class="border-bottom-left"></div>
            <div class="border-bottom-right"></div>
            <div class="wfsjfxPage-select-zone">
              <el-select class="wfsjfxPage-select-two-words" v-model="dateValue4New" placeholder="请选择"  @change="changeDateValue('six')">
                  <el-option
                  v-for="item in dateOptions4New"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                  </el-option>
              </el-select>
              <el-select class="wfsjfxPage-select-two-words marginLeft8" v-model="dateCityValueNew" placeholder="请选择"  @change="changeDateValue('seven')">
                  <el-option
                  v-for="item in dateCityOptionsNew"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                  </el-option>
              </el-select>
            </div>
            <single-stacked-area :optionName="singleStackedAreaChangeValueNew" :stackedAreaId="singleStackedAreaChangeValueNew" :heightClass="singleStackedAreaObj.heightClass" ref="singleStackedAreaRef4New"></single-stacked-area>                                                                                                                       
          </div>
        </div>
        
        <!-- <div class="wfsjfxPage-line-chart-content">
          <div class="wfsjfxPage-line-chart-detail">
            <div class="border-top-left"></div>
            <div class="border-top-right"></div>
            <div class="border-bottom-left"></div>
            <div class="border-bottom-right"></div>
            <div class="wfsjfxPage-circle-text-left">
              <p>一证两车占比</p>
              <div>24000</div>
              <span>40%</span>
              <b>一证两车</b>
              <i class="circle-1"></i>
              <i class="circle-2"></i>
            </div>
            <div class="wfsjfxPage-circle-text-right">
              <p>一证三车占比</p>
              <div>36000</div>
              <span>60%</span>
              <b>一证三车</b>
              <i class="circle-1"></i>
            </div>
            <jtwfsjfx-circle :optionName="jtwfsjfxCircleObj.jtwfsjfxCircleOption1" :jtwfsjfxCircleId="jtwfsjfxCircleObj.jtwfsjfxCircleId1" :heightClass="jtwfsjfxCircleObj.heightClass" ref="jtwfsjfxCircleRef1"></jtwfsjfx-circle>
          </div>
        </div>
        <div class="wfsjfxPage-line-chart-content">
          <div class="wfsjfxPage-line-chart-detail">
            <div class="border-top-left"></div>
            <div class="border-top-right"></div>
            <div class="border-bottom-left"></div>
            <div class="border-bottom-right"></div>
            <div class="wfsjfxPage-circle-text-left">
              <p>一车两证占比</p>
              <div>24000</div>
              <span>40%</span>
              <b>一车两证</b>
              <i class="circle-1"></i>
              <i class="circle-2"></i>
            </div>
            <div class="wfsjfxPage-circle-text-right">
              <p>一车三证占比</p>
              <div>36000</div>
              <span>60%</span>
              <b>一车三证</b>
              <i class="circle-1"></i>
            </div>
            <jtwfsjfx-circle :optionName="jtwfsjfxCircleObj.jtwfsjfxCircleOption2" :jtwfsjfxCircleId="jtwfsjfxCircleObj.jtwfsjfxCircleId2" :heightClass="jtwfsjfxCircleObj.heightClass" ref="jtwfsjfxCircleRef2"></jtwfsjfx-circle>
          </div>
        </div> -->
        <div class="wfsjfxPage-line-chart-content marginTop24">
          <div class="wfsjfxPage-line-chart-title">未处理时长违法统计</div>
          <div class="wfsjfxPage-line-chart-detail">
            <div class="border-top-left"></div>
            <div class="border-top-right"></div>
            <div class="border-bottom-left"></div>
            <div class="border-bottom-right"></div>
            <div class="wfsjfxPage-select-zone">
              <el-select v-model="dateValue3" placeholder="请选择"  @change="changeDateValue('three')">
                  <el-option
                  v-for="item in dateOptions3"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                  </el-option>
              </el-select>
            </div>
            <jtwfsjfx-all-circle :optionName="dateValue3" :jtwfsjfxAllCircleId="dateValue3" :heightClass="jtwfsjfxAllCircleObj.heightClass" ref="jtwfsjfxAllCircleRef1"></jtwfsjfx-all-circle>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BarLine from '@/components/global/charts-core/BarLine.vue';
import BarLineRotation from '@/components/global/charts-core/BarLineRotation.vue';
// import JtwfsjfxCircle from '@/components/global/charts-core/JtwfsjfxCircle.vue';
import JtkshHead from '@/components/global/jtksh-head';
import JtwfsjfxAllCircle from '@/components/global/charts-core/JtwfsjfxAllCircle.vue';
import SingleStackedArea from '@/components/global/charts-core/SingleStackedArea.vue';

export default {
  name: 'Wfsjfxksh',
  components: {
    JtkshHead,
    BarLine,
    BarLineRotation,
    // JtwfsjfxCircle,
    JtwfsjfxAllCircle,
    SingleStackedArea
  },
  data() {
    return {
      headTitle: '交通违法数据分析',
      activeName: 'first',
      barLineObj: {
        heightClass: 'height410'
      },
      barLineRotationObj: {
        heightClass: 'height410',
        optionName: 'jtwfsjfxBarLineRotationOption',
        optionId: 'jtwfsjfxBarLineRotationOption'
      },
      jtwfsjfxCircleObj: {
        jtwfsjfxCircleOption1: 'jtwfsjfxCircleOption1',
        jtwfsjfxCircleOption2: 'jtwfsjfxCircleOption2',
        jtwfsjfxCircleId1: 'jtwfsjfxCircleId1',
        jtwfsjfxCircleId2: 'jtwfsjfxCircleId2',
        heightClass: 'height204'
      },
      jtwfsjfxAllCircleObj: {
        heightClass: 'height410'
      },
      singleStackedAreaObj: {
        heightClass: 'height410'
      },
      singleStackedAreaChangeValue: 'jtwfsjfxSingleStackedAreaOption4WuHanDay',
      singleStackedAreaChangeValueNew: 'jtwfsjfxSingleStackedAreaOption4WuHanDay1',
      tableData: [
        {
          driver: '张立本',
          driverLicenseNo: '1302018687',
          illegalBehaviour: '闯红灯',
          illegalTime: '2019年7月2日 06:29:10',
          illegalPlace: '武汉市关山大道与珞喻路交叉路口',
          processingResult: '扣6分，罚款200元'
        },
        {
          driver: '张立本',
          driverLicenseNo: '1302018687',
          illegalBehaviour: '机动车违反规定使用专用车道',
          illegalTime: '2019年7月2日 09:09:30',
          illegalPlace: '黄石市下陆大道与发展大道交叉路口',
          processingResult: '扣3分，罚款200元'
        },
        {
          driver: '张立本',
          driverLicenseNo: '1302018687',
          illegalBehaviour: '未礼让行人',
          illegalTime: '2019年7月2日 11:21:05',
          illegalPlace: '黄石市大泉路与伍家洪交叉路口',
          processingResult: '扣1分，罚款200元'
        },
        {
          driver: '张立本',
          driverLicenseNo: '1302018687',
          illegalBehaviour: '机动车违反规定使用专用车道',
          illegalTime: '2019年7月2日 14:39:30',
          illegalPlace: '黄冈市黄州区路口大道与世纪大道交叉路口',
          processingResult: '扣3分，罚款200元'
        },
        {
          driver: '张立本',
          driverLicenseNo: '1302018687',
          illegalBehaviour: '驾驶人未按规定使用安全带',
          illegalTime: '2019年7月2日 14:50:30',
          illegalPlace: '黄冈市黄州区黄州大道与路口大道交叉路口',
          processingResult: '扣1分，罚款100元'
        },
        {
          driver: '张立本',
          driverLicenseNo: '1302018687',
          illegalBehaviour: '闯红灯',
          illegalTime: '2019年7月2日 15:25:01',
          illegalPlace: '黄冈市黄州区黄州大道与明珠大道交叉路口',
          processingResult: '扣6分，罚款200元'
        },
        {
          driver: '宋有元',
          driverLicenseNo: '1256983542',
          illegalBehaviour: '机动车不在机动车道内行驶',
          illegalTime: '2019年7月5日 09:10:05',
          illegalPlace: '武汉市雄楚大道与南湖大道交叉路口',
          processingResult: '扣3分，罚款200元'
        },
        {
          driver: '宋有元',
          driverLicenseNo: '1256983542',
          illegalBehaviour: '闯红灯',
          illegalTime: '2019年7月5日 09:32:10',
          illegalPlace: '武汉市南湖大道与珞狮路交叉路口',
          processingResult: '扣6分，罚款200元'
        },
        {
          driver: '宋有元',
          driverLicenseNo: '1256983542',
          illegalBehaviour: '闯红灯',
          illegalTime: '2019年7月5日 10:25:10',
          illegalPlace: '武汉市双李路与南李路交叉路口',
          processingResult: '扣6分，罚款200元'
        },
        {
          driver: '宋有元',
          driverLicenseNo: '1256983542',
          illegalBehaviour: '机动车未按标示线行驶',
          illegalTime: '2019年7月5日 12:45:10',
          illegalPlace: '武汉市龟山路与锦龙路交叉路口',
          processingResult: '扣6分，罚款200元'
        },
        {
          driver: '宋有元',
          driverLicenseNo: '1256983542',
          illegalBehaviour: '闯红灯',
          illegalTime: '2019年7月5日 12:56:03',
          illegalPlace: '武汉市龟山路与书台街交叉路口',
          processingResult: '扣6分，罚款200元'
        },
        {
          driver: '宋有元',
          driverLicenseNo: '1256983542',
          illegalBehaviour: '闯红灯',
          illegalTime: '2019年7月5日 13:28:06',
          illegalPlace: '武汉市龟山路与旗鼓大道交叉路口',
          processingResult: '扣6分，罚款200元'
        },
        {
          driver: '宋三平',
          driverLicenseNo: '2659845612',
          illegalBehaviour: '驾驶人未按规定使用安全带',
          illegalTime: '2019年7月5日 06:23:10',
          illegalPlace: '武汉市雄楚大道与民族大道交叉路口',
          processingResult: '扣1分，罚款200元'
        },
        {
          driver: '宋三平',
          driverLicenseNo: '2659845612',
          illegalBehaviour: '驾驶人未按规定使用安全带',
          illegalTime: '2019年7月5日 06:37:10',
          illegalPlace: '武汉市雄楚大道与光谷大道交叉路口',
          processingResult: '扣1分，罚款200元'
        },
        {
          driver: '宋三平',
          driverLicenseNo: '2659845612',
          illegalBehaviour: '机动车未按标示线行驶',
          illegalTime: '2019年7月5日 06:55:10',
          illegalPlace: '武汉市高新大道与光谷一路交叉路口',
          processingResult: '扣3分，罚款200元'
        },
        {
          driver: '宋三平',
          driverLicenseNo: '2659845612',
          illegalBehaviour: '闯红灯',
          illegalTime: '2019年7月5日 07:10:02',
          illegalPlace: '武汉市高新大道与光谷三路交叉路口',
          processingResult: '扣6分，罚款200元'
        },
        {
          driver: '宋三平',
          driverLicenseNo: '2659845612',
          illegalBehaviour: '闯红灯',
          illegalTime: '2019年7月5日 08:40:08',
          illegalPlace: '武汉市高新大道与未来二路交叉路口',
          processingResult: '扣6分，罚款200元'
        },
        {
          driver: '宋三平',
          driverLicenseNo: '2659845612',
          illegalBehaviour: '闯红灯',
          illegalTime: '2019年7月5日 09:01:23',
          illegalPlace: '武汉市高新大道与湖滨大道交叉路口',
          processingResult: '扣6分，罚款200元'
        },
        {
          driver: '卜有天',
          driverLicenseNo: '2145698657',
          illegalBehaviour: '闯红灯',
          illegalTime: '2019年7月6日 08:05:20',
          illegalPlace: '武汉市秦园中路与友谊大道交叉路口',
          processingResult: '扣6分，罚款200元'
        },
        {
          driver: '卜有天',
          driverLicenseNo: '2145698657',
          illegalBehaviour: '未礼让行人',
          illegalTime: '2019年7月6日 09:24:20',
          illegalPlace: '武汉市秦园路与临江大道大道交叉路口',
          processingResult: '扣1分，罚款200元'
        },
        {
          driver: '卜有天',
          driverLicenseNo: '2145698657',
          illegalBehaviour: '未礼让行人',
          illegalTime: '2019年7月6日 10:15:09',
          illegalPlace: '武汉市三阳路与京汉大道大道交叉路口',
          processingResult: '扣1分，罚款200元'
        },
        {
          driver: '卜有天',
          driverLicenseNo: '2145698657',
          illegalBehaviour: '闯红灯',
          illegalTime: '2019年7月6日 10:24:20',
          illegalPlace: '武汉市三阳路与解放大道大道交叉路口',
          processingResult: '扣3分，罚款200元'
        },
        {
          driver: '卜有天',
          driverLicenseNo: '2145698657',
          illegalBehaviour: '闯红灯',
          illegalTime: '2019年7月6日 12:35:36',
          illegalPlace: '武汉市黄武公路与黄陂大道大道交叉路口',
          processingResult: '扣6分，罚款200元'
        }
        // {
        //   driver: '白丽人',
        //   driverLicenseNo: '5986451285',
        //   illegalBehaviour: '闯红灯',
        //   illegalTime: '2019年2月9日 17:29:10',
        //   illegalPlace: '武汉市雄楚大道与光谷大道交叉路口',
        //   processingResult: '未处理'
        // }
      ],
      barLineDataSevenArr: [
        {
          heightClass: 'height410',
          chartOption: 'barLineSevenOption1',
          chartOptionId: 'barLineSevenOptionId1'
        },
        {
          heightClass: 'height410',
          chartOption: 'barLineSevenOption2',
          chartOptionId: 'barLineSevenOptionId2'
        },
        {
          heightClass: 'height410',
          chartOption: 'barLineSevenOption3',
          chartOptionId: 'barLineSevenOptionId3'
        },
        {
          heightClass: 'height410',
          chartOption: 'barLineSevenOption4',
          chartOptionId: 'barLineSevenOptionId4'
        },
        {
          heightClass: 'height410',
          chartOption: 'barLineSevenOption5',
          chartOptionId: 'barLineSevenOptionId5'
        },
        {
          heightClass: 'height410',
          chartOption: 'barLineSevenOption6',
          chartOptionId: 'barLineSevenOptionId6'
        }
      ],
      scoreSelectValue: '1',
      scoreSelectOptions: [
        {
          value: '1',
          label: '3分以下'
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
        },
        {
          value: '5',
          label: '12分及以上'
        }
      ],
      // 同比环比下拉框
      compareSelectValue: '1',
      compareOptions: [
        {
          value: '1',
          label: '同比'
        },
        {
          value: '2',
          label: '环比'
        }
      ],
      // 高龄大车违法分析
      dateValue1: 'jtwfsjfxBarLineOption1Day',
      dateOptions1: [
        {
          value: 'jtwfsjfxBarLineOption1Day',
          label: '日'
        },
        {
          value: 'jtwfsjfxBarLineOption1Month',
          label: '月'
        },
        {
          value: 'jtwfsjfxBarLineOption1Year',
          label: '年'
        }
      ],
      // 未处理违法车辆分析
      dateValue2: 'jtwfsjfxBarLineRotationOption2Day',
      dateOptions2: [
        {
          value: 'jtwfsjfxBarLineRotationOption2Day',
          label: '日'
        },
        {
          value: 'jtwfsjfxBarLineRotationOption2Month',
          label: '月'
        },
        {
          value: 'jtwfsjfxBarLineRotationOption2Year',
          label: '年'
        }
      ],

      // 未处理时长违法统计
      dateValue3: 'jtwfsjfxAllCircleOption3Day',
      dateOptions3: [
        {
          value: 'jtwfsjfxAllCircleOption3Day',
          label: '日'
        },
        {
          value: 'jtwfsjfxAllCircleOption3Month',
          label: '月'
        },
        {
          value: 'jtwfsjfxAllCircleOption3Year',
          label: '年'
        }
      ],

      // 一证三车违法统计
      dateValue4: 'jtwfsjfxSingleStackedAreaOption4Day',
      dateOptions4: [
        {
          value: 'jtwfsjfxSingleStackedAreaOption4Day',
          label: '日'
        },
        {
          value: 'jtwfsjfxSingleStackedAreaOption4Month',
          label: '月'
        },
        {
          value: 'jtwfsjfxSingleStackedAreaOption4Year',
          label: '年'
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
      // 一车三证违法统计下拉框数据
      dateValue4New: 'jtwfsjfxSingleStackedAreaOption4DayNew',
      dateOptions4New: [
        {
          value: 'jtwfsjfxSingleStackedAreaOption4DayNew',
          label: '日'
        },
        {
          value: 'jtwfsjfxSingleStackedAreaOption4MonthNew',
          label: '月'
        },
        {
          value: 'jtwfsjfxSingleStackedAreaOption4YearNew',
          label: '年'
        }
      ],
      dateCityValueNew: 'wuhan',
      dateCityOptionsNew: [
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
      timeStartStr: '2018年7月',
      timeEndStr: '2019年7月'
    };
  },
  created() {},
  mounted() {
    this.$nextTick(() => {});
  },
  methods: {
    // 一车三证一证三车tabs切换
    handleClick(tab, event) {
      this.activeName = tab.name;
      if (tab.name === 'first') {
        this.$nextTick(() => {
          this.dateValue4 = 'jtwfsjfxSingleStackedAreaOption4Day';
          this.dateCityValue = 'wuhan';
          this.$refs.singleStackedAreaRef4.drawChart('jtwfsjfxSingleStackedAreaOption4WuHanDay');
        });
      } else if (tab.name === 'second') {
        this.$nextTick(() => {
          this.dateCityValueNew = 'wuhan';
          this.dateValue4New = 'jtwfsjfxSingleStackedAreaOption4DayNew';
          this.$refs.singleStackedAreaRef4New.drawChart('jtwfsjfxSingleStackedAreaOption4WuHanDay1');
        });
      }
    },
    // 日月年下拉框选择
    changeDateValue(name) {
      if (name === 'one') {
        this.$refs.barLineRef1.drawChart(this.dateValue1);
      } else if (name === 'two') {
        this.$refs.barLineRotationRef.drawChart(this.dateValue2);
      } else if (name === 'three') {
        this.$refs.jtwfsjfxAllCircleRef1.drawChart(this.dateValue3);
      } else if (name === 'four' || name === 'five') {
        if (this.dateCityValue === 'wuhan' && this.dateValue4 === 'jtwfsjfxSingleStackedAreaOption4Day') {
          this.singleStackedAreaChangeValue = 'jtwfsjfxSingleStackedAreaOption4WuHanDay';
        } else if (this.dateCityValue === 'wuhan' && this.dateValue4 === 'jtwfsjfxSingleStackedAreaOption4Month') {
          this.singleStackedAreaChangeValue = 'jtwfsjfxSingleStackedAreaOption4WuHanMonth';
        } else if (this.dateCityValue === 'wuhan' && this.dateValue4 === 'jtwfsjfxSingleStackedAreaOption4Year') {
          this.singleStackedAreaChangeValue = 'jtwfsjfxSingleStackedAreaOption4WuHanYear';
        } else if (this.dateCityValue === 'huangshi' && this.dateValue4 === 'jtwfsjfxSingleStackedAreaOption4Day') {
          this.singleStackedAreaChangeValue = 'jtwfsjfxSingleStackedAreaOption4HuangShiDay';
        } else if (this.dateCityValue === 'huangshi' && this.dateValue4 === 'jtwfsjfxSingleStackedAreaOption4Month') {
          this.singleStackedAreaChangeValue = 'jtwfsjfxSingleStackedAreaOption4HuangShiMonth';
        } else if (this.dateCityValue === 'huangshi' && this.dateValue4 === 'jtwfsjfxSingleStackedAreaOption4Year') {
          this.singleStackedAreaChangeValue = 'jtwfsjfxSingleStackedAreaOption4HuangShiYear';
        }
        this.$refs.singleStackedAreaRef4.drawChart(this.singleStackedAreaChangeValue);
      } else if (name === 'six' || name === 'seven') {
        if (this.dateCityValueNew === 'wuhan' && this.dateValue4New === 'jtwfsjfxSingleStackedAreaOption4DayNew') {
          this.singleStackedAreaChangeValueNew = 'jtwfsjfxSingleStackedAreaOption4WuHanDay1';
        } else if (
          this.dateCityValueNew === 'wuhan' &&
          this.dateValue4New === 'jtwfsjfxSingleStackedAreaOption4MonthNew'
        ) {
          this.singleStackedAreaChangeValueNew = 'jtwfsjfxSingleStackedAreaOption4WuHanMonth1';
        } else if (
          this.dateCityValueNew === 'wuhan' &&
          this.dateValue4New === 'jtwfsjfxSingleStackedAreaOption4YearNew'
        ) {
          this.singleStackedAreaChangeValueNew = 'jtwfsjfxSingleStackedAreaOption4WuHanYear1';
        } else if (
          this.dateCityValueNew === 'huangshi' &&
          this.dateValue4New === 'jtwfsjfxSingleStackedAreaOption4DayNew'
        ) {
          this.singleStackedAreaChangeValueNew = 'jtwfsjfxSingleStackedAreaOption4HuangShiDay1';
        } else if (
          this.dateCityValueNew === 'huangshi' &&
          this.dateValue4New === 'jtwfsjfxSingleStackedAreaOption4MonthNew'
        ) {
          this.singleStackedAreaChangeValueNew = 'jtwfsjfxSingleStackedAreaOption4HuangShiMonth1';
        } else if (
          this.dateCityValueNew === 'huangshi' &&
          this.dateValue4New === 'jtwfsjfxSingleStackedAreaOption4YearNew'
        ) {
          this.singleStackedAreaChangeValueNew = 'jtwfsjfxSingleStackedAreaOption4HuangShiYear1';
        }
        this.$refs.singleStackedAreaRef4New.drawChart(this.singleStackedAreaChangeValueNew);
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
.wfsjfxPage {
  width: 100%;
  height: 100%;
  position: relative;
  background: url('../../assets/images/jtkshxt/bg_ksh.png') no-repeat center center;
  background-size: 100% 100%;
  .wfsjfxPage-line-chart-title {
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
  .wfsjfxPage-select-zone {
    position: absolute;
    right: 20px;
    top: 15px;
    z-index: 999;
    .wfsjfxPage-select-two-words {
      &.el-select {
        .el-input {
          .el-input__inner {
            width: 70px;
          }
        }
      }
    }
    .wfsjfxPage-select-five-words {
      margin-left: 5px;
      margin-right: 5px;
      &.el-select {
        .el-input {
          .el-input__inner {
            width: 104px;
          }
        }
      }
    }
    .wfsjfxPage-select-six-words {
      &.el-select {
        .el-input {
          .el-input__inner {
            width: 120px;
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
  .wfsjfxPage-time-zone {
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
  .wfsjfxPage-content {
    width: 100%;
    padding-top: 15px;
    padding: 20px 24px 20px 24px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    .wfsjfxPage-line-chart-content {
      width: 100%;
      &.marginTop24 {
        margin-top: 40px;
      }
      .wfsjfxPage-line-chart-detail {
        width: 100%;
        margin-top: 15px;
        border: 2px solid #173077;
        position: relative;
        box-sizing: border-box;
        &.marginTop10 {
          margin-top: 10px;
        }
      }
      .wfsjfxPage-el-tabs {
        &.el-tabs {
          margin-top: -8px;
          &:before {
            content: '';
            display: block;
            position: absolute;
            width: 4px;
            height: 18px;
            background-color: $BaseColor;
            top: 0px;
            left: 24px;
          }
          .el-tabs__header {
            margin: 0;
            padding-left: 12px;
            box-sizing: border-box;
            .el-tabs__nav-wrap {
              &::after {
                height: 0;
              }
              .el-tabs__nav-scroll {
                .el-tabs__nav {
                  .el-tabs__active-bar {
                    display: none;
                  }
                  .el-tabs__item {
                    padding: 0 10px;
                    height: 32px;
                    line-height: 32px;
                    color: $BaseColor;
                    font-size: 16px;
                    font-weight: 600;
                    letter-spacing: 1.5px;
                    border: 1px solid #3c60b8;
                    background-color: transparent;
                    &.is-active {
                      background-color: #3c60b8;
                      color: #fff;
                    }
                  }
                }
              }
            }
          }
          .el-tabs__content {
            width: 100%;
            box-sizing: border-box;
          }
        }
      }
    }
    .wfsjfxPage-left-zone {
      float: left;
      width: 28%;
      padding-right: 24px;
      box-sizing: border-box;
    }
    .wfsjfxPage-middle-zone {
      float: left;
      width: 44%;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      position: relative;
      .wfsjfxPage-middle-title {
        position: absolute;
        width: 10px;
        color: #9fd8ee;
        font-size: 24px;
        left: 120px;
        top: 40px;
        z-index: 12;
      }
      .wfsjfxPage-middle-container {
        width: 100%;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        position: relative;
        .wfsjfxPage-map-zone {
          width: 100%;
          height: 450px;
          text-align: center;
          position: relative;
          span {
            display: inline-block;
            width: 739.1px;
            height: 467.4px;
            &.wfsjfxPage-map-img {
              position: absolute;
              z-index: 9;
              top: 0px;
              left: 50%;
              margin-left: -369px;
              background: url('../../assets/images/jtkshxt/bg_map_base.png') no-repeat center center;
              background-size: 100% 100%;
            }
            &.wfsjfxPage-map-name-text {
              position: absolute;
              z-index: 10;
              top: -15px;
              left: 50%;
              margin-left: -369px;
              background: url('../../assets/images/jtkshxt/bg_map_name.png') no-repeat center center;
              background-size: 100% 100%;
            }
            &.wfsjfxPage-map-pop {
              position: absolute;
              z-index: 11;
              top: -10px;
              left: 50%;
              margin-left: -329px;
              background: url('../../assets/images/jtkshxt/bg_map_pop1.png') no-repeat center center;
              background-size: 100% 100%;
            }
          }
        }
        .wfsjfxPage-table-zone {
          width: 100%;
          height: 445px;
          position: relative;
          .wfsjfxPage-table-container {
            width: 100%;
            margin-top: 15px;
            border: 2px solid #173077;
            .jtxxypxtPage-table {
              width: 100%;
              .el-table__header-wrapper {
                width: 100%;
                background-color: #163e6e;
              }
            }
            .el-pagination-zone {
              width: 100%;
              padding-top: 17px;
              padding: 17px 10px 15px 10px;
              box-sizing: border-box;
              .el-pagination-totle-text {
                float: left;
                color: rgba(255, 255, 255, 0.6);
                font-size: 14px;
              }
              .znscycydPage-info-pagination {
                float: right;
              }
              .znscycydPage-info-bottom-pagination {
                float: right;
                padding-right: 20px;
              }
            }
          }
        }
        .wfsjfxPage-middle-bottom {
          width: 100%;
          margin-top: 40px;
          .wfsjfxPage-middle-bottom-content {
            width: 100%;
            box-sizing: border-box;
            margin-top: 10px;
            position: relative;
            .wfsjfxPage-middle-bottom-content-title {
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
              z-index: 16;
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
              margin-top: 15px;
              border: 2px solid #173077;
              position: relative;
              z-index: 15;
              .middle-carousel-detail {
                .el-carousel {
                  height: 410px;
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
                        background: url('../../assets/images/jtkshxt/el-carousel-arrow-left.png') no-repeat center
                          center;
                        background-size: 100% 100%;
                      }
                      &.el-carousel__arrow--right {
                        background: url('../../assets/images/jtkshxt/el-carousel-arrow-right.png') no-repeat center
                          center;
                        background-size: 100% 100%;
                      }
                    }
                    .el-carousel__item {
                      width: calc(100% - 30px);
                      margin: 0 0 0 30px;
                      box-sizing: border-box;
                    }
                  }
                  .el-carousel__indicators {
                    display: none;
                  }
                }
              }
            }
          }
        }
      }
    }
    .wfsjfxPage-right-zone {
      float: left;
      width: 28%;
      padding-left: 24px;
      box-sizing: border-box;
      position: relative;
      .wfsjfxPage-circle-text-left {
        position: absolute;
        top: 50px;
        left: 0px;
        width: 135px;
        height: 0px;
        text-align: center;
        p {
          width: 100%;
          text-align: center;
          color: #fff;
          font-size: 16px;
          font-weight: 700;
          letter-spacing: 1.5px;
          margin-top: 15px;
        }
        div {
          width: 100%;
          text-align: center;
          color: #1e99fd;
          font-size: 16px;
          font-weight: 600;
          letter-spacing: 1.5px;
          margin-top: 10px;
        }
        span {
          display: inline-block;
          width: 100%;
          text-align: center;
          color: #1e99fd;
          font-size: 14px;
          margin-top: 6px;
        }
        b {
          position: absolute;
          top: 50px;
          right: -65px;
          display: inline-block;
          width: 70px;
          height: 22px;
          line-height: 22px;
          font-size: 12px;
          color: #fff;
          background-color: #1e99fd;
          border-radius: 22px;
          border: 1px solid #05133f;
          box-sizing: border-box;
          z-index: 99;
        }
        i {
          position: absolute;
          display: inline-block;
          width: 6px;
          height: 6px;
          background-color: #1e99fd;
          border-radius: 6px;
          box-sizing: border-box;
          z-index: 100;
          &.circle-1 {
            top: -37px;
            right: -123px;
          }
          &.circle-2 {
            top: 135px;
            right: -109px;
          }
        }
      }
      .wfsjfxPage-circle-text-right {
        position: absolute;
        top: 50px;
        right: 0px;
        width: 135px;
        height: 0px;
        text-align: center;
        p {
          width: 100%;
          text-align: center;
          color: #fff;
          font-size: 16px;
          font-weight: 700;
          letter-spacing: 1.5px;
          margin-top: 15px;
        }
        div {
          width: 100%;
          text-align: center;
          color: #1e99fd;
          font-size: 16px;
          font-weight: 600;
          letter-spacing: 1.5px;
          margin-top: 10px;
        }
        span {
          display: inline-block;
          width: 100%;
          text-align: center;
          color: #1e99fd;
          font-size: 14px;
          margin-top: 6px;
        }
        b {
          position: absolute;
          top: 60px;
          left: -65px;
          display: inline-block;
          width: 70px;
          height: 22px;
          line-height: 22px;
          font-size: 12px;
          color: #fff;
          background-color: #10d699;
          border-radius: 22px;
          border: 1px solid #05133f;
          box-sizing: border-box;
          z-index: 99;
        }
        i {
          position: absolute;
          display: inline-block;
          width: 6px;
          height: 6px;
          background-color: #10d699;
          border-radius: 6px;
          box-sizing: border-box;
          z-index: 100;
          &.circle-1 {
            top: 53px;
            left: -32px;
          }
        }
      }
    }
  }
}
</style>
