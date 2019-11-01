<template>
    <div class="bottom-pad-container">
        <p class="detail" @click="handleCleck"><span>警情总数：</span>466<span>未签收数量：</span>85<span>处理中数量：</span>256<span>处理完成数量：</span>125</p>
    </div>
</template>

<script>
export default {
  name: '',
  methods: {
    // 点击警情触发警情大数据弹出框
    handleCleck() {
      this.$emit('toClick');
    }
  }
};
</script>

<style scoped lang="scss">
.bottom-pad-container {
  /*width: 695px;*/
  /*height: 80px;*/
  position: absolute;
  left: 680px;
  top: -75px;
  text-align: center;
  /*background: url('../../assets/images/bottom-pad-bg.png') no-repeat 0 0;*/
  .detail {
    cursor: pointer;
    height: 30px;
    line-height: 30px;
    font-size: 16px;
    color: #e0edf9;
    &:hover {
      color: red;
    }
    span {
      padding-left: 25px;
      &:first-child {
        padding-left: 0;
      }
    }
  }
}
</style>