<template>
  <!--  演练评估pad  -->
  <div class="emergency-evaluation-pad">
    <header>预案演练评估</header>
    <div class="ee-content">
      <div style="padding: 35px">
        <el-form ref="form" :model="form">
          <p class="p-title">预案适应性充分性评审</p>
          <el-form-item label="适宜性：">
            <el-checkbox-group v-model="form.syx">
              <el-checkbox label="全部能够执行" name="syx"></el-checkbox>
              <el-checkbox label="执行过程不够顺利" name="syx"></el-checkbox>
              <el-checkbox label="明显不适宜" name="syx"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="充分性：">
            <el-checkbox-group v-model="form.cfx">
              <el-checkbox label="完全满足应急要求" name="cfx"></el-checkbox>
              <el-checkbox label="基本满足需要完善" name="cfx"></el-checkbox>
              <el-checkbox label="不充分必须修改" name="cfx"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <p class="p-title">演练效果评审</p>
          <el-form-item label="人员到位情况：">
            <el-checkbox-group v-model="form.rydwqk">
              <el-checkbox label="迅速准确" name="rydwqk"></el-checkbox>
              <el-checkbox label="基本按时到位" name="rydwqk"></el-checkbox>
              <el-checkbox label="个别人员不到位" name="crydwqkx"></el-checkbox>
              <el-checkbox label="重点部位人员不到位" name="rydwqk"></el-checkbox>
              <el-checkbox label="职责明确，操作熟练" name="rydwqk"></el-checkbox>
              <el-checkbox label="职责明确，操作不够熟练" name="rydwqk"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <p class="yjTitle">物资到位情况：</p>
          <el-form-item label="现场物资：">
            <el-checkbox-group v-model="form.xcwz">
              <el-checkbox label="现场物资充分，全部有效" name="xcwz"></el-checkbox>
              <el-checkbox label="现场准备不充分" name="xcwz"></el-checkbox>
              <el-checkbox label="现场物资严重缺乏" name="xcwz"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="个人防护：">
            <el-checkbox-group v-model="form.grfh">
              <el-checkbox label="全部人员防护到位" name="grfh"></el-checkbox>
              <el-checkbox label="个别人员防护不到位" name="grfh"></el-checkbox>
              <el-checkbox label="大部分人员防护不到位" name="grfh"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <p class="yjTitle">协调组织情况：</p>
          <el-form-item label="整体组织：">
            <el-checkbox-group v-model="form.ztzz">
              <el-checkbox label="准确、高效" name="ztzz"></el-checkbox>
              <el-checkbox label="协调基本顺利，能满足要求" name="ztzz"></el-checkbox>
              <el-checkbox label="效率低，有待改进" name="ztzz"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="抢险组分工：">
            <el-checkbox-group v-model="form.qxzfg">
              <el-checkbox label="合理、高效" name="qxzfg"></el-checkbox>
              <el-checkbox label="基本合理，能完成任务" name="qxzfg"></el-checkbox>
              <el-checkbox label="效率低，没有完成任务" name="qxzfg"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="实战效果评价：">
            <el-checkbox-group v-model="form.szxgpj">
              <el-checkbox label="达到预期目标" name="qxzfg"></el-checkbox>
              <el-checkbox label="基本达到目的，部分环节有待改进" name="szxgpj"></el-checkbox>
              <el-checkbox label="没有达到目标，需重新演练" name="szxgpj"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <p class="yjTitle">外部支援部门和协作有效性：</p>
          <el-form-item label="报告上级：">
            <el-checkbox-group v-model="form.bgsj">
              <el-checkbox label="报告及时" name="bgsj"></el-checkbox>
              <el-checkbox label="联系不上" name="bgsj"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="消防部门：">
            <el-checkbox-group v-model="form.xfbm">
              <el-checkbox label="按要求协作" name="xfbm"></el-checkbox>
              <el-checkbox label="行动迟缓" name="xfbm"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="医疗救援部门：">
            <el-checkbox-group v-model="form.yljybm">
              <el-checkbox label="按要求协作" name="yljybm"></el-checkbox>
              <el-checkbox label="行动迟缓" name="yljybm"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="周边政府撤离配合：">
            <el-checkbox-group v-model="form.zbzfclph">
              <el-checkbox label="按要求配合" name="zbzfclph"></el-checkbox>
              <el-checkbox label="不配合" name="zbzfclph"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <p class="p-title">存在问题和改进措施：</p>
          <el-form-item>
            <el-input type="textarea" v-model="form.czwthgjcs"></el-input>
          </el-form-item>
          <p class="p-title">评审负责人：</p>
          <el-form-item>
            <el-input v-model="form.psfzr"></el-input>
          </el-form-item>
          <p class="p-title">演练时间：</p>
          <el-form-item>
            <el-date-picker type="date" placeholder="选择日期" v-model="form.ylsj" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="content-bottom">
      <el-button type="primary" @click="onSubmit">确定</el-button>
      <el-button style="margin-left: 15px" @click="ylpgClick">取消</el-button>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  name: "",
  data() {
    return {
      form: {
        syx: [],
        cfx: [],
        rydwqk: [],
        xcwz: [],
        grfh: [],
        ztzz: [],
        qxzfg: [],
        szxgpj: [],
        bgsj: [],
        xfbm: [],
        yljybm: [],
        zbzfclph: [],
        czwthgjcs: "",
        psfzr: "",
        ylsj: ""
      }
    };
  },
  methods: {
    onSubmit() {
      this.$store.dispatch("closeYlpg");
      // console.log("submit!");
    },
    ylpgClick() {
      this.$store.dispatch("closeYlpg");
    }
  }
};
</script>

<style lang="scss">
.emergency-evaluation-pad {
  header {
    position: absolute;
    top: 9px;
    left: 600px;
    color: #65c3e8;
    font-weight: bold;
  }
  position: relative;
  width: 1299px;
  height: 696px;
  position: absolute;
  left: 320px;
  bottom: 100px;
  background: url("../../assets/images/home-sj-related/yaylbg.png") no-repeat
    center;
  .ee-content {
    position: relative;
    top: 85px;
    left: 35px;
    width: 1227px;
    height: 489px;
    overflow: auto;
    background: url("../../assets/images/home-sj-related/应急评估-content.png")
      no-repeat center;
    .p-title {
      font-size: 16px;
      color: #00ffff;
      margin: 20px 0 10px 0;
    }
  }
}

.el-form-item__label {
  color: #fff;
}
.el-form-item {
  margin: 0;
}
.yjTitle {
  color: #fff;
  margin-bottom: 6px;
}
.el-textarea__inner {
  color: #fff;
  height: 100px;
  margin: 6px 0 20px 0;
  background-color: transparent;
  border-color: #203866;
}
.el-input__inner {
  background-color: transparent;
  border-color: #203866;
  color: #fff;
}
.content-bottom {
  position: absolute;
  bottom: 60px;
  left: 570px;
  text-align: center;
}
</style>