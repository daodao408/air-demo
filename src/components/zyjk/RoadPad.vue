<template>
    <left-pad>
        <div slot="left-pad-detail" class="road-pad">
            <el-tabs v-model="curTab" @tab-click="handleClick">
                <el-tab-pane label="高速公路" name="first">
                    <p class="p-text" @click="button.road._1 = !button.road._1;setRoadLine()" :class="{'p-on': button.road._1}"><img class="p-icon" src="../../assets/images/home-sj-related/交警.png" alt="">湖北高警一支队汉川大队</p>
                    <p class="p-text" @click="button.road._2 = !button.road._2" :class="{'p-on': button.road._2}"><img class="p-icon" src="../../assets/images/home-sj-related/交警.png" alt="">湖北高警一支队仙桃大队</p>
                    <p class="p-text" @click="button.road._3 = !button.road._3" :class="{'p-on': button.road._3}"><img class="p-icon" src="../../assets/images/home-sj-related/交警.png" alt="">湖北高警一支队孝感大队</p>
                    <p class="p-text" @click="button.road._4 = !button.road._4" :class="{'p-on': button.road._4}"><img class="p-icon" src="../../assets/images/home-sj-related/交警.png" alt="">湖北高警一支队蔡甸大队</p>
                    <p class="p-text" @click="button.road._5 = !button.road._5" :class="{'p-on': button.road._5}"><img class="p-icon" src="../../assets/images/home-sj-related/交警.png" alt="">湖北高警一支队江夏大队</p>
                    <p class="p-text" @click="button.road._6 = !button.road._6" :class="{'p-on': button.road._6}"><img class="p-icon" src="../../assets/images/home-sj-related/交警.png" alt="">湖北高警一支队咸宁大队</p>
                    <p class="p-text" @click="button.road._7 = !button.road._7" :class="{'p-on': button.road._7}"><img class="p-icon" src="../../assets/images/home-sj-related/交警.png" alt="">湖北高警一支队云梦大队</p>
                    <p class="p-text" @click="button.road._8 = !button.road._8" :class="{'p-on': button.road._8}"><img class="p-icon" src="../../assets/images/home-sj-related/交警.png" alt="">湖北高警一支队广水大队</p>
                    <p class="p-text" @click="button.road._9 = !button.road._9" :class="{'p-on': button.road._9}"><img class="p-icon" src="../../assets/images/home-sj-related/交警.png" alt="">湖北高警二支队黄梅大队</p>
                    <p class="p-text" @click="button.road._10 = !button.road._10" :class="{'p-on': button.road._10}"><img class="p-icon" src="../../assets/images/home-sj-related/交警.png" alt="">湖北高警二支队黄石大队</p>
                    <p class="p-text" @click="button.road._11 = !button.road._11" :class="{'p-on': button.road._11}"><img class="p-icon" src="../../assets/images/home-sj-related/交警.png" alt="">湖北高警二支队鄂州大队</p>
                    <p class="p-text" @click="button.road._12 = !button.road._12" :class="{'p-on': button.road._12}"><img class="p-icon" src="../../assets/images/home-sj-related/交警.png" alt="">湖北高警二支队下陆大队</p>
                    <p class="p-text" @click="button.road._13 = !button.road._13" :class="{'p-on': button.road._13}"><img class="p-icon" src="../../assets/images/home-sj-related/交警.png" alt="">湖北高警二支队崇阳大队</p>
                    <p class="p-text" @click="button.road._14 = !button.road._14" :class="{'p-on': button.road._14}"><img class="p-icon" src="../../assets/images/home-sj-related/交警.png" alt="">湖北高警二支队阳新大队</p>
                </el-tab-pane>
                <!--<el-tab-pane label="城区划分" name="second">
                    <p class="p-text" @click="button.area.wh = !button.area.wh;clickAreaP('wh')" :class="{'p-on': button.area.wh}"><img class="shi-icon" src="../../assets/images/home-sj-related/地图.png" alt="">武汉市</p>
                    <p class="p-text" @click="button.area.hs = !button.area.hs;clickAreaP('hs')" :class="{'p-on': button.area.hs}"><img class="shi-icon" src="../../assets/images/home-sj-related/地图.png" alt="">黄石市</p>
                    <p class="p-text" @click="button.area.sy = !button.area.sy;clickAreaP('sy')" :class="{'p-on': button.area.sy}"><img class="shi-icon" src="../../assets/images/home-sj-related/地图.png" alt="">十堰市</p>
                    <p class="p-text" @click="button.area.yc = !button.area.yc;clickAreaP('yc')" :class="{'p-on': button.area.yc}"><img class="shi-icon" src="../../assets/images/home-sj-related/地图.png" alt="">宜昌市</p>
                    <p class="p-text" @click="button.area.xy = !button.area.xy;clickAreaP('xy')" :class="{'p-on': button.area.xy}"><img class="shi-icon" src="../../assets/images/home-sj-related/地图.png" alt="">襄阳市</p>
                    <p class="p-text" @click="button.area.ez = !button.area.ez;clickAreaP('ez')" :class="{'p-on': button.area.ez}"><img class="shi-icon" src="../../assets/images/home-sj-related/地图.png" alt="">鄂州市</p>
                    <p class="p-text" @click="button.area.jm = !button.area.jm;clickAreaP('jm')" :class="{'p-on': button.area.jm}"><img class="shi-icon" src="../../assets/images/home-sj-related/地图.png" alt="">荆门市</p>
                    <p class="p-text" @click="button.area.xg = !button.area.xg;clickAreaP('xg')" :class="{'p-on': button.area.xg}"><img class="shi-icon" src="../../assets/images/home-sj-related/地图.png" alt="">孝感市</p>
                    <p class="p-text" @click="button.area.jz = !button.area.jz;clickAreaP('jz')" :class="{'p-on': button.area.jz}"><img class="shi-icon" src="../../assets/images/home-sj-related/地图.png" alt="">荆州市</p>
                    <p class="p-text" @click="button.area.hg = !button.area.hg;clickAreaP('hg')" :class="{'p-on': button.area.hg}"><img class="shi-icon" src="../../assets/images/home-sj-related/地图.png" alt="">黄冈市</p>
                    <p class="p-text" @click="button.area.sz = !button.area.sz;clickAreaP('sz')" :class="{'p-on': button.area.sz}"><img class="shi-icon" src="../../assets/images/home-sj-related/地图.png" alt="">随州市</p>
                    <p class="p-text" @click="button.area.xt = !button.area.xt;clickAreaP('xt')" :class="{'p-on': button.area.xt}"><img class="shi-icon" src="../../assets/images/home-sj-related/地图.png" alt="">仙桃市</p>
                    <p class="p-text" @click="button.area.qj = !button.area.qj;clickAreaP('qj')" :class="{'p-on': button.area.qj}"><img class="shi-icon" src="../../assets/images/home-sj-related/地图.png" alt="">潜江市</p>
                    <p class="p-text" @click="button.area.tm = !button.area.tm;clickAreaP('tm')" :class="{'p-on': button.area.tm}"><img class="shi-icon" src="../../assets/images/home-sj-related/地图.png" alt="">天门市</p>
                    <p class="p-text" @click="button.area.slj = !button.area.slj;clickAreaP('slj')" :class="{'p-on': button.area.slj}"><img class="shi-icon" src="../../assets/images/home-sj-related/地图.png" alt="">神龙架林区</p>
                    <p class="p-text" @click="button.area.xn = !button.area.xn;clickAreaP('xn')" :class="{'p-on': button.area.xn}"><img class="shi-icon" src="../../assets/images/home-sj-related/地图.png" alt="">咸宁市</p>
                    <p class="p-text" @click="button.area.es = !button.area.es;clickAreaP('es')" :class="{'p-on': button.area.es}"><img class="shi-icon" src="../../assets/images/home-sj-related/地图.png" alt="">恩施土家族苗族自治州</p>
                </el-tab-pane>-->
            </el-tabs>
        </div>
    </left-pad>
