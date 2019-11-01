<template>
    <!--一车多证-->
    <div class="ycdzPage">
        <div class="border-top-left"></div>
        <div class="border-top-right"></div>
        <div class="border-bottom-left"></div>
        <div class="border-bottom-right"></div>
        <div class="ycdzPage-container">
            <search-input @search="searchCarInfo"
                     :searchPlaceholder="'请输入关键字搜索'"></search-input>
            <el-table
                class="jtxxypxtPage-table"
                :data="tableData"
                :row-key="getRowKeys"
                :expand-row-keys="expands"
                height="600">
                <el-table-column type="expand">
                    <template slot-scope="props">
                        <el-form label-position="top" inline class="demo-table-expand ycdz-table-expand">
                            <el-form-item label="处理违法使用过的驾驶证号">
                                <span>{{ props.row.illegalCarNum }}</span>
                            </el-form-item>
                            <el-form-item label="驾驶员姓名">
                                <span>{{ props.row.driver }}</span>
                            </el-form-item>
                            <el-form-item label="身份证号">
                                <span>{{ props.row.identityNum }}</span>
                            </el-form-item>
                            <el-form-item label="档案编号">
                                <span>{{ props.row.fileNo }}</span>
                            </el-form-item>
                            <el-form-item label="准驾车型">
                                <span>{{ props.row.drivingTyp }}</span>
                            </el-form-item>
                            <el-form-item label="发证机关">
                                <span>{{ props.row.fzjg }}</span>
                            </el-form-item>
                            <el-form-item label="剩余分数">
                                <span>{{ props.row.syfs }}</span>
                            </el-form-item>
                            <el-form-item label="有效日期">
                                <span>{{ props.row.effectiveDate2 }}</span>
                            </el-form-item>
                            <el-form label-position="top" v-for="(item,index) in props.row.childrenDetail" :key="index" inline class="demo-table-expand ycdz-table-expand">
                            <el-form-item >
                                <span>{{ item.illegalCarNum }}</span>
                            </el-form-item>
                            <el-form-item >
                                <span>{{ item.driver }}</span>
                            </el-form-item>
                            <el-form-item >
                                <span>{{ item.identityNum }}</span>
                            </el-form-item>
                            <el-form-item >
                                <span>{{ item.fileNo }}</span>
                            </el-form-item>
                            <el-form-item >
                                <span>{{ item.drivingTyp }}</span>
                            </el-form-item>
                            <el-form-item >
                                <span>{{ item.fzjg }}</span>
                            </el-form-item>
                            <el-form-item >
                                <span>{{ item.syfs }}</span>
                            </el-form-item>
                            <el-form-item >
                                <span>{{ item.effectiveDate2 }}</span>
                            </el-form-item>
                          </el-form>
                        </el-form>
                    </template>
                </el-table-column>
                <el-table-column
                    label="车牌号"
                    prop="carNum">
                </el-table-column>
                <el-table-column
                    label="车辆所有人"
                    prop="carOwner">
                </el-table-column>
                <el-table-column
                    label="号牌种类"
                    prop="numType">
                </el-table-column>
                <el-table-column
                    label="使用不同驾驶证个数"
                    prop="diffDrivingLicensesNum">
                </el-table-column>
                <el-table-column
                    label="车身颜色"
                    prop="carColor">
                </el-table-column>
                <el-table-column
                    label="使用性质"
                    prop="useCharacter">
                </el-table-column>
                <el-table-column
                    label="有效日期"
                    prop="effectiveDate">
                </el-table-column>
            </el-table>
            <div class="el-pagination-zone clearfloat">
                <div class="el-pagination-totle-text">共 10 条数据</div>
                <el-pagination class="jfmxPage-info-bottom-pagination" :current-page="1"
                    :page-sizes="[10, 20]" :page-size="10" layout="prev, pager, next, sizes" :total="10">
                </el-pagination>
            </div>           
        </div>
        
    </div>
</template>

