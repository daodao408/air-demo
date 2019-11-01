<template>
  <!--警情大数据-->
  <div class="xxglPage">
    <div class="xxglPage-close" @click="closeXXglPage"></div>
    <div class="xxglPage-title">消息管理</div>
    <div class="xxglPage-content">
      <el-table
          class="jtxxypxtPage-table"
          :data="tableData"
          height="420">
          <el-table-column
              label="消息类型"
              prop="messageType"
              min-width="20%">
          </el-table-column>
          <!-- <el-table-column
              label="消息名称"
              prop="messageName"
              min-width="15%">
          </el-table-column> -->
          <el-table-column
              label="消息内容"
              prop="messageContent"
              min-width="45%">
          </el-table-column>
          <el-table-column
              label="消息状态"
              prop="messageStatus"
              min-width="15%">
          </el-table-column>
          <el-table-column
              label="操作"
              prop="operation"
              min-width="20%">
              <template>
                <el-button class="table-operation-btn" type="text" size="small">处理</el-button>
                <el-button class="table-operation-btn" type="text" size="small">删除</el-button>
              </template>
          </el-table-column>
      </el-table>  
      <!-- <div class="el-pagination-zone clearfloat">
          <div class="el-pagination-totle-text">共 20 条数据</div>
          <el-pagination class="jfmxPage-info-bottom-pagination" :current-page="1"
              :page-sizes="[10, 20]" :page-size="10" layout="prev, pager, next, sizes" :total="20">
          </el-pagination>
      </div>   -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Xxgl',
  components: {},
  data() {
    return {
      tableData: [
        {
          messageType: '车辆布控',
          messageContent: '湖北省武汉市关山大道与新竹路交叉路口',
          messageStatus: '未处理'
        },
        {
          messageType: '设备故障',
          messageContent: '湖北省武汉市关山大道与新竹路交叉路口',
          messageStatus: '未处理'
        },
        {
          messageType: '施工占道',
          messageContent: '湖北省武汉市关山大道与新竹路交叉路口',
          messageStatus: '未处理'
        },
        {
          messageType: '临时管制',
          messageContent: '湖北省武汉市关山大道与新竹路交叉路口',
          messageStatus: '未处理'
        }
      ]
    };
  },
  created() {},
  mounted() {
    this.$nextTick(() => {});
  },
  methods: {
    // 关闭消息管理弹出框
    closeXXglPage() {
      this.$emit('close');
    }
  }
};
</script>

<style lang="scss">
$BlueColor: #207ec0;
.xxglPage {
  width: 100%;
  padding: 0 26px;
  box-sizing: border-box;
  position: relative;
  .xxglPage-close {
    width: 20px;
    height: 20px;
    background: url('../../assets/images/bg-jqdsj-close.png') no-repeat center;
    position: absolute;
    background-size: 100% 100%;
    top: 0;
    right: 24px;
    z-index: 999;
    cursor: pointer;
  }
  .xxglPage-title {
    width: 100%;
    text-align: center;
    padding-left: 24px;
    margin-top: 20px;
    margin-bottom: 30px;
    font-size: 18px;
    letter-spacing: 2px;
    color: rgba(255, 255, 255, 1);
    box-sizing: border-box;
  }
  .xxglPage-content {
    width: 100%;
    box-sizing: border-box;
    margin-top: 30px;
    .table-operation-btn {
      span {
        &:hover {
          text-decoration: underline;
        }
      }
    }
    .el-pagination-zone {
      width: 100%;
      padding-top: 25px;
      .el-pagination-totle-text {
        float: left;
        padding-top: 8px;
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
