<template>
    <!--积分模型-->
    <div class="jfmxPage">
        <div class="border-top-left"></div>
        <div class="border-top-right"></div>
        <div class="border-bottom-left"></div>
        <div class="border-bottom-right"></div>
        <el-tabs class="jfmxPage-tabs" v-model="activeName" @tab-click="handleTabClick">
            <el-tab-pane label="重点车辆积分模型" name="first">
                <div class="jfmxPage-container">
                  <search-input @search="searchCarInfo"
                          :searchPlaceholder="'请输入关键字搜索'"></search-input>
                  <el-table
                      class="jtxxypxtPage-table"
                      :data="tableData"
                      :row-key="getRowKeys"
                      :expand-row-keys="expands"
                      height="550">
                      <el-table-column type="expand">
                          <template slot-scope="props">
                              <el-form label-position="top" inline class="demo-table-expand ycdz-table-expand">
                                  <el-form-item label="计分项目" style="width: 40%;">
                                      <span>{{ props.row.scoringProject1 }}</span>
                                  </el-form-item>
                                  <el-form-item label="计分行为" style="width: 40%;">
                                      <span>{{ props.row.scoringBehavior1 }}</span>
                                  </el-form-item>
                                  <el-form-item label="计分" style="width: 20%;">
                                      <span>{{ props.row.scoring1 }}</span>
                                  </el-form-item>
                              </el-form>
                              <el-form label-position="top" v-for="(item,index) in props.row.childrenDetail" :key="index" inline class="demo-table-expand ycdz-table-expand">
                                  <el-form-item style="width: 40%;">
                                      <span>{{ item.scoringProject }}</span>
                                  </el-form-item>
                                  <el-form-item style="width: 40%;">
                                      <span>{{ item.scoringBehavior }}</span>
                                  </el-form-item>
                                  <el-form-item style="width: 20%;">
                                      <span>{{ item.scoring }}</span>
                                  </el-form-item>
                              </el-form>
                          </template>
                      </el-table-column>
                      <el-table-column
                          label="车牌号"
                          prop="carNum"
                          min-width="15%">
                      </el-table-column>
                      <el-table-column
                          label="车辆所有人"
                          prop="carOwner"
                          min-width="10%">
                      </el-table-column>
                      <el-table-column
                          label="号牌种类"
                          prop="numType"
                          min-width="10%">
                      </el-table-column>
                      <el-table-column
                          label="车身颜色"
                          prop="carColor"
                          min-width="10%">
                      </el-table-column>
                      <el-table-column
                          label="使用性质"
                          prop="useCharacter"
                          min-width="10%">
                      </el-table-column>
                      <el-table-column
                          label="有效日期"
                          prop="effectiveDate"
                          min-width="15%">
                      </el-table-column>
                      <el-table-column
                          label="累计分数"
                          prop="totalNumber"
                          min-width="10%">
                      </el-table-column>
                  </el-table> 
                  <div class="el-pagination-zone clearfloat">
                    <div class="el-pagination-totle-text">共 4 条数据</div>
                    <el-pagination class="jfmxPage-info-bottom-pagination" :current-page="1"
                      :page-sizes="[10, 20]" :page-size="10" layout="prev, pager, next, sizes" :total="4">
                    </el-pagination>
                  </div>         
                </div>
            </el-tab-pane>
            <el-tab-pane label="重点驾驶员积分模型" name="second">
              <div class="jfmxPage-container">
                  <search-input @search="searchCarInfo"
                          :searchPlaceholder="'请输入关键字搜索'"></search-input>
                  <el-table
                      class="jtxxypxtPage-table"
                      :data="driverTableData"
                      :row-key="getDriverRowKeys"
                      :expand-row-keys="driverDxpands"
                      height="550">
                      <el-table-column type="expand">
                          <template slot-scope="props">
                              <el-form label-position="top" inline class="demo-table-expand ycdz-table-expand">
                                  <el-form-item label="计分项目" style="width: 40%;">
                                      <span>{{ props.row.scoringProject1 }}</span>
                                  </el-form-item>
                                  <el-form-item label="计分行为" style="width: 40%;">
                                      <span>{{ props.row.scoringBehavior1 }}</span>
                                  </el-form-item>
                                  <el-form-item label="计分" style="width: 20%;">
                                      <span>{{ props.row.scoring1 }}</span>
                                  </el-form-item>
                              </el-form>
                              <el-form label-position="top" v-for="(item,index) in props.row.childrenDetail" :key="index" inline class="demo-table-expand ycdz-table-expand">
                                  <el-form-item style="width: 40%;">
                                      <span>{{ item.scoringProject }}</span>
                                  </el-form-item>
                                  <el-form-item style="width: 40%;">
                                      <span>{{ item.scoringBehavior }}</span>
                                  </el-form-item>
                                  <el-form-item style="width: 20%;">
                                      <span>{{ item.scoring }}</span>
                                  </el-form-item>
                              </el-form>
                          </template>
                      </el-table-column>
                      <el-table-column
                          label="驾驶证号"
                          prop="drivingLicenseNumber"
                          min-width="15%">
                      </el-table-column>
                      <el-table-column
                          label="车辆所有人"
                          prop="driver"
                          min-width="10%">
                      </el-table-column>
                      <el-table-column
                          label="档案编号"
                          prop="fileNumber"
                          min-width="12%">
                      </el-table-column>
                      <el-table-column
                          label="准驾车型"
                          prop="quasiDrivingVehicle"
                          min-width="8%">
                      </el-table-column>
                      <el-table-column
                          label="发证机关"
                          prop="licenceIssuingAuthority"
                          min-width="20%">
                      </el-table-column>
                      <el-table-column
                          label="驾照剩余分数"
                          prop="jzsyScore"
                          min-width="10%">
                      </el-table-column>
                      <el-table-column
                          label="有效日期"
                          prop="jzEffectiveDate"
                          min-width="17%">
                      </el-table-column>
                      <el-table-column
                          label="累积分数"
                          prop="totalNumber"
                          min-width="8%">
                      </el-table-column>
                  </el-table> 
                  <div class="el-pagination-zone clearfloat">
                    <div class="el-pagination-totle-text">共 4 条数据</div>
                    <el-pagination class="jfmxPage-info-bottom-pagination" :current-page="1"
                      :page-sizes="[10, 20]" :page-size="10" layout="prev, pager, next, sizes" :total="4">
                    </el-pagination>
                  </div>         
                </div>
            </el-tab-pane>
            <el-tab-pane label="重点企业积分模型" name="third">
              <div class="jfmxPage-container">
                  <search-input @search="searchCarInfo"
                          :searchPlaceholder="'请输入关键字搜索'"></search-input>
                  <el-table
                      class="jtxxypxtPage-table"
                      :data="businessTableData"
                      :row-key="getBusinessRowKeys"
                      :expand-row-keys="businessDxpands"
                      height="550">
                      <el-table-column type="expand">
                          <template slot-scope="props">
                              <el-form label-position="top" inline class="demo-table-expand ycdz-table-expand">
                                  <el-form-item label="记分项目" style="width: 40%;">
                                      <span>{{ props.row.scoringProject1 }}</span>
                                  </el-form-item>
                                  <el-form-item label="记分行为" style="width: 40%;">
                                      <span>{{ props.row.scoringBehavior1 }}</span>
                                  </el-form-item>
                                  <el-form-item label="记分" style="width: 20%;">
                                      <span>{{ props.row.scoring1 }}</span>
                                  </el-form-item>
                              </el-form>
                              <el-form label-position="top" v-for="(item,index) in props.row.childrenDetail" :key="index" inline class="demo-table-expand ycdz-table-expand">
                                  <el-form-item style="width: 40%;">
                                      <span>{{ item.scoringProject }}</span>
                                  </el-form-item>
                                  <el-form-item style="width: 40%;">
                                      <span>{{ item.scoringBehavior }}</span>
                                  </el-form-item>
                                  <el-form-item style="width: 20%;">
                                      <span>{{ item.scoring }}</span>
                                  </el-form-item>
                              </el-form>
                          </template>
                      </el-table-column>
                      <el-table-column
                          label="企业名称"
                          prop="qymc"
                          min-width="20%">
                      </el-table-column>
                      <el-table-column
                          label="法人代表"
                          prop="frdb"
                          min-width="10%">
                      </el-table-column>
                      <el-table-column
                          label="社会统一信用代码"
                          prop="shtyxydm"
                          min-width="22%">
                      </el-table-column>
                      <el-table-column
                          label="企业类型"
                          prop="qylx"
                          min-width="15%">
                      </el-table-column>
                      <el-table-column
                          label="企业标识"
                          prop="qybs"
                          min-width="8%">
                      </el-table-column>
                      <el-table-column
                          label="信用等级"
                          prop="xydj"
                          min-width="10%">
                      </el-table-column>
                      <el-table-column
                          label="企业性质"
                          prop="qyxz"
                          min-width="5%">
                      </el-table-column>
                      <el-table-column
                          label="累计分数"
                          prop="ljfs"
                          min-width="10%">
                      </el-table-column>
                  </el-table> 
                  <div class="el-pagination-zone clearfloat">
                    <div class="el-pagination-totle-text">共 3 条数据</div>
                    <el-pagination class="jfmxPage-info-bottom-pagination" :current-page="1"
                      :page-sizes="[10, 20]" :page-size="10" layout="prev, pager, next, sizes" :total="3">
                    </el-pagination>
                  </div>         
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import SearchInput from '@/components/global/search-input';
export default {
  name: 'Znss',
  components: {
    SearchInput
  },
  data() {
    return {
      activeName: 'first',
      tableData: [
        {
          carNum: '鄂AEG005',
          carOwner: '张三',
          numType: '蓝牌',
          totalNumber: '96分',
          carColor: '白色',
          useCharacter: '家庭自用汽车',
          effectiveDate: '2019年6月2号',
          scoringProject1: '车辆技术检验',
          scoringBehavior1: '逾期未年检1年内',
          scoring1: '20分',
          childrenDetail: [
            {
              scoringProject: '违法行为频率',
              scoringBehavior: '3-10次',
              scoring: '10分'
            },
            {
              scoringProject: '重点违法行为次数',
              scoringBehavior: '2次以上',
              scoring: '10分'
            },
            {
              scoringProject: '违法未处理的次数',
              scoringBehavior: '3次以下',
              scoring: '10分'
            },
            {
              scoringProject: '机动车核载人数',
              scoringBehavior: '2次以上',
              scoring: '10分'
            },
            {
              scoringProject: '事故次数',
              scoringBehavior: '超过3次',
              scoring: '10分'
            },
            {
              scoringProject: '疲劳驾驶次数',
              scoringBehavior: '超过3次',
              scoring: '10分'
            },
            {
              scoringProject: '高危时间段行驶',
              scoringBehavior: '超过3次',
              scoring: '10分'
            }
          ]
        },
        {
          carNum: '鄂A56CB2',
          carOwner: '李四',
          numType: '蓝牌',
          totalNumber: '92分',
          carColor: '黑色',
          useCharacter: '营业客车',
          effectiveDate: '2022年10月2号',
          illegalCarNum: '10387562',
          driver: '欧气',
          identityNum: '420111199603576689',
          fileNo: 'XX26542633',
          drivingTyp: 'A1',
          fzjg: '咸宁市公安局交通警察支队',
          syfs: '6分',
          effectiveDate2: '2019年5月2号',
          childrenDetail: [
            {
              scoringProject: '违法行为频率',
              scoringBehavior: '3-10次',
              scoring: '10分'
            },
            {
              scoringProject: '重点违法行为次数',
              scoringBehavior: '2次以上',
              scoring: '10分'
            },
            {
              scoringProject: '违法未处理的次数',
              scoringBehavior: '3次以下',
              scoring: '10分'
            },
            {
              scoringProject: '机动车核载人数',
              scoringBehavior: '2次以上',
              scoring: '10分'
            },
            {
              scoringProject: '事故次数',
              scoringBehavior: '超过3次',
              scoring: '10分'
            },
            {
              scoringProject: '疲劳驾驶次数',
              scoringBehavior: '超过3次',
              scoring: '10分'
            },
            {
              scoringProject: '高危时间段行驶',
              scoringBehavior: '超过3次',
              scoring: '10分'
            }
          ]
        },
        {
          carNum: '鄂A8MM78',
          carOwner: '王五',
          numType: '蓝牌',
          totalNumber: '87分',
          carColor: '银灰色',
          useCharacter: '营业货车',
          effectiveDate: '2020年10月2号',
          illegalCarNum: '1058746',
          driver: '小七',
          identityNum: '420121197802156589',
          fileNo: 'XX26542633',
          drivingTyp: 'A1',
          fzjg: '随州市公安局交通警察支队',
          syfs: '9分',
          effectiveDate2: '2019年3月2号',
          childrenDetail: [
            {
              scoringProject: '违法行为频率',
              scoringBehavior: '3-10次',
              scoring: '10分'
            },
            {
              scoringProject: '重点违法行为次数',
              scoringBehavior: '2次以上',
              scoring: '10分'
            },
            {
              scoringProject: '违法未处理的次数',
              scoringBehavior: '3次以下',
              scoring: '10分'
            },
            {
              scoringProject: '机动车核载人数',
              scoringBehavior: '2次以上',
              scoring: '10分'
            },
            {
              scoringProject: '事故次数',
              scoringBehavior: '超过3次',
              scoring: '10分'
            },
            {
              scoringProject: '疲劳驾驶次数',
              scoringBehavior: '超过3次',
              scoring: '10分'
            },
            {
              scoringProject: '高危时间段行驶',
              scoringBehavior: '超过3次',
              scoring: '10分'
            }
          ]
        },
        {
          carNum: '鄂ANN776',
          carOwner: '赵柳',
          numType: '蓝牌',
          totalNumber: '81分',
          carColor: '蓝色',
          useCharacter: '非营业客车',
          effectiveDate: '2024年9月2号',
          illegalCarNum: '1012587',
          driver: '小五',
          identityNum: '420123197808153615',
          fileNo: 'XX26542633',
          drivingTyp: 'A2',
          fzjg: '黄石市公安局交通警察支队',
          syfs: '3分',
          effectiveDate2: '2019年3月2号',
          childrenDetail: [
            {
              scoringProject: '违法行为频率',
              scoringBehavior: '3-10次',
              scoring: '10分'
            },
            {
              scoringProject: '重点违法行为次数',
              scoringBehavior: '2次以上',
              scoring: '10分'
            },
            {
              scoringProject: '违法未处理的次数',
              scoringBehavior: '3次以下',
              scoring: '10分'
            },
            {
              scoringProject: '机动车核载人数',
              scoringBehavior: '2次以上',
              scoring: '10分'
            },
            {
              scoringProject: '事故次数',
              scoringBehavior: '超过3次',
              scoring: '10分'
            },
            {
              scoringProject: '疲劳驾驶次数',
              scoringBehavior: '超过3次',
              scoring: '10分'
            },
            {
              scoringProject: '高危时间段行驶',
              scoringBehavior: '超过3次',
              scoring: '10分'
            }
          ]
        }
      ],
      // 重点车辆表格获取row的key值
      getRowKeys(row) {
        return row.carNum;
      },
      // 重点车辆表格要展开的行，数值的元素是row的key值
      expands: [],

      // 重点驾驶员表格
      driverTableData: [
        {
          drivingLicenseNumber: '420112198405263215',
          driver: '张三新',
          totalNumber: '95分',
          fileNumber: '124585472314',
          quasiDrivingVehicle: 'C1',
          licenceIssuingAuthority: '武汉市公安局交通警察支队',
          jzsyScore: '3分',
          jzEffectiveDate: '2019年6月2号',
          scoringProject1: '驾驶证审验情况',
          scoringBehavior1: '超过1个月',
          scoring1: '5分',
          childrenDetail: [
            {
              scoringProject: '驾驶人驾龄',
              scoringBehavior: '低于3年',
              scoring: '5分'
            },
            {
              scoringProject: '驾驶人年龄',
              scoringBehavior: '超过50岁',
              scoring: '10分'
            },
            {
              scoringProject: '被教育约谈情况',
              scoringBehavior: '超过3次',
              scoring: '20分'
            },
            {
              scoringProject: '违法记分情况',
              scoringBehavior: '超过10分',
              scoring: '20分'
            },
            {
              scoringProject: '违法频率',
              scoringBehavior: '1个月超过3次',
              scoring: '10分'
            },
            {
              scoringProject: '过往交通事故',
              scoringBehavior: '超过3起',
              scoring: '20分'
            }
          ]
        },
        {
          drivingLicenseNumber: '420114197806153589',
          driver: '李四',
          totalNumber: '92分',
          fileNumber: '125863143656',
          quasiDrivingVehicle: 'B1',
          licenceIssuingAuthority: '武汉黄石市公安局交通警察支队',
          jzsyScore: '6分',
          jzEffectiveDate: '2022年10月2号',
          scoringProject1: '驾驶证审验情况',
          scoringBehavior1: '超过1个月',
          scoring1: '5分',
          childrenDetail: [
            {
              scoringProject: '驾驶人驾龄',
              scoringBehavior: '低于3年',
              scoring: '5分'
            },
            {
              scoringProject: '驾驶人年龄',
              scoringBehavior: '超过50岁',
              scoring: '10分'
            },
            {
              scoringProject: '被教育约谈情况',
              scoringBehavior: '超过3次',
              scoring: '20分'
            },
            {
              scoringProject: '违法记分情况',
              scoringBehavior: '超过10分',
              scoring: '20分'
            },
            {
              scoringProject: '违法频率',
              scoringBehavior: '1个月超过3次',
              scoring: '10分'
            },
            {
              scoringProject: '过往交通事故',
              scoringBehavior: '超过3起',
              scoring: '20分'
            }
          ]
        },
        {
          drivingLicenseNumber: '420111198604152356',
          driver: '王五',
          totalNumber: '86分',
          fileNumber: '121289144789',
          quasiDrivingVehicle: 'A1',
          licenceIssuingAuthority: '武汉咸宁市公安局交通警察支队',
          jzsyScore: '9分',
          jzEffectiveDate: '2020年10月2号',
          scoringProject1: '驾驶证审验情况',
          scoringBehavior1: '超过1个月',
          scoring1: '5分',
          childrenDetail: [
            {
              scoringProject: '驾驶人驾龄',
              scoringBehavior: '低于3年',
              scoring: '5分'
            },
            {
              scoringProject: '驾驶人年龄',
              scoringBehavior: '超过50岁',
              scoring: '10分'
            },
            {
              scoringProject: '被教育约谈情况',
              scoringBehavior: '超过3次',
              scoring: '20分'
            },
            {
              scoringProject: '违法记分情况',
              scoringBehavior: '超过10分',
              scoring: '20分'
            },
            {
              scoringProject: '违法频率',
              scoringBehavior: '1个月超过3次',
              scoring: '10分'
            },
            {
              scoringProject: '过往交通事故',
              scoringBehavior: '超过3起',
              scoring: '20分'
            }
          ]
        },
        {
          drivingLicenseNumber: '420110199108196548',
          driver: '赵柳',
          totalNumber: '82分',
          fileNumber: '129812544578',
          quasiDrivingVehicle: 'A1',
          licenceIssuingAuthority: '武汉孝感市公安局交通警察支队',
          jzsyScore: '12分',
          jzEffectiveDate: '2024年9月2号',
          scoringProject1: '驾驶证审验情况',
          scoringBehavior1: '超过1个月',
          scoring1: '5分',
          childrenDetail: [
            {
              scoringProject: '驾驶人驾龄',
              scoringBehavior: '低于3年',
              scoring: '5分'
            },
            {
              scoringProject: '驾驶人年龄',
              scoringBehavior: '超过50岁',
              scoring: '10分'
            },
            {
              scoringProject: '被教育约谈情况',
              scoringBehavior: '超过3次',
              scoring: '20分'
            },
            {
              scoringProject: '违法记分情况',
              scoringBehavior: '超过10分',
              scoring: '20分'
            },
            {
              scoringProject: '违法频率',
              scoringBehavior: '1个月超过3次',
              scoring: '10分'
            },
            {
              scoringProject: '过往交通事故',
              scoringBehavior: '超过3起',
              scoring: '20分'
            }
          ]
        }
      ],
      // 重点驾驶员表格获取row的key值
      getDriverRowKeys(row) {
        return row.drivingLicenseNumber;
      },
      // 重点驾驶员表格要展开的行，数值的元素是row的key值
      driverDxpands: [],

      // 企业积分模型表格
      businessTableData: [
        {
          qyid: '1',
          qymc: '武汉巨正科技有限公司',
          frdb: '张三',
          shtyxydm: '2102110001194560',
          qylx: '股份有限公司',
          qybs: '无',
          xydj: 'AAA',
          qyxz: '国有',
          ljfs: '93',
          scoringProject1: '车辆技术检验',
          scoringBehavior1: '逾期未年检1年内',
          scoring1: '5分',
          childrenDetail: [
            {
              scoringProject: '机动车违法行为频率',
              scoringBehavior: '3-10次',
              scoring: '10分'
            },
            {
              scoringProject: '机动车重点违法行为次数',
              scoringBehavior: '2次以上',
              scoring: '10分'
            },
            {
              scoringProject: '机动车违法未处理的次数',
              scoringBehavior: '3次以下',
              scoring: '15分'
            },
            {
              scoringProject: '机动车核载人数',
              scoringBehavior: '2次以上',
              scoring: '10分'
            },
            {
              scoringProject: '机动车事故次数',
              scoringBehavior: '超过3次',
              scoring: '10分'
            },
            {
              scoringProject: '疲劳驾驶次数',
              scoringBehavior: '超过3次',
              scoring: '10分'
            },
            {
              scoringProject: '机动车高危时间段行驶',
              scoringBehavior: '超过3次',
              scoring: '10分'
            },
            {
              scoringProject: '驾驶人驾驶证审验情况',
              scoringBehavior: '超过1个月',
              scoring: '10分'
            },
            {
              scoringProject: '驾驶人驾龄',
              scoringBehavior: '低于3年',
              scoring: '5分'
            },
            {
              scoringProject: '驾驶人年龄',
              scoringBehavior: '超过50岁',
              scoring: '5分'
            },
            {
              scoringProject: '驾驶人被教育约谈情况',
              scoringBehavior: '超过3次',
              scoring: '10分'
            },
            {
              scoringProject: '驾驶人违法记分情况',
              scoringBehavior: '超过10分',
              scoring: '10分'
            },
            {
              scoringProject: '驾驶人违法频率',
              scoringBehavior: '1个月超过3次',
              scoring: '10分'
            },
            {
              scoringProject: '驾驶人过往交通事故',
              scoringBehavior: '超过3起',
              scoring: '10分'
            }
          ]
        },
        {
          qyid: '2',
          qymc: '武汉方午科技有限公司',
          frdb: '张无机',
          shtyxydm: '21021100098458',
          qylx: '股份有限公司',
          qybs: '无',
          xydj: 'AA',
          qyxz: '私有',
          ljfs: '91',
          scoringProject1: '车辆技术检验',
          scoringBehavior1: '逾期未年检1年内',
          scoring1: '5分',
          childrenDetail: [
            {
              scoringProject: '机动车违法行为频率',
              scoringBehavior: '3-10次',
              scoring: '10分'
            },
            {
              scoringProject: '机动车重点违法行为次数',
              scoringBehavior: '2次以上',
              scoring: '10分'
            },
            {
              scoringProject: '机动车违法未处理的次数',
              scoringBehavior: '3次以下',
              scoring: '15分'
            },
            {
              scoringProject: '机动车核载人数',
              scoringBehavior: '2次以上',
              scoring: '10分'
            },
            {
              scoringProject: '机动车事故次数',
              scoringBehavior: '超过3次',
              scoring: '10分'
            },
            {
              scoringProject: '疲劳驾驶次数',
              scoringBehavior: '超过3次',
              scoring: '10分'
            },
            {
              scoringProject: '机动车高危时间段行驶',
              scoringBehavior: '超过3次',
              scoring: '10分'
            },
            {
              scoringProject: '驾驶人驾驶证审验情况',
              scoringBehavior: '超过1个月',
              scoring: '10分'
            },
            {
              scoringProject: '驾驶人驾龄',
              scoringBehavior: '低于3年',
              scoring: '5分'
            },
            {
              scoringProject: '驾驶人年龄',
              scoringBehavior: '超过50岁',
              scoring: '5分'
            },
            {
              scoringProject: '驾驶人被教育约谈情况',
              scoringBehavior: '超过3次',
              scoring: '10分'
            },
            {
              scoringProject: '驾驶人违法记分情况',
              scoringBehavior: '超过10分',
              scoring: '10分'
            },
            {
              scoringProject: '驾驶人违法频率',
              scoringBehavior: '1个月超过3次',
              scoring: '10分'
            },
            {
              scoringProject: '驾驶人过往交通事故',
              scoringBehavior: '超过3起',
              scoring: '10分'
            }
          ]
        },
        {
          qyid: '3',
          qymc: '武汉七点科技有限公司',
          frdb: '张区典',
          shtyxydm: '210211043343445',
          qylx: '股份有限公司',
          qybs: '无',
          xydj: 'AA',
          qyxz: '私有',
          ljfs: '87',
          scoringProject1: '车辆技术检验',
          scoringBehavior1: '逾期未年检1年内',
          scoring1: '5分',
          childrenDetail: [
            {
              scoringProject: '机动车违法行为频率',
              scoringBehavior: '3-10次',
              scoring: '10分'
            },
            {
              scoringProject: '机动车重点违法行为次数',
              scoringBehavior: '2次以上',
              scoring: '10分'
            },
            {
              scoringProject: '机动车违法未处理的次数',
              scoringBehavior: '3次以下',
              scoring: '15分'
            },
            {
              scoringProject: '机动车核载人数',
              scoringBehavior: '2次以上',
              scoring: '10分'
            },
            {
              scoringProject: '机动车事故次数',
              scoringBehavior: '超过3次',
              scoring: '10分'
            },
            {
              scoringProject: '疲劳驾驶次数',
              scoringBehavior: '超过3次',
              scoring: '10分'
            },
            {
              scoringProject: '机动车高危时间段行驶',
              scoringBehavior: '超过3次',
              scoring: '10分'
            },
            {
              scoringProject: '驾驶人驾驶证审验情况',
              scoringBehavior: '超过1个月',
              scoring: '10分'
            },
            {
              scoringProject: '驾驶人驾龄',
              scoringBehavior: '低于3年',
              scoring: '5分'
            },
            {
              scoringProject: '驾驶人年龄',
              scoringBehavior: '超过50岁',
              scoring: '5分'
            },
            {
              scoringProject: '驾驶人被教育约谈情况',
              scoringBehavior: '超过3次',
              scoring: '10分'
            },
            {
              scoringProject: '驾驶人违法记分情况',
              scoringBehavior: '超过10分',
              scoring: '10分'
            },
            {
              scoringProject: '驾驶人违法频率',
              scoringBehavior: '1个月超过3次',
              scoring: '10分'
            },
            {
              scoringProject: '驾驶人过往交通事故',
              scoringBehavior: '超过3起',
              scoring: '10分'
            }
          ]
        }
      ],
      // 重点驾驶员表格获取row的key值
      getBusinessRowKeys(row) {
        return row.qyid;
      },
      // 重点驾驶员表格要展开的行，数值的元素是row的key值
      businessDxpands: []
    };
  },
  mounted() {
    // this.expands.push(this.tableData[0].carNum);
  },
  methods: {
    // tab点击切换
    handleTabClick(tab, event) {
      this.activeName = tab.name;
      if (tab.name === 'second') {
        // this.driverDxpands.push(this.driverTableData[0].drivingLicenseNumber);
      } else if (tab.name === 'third') {
        // this.businessDxpands.push(this.businessTableData[0].qyid);
      }
    },
    searchCarInfo() {
      console.log('搜索关键字信息');
    }
  }
};
</script>

