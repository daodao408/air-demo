<template>
    <left-pad>
        <div slot="left-pad-detail" class="pad_sj">
            <img class="input_icon" src="../../assets/images/home-sj-related/input-icon.png" alt="">
            <el-input placeholder="请输入资源名或编号" suffix-icon="el-icon-search" v-model="searchText"></el-input>
            <div style="width: 100%;height: 767px;overflow-y: auto">
                <div style="height: 25px;color: yellow;margin-top: 10px">
                    <span>辖区</span><span class="checkbox_container"><el-checkbox :indeterminate="button.xiaquHalf" v-model="button.xiaquAll" @change="checkAll(4)">全选</el-checkbox></span>
                </div>
                <div style="display: flex;justify-content:space-between;width: 49%">
                    <div class="sj_item" @click="button.road = !button.road;handleMap('road');toggle_road_pad();" :class="button.road ? 'item_on' : 'item_off'">
                        <img v-show="button.road" class="_check" src="../../assets/images/home-sj-related/勾选.png" alt="">
                        <img class="_icon" src="../../assets/images/home-sj-related/高速辖区.png" alt="">
                        <span>辖区支队</span>
                    </div>
                    <div class="sj_item" @click="button.area = !button.area;handleMap('area');toggle_area()" :class="button.area ? 'item_on' : 'item_off'">
                        <img v-show="button.area" class="_check" src="../../assets/images/home-sj-related/勾选.png" alt="">
                        <img class="_icon" src="../../assets/images/home-sj-related/行政区划.png" alt="">
                        <span>行政区划</span>
                    </div>
                </div>
                <div style="height: 25px;color: yellow;margin-top: 10px">
                    <span>外场设备</span><span class="checkbox_container"><el-checkbox :indeterminate="button.deviceHalf" v-model="button.deviceAll" @change="checkAll(1)">全选</el-checkbox></span>
                </div>
                <div style="display: flex;justify-content:space-between">
                    <div class="sj_item" @click="button.led = !button.led;handleHalf(1);handleMap('led')" :class="button.led ? 'item_on' : 'item_off'">
                        <img v-show="button.led" class="_check" src="../../assets/images/home-sj-related/勾选.png" alt="">
                        <img class="_icon" src="../../assets/images/home-sj-related/LED显示屏.png" alt="">
                        <span>LED显示屏</span>
                    </div>
                    <div class="sj_item" @click="button.kakou = !button.kakou;handleHalf(1);handleMap('kakou')" :class="button.kakou ? 'item_on' : 'item_off'">
                        <img v-show="button.kakou" class="_check" src="../../assets/images/home-sj-related/勾选.png" alt="">
                        <img class="_icon" src="../../assets/images/home-sj-related/卡口.png" alt="">
                        <span>卡口</span>
                    </div>
                    <div class="sj_item" @click="button.speedTest = !button.speedTest;handleHalf(1)" :class="button.speedTest ? 'item_on' : 'item_off'">
                        <img v-show="button.speedTest" class="_check" src="../../assets/images/home-sj-related/勾选.png" alt="">
                        <img class="_icon" src="../../assets/images/home-sj-related/单点测试.png" alt="">
                        <span>单点测速</span>
                    </div>
                    <div class="sj_item" @click="button.jiankong = !button.jiankong;handleHalf(1)" :class="button.jiankong ? 'item_on' : 'item_off'">
                        <img v-show="button.jiankong" class="_check" src="../../assets/images/home-sj-related/勾选.png" alt="">
                        <img class="_icon" src="../../assets/images/home-sj-related/高点监控.png" alt="">
                        <span>高点监控</span>
                    </div>
                </div>
                <div style="height: 25px;color: yellow;margin-top: 10px">
                    <span>警力资源</span><span class="checkbox_container"><el-checkbox :indeterminate="button.policeHalf" v-model="button.policeAll" @change="checkAll(6)">全选</el-checkbox></span>
                </div>
                <div style="display: flex;justify-content:space-between">
                    <div class="sj_item" @click="button.policeMan = !button.policeMan;handleHalf(6);handleMap('policeMan')" :class="button.policeMan ? 'item_on' : 'item_off'">
                        <img v-show="button.policeMan" class="_check" src="../../assets/images/home-sj-related/勾选.png" alt="">
                        <img class="_icon" src="../../assets/images/home-sj-related/警员.png" alt="">
                        <span>警员</span>
                    </div>
                    <div class="sj_item" @click="button.policeCar = !button.policeCar;handleHalf(6);handleMap('policeCar')" :class="button.policeCar ? 'item_on' : 'item_off'">
                        <img v-show="button.policeCar" class="_check" src="../../assets/images/home-sj-related/勾选.png" alt="">
                        <img class="_icon" src="../../assets/images/home-sj-related/警车.png" alt="">
                        <span>警车</span>
                    </div>
                    <div class="sj_item" @click="button.motor = !button.motor;handleHalf(6);" :class="button.motor ? 'item_on' : 'item_off'">
                        <img v-show="button.motor" class="_check" src="../../assets/images/home-sj-related/勾选.png" alt="">
                        <img class="_icon" src="../../assets/images/home-sj-related/摩托车.png" alt="">
                        <span>摩托车</span>
                    </div>
                    <div class="sj_item" @click="button.station = !button.station;handleHalf(6)" :class="button.station ? 'item_on' : 'item_off'">
                        <img v-show="button.station" class="_check" src="../../assets/images/home-sj-related/勾选.png" alt="">
                        <img class="_icon" src="../../assets/images/home-sj-related/执法服务站.png" alt="">
                        <span>执法服务站</span>
                    </div>
                </div>
                <div style="height: 25px;color: yellow;margin-top: 10px">
                    <span>交通事件</span><span class="checkbox_container"><el-checkbox :indeterminate="button.enentHalf" v-model="button.eventAll" @change="checkAll(1)">全选</el-checkbox></span>
                </div>
                <div style="display: flex;justify-content:space-between">
                    <div class="sj_item" @click="button.trafficJam = !button.trafficJam;handleHalf(1);handleMap('trafficJam')" :class="button.trafficJam ? 'item_on' : 'item_off'">
                        <img v-show="button.trafficJam" class="_check" src="../../assets/images/home-sj-related/勾选.png" alt="">
                        <img class="_icon" src="../../assets/images/home-sj-related/交通拥堵.png" alt="">
                        <span>交通拥堵</span>
                    </div>
                    <div class="sj_item" @click="button.badweather = !button.badweather;handleHalf(1);handleMap('badweather')" :class="button.badweather ? 'item_on' : 'item_off'">
                        <img v-show="button.badweather" class="_check" src="../../assets/images/home-sj-related/勾选.png" alt="">
                        <img class="_icon" src="../../assets/images/home-sj-related/恶劣天气.png" alt="">
                        <span>恶劣天气</span>
                    </div>
                    <div class="sj_item" @click="button.accident = !button.accident;handleHalf(1)" :class="button.accident ? 'item_on' : 'item_off'">
                        <img v-show="button.accident" class="_check" src="../../assets/images/home-sj-related/勾选.png" alt="">
                        <img class="_icon" src="../../assets/images/home-sj-related/交通事故.png" alt="">
                        <span>交通事故</span>
                    </div>
                    <div class="sj_item" @click="button.breakdown = !button.breakdown;handleHalf(1)" :class="button.breakdown ? 'item_on' : 'item_off'">
                        <img v-show="button.breakdown" class="_check" src="../../assets/images/home-sj-related/勾选.png" alt="">
                        <img class="_icon" src="../../assets/images/home-sj-related/设备故障.png" alt="">
                        <span>设备故障</span>
                    </div>
                </div>
                <div style="display: flex;justify-content:space-between;margin-top: 12px;width: 74%">
                    <div class="sj_item" @click="button.control = !button.control;handleHalf(1)" :class="button.control ? 'item_on' : 'item_off'">
                        <img v-show="button.control" class="_check" src="../../assets/images/home-sj-related/勾选.png" alt="">
                        <img class="_icon" src="../../assets/images/home-sj-related/交通管制.png" alt="">
                        <span>交通管制</span>
                    </div>
                    <div class="sj_item" @click="button.construction = !button.construction;handleHalf(1)" :class="button.construction ? 'item_on' : 'item_off'">
                        <img v-show="button.construction" class="_check" src="../../assets/images/home-sj-related/勾选.png" alt="">
                        <img class="_icon" src="../../assets/images/home-sj-related/道路施工.png" alt="">
                        <span>道路施工</span>
                    </div>
                    <div class="sj_item" @click="button.other = !button.other;handleHalf(1)" :class="button.other ? 'item_on' : 'item_off'">
                        <img v-show="button.other" class="_check" src="../../assets/images/home-sj-related/勾选.png" alt="">
                        <img class="_icon" src="../../assets/images/home-sj-related/其他事件.png" alt="">
                        <span>其他事件</span>
                    </div>
                </div>

                <div style="height: 25px;color: yellow;margin-top: 10px">
                    <span>违法预警</span><span class="checkbox_container"><el-checkbox :indeterminate="button.illegalHalf" v-model="button.illegalAll" @change="checkAll(2)">全选</el-checkbox></span>
                </div>
                <div style="display: flex;justify-content:space-between">
                    <div class="sj_item" @click="button.taopai = !button.taopai;handleHalf(4);handleMap('taopai')" :class="button.taopai ? 'item_on' : 'item_off'">
                        <img v-show="button.taopai" class="_check" src="../../assets/images/home-sj-related/勾选.png" alt="">
                        <img class="_icon" src="../../assets/images/home-sj-related/套牌车辆.png" alt="">
                        <span>套牌车辆</span>
                    </div>
                    <div class="sj_item" @click="button.wupai = !button.wupai;handleHalf(2);handleMap('wupai')" :class="button.wupai ? 'item_on' : 'item_off'">
                        <img v-show="button.wupai" class="_check" src="../../assets/images/home-sj-related/勾选.png" alt="">
                        <img class="_icon" src="../../assets/images/home-sj-related/无牌车辆.png" alt="">
                        <span>无牌车辆</span>
                    </div>
                    <div class="sj_item" @click="button.chaofen = !button.chaofen;handleHalf(2)" :class="button.chaofen ? 'item_on' : 'item_off'">
                        <img v-show="button.chaofen" class="_check" src="../../assets/images/home-sj-related/勾选.png" alt="">
                        <img class="_icon" src="../../assets/images/home-sj-related/超分超期.png" alt="">
                        <span>超分超期</span>
                    </div>
                    <div class="sj_item" @click="button.weijian = !button.weijian;handleHalf(2)" :class="button.weijian ? 'item_on' : 'item_off'">
                        <img v-show="button.weijian" class="_check" src="../../assets/images/home-sj-related/勾选.png" alt="">
                        <img  class="_icon" src="../../assets/images/home-sj-related/逾期未检.png" alt="">
                        <span>逾期未检</span>
                    </div>
                </div>
                <div style="display: flex;justify-content:space-between;width: 49%">
                    <div class="sj_item" @click="button.baofei = !button.baofei;handleHalf(2)" :class="button.baofei ? 'item_on' : 'item_off'">
                        <img v-show="button.baofei" class="_check" src="../../assets/images/home-sj-related/勾选.png" alt="">
                        <img class="_icon" src="../../assets/images/home-sj-related/逾期报废.png" alt="">
                        <span>逾期报废</span>
                    </div>
                    <div class="sj_item" @click="button.daoqiang = !button.daoqiang;handleHalf(2)" :class="button.daoqiang ? 'item_on' : 'item_off'">
                        <img v-show="button.daoqiang" class="_check" src="../../assets/images/home-sj-related/勾选.png" alt="">
                        <img class="_icon" src="../../assets/images/home-sj-related/盗抢车辆.png" alt="">
                        <span>盗抢车辆</span>
                    </div>
                </div>

                <div style="height: 25px;color: yellow;margin-top: 10px">
                    <span>应急资源</span><span class="checkbox_container"><el-checkbox :indeterminate="button.resourceHalf" v-model="button.resourceAll" @change="checkAll(3)">全选</el-checkbox></span>
                </div>
                <div style="display: flex;justify-content:space-between">
                    <div class="sj_item" @click="button.hospital = !button.hospital;handleHalf(3);handleMap('hospital')" :class="button.hospital ? 'item_on' : 'item_off'">
                        <img v-show="button.hospital" class="_check" src="../../assets/images/home-sj-related/勾选.png" alt="">
                        <img class="_icon" src="../../assets/images/home-sj-related/医院.png" alt="">
                        <span>医院</span>
                    </div>
                    <div class="sj_item" @click="button.fireAgent = !button.fireAgent;handleHalf(3);handleMap('fireAgent')" :class="button.fireAgent ? 'item_on' : 'item_off'">
                        <img v-show="button.fireAgent" class="_check" src="../../assets/images/home-sj-related/勾选.png" alt="">
                        <img class="_icon" src="../../assets/images/home-sj-related/消防部门.png" alt="">
                        <span>消防部门</span>
                    </div>
                    <div class="sj_item" @click="button.gasStation = !button.gasStation;handleHalf(3)" :class="button.gasStation ? 'item_on' : 'item_off'">
                        <img v-show="button.gasStation" class="_check" src="../../assets/images/home-sj-related/勾选.png" alt="">
                        <img class="_icon" src="../../assets/images/home-sj-related/专家.png" alt="">
                        <span>专家</span>
                    </div>
                    <div class="sj_item" @click="button.repaire = !button.repaire;handleHalf(3)" :class="button.repaire ? 'item_on' : 'item_off'">
                        <img v-show="button.repaire" class="_check" src="../../assets/images/home-sj-related/勾选.png" alt="">
                        <img  class="_icon" src="../../assets/images/home-sj-related/应急资源库.png" alt="">
                        <span>应急资源库</span>
                    </div>
                </div>

                <div style="height: 25px;color: yellow;margin-top: 10px">
                    <span>场所</span><span class="checkbox_container"><el-checkbox :indeterminate="button.siteHalf" v-model="button.siteAll" @change="checkAll(2)">全选</el-checkbox></span>
                </div>
                <div style="display: flex;justify-content:space-between">
                    <div class="sj_item" @click="button.serviceZone = !button.serviceZone;handleHalf(2);handleMap('serviceZone')" :class="button.serviceZone ? 'item_on' : 'item_off'">
                        <img v-show="button.serviceZone" class="_check" src="../../assets/images/home-sj-related/勾选.png" alt="">
                        <img class="_icon" src="../../assets/images/home-sj-related/服务区.png" alt="">
                        <span>服务区</span>
                    </div>
                    <div class="sj_item" @click="button.park = !button.park;handleHalf(2);handleMap('park')" :class="button.park ? 'item_on' : 'item_off'">
                        <img v-show="button.park" class="_check" src="../../assets/images/home-sj-related/勾选.png" alt="">
                        <img class="_icon" src="../../assets/images/home-sj-related/停车场.png" alt="">
                        <span>停车场</span>
                    </div>
                    <div class="sj_item" @click="button.scenic = !button.scenic;handleHalf(2)" :class="button.scenic ? 'item_on' : 'item_off'">
                        <img v-show="button.scenic" class="_check" src="../../assets/images/home-sj-related/勾选.png" alt="">
                        <img class="_icon" src="../../assets/images/home-sj-related/加油站.png" alt="">
                        <span>加油站</span>
                    </div>
                    <div class="sj_item" @click="button.charge = !button.charge;handleHalf(2)" :class="button.charge ? 'item_on' : 'item_off'">
                        <img v-show="button.charge" class="_check" src="../../assets/images/home-sj-related/勾选.png" alt="">
                        <img  class="_icon" src="../../assets/images/home-sj-related/收费站.png" alt="">
                        <span>收费站</span>
                    </div>
                </div>

                <div style="height: 25px;color: yellow;margin-top: 10px">
                    <span>节点信息</span><span class="checkbox_container"><el-checkbox :indeterminate="button.jiedianHalf" v-model="button.jiedianAll" @change="checkAll(4)">全选</el-checkbox></span>
                </div>
                <div style="display: flex;justify-content:space-between;width: 49%">
                    <div class="sj_item" @click="button.suniu = !button.suniu;handleHalf(4);handleMap('suniu')" :class="button.suniu ? 'item_on' : 'item_off'">
                        <img v-show="button.suniu" class="_check" src="../../assets/images/home-sj-related/勾选.png" alt="">
                        <img class="_icon" src="../../assets/images/home-sj-related/枢纽.png" alt="">
                        <span>枢纽</span>
                    </div>
                    <div class="sj_item" @click="button.gaosu = !button.gaosu;handleHalf(2);handleMap('gaosu')" :class="button.gaosu ? 'item_on' : 'item_off'">
                        <img v-show="button.gaosu" class="_check" src="../../assets/images/home-sj-related/勾选.png" alt="">
                        <img class="_icon" src="../../assets/images/home-sj-related/高速互通.png" alt="">
                        <span>高速互通</span>
                    </div>
                </div>            
            </div>
        </div>
    </left-pad>
