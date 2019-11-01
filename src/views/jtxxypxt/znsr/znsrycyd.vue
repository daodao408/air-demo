<template>
    <!--智能搜人组件-->
    <div class="znsrycydPage-content clearfloat">
      <div class="znsrycydPage-info">
        <div class="znsrycydPage-info-list">
          <div class="znsrycydPage-info-title">驾驶人基本信息</div> 
          <div class="znsrycydPage-info-list-info clearfloat">
            <div class="znsrycydPage-info-list-img"></div>
            <div class="znsrycydPage-info-list-info-detail">
              <div class="el-col el-col-6">
                <span>身份证号：</span>
                <b>420121198208255718</b>
              </div>
              <div class="el-col el-col-6">
                <span>姓名：</span>
                <b>宋力平</b>
              </div>
              <div class="el-col el-col-6">
                <span>性别：</span>
                <b>男</b>
              </div>
              <div class="el-col el-col-6">
                <span>国籍：</span>
                <b>中国</b>
              </div>
              <div class="el-col el-col-6">
                <span>出生日期：</span>
                <b>1982年8月25日</b>
              </div>
              <div class="el-col el-col-6">
                <span>驾照状态：</span>
                <b>暂扣</b>
              </div>
              <div class="el-col el-col-6">
                <span>驾驶证号：</span>
                <b>15897526145HING58</b>
              </div>
              <div class="el-col el-col-6">
                <span>档案编号：</span>
                <b>NO.128845689522</b>
              </div>
              <div class="el-col el-col-6">
                <span>准驾车型：</span>
                <b>C1</b>
              </div>
              <div class="el-col el-col-6">
                <span>发证机关：</span>
                <b>武汉市公安局交通警察支队</b>
              </div>
              <div class="el-col el-col-6">
                <span>剩余分数：</span>
                <b>3</b>
              </div>
              <div class="el-col el-col-6">
                <span>初领日期：</span>
                <b>2016年06月19日  09:35:45</b>
              </div>
              <div class="el-col el-col-6">
                <span>有效日期：</span>
                <b>2026年06月18日  23:59:59</b>
              </div>
            </div>
            
          </div>
        </div>  
        <div class="znsrycydPage-info-list">
          <div class="znsrycydPage-info-title">驾驶员违法信息</div> 
          <div class="znsrycydPage-info-list-content clearfloat"> 
            <el-table
                class="jtxxypxtPage-table znsrycydPage-info-list-table"
                :data="tableData2"
                height="450">
                <el-table-column
                    label="车牌号"
                    prop="driverLicense"
                    min-width="15%">
                </el-table-column>
                <el-table-column
                    label="违法行为"
                    prop="illegalAct"
                    min-width="10%">
                </el-table-column>
                <el-table-column
                    label="违法编号"
                    prop="illegalNo"
                    min-width="15%">
                </el-table-column>
                <el-table-column
                    label="违法时间"
                    prop="illegalTime"
                    min-width="23%">
                </el-table-column>
                <el-table-column
                    label="违法地点"
                    prop="illegalPlace"
                    min-width="22%">
                </el-table-column>
                <el-table-column
                    label="处理结果"
                    prop="processingResult"
                    min-width="12%">
                </el-table-column>
                <el-table-column
                    label="处理状态"
                    prop="processingStatus"
                    min-width="8%">
                </el-table-column>
            </el-table>
            <div class="el-pagination-zone clearfloat">
              <div class="el-pagination-totle-text">共 20 条数据</div>
              <el-pagination class="znsrycydPage-info-pagination"  :current-page="1"
                :page-sizes="[5, 10, 20]" :page-size="10" layout="prev, pager, next, sizes" :total="20">
              </el-pagination>
            </div> 
          </div>
        </div> 
        <div class="znsrycydPage-info-list">
          <div class="znsrycydPage-info-title">驾驶证信息</div> 
          <div class="znsrycydPage-info-license clearfloat">
            <div class="znsrycydPage-info-license-left">
              <p>驾驶证正面</p>
              <span></span>
            </div>
            <div class="znsrycydPage-info-license-right">
              <p>驾驶证反面</p>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
</template>

