<template>
  <div class="map-container">
    <baidu-map
      class="map"
      :center="center"
      :zoom="zoom"
      :scroll-wheel-zoom="scrollWheelZoomFlag"
      :mapStyle="mapStyle"
      @ready="handler"
    >
      <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
      <bm-marker
        v-for="(item,index) in zyjkPageState.emergency_map_items"
        :key="emergencyItemId(index)"
        class="map-marker"
        :position="item.postionMap"
        :dragging="false"
        :icon="{url:item.iconurl, size: {width: 120, height: 120}}"
        @click="clickEmergencyItem"
      >
        <!-- <bm-label
          :content="item.msg"
          :labelStyle="{color: 'red', fontSize : '14px',backgroundColor: 'transparent', border: '0'}"
          :offset="{width: 12, height: 50}"
        /> -->
      </bm-marker>
      <bm-marker
        v-for="item in zyjkPageState.emergency_map_items_events"
        :key="item.id"
        class="map-marker"
        :position="item.postionMap"
        :dragging="false"
        :icon="{url:iconMap.icon_event_danger_detail, size: {width: 43, height: 43}}"
        @click="clickEmergencyDetailItem(item.id)"
      >
        <bm-info-window
          title="湖北省十堰市武广高速106国道路段"
          :show="item.showWin"
          @close="closeEmergencyDetailItem(item.id)"
        >
          <div class="jq-pop-container">
            <p>
              <span>管辖部门:</span>
              <b>十堰市第二大队</b>
            </p>
            <p>
              <span>地点:</span>
              <b >十堰市某某区某某高速路段</b>
            </p>
            <p>
              <span>发生时间:</span>
              <b>1小时38分前</b>
            </p>
            <p>
              <span>案件简介:</span>
              <b>小车与货车再次发生追尾事故</b>
            </p>
          </div>
        </bm-info-window>
      </bm-marker>
      <!--  所有事件图标点      -->
      <div v-if="zyjkPageState.show_point_arr">
        <bm-marker
          v-for="item in filterOn"
          :key="item.id"
          class="map-marker"
          :position="item.postionMap"
          :dragging="false"
          :icon="{url: item.iconurl?item.iconurl:noIcon, size: {width: 30, height: 30}}"
        >
        </bm-marker>
        <bml-marker-clusterer :averageCenter="true">
          <bm-marker
            v-for="item in filterJH"
            :position="item.postionMap"
            :key="item.id"
            class="map-marker"
            :dragging="false"
            :icon="{url: item.iconurl?item.iconurl:noIcon, size: {width: 30, height: 30}}"
            @click="clickTaoPaiPoint(item)"
          >
          <bm-info-window
          :title="item.popInfo.carPlace"
          :show="item.showWin"
          @close="closeTaoPaiPointPop(item)"
        >
          <div class="jq-pop-container">
            <p><span>号牌号码:</span><b>{{item.popInfo.carNum}}</b></p>
            <p><span>号牌种类:</span><b>{{item.popInfo.carNumType}}</b></p>
            <p><span>车身颜色:</span><b>{{item.popInfo.carColor}}</b></p>
            <p><span>品牌型号:</span><b>{{item.popInfo.carType}}</b></p>
            <p><span>行驶方向:</span><b>{{item.popInfo.carDirection}}</b></p>
            <p><span>行驶速度:</span><b>{{item.popInfo.carSpeed}}</b></p>
            <p><span>预警信息:</span><b>{{item.popInfo.yjInfo}}</b></p>
            <p><span>时间:</span><b>{{item.popInfo.carTime}}</b></p>
            <p><span>地点:</span><b>{{item.popInfo.carPlace}}</b></p>
          </div>
        </bm-info-window>
          </bm-marker>
        </bml-marker-clusterer>
      </div>
      <!--  湖北省边界描边      -->
      <!-- <bm-boundary
        :name="zoneStyle.zoneName"
        :strokeWeight="zoneStyle.strokeWeight"
        :strokeColor="zoneStyle.strokeColor"
        :fillColor="zoneStyle.fillColor"
      ></bm-boundary> -->
        <!--  行政区划    -->
      <bm-boundary
        v-for="item in zyjkPageState.map_area_arr"
        :key="item.id"
        :name="item.zoneName"
        :strokeWeight="item.strokeWeight"
        :strokeColor="item.strokeColor"
        :fillColor="item.fillColor"
      >
      </bm-boundary>
      <!--  行政区划名字    -->
      <bm-label v-for="(item,index) in zyjkPageState.map_area_arr" :key="index" :content="item.zoneName" :position="item.postionMap" :labelStyle="{color: '#fff', fontSize : '14px',backgroundColor: 'transparent', border: '0'}" :title="item.zoneName"/>
      <!--  折线道路    -->
      <bm-polyline
        :path="xqdlPageState.road_polyline"
        stroke-color="#1ccd94"
        :stroke-opacity="1"
        :stroke-weight="10"
        :editing="false"
      ></bm-polyline>
      <div v-if="isHome && xqdlPageState.video_show">
        <!-- 视屏框和地图的点连线   -->
        <bm-polyline
                :path="xqdlPageState.video_line"
                stroke-color="red"
                :stroke-opacity="1"
                :stroke-weight="2"
                strokeStyle="dashed"
                :editing="false"
        ></bm-polyline>
      </div>
      <!--   自定义地图标注点     -->
      <div v-if="isHome">
          <bm-marker
                  v-for="(item,index) in xqdlPageState.cus_points"
                  :key="index"
                  class="map-marker"
                  :position="item.point"
                  :dragging="false"
                  :icon="{url:item.iconurl, size: {width: 30, height: 30}}"
          ></bm-marker>
      </div>
      <!-- 事件信息定位和警力调度 -->
      <div v-if="zyjkPageState.sjdd.visible">
        <bm-marker
          class="map-marker"
          :position="sjMaker.postionMap"
          :dragging="false"
          :icon="{url:sjMaker.iconurl, size: {width: 43, height: 43}}"
          @click="infoWindowOpen"
        ></bm-marker>
        <bm-circle
          :center="sjCircle.center"
          :radius="zyjkPageState.sjdd.radius"
          stroke-color="blue"
          :stroke-opacity="0.5"
          :stroke-weight="2"
          @lineupdate="updateCirclePath"
        ></bm-circle>
        <bm-marker
          v-for="item in filterSjdd"
          :key="item.id"
          class="map-marker"
          :position="item.postionMap"
          :dragging="false"
          @click="cameraClick(item.id)"
          :icon="{url:item.iconurl, size: {width: 43, height: 43}}"
        ></bm-marker>
        <bm-info-window
          :width="450"
          :height="180"
          :position="sjMaker.postionMap"
          title
          :show="infoWindow.show"
          @close="infoWindowClose"
          @open="infoWindowOpen"
        >
          <div class="carHead">
            <img src="../../../assets/images/home-sj-info/事件.png" alt>
            事故地点：华中农业大学南门狮子口路
          </div>
          <div class="contain">
            <p class="sjinfo">
              <span>管辖部门：宜昌第二大队</span>
              <span>发生时间：1小时23分钟以前</span>
            </p>
            <p class="sjinfo">事故简介：大客车高速行驶追尾并起火，紧急报警</p>
          </div>
          <div class="carFoot">
            <img src="../../../assets/images/home-sj-info/详情信息.png" alt>
            <a href class="carinfoBtn" @click.prevent="openCarXqList">相关车辆</a>
            <!-- <img src="../../../assets/images/home-sj-info/处置.png" alt>
            <span class="ljczBtn">立即处置</span> -->
          </div>
        </bm-info-window>
      </div>
    </baidu-map>
  </div>