</template>

<script>
import LeftPad from '../global/left-pad/LeftPad.vue';
import { mapGetters, mapState } from 'vuex';
export default {
  components: {
    LeftPad
  },
  computed: {
    ...mapGetters(['zyjkPageState'])
  },
  data() {
    return {
      searchText: '',
      button: {
        road: false,
        area: false,
        xiaquHalf: false,
        xiaquAll: false,
        suniu: false,
        gaosu: false,
        jiedianAll: false,
        jiedianHalf: false,
        taopai: false,
        wupai: false,
        chaofen: false,
        weijian: false,
        baofei: false,
        daoqiang: false,
        illegalAll: false,
        illegalHalf: false,
        led: false,
        kakou: false,
        speedTest: false,
        jiankong: false,
        deviceAll: false,
        deviceHalf: false,
        trafficJam: true, //交通拥堵
        badweather: false, //恶劣天气
        accident: false, //交通事故
        breakdown: false, //设备故障
        illegal: false, //违法
        control: false, //管制
        construction: false, //施工
        other: false, //其他
        eventAll: false,
        enentHalf: true,
        serviceZone: false, //服务区
        park: false, //停车场
        scenic: false, //景区
        charge: false, //收费站
        siteAll: false,
        siteHalf: false,
        hospital: false, //医院
        fireAgent: false, //消防部门
        gasStation: false, //加油站
        repaire: false, //修理厂
        resourceAll: false,
        resourceHalf: false,
        guardrail: false, //护栏
        denoter: false, //标志牌
        speedDown: false, //减速带
        trafficAll: false,
        trafficHalf: false,
        Downhill: false, //长下坡
        tunnel: false, //隧道
        bridge: false, //桥梁
        smoke: false, //团雾路段
        dangerAll: false,
        dangerHalf: false,
        policeMan: false, //警员
        policeCar: false, //警车
        motor: false, //摩托车
        station: false, //执法服务站
        policeAll: false,
        policeHalf: false
      }
    };
  },
  methods: {
    checkAll(row) {
      switch (row) {
        case 1:
          const flag1 = this.button.eventAll;
          this.button.enentHalf = false;
          this.button.trafficJam = flag1; //交通拥堵
          this.button.badweather = flag1; //恶劣天气
          this.button.accident = flag1; //交通事故
          this.button.breakdown = flag1; //设备故障
          this.button.illegal = flag1; //违法
          this.button.control = flag1; //管制
          this.button.construction = flag1; //施工
          this.button.other = flag1; //其他
          break;
        case 2:
          const flag2 = this.button.siteAll;
          this.button.siteHalf = false;
          this.button.serviceZone = flag2;
          this.button.park = flag2;
          this.button.scenic = flag2;
          this.button.charge = flag2;
          break;
        case 3:
          const flag3 = this.button.resourceAll;
          this.button.resourceHalf = false;
          this.button.hospital = flag3;
          this.button.fireAgent = flag3;
          this.button.gasStation = flag3;
          this.button.repaire = flag3;
          break;
        case 4:
          const flag4 = this.button.trafficAll;
          this.button.trafficHalf = false;
          this.button.guardrail = flag4;
          this.button.denoter = flag4;
          this.button.speedDown = flag4;
          break;
        case 5:
          const flag5 = this.button.dangerAll;
          this.button.dangerHalf = false;
          this.button.Downhill = flag5;
          this.button.tunnel = flag5;
          this.button.bridge = flag5;
          this.button.smoke = flag5;
          break;
        case 6:
          const flag6 = this.button.policeAll;
          this.button.policeHalf = false;
          this.button.policeMan = flag6;
          this.button.policeCar = flag6;
          break;
      }
    },
    handleHalf(row) {
      switch (row) {
        case 1:
          const allChecked1 =
            this.button.trafficJam &&
            this.button.badweather &&
            this.button.accident &&
            this.button.breakdown &&
            this.button.illegal &&
            this.button.control &&
            this.button.construction &&
            this.button.other;
          const allNotChecked1 =
            !this.button.trafficJam &&
            !this.button.badweather &&
            !this.button.accident &&
            !this.button.breakdown &&
            !this.button.illegal &&
            !this.button.control &&
            !this.button.construction &&
            !this.button.other;
          this.button.enentHalf = !allChecked1 && !allNotChecked1;
          if (this.button.eventAll && allNotChecked1) this.button.eventAll = false;
          if (!this.button.eventAll && allChecked1) this.button.eventAll = true;
          break;
        case 2:
          const allChecked2 = this.button.serviceZone && this.button.park && this.button.scenic && this.button.charge;
          const allNotChecked2 =
            !this.button.serviceZone && !this.button.park && !this.button.scenic && !this.button.charge;
          this.button.siteHalf = !allChecked2 && !allNotChecked2;
          if (this.button.siteAll && allNotChecked2) this.button.siteAll = false;
          if (!this.button.siteAll && allChecked2) this.button.siteAll = true;
          break;
        case 3:
          const allChecked3 =
            this.button.hospital && this.button.fireAgent && this.button.gasStation && this.button.repaire;
          const allNotChecked3 =
            !this.button.hospital && !this.button.fireAgent && !this.button.gasStation && !this.button.repaire;
          this.button.resourceHalf = !allChecked3 && !allNotChecked3;
          if (this.button.resourceAll && allNotChecked3) this.button.resourceAll = false;
          if (!this.button.resourceAll && allChecked3) this.button.resourceAll = true;
          break;
        case 4:
          const allChecked4 = this.button.guardrail && this.button.denoter && this.button.speedDown;
          const allNotChecked4 = !this.button.guardrail && !this.button.denoter && !this.button.speedDown;
          this.button.trafficHalf = !allChecked4 && !allNotChecked4;
          if (this.button.trafficAll && allNotChecked4) this.button.trafficAll = false;
          if (!this.button.trafficAll && allChecked4) this.button.trafficAll = true;
          break;
        case 5:
          const allChecked5 = this.button.Downhill && this.button.tunnel && this.button.bridge && this.button.smoke;
          const allNotChecked5 =
            !this.button.Downhill && !this.button.tunnel && !this.button.bridge && !this.button.smoke;
          this.button.dangerHalf = !allChecked5 && !allNotChecked5;
          if (this.button.dangerAll && allNotChecked5) this.button.dangerAll = false;
          if (!this.button.dangerAll && allChecked5) this.button.dangerAll = true;
          break;
        case 6:
          const allChecked6 = this.button.policeMan && this.button.policeCar;
          const allNotChecked6 = !this.button.policeMan && !this.button.policeCar;
          this.button.policeHalf = !allChecked6 && !allNotChecked6;
          if (this.button.policeAll && allNotChecked6) this.button.policeAll = false;
          if (!this.button.policeAll && allChecked6) this.button.policeAll = true;
          break;
      }
    },
    handleMap(key) {
      const flag = this.button[key];
      this.$store.commit('REFLESH_EVENT_POINT', { key, flag });
    },
    toggle_road_pad() {
      this.$store.commit('TOGGLE_SHOW_ROAD_PAD');
    },
    toggle_area() {
      console.log(this.zyjkPageState);
      this.$store.commit('TOGGLEAREA_ZYJK');
    }
  }
};
</script>

<style lang="scss">
.pad_sj {
  margin: 20px 30px;
  .checkbox_container {
    float: right;
  }
}
.sj_item {
  width: 65px;
  height: 65px;
  border: 1px solid #33468d;
  border-radius: 4px;
  text-align: center;
  position: relative;
  cursor: pointer;
  &:hover {
    border-color: #49d9fe;
  }
  img._icon {
    margin-top: 12px;
  }
  img._check {
    position: absolute;
    top: 5px;
    right: 5px;
  }
  span {
    display: inline-block;
    width: 100%;
    font-size: 12px;
    color: #f1f2fd;
    font-weight: lighter;
    line-height: 12px;
    height: 12px;
    vertical-align: top;
    margin-top: 4px;
  }
}
.item_on {
  border-color: #49d9fe;
}
.item_off {
  border-color: #33468d;
}
.el-input > input {
  padding-left: 41px;
}
.input_icon {
  position: absolute;
  z-index: 1;
  top: 27px;
  left: 39px;
}
</style>