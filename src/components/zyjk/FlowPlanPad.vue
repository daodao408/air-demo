<template>
  <!--  流程预案pad  -->
  <div class="flow-plan-pad">
    <el-button
      @click="confirmNext"
      style="position: absolute;right: 30px;top: 20px"
      type="primary"
    >结案</el-button>
    <div class="block-container">    
      <div class="plan-block">
        <div class="block-container-title">先期处置</div>
        <div style="margin-top: 25px">
          <p @click="toggleCheck('_1')" :class="{'item-on': button._1}">1，接到交通事件</p>
          <div :class="button._1 ? 'icon-check-on':'icon-check-off'"></div>
        </div>
        <div>
          <p @click="toggleCheck('_2')" :class="{'item-on': button._2}">2，先期处置</p>
          <div :class="button._2 ? 'icon-check-on':'icon-check-off'"></div>
        </div>

        <div>
          <p @click="toggleCheck('_3')" :class="{'item-on': button._3}">3，立即报告</p>
          <div :class="button._3 ? 'icon-check-on':'icon-check-off'"></div>
        </div>
        <div style="margin-bottom: 25px">
          <p @click="toggleCheck('_4')" :class="{'item-on': button._4}">4，视屏监控</p>
          <div :class="button._4 ? 'icon-check-on':'icon-check-off'"></div>
        </div>
      </div>
      <div class="right-arrow"></div>
      <div class="plan-block">
        <div class="block-container-title">应急响应</div>
        <div style="margin-top: 25px">
          <p @click="toggleCheck('_5')" :class="{'item-on': button._5}">5，周边警力</p>
          <div :class="button._5 ? 'icon-check-on':'icon-check-off'"></div>
        </div>
        <div>
          <p @click="toggleCheck('_6')" :class="{'item-on': button._6}">6，通知120</p>
          <div :class="button._6 ? 'icon-check-on':'icon-check-off'"></div>
        </div>

        <div>
          <p @click="toggleCheck('_7')" :class="{'item-on': button._7}">7，通知110</p>
          <div :class="button._7 ? 'icon-check-on':'icon-check-off'"></div>
        </div>
        <div style="margin-bottom: 25px">
          <p @click="toggleCheck('_8')" :class="{'item-on': button._8}">8，总值班长</p>
          <div :class="button._8 ? 'icon-check-on':'icon-check-off'"></div>
        </div>
      </div>
      <div class="right-arrow"></div>
      <div class="plan-block">
        <div class="block-container-title">指挥协调</div>
        <div style="margin-top: 25px">
          <p @click="toggleCheck('_9')" :class="{'item-on': button._9}">9，值班局领导</p>
          <div :class="button._9 ? 'icon-check-on':'icon-check-off'"></div>
        </div>
        <div>
          <p @click="toggleCheck('_10')" :class="{'item-on': button._10}">10，周边视频</p>
          <div :class="button._10 ? 'icon-check-on':'icon-check-off'"></div>
        </div>

        <div>
          <p @click="toggleCheck('_11')" :class="{'item-on': button._11}">11，周边4G图传</p>
          <div :class="button._11 ? 'icon-check-on':'icon-check-off'"></div>
        </div>
        <div style="margin-bottom: 25px">
          <p @click="toggleCheck('_12')" :class="{'item-on': button._12}">12，后续工作</p>
          <div :class="button._12 ? 'icon-check-on':'icon-check-off'"></div>
        </div>
      </div>
      <div class="right-arrow"></div>
      <div class="plan-block">
        <div class="block-container-title">应急结束</div>
        <div style="margin-top: 25px">
          <p @click="toggleCheck('_13')" :class="{'item-on': button._13}">13，交通安全服务站</p>
          <div :class="button._13 ? 'icon-check-on':'icon-check-off'"></div>
        </div>
        <div>
          <p @click="toggleCheck('_14')" :class="{'item-on': button._14}">14，市相关职能部门</p>
          <div :class="button._14 ? 'icon-check-on':'icon-check-off'"></div>
        </div>

        <div style="margin-bottom: 25px">
          <p @click="toggleCheck('_15')" :class="{'item-on': button._15}">15，处置结果</p>
          <div :class="button._15 ? 'icon-check-on':'icon-check-off'"></div>
        </div>
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
      button: {
        _1: false,
        _2: false,
        _3: false,
        _4: false,
        _5: false,
        _6: false,
        _7: false,
        _8: false,
        _9: false,
        _10: false,
        _11: false,
        _12: false,
        _13: false,
        _14: false,
        _15: false
      }
    };
  },
  methods: {
    toggleCheck(key) {
      const flag = this.button[key];
      this.button[key] = !flag;
    },
    confirmNext() {
      this.$emit('confirmNext');
      //打开预案处置
      this.$store.dispatch('openEvaluation');
      this.$store.dispatch('closeFlow');
    }
  }
};
</script>

<style lang="scss">
.flow-plan-pad {
  width: 1180px;
  height: 436px;
  position: absolute;
  left: 390px;
  bottom: -40px;
  background: url('../../assets/images/home-sj-related/flow-plan-pad.png') no-repeat center;
  background-size: 100% 100%;
  .block-container {
    height: 250px;
    width: 1120px;
    position: relative;
    top: 90px;
    left: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .plan-block {
      width: 257px;
      height: 233px;
      background: url('../../assets/images/home-sj-related/flow-plan-block.png') no-repeat center;
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-direction: column;
      position: relative;
      .block-container-title {
        width: 256px;
        color: #80bfff;
        text-indent: 12px;
        font-size: 16px;
        font-weight: 600;
        letter-spacing: 1.5px;
        position: absolute;
        left: 0;
        top: -30px;
        &:before {
          content: '';
          display: block;
          position: absolute;
          width: 4px;
          height: 14px;
          background-color: #80bfff;
          top: 2px;
          left: 0;
        }
      }
      > div {
        height: 30px;
        > div.icon-check-on {
          display: inline-block;
          width: 18px;
          height: 18px;
          margin-left: 20px;
          position: relative;
          top: 2px;
          background-image: url('../../assets/images/home-sj-related/勾勾.png');
        }
        > div.icon-check-off {
          display: inline-block;
          width: 18px;
          height: 18px;
          margin-left: 20px;
          position: relative;
          top: 2px;
          background-image: url('../../assets/images/home-sj-related/圈圈.png');
        }
      }
      p {
        display: inline-block;
        height: 25px;
        width: 150px;
        font-size: 16px;
        color: #ffffff;
        font-weight: bold;
        &:hover {
          color: #7ac4e0;
          cursor: pointer;
          transition: 0.3s;
        }
        &.item-on {
          color: #7ac4e0;
        }
      }
    }
    .right-arrow {
      width: 14px;
      height: 14px;
      background: url('../../assets/images/home-sj-related/右双箭头.png') no-repeat center;
    }
  }
}
</style>