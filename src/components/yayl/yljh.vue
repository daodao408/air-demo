<template>
  <!--  演练计划pad  -->
  <div class="emergency-evaluation-pad">
    <header>预案演练计划</header>
    <div class="ee-content">
      <div style="padding: 35px">
        <el-form ref="form" :model="form">
          <p class="p-title">预案名称：</p>
          <el-form-item>
            <el-input v-model="form.yamc"></el-input>
          </el-form-item>
          <p class="p-title">演练地点：</p>
          <el-form-item>
            <el-input v-model="form.yadd"></el-input>
          </el-form-item>
          <p class="p-title">组织部门：</p>
          <el-form-item>
            <el-input v-model="form.zzbm"></el-input>
          </el-form-item>
          <p class="p-title">总指挥：</p>
          <el-form-item>
            <el-input v-model="form.zzh"></el-input>
          </el-form-item>
          <p class="p-title">演练时间：</p>
          <el-form-item>
            <el-date-picker type="date" placeholder="选择日期" v-model="form.ylsj" style="width: 100%;"></el-date-picker>
          </el-form-item>
          <p class="p-title">演练目的：</p>
          <el-form-item>
            <el-input type="textarea" v-model="form.ylmd"></el-input>
          </el-form-item>
          <p class="p-title">参加部门和单位：</p>
          <el-form-item>
            <el-input type="textarea" v-model="form.cjbmhdw"></el-input>
          </el-form-item>
          <p class="p-title">演练类别：</p>
          <el-form-item>
            <el-checkbox-group v-model="form.yllb">
              <el-checkbox label="实际演练" name="yllb"></el-checkbox>
              <el-checkbox label="桌面演练" name="yllb"></el-checkbox>
              <el-checkbox label="提问讨论式演练" name="yllb"></el-checkbox>
              <el-checkbox label="全部预案" name="yllb"></el-checkbox>
              <el-checkbox label="部分预案" name="yllb"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <p class="p-title">实际演练部分：</p>
          <el-form-item>
            <el-input type="textarea" v-model="form.sjylbf"></el-input>
          </el-form-item>
          <p class="p-title">物资准备和人员培训情况：</p>
          <el-form-item>
            <el-input type="textarea" v-model="form.wzzbhyypxqk"></el-input>
          </el-form-item>
          <p class="p-title">演练过程描述：</p>
          <el-form-item>
            <el-input type="textarea" v-model="form.ylgcms"></el-input>
          </el-form-item>
          <p class="p-title">记录人：</p>
          <el-form-item>
            <el-input v-model="form.jlr"></el-input>
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
        yamc: "",
        yldd: "",
        zzbm: "",
        zzh: "",
        zysj: "",
        ylmd: "",
        cjbmhdw: "",
        yllb: [],
        sjylbf: "",
        wzzbhyypxqk: "",
        ylgcms: "",
        jlr: ""
      }
    };
  },
  methods: {
    onSubmit() {
      this.$store.dispatch("closeYljh");
      // console.log("submit!");
    },
    ylpgClick() {
      this.$store.dispatch("closeYljh");
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