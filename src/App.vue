<template>
  <div id="app" ref="appRoot">
    <router-view />
  </div>
</template>
<script>
export default {
  // 测试git提交
  name: 'appRoot',
  data() {
    return {};
  },
  mounted() {
    // 设置缩放比例
    this.$nextTick(() => {
      this.resizeWindowCb();
      window.onresize = () => {
        this.resizeWindowCb();
      };
    });
  },
  methods: {
    resizeWindowCb() {
      let radio = document.body.clientWidth / 1920;
      this.$refs.appRoot.style.zoom = radio;
    }
  }
};
</script>
<style lang="scss">
$webkitScrollbarThumbColor: #24aef4;
html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: black;
}
body {
  overflow-y: auto;
}
#app {
  font-family: 'Arial', 'Microsoft YaHei', '黑体', '宋体', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #222;
  margin: 0 auto;
  width: 1920px;
  height: 1080px;
  // background:url('./assets/images/index_bg.jpg') no-repeat center center;
  // background-size:1920px 1080px;
}
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
  background-color: transparent;
}

/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  background-color: transparent;
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 8px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: rgba(36, 174, 244, 0.75);
}
</style>
