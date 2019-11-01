<template>
  <!--资源监控-->
  <div class="zyjkPage">
    <!--地图组件-->
    <zone-map
      :center="zyjkPageState.mapConfig.center"
      :pointArr="zyjkPageState.mapConfig.pointArr"
      :zoom="zyjkPageState.mapConfig.zoom"
      :scrollWheelZoomFlag="zyjkPageState.mapConfig.scrollWheelZoomFlag"
      :mapStyle="zyjkPageState.mapConfig.mapStyle"
      :zoneStyle="zyjkPageState.mapConfig.zoneStyle"
      is-home="true"
      @ready="toReady"
    />
    <!--四个角遮罩三角-->
    <map-wrap-corner position-class="topLeft" corner-color="#141955"></map-wrap-corner>
    <map-wrap-corner position-class="topRight" corner-color="#0b0f4d"></map-wrap-corner>
    <map-wrap-corner position-class="bottomLeft" corner-color="#111444"></map-wrap-corner>
    <map-wrap-corner position-class="bottomRight" corner-color="#101241"></map-wrap-corner>
    <!--左侧的事件pad，嵌套了left-pad  -->
    <event-pad v-if="zyjkPageState.eventPad.visible"></event-pad>
    <!--左侧的道路pad，嵌套了left-pad  -->
    <road-pad style="position: absolute;left: 370px;top: 0px" v-if="zyjkPageState.show_road_pad"></road-pad>
    <!--事件信息pad-->
    <event-info-pad v-if="zyjkPageState.eventInfoPad.visible" @startPlan="startPlan"></event-info-pad>
    <!--右侧的pad  -->
    <emergency-pad v-if="zyjkPageState.emergencyPad.visible"></emergency-pad>

    <!-- 警情事件提示框 -->
    <event-jqtips></event-jqtips>
    <!-- 事件车辆信息简介 -->
    <sjcar-infowindow v-if="zyjkPageState.carInfowindow.visible"></sjcar-infowindow>
    <!-- 事件信息车辆列表信息 -->
    <event-sjcar-info-list v-if="zyjkPageState.carXqList.visible"></event-sjcar-info-list>
    <!-- 事件信息车辆信息 -->
    <event-sjcar-info v-if="zyjkPageState.carXq.visible"></event-sjcar-info>
    <!--知识库-->
    <knowledge-pad v-if="xqdlPageState.knowledge_show"></knowledge-pad>
    <!--底部警情pad  -->
    <bottom-msg-pad v-show="zyjkPageState.bottomMsgPad.visible" @toClick="handleCleck"></bottom-msg-pad>

    <!--警情大数据弹出框  -->
    <div class="jqdsj-dialog" v-if="isShowJqdsjPage">
      <jqdsj-dialog @close="closeJqdsjPageDialog"></jqdsj-dialog>
    </div>

    <!--应急添加选择组织进行视频通话弹出框  -->
    <div class="yjxzzz-dialog" v-if="isShowYjxzzzPage">
      <yjtsxzzz-dialog :dialogTitle="dialogTitle" @close="closeYjxzzzPageDialog" :xzzzIsChoseFlag="xzzzIsChoseFlag"></yjtsxzzz-dialog>
    </div>
    <div class="yjspth-dialog" v-if="isShowYjspthPage">
      <yjtsspth-dialog @close="closeYjspthPageDialog"></yjtsspth-dialog>
    </div>
    <VideoPad v-if="xqdlPageState.video_show"></VideoPad>
    <!-- 预案名称 -->
    <plan-pad v-if="zyjkPageState.planPad.visible"></plan-pad>
    <handle-plan-pad v-if="zyjkPageState.handlePlanPad.visible"></handle-plan-pad>
    <flow-plan-pad v-if="zyjkPageState.flowPlanPad.visible"></flow-plan-pad>
    <emergency-evaluation-pad v-if="zyjkPageState.evaluationPad.visible"></emergency-evaluation-pad>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ZoneMap from '@/components/global/map-core/ZoneMap.vue';
import MapWrapCorner from '@/components/global/map-wrap-corner';
import EventPad from '@/components/zyjk/EventPad.vue';
import EmergencyPad from '@/components/zyjk/EmergencyPad.vue';
import BottomMsgPad from '@/components/zyjk/BottomMsgPad.vue';
import iconMap from '@/mapicons/icon.js';
import JqdsjDialog from '@/views/dlxxksh/jqdsj';
import YjtsxzzzDialog from '@/views/dlxxksh/yjtsspth/xzzz.vue';
import YjtsspthDialog from '@/views/dlxxksh/yjtsspth/spth.vue';
import VideoPad from '@/components/zyjk/VideoPad.vue';
import KnowledgePad from '@/components/zyjk/KnowledgePad.vue';
// 事件信息pad组件
import eventInfoPad from '@/components/zyjk/EventInfoPad.vue';
import eventJqtips from '@/components/zyjk/EventJqTips.vue';
import eventSjcarInfoList from '@/components/zyjk/EventSjcarInfoList.vue';
import eventSjcarInfo from '@/components/zyjk/EventSjcarInfo.vue';
import sjcarInfowindow from '@/components/zyjk/sjcarInfowindow.vue';

