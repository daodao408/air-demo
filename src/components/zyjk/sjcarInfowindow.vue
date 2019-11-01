<template>
  <div class="carInfowindow">
    <header>
      <img src="../../assets/images/home-sj-info/事件.png" alt>
      事故地点：华中农业大学南门狮子口路
    </header>
    <div class="contain">
      <p class="sjinfo">
        <span>管辖部门：宜昌第二大队</span>
        <span>发生时间：1小时23分钟以前</span>
      </p>
      <p class="sjinfo">事故简介：大客车高速行驶追尾并起火，紧急报警</p>
    </div>
    <footer>
      <img src="../../assets/images/home-sj-info/详情信息.png" alt>

      <a href class="carinfoBtn">车辆信息</a>
      <!-- <img src="../../assets/images/home-sj-info/处置.png" alt>
      <span class="ljczBtn">立即处置</span> -->
    </footer>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>

<style lang="scss">
.carInfowindow {
  position: absolute;
  left: 916px;
  top: 451px;
  width: 448px;
  height: 178px;
  background: #fff;
  border-radius: 10px;
  font-size: 13px;
  header {
    width: 100%;
    height: 42px;
    background: #ffc62e;
    line-height: 42px;
    img {
      width: 27px;
      height: 27px;
      margin: 0 12px;
      vertical-align: middle;
    }
  }
  .contain {
    width: 100%;
    height: 80px;
    border-bottom: #efefef 1px solid;
    .sjinfo {
      margin: 15px 0 0 15px;
    }
  }
  footer {
    margin: 18px 0 0 18px;
    img {
      vertical-align: top;
    }
    .carinfoBtn {
      margin: 0 23px 0 8px;
    }
    .carinfoBtn:hover {
      color: blue;
    }
    .ljczBtn {
      margin-left: 8px;
    }
  }
}
</style>
