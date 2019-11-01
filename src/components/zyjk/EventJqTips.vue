<template>
  <div class="event-info-tips" v-show="tipzt">
    <img class="info-tips-emailimg" src="../../assets/images/home-sj-info/email_yellow.png">
    <a href class="info-tips-text" @click.prevent="togglePad">当前产生一条事故信息，请关注！点击查看详情。</a>
    <img
      class="info-tips-close"
      src="../../assets/images/home-sj-info/close_white.png"
      @click="closeInfo"
    >
  </div>
</template>

<script>
import { setInterval } from "timers";
import { mapGetters } from 'vuex';
export default {
  name: "eventJqtips",
  components: {},
  computed: {
    ...mapGetters(['zyjkPageState'])
  },
  data() {
    return {
      tipzt: false,
      timer: null
    };
  },
  methods: {
    // 切换面板
    togglePad() {
      this.$store.dispatch("togglePad");
      //定位到湖北中心
      this.$store.commit("TO_HB");
      //切换到辖区道路路由的时候，重置首页的point arr数据 防止再回来的时候 地图点和勾选状态不匹配的问题
      this.$store.commit("RESET_EVENT_POINT");
      this.$store.dispatch("closeSjdd");
      if(this.zyjkPageState.eventInfoPad.visible) {
        this.tipzt = false;
        //clearInterval(this.timer);
        this.timer = null;
      }
    },
    //关闭提示框
    closeInfo() {
      this.tipzt = false;
      this.timer = setTimeout(this.openInfo, 10000);
    },
    //显示提示框
    openInfo() {
      this.tipzt = true;
    }
  },
  mounted() {
    this.timer = setTimeout(this.openInfo, 10000);
  },
  beforeDestroy() {
    //clearInterval(this.timer);
  }
};
</script>

<style lang="scss">
.event-info-tips {
  width: 457px;
  height: 50px;
  z-index: 9;
  position: absolute;
  background-color: #d84d4a;
  left: 780px;
  bottom: 56px;
  border-radius: 6px;
  font-size: 14px;
  .info-tips-emailimg {
    width: 25px;
    height: 19px;
    margin: 16px 14px 0 19px;
    vertical-align: bottom;
  }
  .info-tips-close {
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
  }
  .info-tips-text {
    color: #fff;
  }
  a:hover {
    color: rgb(232, 236, 12);
  }
}
</style>