</template>

<script>
import { mapGetters } from 'vuex';
import LeftPad from '../global/left-pad/LeftPad.vue';
export default {
  name: '',
  components: {
    LeftPad
  },
  computed: {
    ...mapGetters(['zyjkPageState'])
  },
  data() {
    return {
      curTab: 'first',
      button: {
        road: {
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
          _14: false
        },
        area: {
          wh: false,
          hs: false,
          sy: false,
          yc: false,
          xy: false,
          ez: false,
          jm: false,
          xg: false,
          jz: false,
          hg: false,
          sz: false,
          xt: false,
          qj: false,
          tm: false,
          xn: false,
          es: false,
          slj: false
        }
      }
    };
  },
  methods: {
    handleClick(tab, event) {
      if (tab.name === 'second') {
        //当点击的是行政区划tab页时
        this.button.area = {
          wh: false,
          hs: false,
          sy: false,
          yc: false,
          xy: false,
          ez: false,
          jm: false,
          xg: false,
          jz: false,
          hg: false,
          sz: false,
          xt: false,
          qj: false,
          tm: false,
          xn: false,
          es: false,
          slj: false
        };
      }
      if (tab.name === 'first') {
        //当点击的是行政区划tab页时
        this.button.road = {
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
          _14: false
        };
      }
      //清空所有行政区划图层
      this.$store.commit('CERAR_AREA');
      //定位到湖北中心
      this.$store.commit('TO_HB');
      //清空道路折线图
      this.$store.commit('SET_ROAD_POLYLINE', []);
    },
    clickAreaP(keyStr) {
      this.$store.commit('TOGGLEAREA', keyStr);
      //点击武汉交警总队时
      if (keyStr === 'wh') {
        this.$store.commit('TO_WH');
      }
    },
    setRoadLine() {
      if (this.button.road._1) {
        const arr = [
          // 111.463278,
          // 111.734063,30.765326
          { lng: 111.465578, lat: 30.626206 },
          { lng: 111.479376, lat: 30.64659 },
          { lng: 111.496623, lat: 30.66846 },
          { lng: 111.529968, lat: 30.701257 },
          { lng: 111.562451, lat: 30.733172 },
          { lng: 111.661336, lat: 30.757009 },
          { lng: 111.825762, lat: 30.775379 },
          { lng: 112.060903, lat: 30.883542 },
          { lng: 112.109196, lat: 30.907837 },
          { lng: 112.255224, lat: 30.950957 },
          { lng: 112.423674, lat: 30.988114 },
          { lng: 112.633519, lat: 31.019314 }
        ];
        this.$store.commit('SET_ROAD_POLYLINE', arr);
        this.$store.commit('SET_POINT', { lng: 112.060903, lat: 30.883542 });
        //this.$store.commit('SET_ZOOM', 10);
      } else {
        this.$store.commit('SET_ROAD_POLYLINE', []);
      }
    }
  }
};
</script>

<style lang="scss">
.road-pad {
  #tab-first,
  #tab-second,
  .el-tabs__active-bar {
    left: 30px;
    font-size: 18px;
    margin-top: 12px;
  }
  .el-tabs__item.is-active {
    color: #fff600;
  }
  .el-tabs__item:hover {
    color: #fff600;
  }
  .el-tabs__active-bar {
    background-color: #fff600;
  }
  .p-text,
  .el-tabs__item {
    color: #24aef4;
  }
  .p-text {
    font-size: 18px;
    height: 50px;
    line-height: 50px;
    padding-left: 30px;
    cursor: pointer;
    &:hover {
      background-color: #24aef4;
      color: #ffffff;
    }
  }
  .p-icon {
    position: relative;
    top: 2px;
    margin-right: 20px;
  }
  .shi-icon {
    position: relative;
    top: 3px;
    margin-right: 20px;
  }
  .p-on {
    background-color: #24aef4;
    color: #ffffff;
  }
  .el-tabs__nav-wrap::after {
    background-color: #24aef4;
  }
  .el-tabs__nav {
    height: 60px;
  }
  #pane-second {
    height: 754px;
    overflow: scroll;
  }
}
</style>