</template>
<script>
import iconMap from '@/mapicons/icon.js';
import { mapGetters, mapState } from 'vuex';
import { BmlMarkerClusterer } from 'vue-baidu-map';

// 事件信息定位和指挥调度图标
import sjInfoIcon from '@/mapicons/sjInfoIcon.js';

export default {
  name: '',
  components: {
    BmlMarkerClusterer
  },
  //首页地图没有行政区划和折线道路，使用isHome字段，区分首页和辖区道路的2个地图组件
  props: ['center', 'pointArr', 'scrollWheelZoomFlag', 'zoom', 'mapStyle', 'zoneStyle', 'isHome'],
  data() {
    return {
      iconMap: iconMap,
      dangerIcon: iconMap.icon_event_danger,
      noIcon: iconMap.noIcon,
      sjMaker: {
        postionMap: {
          lat: 30.382938,
          lng: 112.787619
        }, // 覆盖物点坐标
        iconurl: sjInfoIcon._1
      },
      sjCircle: {
        center: {
          lat: 30.382938,
          lng: 112.787619
        }, // 覆盖物点坐标
        radius: 10000
      },
      ptArr: sjInfoIcon.pointArr,
      infoWindow: {
        postionMap: {
          lat: 30.382938,
          lng: 112.787619
        },
        show: false
      },
      blist: []
    };
  },
  computed: {
    // ...mapState(['zyjk']),
    ...mapGetters(['zyjkPageState', 'xqdlPageState']),
    filterOn() {
      //过滤出所有isShowFlag为true的普通图标点
      return this.pointArr.filter(o => o.isShowFlag && !this._isCongruentPoint(o));
    },
    filterJH() {
      //过滤出所有isShowFlag为true的聚合点
      return this.pointArr.filter(o => o.isShowFlag && this._isCongruentPoint(o));
    },
    filterSjdd() {
      const num = parseFloat(this.zyjkPageState.sjdd.radius) / 2000;
      console.log(this.ptArr.filter(o => o.radiusId < num));
      return this.ptArr.filter(o => o.radiusId < num);
    }
  },
  mounted() {
    console.log(this.zyjkPageState);
  },
  methods: {
    // 地图初始化
    handler({ BMap, map }) {
      console.log('Bmap', BMap);
      console.log('map', map);
      window.toPx = function(x, y) {
        const point = new BMap.Point(x, y);
        const pixel = map.pointToPixel(point);
        const pixelArray = new Array(pixel.x, pixel.y);
        return pixelArray;
      };
      window.wm = { BMap, map };
      let that = this
      setTimeout(function () {
          that.getBoundary(BMap, map);
      }, 100);
      map.addEventListener('click', e => {
        console.log(e.point.lng + ', ' + e.point.lat);
        console.log(new BMap.Boundary())
        const p = new BMap.Pixel(e.pixel.x, e.pixel.y);
        const point1 = map.pixelToPoint(p);
        const before = this.xqdlPageState.cus_points.length;
        this.$store.commit('ADD_CUS_POINT', point1);
        const after = this.xqdlPageState.cus_points.length;
        if (after > before) {
          //若标点成功，则弹出提示框
          this.$message({
            type: 'success',
            message: '上图成功',
            center: true
          });
        }
      });
      map.addEventListener('dragstart', function(e) {
        //console.log(e.point.lng + ", " + e.point.lat);
        console.log(e.pixel);
      });
      map.addEventListener('dragging', e => {
        //刷新视频框中心点在地图上的坐标
        console.log(e.pixel);
        this.$store.commit('REFLESH_VIDEO_POINT');
      });
      this.$emit('ready');
    },
    emergencyItemId(id) {
      return `emergency_item_${id}`;
    },
    emergencyItemDetailId(id) {
      return `emergency_item_detail_${id}`;
    },
    // 点击套牌图标弹出弹出框
    clickTaoPaiPoint(item) {
      item.showWin = !item.showWin;
    },
    closeTaoPaiPointPop(item) {
      if (item.showWin) {
        item.showWin = !item.showWin;
      }
    },
    clickEmergencyItem() {
      this.$store.dispatch('jqClick');
    },
    clickEmergencyDetailItem(id) {
      this.$store.dispatch('showDetailWin', id);
    },
    closeEmergencyDetailItem(id) {
      this.$store.dispatch('closeDetailWin', id);
    },
    updateCirclePath(e) {},

    infoWindowClose(e) {
      this.infoWindow.show = false;
    },
    infoWindowOpen(e) {
      this.infoWindow.show = true;
    },
    openCarXqList() {
      this.$store.dispatch('openCarXqList');
      this.infoWindow.show = true;
    },
    openCarXq() {
      this.$store.dispatch('openCarXq');
      this.infoWindow.show = true;
    },
    cameraClick(id) {
      if (id === 4) {
        //约定的摄像头点击点
        this.$store.commit('TOGGLE_VIDEO_SHOW');
      }
    },
    /**
     * 判断点是否是聚合点，私有方法
     * @param point
     * @returns {boolean}
     * @private
     */
    _isCongruentPoint(point) {
      let result = false;
      const id = point.id;
      // if (id && (id.startsWith('gaosu') || id.startsWith('suniu'))) {
      //   //id以gaosu或suniu开头的地图点，被定义为聚合点类型
      //   result = true;
      // }
      if (id && id.startsWith('taopai')) {
        //id以gaosu或suniu开头的地图点，被定义为聚合点类型
        result = true;
      }
      return result;
    },
    // 画行政区划的方法
    drawBoundary(BMap, map) {
      //包含所有区域的点数组
      let pointArray = [];

      /*画遮蔽层的相关方法
      *思路: 首先在中国地图最外画一圈，圈住理论上所有的中国领土，然后再将每个闭合区域合并进来，并全部连到西北角。
      *      这样就做出了一个经过多次西北角的闭合多边形*/
      //定义中国东南西北端点，作为第一层
      let pNW = { lat: 40.0, lng: -77 }
      let pNE = { lat: 59.0, lng: 136.0 }
      let pSE = { lat: 3.0, lng: 136.0 }
      let pSW = { lat: 3.0, lng: 73.0 }
      //向数组中添加一次闭合多边形，并将西北角再加一次作为之后画闭合区域的起点
      let pArray = [];
      pArray.push(pNW);
      pArray.push(pSW);
      pArray.push(pSE);
      pArray.push(pNE);
      pArray.push(pNW);
      //循环添加各闭合区域
      for (let i = 0; i < this.blist.length; i++) {
          //添加显示用标签层
          let label = new BMap.Label(this.blist[i].name, { offset: new BMap.Size(20, -10) });
          label.hide();
          map.addOverlay(label);

          //添加多边形层并显示
          let ply = new BMap.Polygon(this.blist[i].points, { strokeWeight: 5, strokeColor: "#FF0000", fillOpacity: 0.01, fillColor: " #FFFFFF" }); //建立多边形覆盖物
          ply.name = this.blist[i].name;
          ply.label = label;
          //ply.addEventListener("click", click);
          //ply.addEventListener("mouseover", mouseover);
          //ply.addEventListener("mouseout", mouseout);
          //ply.addEventListener("mousemove", mousemove);
          map.addOverlay(ply);

          //添加名称标签层
          //let centerlabel = new BMap.Label(this.blist[i].name, { offset: new BMap.Size(0, 0) });
          //centerlabel.setPosition(ply.getBounds().getCenter());
          //map.addOverlay(centerlabel);

          //将点增加到视野范围内
          let path = ply.getPath();
          pointArray = pointArray.concat(path);
          //将闭合区域加到遮蔽层上，每次添加完后要再加一次西北角作为下次添加的起点和最后一次的终点
          pArray = pArray.concat(path);
          pArray.push(pArray[0]);
      }

      //限定显示区域，需要引用api库
      let boundply = new BMap.Polygon(pointArray);
      // BMapLib.AreaRestriction.setBounds(map, boundply.getBounds());
      map.setViewport(pointArray);    //调整视野 

      //添加遮蔽层
      let plyall = new BMap.Polygon(pArray, { strokeOpacity: 0.0000001, strokeColor: "#000000", strokeWeight: 0.00001, fillColor: "#000000", fillOpacity: 0.4 }); //建立多边形覆盖物
      map.addOverlay(plyall);  
    },
    // 添加行政区划方法
    addDistrict(Bmap, map, districtName) {
      let districtLoading = 0;
      districtLoading++;
      let bdary = new BMap.Boundary();
      bdary.get(districtName, (rs) => {       //获取行政区域
          let count = rs.boundaries.length; //行政区域的点有多少个
          if (count === 0) {
              alert('未能获取当前输入行政区域');
              return;
          }
          for (let i = 0; i < count; i++) {
              this.blist.push({ points: rs.boundaries[i], name: districtName });
          };
          //加载完成区域点后计数器-1
          districtLoading--;
          if (districtLoading == 0) {
              //全加载完成后画端点
              this.drawBoundary(BMap, map);
          }
      });
    },
    // 初始化行政区
    getBoundary(Bmap, map) {   
        this.addDistrict(Bmap, map, "湖北省");
        // this.addDistrict(Bmap, map, "咸宁市");
        // this.addDistrict(Bmap, map, "黄石市");
        // this.addDistrict(Bmap, map, "鄂州市");
    }  
  }
};
</script>

<style lang="scss">
.map-container {
  width: 100%;
  height: 100%;
  .map {
    width: 100%;
    height: 100%;
  }
}

.carHead {
  width: 420px;
  height: 42px;
  background: #ffc62e;
  line-height: 42px;
  margin-left: 10px;
  img {
    width: 27px;
    height: 27px;
    margin: 0 12px;
    vertical-align: middle;
  }
}
.contain {
  width: 420px;
  margin-left: 10px;
  height: 80px;
  border-bottom: #efefef 1px solid;
  .sjinfo {
    margin: 15px 0 0 15px;
  }
}
.carFoot {
  margin: 18px 0 0 18px;
  img {
    vertical-align: middle;
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
.jq-pop-container {
  min-width: 250px;
  p {
    width: 100%;
    span {
      display: inline-block;
      width: 75px;
      vertical-align: top;
      text-align: right;
    }
    b {
      display: inline-block;
      width: calc(100% - 80px);
      font-weight: normal;
      padding-left: 3px;
    }
  }
}
</style>