<script>
import carImg from '@/mapicons/carimg.js';
export default {
  name: 'Ytscjg',
  data() {
    return {
      tableData2: [
        {
          driverLicense: 'KHNBG85478251',
          illegalAct: '不礼让行人',
          illegalNo: 'NO12568482',
          illegalPlace: '湖北省武汉市关山大道与新竹路交叉路口',
          processingResult: '扣3分，罚款200元',
          illegalTime: '2019年7月5号 10:11:05',
          processingStatus: '未处理'
        },
        {
          driverLicense: 'KHNBG85478251',
          illegalAct: '闯红灯',
          illegalNo: 'NO129648522',
          illegalPlace: '湖北省武汉市关山大道与南湖大道交叉路口',
          processingResult: '扣6分，罚款200元',
          illegalTime: '2019年7月2号 12:11:05',
          processingStatus: '未处理'
        },
        {
          driverLicense: 'KHNBG85478251',
          illegalAct: '不按标示线行驶',
          illegalNo: 'NO129984256',
          illegalPlace: '湖北省武汉市关山大道与雄楚大道交叉路口',
          processingResult: '扣3分，罚款200元',
          illegalTime: '2019年6月28号 16:11:05',
          processingStatus: '未处理'
        },
        {
          driverLicense: 'KHNBG85478251',
          illegalAct: '开车打电话',
          illegalNo: 'NO129781522',
          illegalPlace: '湖北省武汉市关山大道与珞喻路交叉路口',
          processingResult: '扣1分，罚款200元',
          illegalTime: '2019年6月22号 12:11:05',
          processingStatus: '未处理'
        },
        {
          driverLicense: 'KHNBG85478251',
          illegalAct: '开车打电话',
          illegalNo: 'NO129651278',
          illegalPlace: '湖北省武汉市关山大道与珞喻路交叉路口',
          processingResult: '扣1分，罚款200元',
          illegalTime: '2019年6月12号 12:11:05',
          processingStatus: '未处理'
        },
        {
          driverLicense: 'KHNBG85478251',
          illegalAct: '不礼让行人',
          illegalNo: 'NO12568482',
          illegalPlace: '湖北省武汉市关山大道与新竹路交叉路口',
          processingResult: '扣3分，罚款200元',
          illegalTime: '2019年6月2号 10:11:05',
          processingStatus: '未处理'
        },
        {
          driverLicense: 'KHNBG85478251',
          illegalAct: '闯红灯',
          illegalNo: 'NO129648522',
          illegalPlace: '湖北省武汉市关山大道与南湖大道交叉路口',
          processingResult: '扣6分，罚款200元',
          illegalTime: '2019年5月16号 12:11:05',
          processingStatus: '未处理'
        },
        {
          driverLicense: 'KHNBG85478251',
          illegalAct: '不按标示线行驶',
          illegalNo: 'NO129984256',
          illegalPlace: '湖北省武汉市关山大道与雄楚大道交叉路口',
          processingResult: '扣3分，罚款200元',
          illegalTime: '2019年5月1号 16:11:05',
          processingStatus: '未处理'
        },
        {
          driverLicense: 'KHNBG85478251',
          illegalAct: '开车打电话',
          illegalNo: 'NO129781522',
          illegalPlace: '湖北省武汉市关山大道与珞喻路交叉路口',
          processingResult: '扣1分，罚款200元',
          illegalTime: '2019年4月25号 12:11:05',
          processingStatus: '未处理'
        },
        {
          driverLicense: 'KHNBG85478251',
          illegalAct: '开车打电话',
          illegalNo: 'NO129651278',
          illegalPlace: '湖北省武汉市关山大道与珞喻路交叉路口',
          processingResult: '扣1分，罚款200元',
          illegalTime: '2019年4月20号 12:11:05',
          processingStatus: '未处理'
        },
        {
          driverLicense: 'KHNBG85478251',
          illegalAct: '不礼让行人',
          illegalNo: 'NO12568482',
          illegalPlace: '湖北省武汉市关山大道与新竹路交叉路口',
          processingResult: '扣3分，罚款200元',
          illegalTime: '2019年4月8号 10:11:05',
          processingStatus: '未处理'
        },
        {
          driverLicense: 'KHNBG85478251',
          illegalAct: '闯红灯',
          illegalNo: 'NO129648522',
          illegalPlace: '湖北省武汉市关山大道与南湖大道交叉路口',
          processingResult: '扣6分，罚款200元',
          illegalTime: '2019年4月5号 12:11:05',
          processingStatus: '未处理'
        },
        {
          driverLicense: 'KHNBG85478251',
          illegalAct: '不按标示线行驶',
          illegalNo: 'NO129984256',
          illegalPlace: '湖北省武汉市关山大道与雄楚大道交叉路口',
          processingResult: '扣3分，罚款200元',
          illegalTime: '2019年3月18号 16:11:05',
          processingStatus: '未处理'
        },
        {
          driverLicense: 'KHNBG85478251',
          illegalAct: '开车打电话',
          illegalNo: 'NO129781522',
          illegalPlace: '湖北省武汉市关山大道与珞喻路交叉路口',
          processingResult: '扣1分，罚款200元',
          illegalTime: '2019年3月12号 12:11:05',
          processingStatus: '未处理'
        },
        {
          driverLicense: 'KHNBG85478251',
          illegalAct: '开车打电话',
          illegalNo: 'NO129651278',
          illegalPlace: '湖北省武汉市关山大道与珞喻路交叉路口',
          processingResult: '扣1分，罚款200元',
          illegalTime: '2019年3月5号 12:11:05',
          processingStatus: '未处理'
        },
        {
          driverLicense: 'KHNBG85478251',
          illegalAct: '不礼让行人',
          illegalNo: 'NO12568482',
          illegalPlace: '湖北省武汉市关山大道与新竹路交叉路口',
          processingResult: '扣3分，罚款200元',
          illegalTime: '2019年3月1号 10:11:05',
          processingStatus: '未处理'
        },
        {
          driverLicense: 'KHNBG85478251',
          illegalAct: '闯红灯',
          illegalNo: 'NO129648522',
          illegalPlace: '湖北省武汉市关山大道与南湖大道交叉路口',
          processingResult: '扣6分，罚款200元',
          illegalTime: '2019年2月22号 12:11:05',
          processingStatus: '未处理'
        },
        {
          driverLicense: 'KHNBG85478251',
          illegalAct: '不按标示线行驶',
          illegalNo: 'NO129984256',
          illegalPlace: '湖北省武汉市关山大道与雄楚大道交叉路口',
          processingResult: '扣3分，罚款200元',
          illegalTime: '2019年2月18号 16:11:05',
          processingStatus: '未处理'
        },
        {
          driverLicense: 'KHNBG85478251',
          illegalAct: '开车打电话',
          illegalNo: 'NO129781522',
          illegalPlace: '湖北省武汉市关山大道与珞喻路交叉路口',
          processingResult: '扣1分，罚款200元',
          illegalTime: '2019年1月26号 12:11:05',
          processingStatus: '未处理'
        },
        {
          driverLicense: 'KHNBG85478251',
          illegalAct: '开车打电话',
          illegalNo: 'NO129651278',
          illegalPlace: '湖北省武汉市关山大道与珞喻路交叉路口',
          processingResult: '扣1分，罚款200元',
          illegalTime: '2019年1月20号 12:11:05',
          processingStatus: '未处理'
        }
      ]
    };
  },
  created() {},
  methods: {}
};
</script>

