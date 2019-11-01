<template>
  <!--  流程预案pad  -->
  <div class="emergency-evaluation-pad">
    <div class="ee-content">
      <div class="ee-content-detail">
        <p class="p-title">预案适应性充分性评审</p>
        <div class="checkbox-row clearfloat">
          <el-checkbox class="el-col el-col-5">全部能够执行</el-checkbox>
          <el-checkbox class="el-col el-col-5">执行过程不够顺利</el-checkbox>
          <el-checkbox class="el-col el-col-5">明显不适宜</el-checkbox>
        </div>
        <div class="checkbox-row clearfloat">
          <el-checkbox class="el-col el-col-5">完全满足应急要求</el-checkbox>
          <el-checkbox class="el-col el-col-5">基本满足需要完善</el-checkbox>
          <el-checkbox class="el-col el-col-5">不充分必须修改</el-checkbox>
        </div>
        <p class="p-title" style="margin-top: 35px">演练效果评审</p>
        <div class="checkbox-row clearfloat">
          <el-checkbox class="el-col el-col-5">人员迅速准确到位</el-checkbox>
          <el-checkbox class="el-col el-col-5">基本按时到位</el-checkbox>
          <el-checkbox class="el-col el-col-5">个别人员不到位</el-checkbox>
          <el-checkbox class="el-col el-col-5">重点部位人员不到位</el-checkbox>
        </div>
        <div class="checkbox-row clearfloat">
          <el-checkbox class="el-col el-col-5">整体组织准确高效</el-checkbox>
          <el-checkbox class="el-col el-col-5">组织协调基本顺利，能满足要求</el-checkbox>
          <el-checkbox class="el-col el-col-5">现场物资充分</el-checkbox>
          <el-checkbox class="el-col el-col-5">现场准备不充分</el-checkbox>
        </div>
        <div class="checkbox-row clearfloat">
          <el-checkbox class="el-col el-col-5">现场物资严重缺乏</el-checkbox>
          <el-checkbox class="el-col el-col-5">基本达到目的，部分环节有待改进</el-checkbox>
          <el-checkbox class="el-col el-col-5">没有达到目的，须重新演练</el-checkbox>
        </div>
        <p class="p-title" style="margin-top: 35px">存在问题和改进意见</p>
        <textarea class="area-input" v-model="area_input" id cols="30" rows="5"></textarea>
      </div>
      <div class="content-bottom">
        <el-button type="primary" @click="returnZyjk">报送上级</el-button>
        <el-button style="margin-left: 15px" @click="returnZyjk">生成报告</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
export default {
  name: '',
  data() {
    return {
      area_input: ''
    };
  },
  methods: {
    returnZyjk() {
      this.$store.dispatch('togglePad');
      this.$store.dispatch('closeEvaluation');
      this.$store.dispatch('closeSjdd');
      //定位到湖北中心
      this.$store.commit('TO_HB');
    }
  }
};
</script>

<style lang="scss">
.emergency-evaluation-pad {
  width: 1299px;
  height: 696px;
  position: absolute;
  left: 320px;
  bottom: 100px;
  background: url('../../assets/images/home-sj-related/应急评估.png') no-repeat center;
  z-index: 15;
  .ee-content {
    position: relative;
    top: 60px;
    left: 35px;
    width: 1227px;
    height: 580px;
    background: url('../../assets/images/home-sj-related/应急评估-content.png') no-repeat center;
    background-size: 100% 100%;
    .ee-content-detail {
      width: 100%;
      padding: 24px;
      box-sizing: border-box;
    }
    .p-title {
      font-size: 16px;
      color: #00ffff;
    }
    .checkbox-row {
      margin-top: 35px;
      .el-checkbox {
        float: left;
      }
    }
    .el-checkbox__label {
      color: #f1f2fd;
      &:hover {
        transition: 0.3s;
        color: #3f9ece;
      }
    }
    .el-checkbox__input.is-checked + .el-checkbox__label {
      color: #409eff;
    }
    .area-input {
      width: 100%;
      height: 50px;
      background-color: transparent;
      color: #f1f2fd;
      margin-top: 20px;
      border-color: #203866;
    }
    .content-bottom {
      text-align: center;
      .el-button {
        width: 180px;
        padding: 0;
        border-radius: 0;
        height: 35px;
        line-height: 35px;
        background: transparent;
        border: 1px solid #4469ba;
        text-align: center;
        color: #8aa9e2;
        &:hover {
          background: #4a78d0;
          color: #fff;
        }
      }
    }
  }
}
</style>