<script>
import SearchInput from '@/components/global/search-input';
export default {
  name: 'Ycdz',
  components: {
    SearchInput
  },
  data() {
    return {
      tableData: [
        {
          carNum: '鄂A56C45',
          carOwner: '张三',
          numType: '蓝牌',
          diffDrivingLicensesNum: '3',
          carColor: '白色',
          useCharacter: '家庭自用汽车',
          effectiveDate: '2019年10月2号',
          illegalCarNum: '420111198402156632',
          driver: '李武',
          identityNum: '420111198402156632',
          fileNo: '265426334578',
          drivingTyp: 'C1',
          fzjg: '武汉市公安局交通警察支队',
          syfs: '9分',
          effectiveDate2: '2019年10月2号',
          childrenDetail: [
            {
              illegalCarNum: '420111198402156633',
              driver: '李四',
              identityNum: '420111198402156633',
              fileNo: '265569334365',
              drivingTyp: 'C1',
              fzjg: '武汉市公安局交通警察支队',
              syfs: '9分',
              effectiveDate2: '2019年1月20号'
            },
            {
              illegalCarNum: '420111198402156612',
              driver: '李四于',
              identityNum: '420111198402156612',
              fileNo: '128926542612',
              drivingTyp: 'C1',
              fzjg: '武汉市公安局交通警察支队',
              syfs: '9分',
              effectiveDate2: '2019年2月20号'
            }
          ]
        },
        {
          carNum: '鄂A369BB9',
          carOwner: '李四',
          numType: '蓝牌',
          diffDrivingLicensesNum: '3',
          carColor: '黑色',
          useCharacter: '营业客车',
          effectiveDate: '2022年10月2号',
          illegalCarNum: '420111199603576689',
          driver: '欧气',
          identityNum: '420111199603576689',
          fileNo: '321526542633',
          drivingTyp: 'A1',
          fzjg: '咸宁市公安局交通警察支队',
          syfs: '6分',
          effectiveDate2: '2019年10月2号',
          childrenDetail: [
            {
              illegalCarNum: '420111198402156633',
              driver: '李四',
              identityNum: '420111198402156633',
              fileNo: '112526542634',
              drivingTyp: 'C1',
              fzjg: '武汉市公安局交通警察支队',
              syfs: '9分',
              effectiveDate2: '2019年1月20号'
            },
            {
              illegalCarNum: '420111198402156612',
              driver: '李四于',
              identityNum: '420111198402156612',
              fileNo: '314526542612',
              drivingTyp: 'C1',
              fzjg: '武汉市公安局交通警察支队',
              syfs: '9分',
              effectiveDate2: '2019年2月20号'
            }
          ]
        },
        {
          carNum: '鄂A55CC6',
          carOwner: '赵武山',
          numType: '蓝牌',
          diffDrivingLicensesNum: '3',
          carColor: '银灰色',
          useCharacter: '营业货车',
          effectiveDate: '2020年10月2号',
          illegalCarNum: '420121197802156589',
          driver: '赵武山',
          identityNum: '420121197802156589',
          fileNo: '238926542633',
          drivingTyp: 'A1',
          fzjg: '随州市公安局交通警察支队',
          syfs: '9分',
          effectiveDate2: '2019年10月2号',
          childrenDetail: [
            {
              illegalCarNum: '420111198402156633',
              driver: '李四',
              identityNum: '420111198402156633',
              fileNo: '124626542634',
              drivingTyp: 'C1',
              fzjg: '武汉市公安局交通警察支队',
              syfs: '9分',
              effectiveDate2: '2019年1月20号'
            },
            {
              illegalCarNum: '420111198402156612',
              driver: '李四于',
              identityNum: '420111198402156612',
              fileNo: '132926542612',
              drivingTyp: 'C1',
              fzjg: '武汉市公安局交通警察支队',
              syfs: '9分',
              effectiveDate2: '2019年2月20号'
            }
          ]
        },
        {
          carNum: '鄂B77FK9',
          carOwner: '吴军',
          numType: '蓝牌',
          diffDrivingLicensesNum: '3',
          carColor: '蓝色',
          useCharacter: '非营业客车',
          effectiveDate: '2024年9月2号',
          illegalCarNum: '420123197808153615',
          driver: '吴军',
          identityNum: '420123197808153615',
          fileNo: '175626542633',
          drivingTyp: 'A2',
          fzjg: '黄石市公安局交通警察支队',
          syfs: '3分',
          effectiveDate2: '2019年10月2号',
          childrenDetail: [
            {
              illegalCarNum: '420111198405286648',
              driver: '李四',
              identityNum: '420111198402156633',
              fileNo: '142626542634',
              drivingTyp: 'C1',
              fzjg: '黄石市公安局交通警察支队',
              syfs: '9分',
              effectiveDate2: '2019年1月20号'
            },
            {
              illegalCarNum: '420111198507146659',
              driver: '李四于',
              identityNum: '420111198402156612',
              fileNo: '128726542612',
              drivingTyp: 'C1',
              fzjg: '黄石市公安局交通警察支队',
              syfs: '9分',
              effectiveDate2: '2019年2月20号'
            }
          ]
        },
        {
          carNum: '鄂L587NN',
          carOwner: '李三平',
          numType: '蓝牌',
          diffDrivingLicensesNum: '3',
          carColor: '黑色',
          useCharacter: '家庭自用汽车',
          effectiveDate: '2022年10月2号',
          illegalCarNum: '420111199603576667',
          driver: '欧鹏',
          identityNum: '420111199603576667',
          fileNo: '132945872564',
          drivingTyp: 'A1',
          fzjg: '咸宁市公安局交通警察支队',
          syfs: '6分',
          effectiveDate2: '2019年10月2号',
          childrenDetail: [
            {
              illegalCarNum: '420111198402156633',
              driver: '欧武平',
              identityNum: '420111198402156633',
              fileNo: '124563254789',
              drivingTyp: 'C1',
              fzjg: '咸宁市公安局交通警察支队',
              syfs: '9分',
              effectiveDate2: '2019年1月20号'
            },
            {
              illegalCarNum: '420111198402156612',
              driver: '李四于',
              identityNum: '420111198402156612',
              fileNo: '135624154589',
              drivingTyp: 'C1',
              fzjg: '咸宁市公安局交通警察支队',
              syfs: '9分',
              effectiveDate2: '2019年2月20号'
            }
          ]
        },
        {
          carNum: '鄂SBB789',
          carOwner: '向坤',
          numType: '蓝牌',
          diffDrivingLicensesNum: '3',
          carColor: '银灰色',
          useCharacter: '家庭自用汽车',
          effectiveDate: '2020年10月2号',
          illegalCarNum: '420121197802156589',
          driver: '向萌',
          identityNum: '420121197802156589',
          fileNo: '145687942652',
          drivingTyp: 'A1',
          fzjg: '随州市公安局交通警察支队',
          syfs: '9分',
          effectiveDate2: '2019年10月2号',
          childrenDetail: [
            {
              illegalCarNum: '420111198802154489',
              driver: '向前',
              identityNum: '420111198402156633',
              fileNo: '123625894578',
              drivingTyp: 'C1',
              fzjg: '随州市公安局交通警察支队',
              syfs: '9分',
              effectiveDate2: '2019年1月20号'
            },
            {
              illegalCarNum: '420111198902157458',
              driver: '向梦',
              identityNum: '420111198402156612',
              fileNo: 'XX26542612',
              drivingTyp: 'C1',
              fzjg: '随州市公安局交通警察支队',
              syfs: '9分',
              effectiveDate2: '2019年2月20号'
            }
          ]
        },
        {
          carNum: '鄂B99CB8',
          carOwner: '赵三坡',
          numType: '蓝牌',
          diffDrivingLicensesNum: '3',
          carColor: '蓝色',
          useCharacter: '家庭自用汽车',
          effectiveDate: '2024年9月2号',
          illegalCarNum: '420123197808153615',
          driver: '赵三坡',
          identityNum: '420123197808153615',
          fileNo: '312564798526',
          drivingTyp: 'A2',
          fzjg: '黄石市公安局交通警察支队',
          syfs: '3分',
          effectiveDate2: '2019年10月2号',
          childrenDetail: [
            {
              illegalCarNum: '420111198702286633',
              driver: '赵武平',
              identityNum: '420111198702286633',
              fileNo: '234589782634',
              drivingTyp: 'C1',
              fzjg: '黄石市公安局交通警察支队',
              syfs: '9分',
              effectiveDate2: '2019年1月20号'
            },
            {
              illegalCarNum: '420111198902206689',
              driver: '赵先锋',
              identityNum: '420111198902206689',
              fileNo: '315647852412',
              drivingTyp: 'C1',
              fzjg: '黄石市公安局交通警察支队',
              syfs: '9分',
              effectiveDate2: '2019年2月20号'
            }
          ]
        },
        {
          carNum: '鄂LHJ766',
          carOwner: '李凤',
          numType: '蓝牌',
          diffDrivingLicensesNum: '3',
          carColor: '黑色',
          useCharacter: '家庭自用汽车',
          effectiveDate: '2022年10月2号',
          illegalCarNum: '420111199603576689',
          driver: '李丽',
          identityNum: '420111199603576689',
          fileNo: '241565782633',
          drivingTyp: 'A1',
          fzjg: '咸宁市公安局交通警察支队',
          syfs: '6分',
          effectiveDate2: '2019年10月2号',
          childrenDetail: [
            {
              illegalCarNum: '420111197903167848',
              driver: '李四九',
              identityNum: '420111197903167848',
              fileNo: '318945695612',
              drivingTyp: 'C1',
              fzjg: '咸宁市公安局交通警察支队',
              syfs: '9分',
              effectiveDate2: '2019年1月20号'
            },
            {
              illegalCarNum: '12987126',
              driver: '李四柒',
              identityNum: '420111198803267875',
              fileNo: '314589745623',
              drivingTyp: 'C1',
              fzjg: '咸宁市公安局交通警察支队',
              syfs: '9分',
              effectiveDate2: '2019年2月20号'
            }
          ]
        },
        {
          carNum: '鄂K45HG4',
          carOwner: '付三平',
          numType: '蓝牌',
          diffDrivingLicensesNum: '3',
          carColor: '银灰色',
          useCharacter: '家庭自用汽车',
          effectiveDate: '2020年10月2号',
          illegalCarNum: '420121197802156589',
          driver: '付三平',
          identityNum: '420121197802156589',
          fileNo: '312456458745',
          drivingTyp: 'A1',
          fzjg: '孝感市公安局交通警察支队',
          syfs: '9分',
          effectiveDate2: '2019年10月2号',
          childrenDetail: [
            {
              illegalCarNum: '420111198704257845',
              driver: '付三武',
              identityNum: '420111198704257845',
              fileNo: '312845788924',
              drivingTyp: 'C1',
              fzjg: '孝感市公安局交通警察支队',
              syfs: '9分',
              effectiveDate2: '2019年1月20号'
            },
            {
              illegalCarNum: '420111198509241654',
              driver: '付三文',
              identityNum: '420111198509241654',
              fileNo: '314589754125',
              drivingTyp: 'C1',
              fzjg: '孝感市公安局交通警察支队',
              syfs: '9分',
              effectiveDate2: '2019年2月20号'
            }
          ]
        },
        {
          carNum: '鄂E76YT5',
          carOwner: '高文萍',
          numType: '蓝牌',
          diffDrivingLicensesNum: '3',
          carColor: '蓝色',
          useCharacter: '家庭自用汽车',
          effectiveDate: '2024年9月2号',
          illegalCarNum: '420123197808153615',
          driver: '高文萍',
          identityNum: '420123197808153615',
          fileNo: '328578455612',
          drivingTyp: 'A2',
          fzjg: '宜昌市公安局交通警察支队',
          syfs: '3分',
          effectiveDate2: '2019年10月2号',
          childrenDetail: [
            {
              illegalCarNum: '420111198110257474',
              driver: '高侃',
              identityNum: '420111198110257474',
              fileNo: '327856144525',
              drivingTyp: 'C1',
              fzjg: '宜昌市公安局交通警察支队',
              syfs: '9分',
              effectiveDate2: '2019年1月20号'
            },
            {
              illegalCarNum: '420111198210215252',
              driver: '高鹏飞',
              identityNum: '420111198210215252',
              fileNo: '317856495887',
              drivingTyp: 'C1',
              fzjg: '宜昌市公安局交通警察支队',
              syfs: '9分',
              effectiveDate2: '2019年2月20号'
            }
          ]
        }
      ],
      // 获取row的key值
      getRowKeys(row) {
        return row.carNum;
      },
      // 要展开的行，数值的元素是row的key值
      expands: []
    };
  },
  mounted() {
    // this.expands.push(this.tableData[0].carNum);
  },
  methods: {
    searchCarInfo() {
      console.log('搜索关键字信息');
    }
  }
};
</script>

<style lang="scss" scoped>
.ycdzPage {
  width: 1818px;
  height: 810px;
  position: absolute;
  background-color: transparent;
  border: 1px solid #182e65;
  left: 45px;
  top: 181px;
  .ycdzPage-container {
    width: 100%;
    padding: 24px;
    box-sizing: border-box;
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
</style>