<style lang="scss">
.znsrycydPage-content {
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  .znsrycydPage-title {
    width: 100%;
    height: 48px;
    line-height: 48px;
    text-indent: 24px;
    color: #23a1e6;
    background-color: rgba(255, 255, 255, 0.09);
  }
  .znsrycydPage-info {
    width: 100%;
    height: 100%;
    padding: 0 24px;
    overflow-y: auto;
    // overflow-x: hidden;
    box-sizing: border-box;
    .znsrycydPage-info-title {
      width: 100%;
      color: #fff;
      font-size: 16px;
      font-weight: 600;
      letter-spacing: 2px;
    }
    .znsrycydPage-info-list {
      width: 100%;
      padding-top: 25px;
      .znsrycydPage-info-list-info {
        width: 100%;
        border-bottom: 1px solid #374172;
        .znsrycydPage-info-list-img {
          float: left;
          width: 123px;
          height: 145px;
          background: url('../../../assets/images/driver_img_01.png') no-repeat center;
          background-size: 100% 100%;
          margin-top: 15px;
        }
        .znsrycydPage-info-list-info-detail {
          float: left;
          width: calc(100% - 160px);
          padding: 0 0 30px 30px;

          .el-col {
            margin-top: 30px;
            &.el-col-6 {
              width: 20%;
            }
            span {
              color: rgba(255, 255, 255, 0.9);
              font-size: 16px;
            }
            b {
              font-weight: normal;
              color: rgba(255, 255, 255, 0.6);
              font-size: 16px;
            }
          }
        }
      }
      .znsrycydPage-info-list-content {
        padding: 0 0 30px 0;
        border-bottom: 1px solid #374172;
        .el-col {
          margin-top: 30px;
          &.el-col-6 {
            width: 20%;
          }
          span {
            color: rgba(255, 255, 255, 0.9);
            font-size: 14px;
          }
          b {
            font-weight: normal;
            color: rgba(255, 255, 255, 0.6);
            font-size: 14px;
          }
        }
      }
      .znsrycydPage-info-list-table {
        margin-top: 20px;
        .cell {
          //padding-left: 0;
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
        .znsrycydPage-info-pagination {
          float: right;
        }
        .znsrycydPage-info-bottom-pagination {
          float: right;
          padding-right: 20px;
        }
      }
      .znsrycydPage-info-list-content-left {
        float: left;
        width: 50%;
        .znsrycydPage-trail-table {
          margin-top: 20px;
        }
      }
      .znsrycydPage-info-list-content-right {
        float: left;
        width: 50%;
        padding-left: 40px;
        box-sizing: border-box;
        img {
          width: 100%;
        }
      }
      .znsrycydPage-info-license {
        width: 100%;
        padding-bottom: 20px;
        .znsrycydPage-info-license-left {
          float: left;
          width: 50%;
          padding-left: 60px;
          padding-right: 20px;
          text-align: center;
          box-sizing: border-box;
          p {
            width: 100%;
            text-align: center;
            color: #fff;
            font-size: 14px;
            margin-top: 30px;
          }
          span {
            display: inline-block;
            width: 569px;
            height: 381px;
            background: url('../../../assets/images/driver_license_img_01.png') no-repeat center;
            background-size: 80% 80%;
          }
        }
        .znsrycydPage-info-license-right {
          float: left;
          padding-right: 60px;
          padding-left: 20px;
          box-sizing: border-box;
          p {
            width: 100%;
            text-align: center;
            color: #fff;
            font-size: 14px;
            margin-top: 30px;
          }
          span {
            display: inline-block;
            width: 569px;
            height: 381px;
            background: url('../../../assets/images/driver_license_img_02.png') no-repeat center;
            background-size: 80% 80%;
          }
        }
      }
    }
  }
}
</style>
