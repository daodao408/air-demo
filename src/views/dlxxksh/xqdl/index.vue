<template>
    <!--辖区道路-->
    <div class="xqdlPage">
        <!--地图组件-->
        <zone-map
            :center="xqdlPageState.mapConfig.center"
            :pointArr="pointArr"
            :zoom="xqdlPageState.mapConfig.zoom"
            :scrollWheelZoomFlag="xqdlPageState.mapConfig.scrollWheelZoomFlag"
            :mapStyle="xqdlPageState.mapConfig.mapStyle"
            :zoneStyle="xqdlPageState.mapConfig.zoneStyle"
            @ready="toReady"
        />
        <!--四个角遮罩三角-->
        <map-wrap-corner position-class="topLeft" corner-color="#141955"></map-wrap-corner>
        <map-wrap-corner position-class="topRight" corner-color="#0b0f4d"></map-wrap-corner>
        <map-wrap-corner position-class="bottomLeft" corner-color="#111444"></map-wrap-corner>
        <map-wrap-corner position-class="bottomRight" corner-color="#101241"></map-wrap-corner>
        <!--右侧的pad  -->
        <emergency-pad></emergency-pad>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import MapWrapCorner from '@/components/global/map-wrap-corner';
import ZoneMap from '@/components/global/map-core/ZoneMap.vue';
import EmergencyPad from '@/components/zyjk/EmergencyPad.vue';
export default {
  name: 'Xqdl',
  components: {
    MapWrapCorner,
    ZoneMap,
    EmergencyPad
  },
  computed: {
    ...mapGetters(['xqdlPageState'])
  },
  data() {
    return {
      scrollWheelZoomFlag: true,
      pointArr: [],
      zoom: 3,
      mapStyle: {
        styleJson: [
          {
            featureType: 'all',
            elementType: 'geometry',
            stylers: {
              hue: '#E3EFF7',
              saturation: 10
            }
          },
          {
            featureType: 'water',
            elementType: 'all',
            stylers: {
              color: '#ffffff'
            }
          }
        ]
      }
    };
  },
  mounted() {},
  methods: {
    toReady() {
      //清空所有行政区划图层
      this.$store.commit('CERAR_AREA');
      //定位到湖北中心
      this.$store.commit('TO_HB');
      //清空道路折线图
      this.$store.commit('SET_ROAD_POLYLINE', []);
      //切换到辖区道路路由的时候，重置首页的point arr数据 防止再回来的时候 地图点和勾选状态不匹配的问题
      this.$store.commit('RESET_EVENT_POINT');
    },
    buttonChecked() {}
  }
};
</script>

<style lang="scss" scoped>
.xqdlPage {
  width: 1844px;
  height: 888px;
  position: absolute;
  background-color: #e2eff7;
  left: 39px;
  top: 151px;
}
</style>
