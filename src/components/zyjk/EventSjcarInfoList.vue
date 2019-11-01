<template>
  <div class="sj-carInfo-list">
    <header>
      <img src="../../assets/images/home-sj-info/车辆.png">
      事件车辆相关信息
    </header>
    <img @click="closeCarList" class="carInfoClose" src="../../assets/images/home-sj-info/关闭.png">
    <div class="sj-carInfo-list-content">
      <el-table
          class="jtxxypxtPage-table"
          :data="tableData"
          height="420">
          <el-table-column
              label="车牌号码"
              prop="carNum"
              min-width="25%">
          </el-table-column>
          <!-- <el-table-column
              label="消息名称"
              prop="messageName"
              min-width="15%">
          </el-table-column> -->
          <el-table-column
              label="号牌种类"
              prop="carType"
              min-width="30%">
          </el-table-column>
          <el-table-column
              label="号牌颜色"
              prop="carNumColor"
              min-width="20%">
          </el-table-column>
          <el-table-column
              label="车身颜色"
              prop="carColor"
              min-width="15%">
          </el-table-column>
          <el-table-column
              label="操作"
              prop="operation"
              min-width="10%">
              <template slot-scope="slotScope">
                <el-button class="table-operation-btn" type="text" size="small" @click="goToCarDetail(slotScope.row)">详情</el-button>
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
  name: '',
  components: {},
  data() {
    return {
      tableData: [
        {
          carNum: '鄂A98675',
          carType: '大型普通客车',
          carNumColor: '黄色',
          carColor: '白色'
        },
        {
          carNum: '鄂A12C56',
          carType: '普通小型车',
          carNumColor: '蓝色',
          carColor: '黑色'
        },
        {
          carNum: '鄂AC5C31',
          carType: '普通小型车',
          carNumColor: '蓝色',
          carColor: '棕色'
        }
      ]
    };
  },
  methods: {
    // 点击详情打开车辆详情界面
    goToCarDetail(row) {
      if (row.carNum === '鄂A98675') {
        this.$store.dispatch('closeCarXqList');
        this.$store.dispatch('openCarXq');
      } else {
        return;
      }
    },
    closeCarList() {
      this.$store.dispatch('closeCarXqList');
    }
  },
  mounted() {}
};
</script>

<style lang="scss">
.sj-carInfo-list {
  position: absolute;
  width: 840px;
  height: 485px;
  left: 635px;
  top: 216px;
  background: url(../../assets/images/home-sj-info/carinfobg.png) center no-repeat;
  opacity: 1;
  header {
    width: 100%； height：72px;
    line-height: 72px;
    color: #fff;
    font-size: 16px;
    img {
      width: 26px;
      height: 19px;
      margin: 0 8px 0 35px;
      vertical-align: middle;
    }
  }
  .carInfoClose {
    position: absolute;
    top: 21px;
    right: 26px;
    width: 23px;
    height: 23px;
    cursor: pointer;
  }
  .sj-carInfo-list-content {
    width: 100%;
    padding: 0 30px;
    box-sizing: border-box;
    .table-operation-btn {
      span {
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
