<template>
  <div class="sj-carInfo">
    <header>
      <img src="../../assets/images/home-sj-info/车辆.png">
      事件车辆信息
    </header>
    <img @click="closeCar" class="carInfoClose" src="../../assets/images/home-sj-info/关闭.png">
    <table class="carInfoTab">
      <tr>
        <td class="bluetd">号码号牌</td>
        <td class="inptd inptd2">鄂A98675</td>
        <td class="bluetd">号牌种类</td>
        <td class="inptd">大型汽车号牌</td>
      </tr>
      <tr>
        <td class="bluetd">过车时间</td>
        <td class="inptd inptd2">2018-06-19 16:14:09</td>
        <td class="bluetd">号牌颜色</td>
        <td class="inptd">黄色</td>
      </tr>
      <tr>
        <td class="bluetd">车辆品牌</td>
        <td class="inptd inptd2">金龙客车</td>
        <td class="bluetd">车身颜色</td>
        <td class="inptd">白色</td>
      </tr>
      <tr>
        <td class="bluetd">使用性质</td>
        <td class="inptd inptd2">营运</td>
        <td class="bluetd">车辆型号</td>
        <td class="inptd">XMQ6771CYD4E</td>
      </tr>
      <tr>
        <td class="bluetd">签证机关</td>
        <td colspan="3" class="inptd">湖北省宜昌市公安局交通警察支队</td>
      </tr>
      <tr>
        <td class="bluetd">车辆类型</td>
        <td colspan="3" class="inptd">大型普通客车</td>
      </tr>
      <tr>
        <td class="bluetd">车主姓名</td>
        <td class="inptd inptd2">张无奇</td>
        <td class="bluetd">联系电话</td>
        <td class="inptd">13458796521</td>
      </tr>
      <tr>
        <td class="bluetd">车主地址</td>
        <td colspan="3" class="inptd">武汉市洪山区民族大道</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {};
  },
  methods: {
    closeCar() {
      this.$store.dispatch('closeCarXq');
    }
  },
  mounted() {}
};
</script>

<style lang="scss">
.sj-carInfo {
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
  .carInfoTab {
    margin-left: 57px;
    width: 736px;
    height: 354px;
    border: 1px solid #415878;
    background: #122e5e;
    color: #fff;
    tr {
      border-bottom: 1px solid #415878;
      .inptd {
        text-indent: 40px;
      }
      .bluetd {
        background: #1b8cc6;
        text-align: center;
        width: 110px;
      }
      .inptd2 {
        width: 256px;
      }
    }
  }
}
</style>
