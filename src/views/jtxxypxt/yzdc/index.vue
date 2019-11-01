<template>
    <!--一证多车-->
    <div class="yzdcPage">
        <div class="border-top-left"></div>
        <div class="border-top-right"></div>
        <div class="border-bottom-left"></div>
        <div class="border-bottom-right"></div>
        <div class="yzdcPage-container ">
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
                            <el-form-item label="该驾驶证处理过违法的车牌号">
                                <span>{{ props.row.carNum }}</span>
                            </el-form-item>
                            <el-form-item label="车辆所有人">
                                <span>{{ props.row.carOwner }}</span>
                            </el-form-item>
                            <el-form-item label="身份证号">
                                <span>{{ props.row.identityNum }}</span>
                            </el-form-item>
                            <el-form-item label="号牌种类">
                                <span>{{ props.row.numType }}</span>
                            </el-form-item>
                            <el-form-item label="车身颜色">
                                <span>{{ props.row.carColor }}</span>
                            </el-form-item>
                            <el-form-item label="使用性质">
                                <span>{{ props.row.useCharacter }}</span>
                            </el-form-item>
                            <el-form-item label="车辆品牌">
                                <span>{{ props.row.plate }}</span>
                            </el-form-item>
                            <el-form-item label="有效日期">
                                <span>{{ props.row.effectiveDate2 }}</span>
                            </el-form-item>
                        </el-form>
                        <el-form label-position="top" v-for="(item,index) in props.row.childrenDetail" :key="index" inline class="demo-table-expand ycdz-table-expand">
                            <el-form-item >
                                <span>{{ item.carNum }}</span>
                            </el-form-item>
                            <el-form-item >
                                <span>{{ item.carOwner }}</span>
                            </el-form-item>
                            <el-form-item >
                                <span>{{ item.identityNum }}</span>
                            </el-form-item>
                            <el-form-item >
                                <span>{{ item.numType }}</span>
                            </el-form-item>
                            <el-form-item >
                                <span>{{ item.carColor }}</span>
                            </el-form-item>
                            <el-form-item >
                                <span>{{ item.useCharacter }}</span>
                            </el-form-item>
                            <el-form-item >
                                <span>{{ item.plate }}</span>
                            </el-form-item>
                            <el-form-item >
                                <span>{{ item.effectiveDate2 }}</span>
                            </el-form-item>
                          </el-form>
                    </template>
                </el-table-column>
                <el-table-column
                    label="驾驶证号"
                    prop="drivingLicenseNumber">
                </el-table-column>
                <el-table-column
                    label="驾驶员"
                    prop="driver">
                </el-table-column>
                <el-table-column
                    label="处理不同车辆数"
                    prop="handDiffNum">
                </el-table-column>
                <el-table-column
                    label="档案编号"
                    prop="fileNum">
                </el-table-column>
                <el-table-column
                    label="准驾车型"
                    prop="drivingTyp">
                </el-table-column>
                <el-table-column
                    label="发证机关"
                    prop="fzjg">
                </el-table-column>
                <el-table-column
                    label="剩余分数"
                    prop="syfs">
                </el-table-column>
                <el-table-column
                    label="有效日期"
                    prop="effectiveDate">
                </el-table-column>
            </el-table>   
             <div class="el-pagination-zone clearfloat">
                <div class="el-pagination-totle-text">共 6 条数据</div>
                <el-pagination class="jfmxPage-info-bottom-pagination" :current-page="1"
                    :page-sizes="[10, 20]" :page-size="10" layout="prev, pager, next, sizes" :total="6">
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
          drivingLicenseNumber: '420112197508016658',
          driver: '李建军',
          handDiffNum: '3',
          fileNum: '112956485578',
          drivingTyp: 'C1',
          fzjg: '武汉市公安局交通警察支队',
          syfs: '9分',
          effectiveDate: '2019年10月2号',
          carNum: '420111198009306689',
          carOwner: '李文军',
          identityNum: '420111198009306689',
          numType: '蓝牌',
          carColor: '白色',
          useCharacter: '家庭自用汽车',
          plate: '东风本田',
          effectiveDate2: '2019年10月2号',
          childrenDetail: [
            {
              carNum: '420111197904257458',
              carOwner: '李永平',
              identityNum: '420111197904257458',
              numType: '蓝牌',
              carColor: '黑色',
              useCharacter: '家庭自用汽车',
              plate: '东风本田',
              effectiveDate2: '2019年1月20号'
            },
            {
              carNum: '420111197810276425',
              carOwner: '李凤舞',
              identityNum: '420111197810276425',
              numType: '蓝牌',
              carColor: '黑色',
              useCharacter: '家庭自用汽车',
              plate: '东风本田',
              effectiveDate2: '2019年2月2号'
            }
          ]
        },
        {
          drivingLicenseNumber: '420111199109286648',
          driver: '申旭飞',
          handDiffNum: '3',
          fileNum: '314598756558',
          drivingTyp: 'C1',
          fzjg: '武汉市公安局交通警察支队',
          syfs: '6分',
          effectiveDate: '2019年10月4号',
          carNum: '420111198402156637',
          carOwner: '申鹏',
          identityNum: '420111198402156637',
          numType: '蓝牌',
          carColor: '白色',
          useCharacter: '家庭自用汽车',
          plate: '东风标致',
          effectiveDate2: '2019年10月7号',
          childrenDetail: [
            {
              carNum: '420111198402156612',
              carOwner: '申飞',
              identityNum: '420111198402156612',
              numType: '蓝牌',
              carColor: '黑色',
              useCharacter: '家庭自用汽车',
              plate: '东风标致',
              effectiveDate2: '2019年1月20号'
            },
            {
              carNum: '420111198410156322',
              carOwner: '申果',
              identityNum: '420111198410156322',
              numType: '蓝牌',
              carColor: '黑色',
              useCharacter: '家庭自用汽车',
              plate: '东风标致',
              effectiveDate2: '2019年2月20号'
            }
          ]
        },
        {
          drivingLicenseNumber: '420111198905286648',
          driver: '雷超',
          handDiffNum: '3',
          fileNum: '354658976698',
          drivingTyp: 'C1',
          fzjg: '武汉市公安局交通警察支队',
          syfs: '6分',
          effectiveDate: '2019年5月4号',
          carNum: '420111198402156123',
          carOwner: '李去',
          identityNum: '420111198402156123',
          numType: '蓝牌',
          carColor: '白色',
          useCharacter: '家庭自用汽车',
          plate: '东风标致',
          effectiveDate2: '2019年5月7号',
          childrenDetail: [
            {
              carNum: '420111198402156665',
              carOwner: '雷锋',
              identityNum: '420111198908156785',
              numType: '蓝牌',
              carColor: '黑色',
              useCharacter: '家庭自用汽车',
              plate: '东风标致',
              effectiveDate2: '2019年2月2号'
            },
            {
              carNum: '420111198807156348',
              carOwner: '雷豹',
              identityNum: '420111198807156348',
              numType: '蓝牌',
              carColor: '黑色',
              useCharacter: '家庭自用汽车',
              plate: '东风标致',
              effectiveDate2: '2019年2月20号'
            }
          ]
        },
        {
          drivingLicenseNumber: '420111198706306647',
          driver: '宋峰',
          handDiffNum: '3',
          fileNum: '234654875623',
          drivingTyp: 'C1',
          fzjg: '武汉市公安局交通警察支队',
          syfs: '6分',
          effectiveDate: '2019年3月4号',
          carNum: '420111198402156676',
          carOwner: '宋国军',
          identityNum: '420111198402156676',
          numType: '蓝牌',
          carColor: '白色',
          useCharacter: '家庭自用汽车',
          plate: '东风标致',
          effectiveDate2: '2019年4月8号',
          childrenDetail: [
            {
              carNum: '420111198402283656',
              carOwner: '宋宝丰',
              identityNum: '420111198402283656',
              numType: '蓝牌',
              carColor: '黑色',
              useCharacter: '家庭自用汽车',
              plate: '东风标致',
              effectiveDate2: '2019年6月2号'
            },
            {
              carNum: '420111198404295678',
              carOwner: '李祥凤',
              identityNum: '420111198404295678',
              numType: '蓝牌',
              carColor: '黑色',
              useCharacter: '家庭自用汽车',
              plate: '东风标致',
              effectiveDate2: '2019年2月20号'
            }
          ]
        },
        {
          drivingLicenseNumber: '420111198402156688',
          driver: '李梦妍',
          handDiffNum: '3',
          fileNum: '234725896645',
          drivingTyp: 'C1',
          fzjg: '武汉市公安局交通警察支队',
          syfs: '6分',
          effectiveDate: '2019年3月8号',
          carNum: '420111198402156688',
          carOwner: '李梦妍',
          identityNum: '420111198402156688',
          numType: '蓝牌',
          carColor: '白色',
          useCharacter: '家庭自用汽车',
          plate: '东风标致',
          effectiveDate2: '2019年4月9号',
          childrenDetail: [
            {
              carNum: '420111198402156699',
              carOwner: '李向国',
              identityNum: '420111198402156699',
              numType: '蓝牌',
              carColor: '黑色',
              useCharacter: '家庭自用汽车',
              plate: '东风标致',
              effectiveDate2: '2019年6月1号'
            },
            {
              carNum: '420111198402156311',
              carOwner: '宋萌',
              identityNum: '420111198402156311',
              numType: '蓝牌',
              carColor: '黑色',
              useCharacter: '家庭自用汽车',
              plate: '东风标致',
              effectiveDate2: '2019年4月20号'
            }
          ]
        },
        {
          drivingLicenseNumber: '420111198304156678',
          driver: '李遥预',
          handDiffNum: '3',
          fileNum: '235826542609',
          drivingTyp: 'C1',
          fzjg: '武汉市公安局交通警察支队',
          syfs: '6分',
          effectiveDate: '2019年3月8号',
          carNum: '420111198402156611',
          carOwner: '李遥喜',
          identityNum: '420111198402156611',
          numType: '蓝牌',
          carColor: '白色',
          useCharacter: '家庭自用汽车',
          plate: '东风标致',
          effectiveDate2: '2019年4月9号',
          childrenDetail: [
            {
              carNum: '420111198402156619',
              carOwner: '王小余',
              identityNum: '420111198402156619',
              numType: '蓝牌',
              carColor: '黑色',
              useCharacter: '家庭自用汽车',
              plate: '东风标致',
              effectiveDate2: '2019年6月1号'
            },
            {
              carNum: '420111198402156333',
              carOwner: '王武平',
              identityNum: '420111198402156333',
              numType: '蓝牌',
              carColor: '黑色',
              useCharacter: '家庭自用汽车',
              plate: '东风标致',
              effectiveDate2: '2019年4月20号'
            }
          ]
        }
      ],
      // 获取row的key值
      getRowKeys(row) {
        return row.drivingLicenseNumber;
      },
      // 要展开的行，数值的元素是row的key值
      expands: []
    };
  },
  mounted() {
    // this.expands.push(this.tableData[0].drivingLicenseNumber);
  },
  methods: {
    searchCarInfo() {
      console.log('搜索关键字信息');
    }
  }
};
</script>

<style lang="scss" scoped>
.yzdcPage {
  width: 1818px;
  height: 810px;
  position: absolute;
  background-color: transparent;
  border: 1px solid #182e65;
  left: 45px;
  top: 181px;
  .yzdcPage-container {
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