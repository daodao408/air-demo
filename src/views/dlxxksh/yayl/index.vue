<template>
  <!--预案演练-->
  <div class="yzdcPage">
    <div class="border-top-left"></div>
    <div class="border-top-right"></div>
    <div class="border-bottom-left"></div>
    <div class="border-bottom-right"></div>
    <div class="yzdcPage-container">
      <ul class="header">
        <li class="btns">
          <el-button type="primary" icon="el-icon-plus" size="medium" @click="openYljh">演练计划</el-button>
          <el-button type="primary" icon="el-icon-edit" size="medium" @click="openYlpg">演练评估</el-button>
        </li>
        <li class="search">
          <search-input @search="searchCarInfo" :searchPlaceholder="'请输入关键字搜索'"></search-input>
        </li>
      </ul>
      <div class="clearfloat"></div>
      <el-table
        class="jtxxypxtPage-table"
        :data="tableData"
        :row-key="getRowKeys"
        :expand-row-keys="expands"
        height="650"
      >
        <el-table-column label="预案名称" prop="drivingLicenseNumber"></el-table-column>
        <el-table-column label="演练类别" prop="driver"></el-table-column>
        <el-table-column label="演练地点" prop="handDiffNum"></el-table-column>
        <el-table-column label="演练单位" prop="fileNum"></el-table-column>
        <el-table-column label="组织部门" prop="drivingTyp"></el-table-column>
        <el-table-column label="总指挥" prop="fzjg"></el-table-column>
        <el-table-column label="演练时间" prop="syfs"></el-table-column>
        <el-table-column label="是否上报" prop="effectiveDate"></el-table-column>
        <el-table-column label="操作" prop="set">
          <el-button type="primary" icon="el-icon-edit" size="mini">编辑</el-button>
          <el-button type="warning" icon="el-icon-delete" size="mini">删除</el-button>
        </el-table-column>
      </el-table>
      <div class="el-pagination-zone clearfloat">
        <div class="el-pagination-totle-text">共 6 条数据</div>
        <el-pagination
          class="jfmxPage-info-bottom-pagination"
          :current-page="1"
          :page-sizes="[10,20]"
          :page-size="10"
          layout="prev, pager, next, sizes"
          :total="6"
        ></el-pagination>
      </div>
    </div>
    <!-- 演练计划 -->
    <yljh v-if="zyjkPageState.yljhPad.visible"></yljh>
    <!-- 演练评估 -->
    <ylpg v-if="zyjkPageState.ylpgPad.visible"></ylpg>
  </div>
</template>

<script>
import SearchInput from '@/components/global/search-input';
import Yljh from '@/components/yayl/yljh';
import Ylpg from '@/components/yayl/ylpg';
import { mapGetters } from 'vuex';

export default {
  name: 'yayl',
  computed: {
    ...mapGetters(['zyjkPageState'])
  },
  components: {
    SearchInput,
    Yljh,
    Ylpg
  },
  data() {
    return {
      yljhVisible: false,
      ylpgVisible: false,
      tableData: [
        {
          drivingLicenseNumber: '演练1',
          driver: '实际演练',
          handDiffNum: '武汉供电所',
          fileNum: '武汉电力',
          drivingTyp: '武汉电网',
          fzjg: '李明',
          syfs: '2019-04-02',
          effectiveDate: '未上报'
        },
        {
          drivingLicenseNumber: '演练2',
          driver: '实际演练',
          handDiffNum: '武汉供电所',
          fileNum: '武汉电力',
          drivingTyp: '武汉电网',
          fzjg: '李明',
          syfs: '2019-05-02',
          effectiveDate: '已上报'
        },
        {
          drivingLicenseNumber: '演练3',
          driver: '实际演练',
          handDiffNum: '武汉供电所',
          fileNum: '武汉电力',
          drivingTyp: '武汉电网',
          fzjg: '李明',
          syfs: '2019-06-02',
          effectiveDate: '未上报'
        },
        {
          drivingLicenseNumber: '演练4',
          driver: '实际演练',
          handDiffNum: '武汉供电所',
          fileNum: '武汉电力',
          drivingTyp: '武汉电网',
          fzjg: '李明',
          syfs: '2019-06-12',
          effectiveDate: '已上报'
        },
        {
          drivingLicenseNumber: '演练5',
          driver: '实际演练',
          handDiffNum: '武汉供电所',
          fileNum: '武汉电力',
          drivingTyp: '武汉电网',
          fzjg: '李明',
          syfs: '2019-06-15',
          effectiveDate: '未上报'
        },
        {
          drivingLicenseNumber: '演练6',
          driver: '实际演练',
          handDiffNum: '武汉供电所',
          fileNum: '武汉电力',
          drivingTyp: '武汉电网',
          fzjg: '李明',
          syfs: '2019-06-17',
          effectiveDate: '未上报'
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
    this.expands.push(this.tableData[0].drivingLicenseNumber);
  },
  methods: {
    searchCarInfo() {
      console.log('搜索关键字信息');
    },
    openYljh() {
      this.$store.dispatch('openYljh');
    },
    openYlpg() {
      this.$store.dispatch('openYlpg');
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
.header {
  width: 100%;
  .search {
    float: right;
  }
  .btns {
    float: left;
  }
}
</style>