<style lang="scss">
.jfmxPage {
  width: 1818px;
  height: 810px;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid #182e65;
  left: 45px;
  top: 181px;
  .jfmxPage-tabs {
    &.el-tabs {
      .el-tabs__header {
        margin: 0;
        .el-tabs__nav-wrap {
          &:after {
            height: 0;
          }
          .el-tabs__nav-scroll {
            width: 100%;
            height: 48px;
            line-height: 48px;
            background-color: rgba(255, 255, 255, 0.09);
            .el-tabs__nav {
              padding-left: 30px;
              .el-tabs__active-bar {
                width: 40px !important;
                left: 70px;
                background-color: #fbf201;
              }
              .el-tabs__item {
                color: #fff;
                font-size: 16px;
                letter-spacing: 1.5;
                box-sizing: border-box;
                &.is-active {
                  color: #fbf201;
                }
              }
            }
          }
        }
      }
      .el-tabs__content {
        width: 100%;
        height: calc(100% - 240px);
        .jfmxPage-container {
          width: 100%;
          padding: 24px;
          box-sizing: border-box;
          .ycdz-table-expand {
            .el-form-item {
              margin-bottom: 0;
              .el-form-item__label {
                display: inline-block;
                padding-top: 15px;
                margin-bottom: 15px;
                height: 32px;
                line-height: 32px;
              }
              &.first-child {
                margin-top: 10px;
                .el-form-item__label {
                  color: #fff;
                }
              }
              .el-form-item__content {
                span {
                  color: rgba(255, 255, 255, 0.6);
                }
              }
            }
            &:last-child {
              margin-bottom: 15px;
            }
          }
          .el-pagination-zone {
            width: 100%;
            padding-top: 25px;
            .el-pagination-totle-text {
              float: left;
              color: rgba(255, 255, 255, 0.6);
              font-size: 14px;
            }
            .znscycydPage-info-pagination {
              float: right;
            }
            .jfmxPage-info-bottom-pagination {
              float: right;
            }
          }
        }
      }
    }
  }
}
</style>