//预案流程
import planPad from '@/components/zyjk/PlanPad.vue';
import handlePlanPad from '@/components/zyjk/HandlePlanPad.vue';
import flowPlanPad from '@/components/zyjk/FlowPlanPad.vue';
import EmergencyEvaluationPad from '@/components/zyjk/EmergencyEvaluationPad.vue';
import RoadPad from '@/components/zyjk/RoadPad.vue';

export default {
  name: 'Zyjk',
  components: {
    MapWrapCorner,
    ZoneMap,
    EventPad,
    EmergencyPad,
    BottomMsgPad,
    // 事件信息pad组件
    eventInfoPad,
    //警情大数据弹出框组件
    JqdsjDialog,
    //警情事件提示框
    eventJqtips,
    //事件信息车辆信息列表
    eventSjcarInfoList,
    //事件信息车辆信息
    eventSjcarInfo,
    //应急态势选择组织提示框
    YjtsxzzzDialog,
    //应急态势视频通话提示框
    YjtsspthDialog,
    //卡口摄像头视频弹框pad
    VideoPad,
    //知识库面板
    KnowledgePad,
    //预案名称
    planPad,
    handlePlanPad,
    flowPlanPad,
    EmergencyEvaluationPad,
    sjcarInfowindow,
    RoadPad
  },
  computed: {
    ...mapGetters(['zyjkPageState', 'xqdlPageState'])
  },
  data() {
    return {
      searchText: '',
      button: {
        trafficJam: true,
        badweather: false
      },
      // 警情弹出框显示标志量
      isShowJqdsjPage: false,
      // 应急选择组织弹出框title
      dialogTitle: '添加你所想要添加的通话人员',
      // 应急选择组织弹出框显示标志量
      isShowYjxzzzPage: false,
      xzzzIsChoseFlag: false, // 应急选择组织弹出框是否勾选已选择的人员
      // 应急视频通话弹出框显示标志量
      isShowYjspthPage: false
    };
  },
  mounted() {},
  methods: {
    // 切换面板
    togglePad() {
      this.$store.dispatch('togglePad');
    },
    toReady() {
      this.$store.commit('TO_HB');
    },
    buttonChecked() {},

    // 点击弹出警情大数据弹出框
    handleCleck() {
      this.isShowJqdsjPage = true;
    },
    // 关闭警情大数据弹出框
    closeJqdsjPageDialog() {
      this.isShowJqdsjPage = false;
    },

    // 开启预案
    startPlan(data) {
      // this.isShowYjxzzzPage = true;
      if (data && data.showPageStr === 'xzzz') {
        this.isShowYjxzzzPage = true;
      }
    },
    // 点击弹出应急选择组织弹出框
    toShowYjxzzzjPage() {
      this.isShowYjxzzzPage = true;
      this.xzzzIsChoseFlag = false;
    },
    // 关闭应急选择组织弹出框
    closeYjxzzzPageDialog(data) {
      this.isShowYjxzzzPage = false;
      this.xzzzIsChoseFlag = false;
      if (data && data.showPageStr === 'spth') {
        this.isShowYjspthPage = true;
      }
    },
    // 关闭应急选择组织弹出框
    closeYjspthPageDialog(data) {
      this.isShowYjspthPage = false;
      if (data && data.showPageStr === 'xzzz') {
        this.isShowYjxzzzPage = true;
        this.xzzzIsChoseFlag = true;
      }
    }

    // 获取面板状态
  }
};
</script>

<style lang="scss">
.zyjkPage {
  width: 1844px;
  height: 888px;
  position: absolute;
  background-color: #e2eff7;
  left: 39px;
  top: 151px;
}
.event-info-tips {
  width: 457px;
  height: 50px;
  position: absolute;
  background-color: #d84d4a;
  left: 780px;
  bottom: 56px;
  border-radius: 6px;
  color: #fff;
  font-size: 14px;
  .info-tips-emailimg {
    width: 25px;
    height: 19px;
    margin: 16px 14px 0 19px;
    vertical-align: bottom;
  }
  .info-tips-close {
    position: absolute;
  }
}
</style>
