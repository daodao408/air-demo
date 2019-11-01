<template>
    <vue-draggable-resizable :x="position.x" :y="position.y" :w="378" :h="293" class-name="drag-container" @dragging="onDrag">
        <div class="video-pad">
            <p class="video-title">湖北宜昌高速K2236+100M视频...</p>
            <div class="close-container">
                <div class="video-close" @click="closeVideoPad"></div>
            </div>
            <div class="video-container">
                <!-- <img src="../../assets/images/home-sj-related/视频图片.png" alt=""> -->
                <video src="../../assets/video/traffic_accident.mp4" autoplay loop controls="controls">
                  您的浏览器不支持 video 标签。
                </video>
            </div>
            <!-- <div class="bottom">
                <div class="left-icon"></div>
                <div class="right-icon"></div>
            </div> -->
        </div>
    </vue-draggable-resizable>
</template>

<script>
import _ from 'lodash';
import VueDraggableResizable from 'vue-draggable-resizable';
export default {
  name: '',
  components: {
    VueDraggableResizable
  },
  computed: {},
  data() {
    return {
      zindex: 10,
      position: {
        x: 1400,
        y: 50
      }
    };
  },
  methods: {
    closeVideoPad() {
      this.$store.commit('TOGGLE_VIDEO_SHOW');
    },
    onDrag: function(x, y) {
      const left = x + 189;
      const top = y + 146;
      //存放当前视频窗口的中心屏幕坐标点
      console.log('middle_point', { left, top });
      this.$store.commit('SET_VIDEO_MIDDLE_POINT', { x: left, y: top });
      if (window.wm) {
        //将屏幕坐标转化为地图上的经纬度点坐标
        var p = new window.wm.BMap.Pixel(left, top);
        var point1 = window.wm.map.pixelToPoint(p);
        //this.$emit('VIDEO_PAD_POINT_CHANGED', {left, top})
        this.$store.commit('REFLESH_VIDEO_LINE', point1);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.drag-container {
  z-index: 1 !important;
  > svg {
    border: 1px solid red;
    position: absolute;
    > polyline {
      fill: white;
      stroke: red;
      stroke-width: 1px;
    }
  }
  .video-pad {
    width: 378px;
    height: 253px;
    background: url('../../assets/images/home-sj-related/视频窗口.png') no-repeat center;
    p.video-title {
      display: inline-block;
      color: #c8e7ff;
      font-size: 14px;
      height: 40px;
      line-height: 40px;
      width: calc(100% - 60px);
      padding-left: 20px;
      border-bottom: 1px solid #304d85;
    }
    div.close-container {
      display: inline-block;
      width: 40px;
      height: 40px;
      text-align: center;
      vertical-align: middle;
      border-bottom: 1px solid #304d85;
      > div.video-close {
        display: inline-block;
        width: 17px;
        height: 17px;
        position: relative;
        top: 11px;
        background: url('../../assets/images/home-sj-related/视频关闭.png') no-repeat center;
        cursor: pointer;
      }
    }
    .video-container {
      > img {
        position: relative;
        top: 2px;
        left: 6px;
      }
      video {
        width: 100%;
        height: auto;
      }
    }
    .bottom {
      width: 100%;
      height: 45px;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      > div {
        cursor: pointer;
        width: 9px;
        height: 13px;
        &.left-icon {
          background: url('../../assets/images/home-sj-related/video-left.png');
        }
        &.right-icon {
          background: url('../../assets/images/home-sj-related/video-right.png');
        }
      }
    }
  }
}
</style>