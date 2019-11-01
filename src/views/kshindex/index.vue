<template>
  <!--可视化-->
  <div class="kshIndexPage">
    <div class="kshIndexPage-title">交通数据可视化系统</div>
    <iframe :src="getUrl" width="100%" height="100%" style="border:none;" id="innerFrame"></iframe>
  </div>
</template>

<script>
export default {
  name: 'Kshxt',
  components: {},
  data() {
    return {
      timeStartStr: '2018年7月',
      timeEndStr: '2019年7月'
    };
  },
  computed: {
    getUrl() {
      return `/IMGgallery/index.html`;
    }
  },
  created() {},
  mounted() {
    this.$nextTick(() => {});
  },
  methods: {}
};
</script>

<style lang="scss">
.kshIndexPage {
  width: 100%;
  height: 100%;
  position: relative;
  background: url('../../assets/images/jtkshxt/bg_ksh_index.png') no-repeat center center;
  background-size: 100% 100%;
  margin: 0;
  padding: 0;
  overflow-y: hidden;
  .kshIndexPage-title {
    position: absolute;
    width: 100%;
    text-align: center;
    top: 125px;
    color: #fff;
    font-size: 40px;
    letter-spacing: 2.5px;
    font-weight: 600;
    z-index: 99;
  }
}
</style>
