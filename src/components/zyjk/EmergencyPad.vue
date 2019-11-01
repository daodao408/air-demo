<template>
    <div class="emergency-pad">
        <right-pad>
            <div class="right-pad-detail" slot="right-pad-detail">
                <div class="line1">
                    <div class="icon-bg" @click="button._11 = !button._11" :class="{'icon-on': button._11}">
                        <img src="../../assets/images/home-sj-related/交通管制1.png" alt="">
                    </div>
                    <p>交通管制</p>
                    <div class="icon-bg" @click="button._12 = !button._12;handleClick()" :class="{'icon-on': button._12}">
                        <img style="margin-top: 26px" src="../../assets/images/home-sj-related/警情.png" alt="">
                    </div>
                    <p>警情信息</p>
                    <div class="icon-bg" @click="button._13 = !button._13" :class="{'icon-on': button._13}">
                        <img style="margin-top: 31px" src="../../assets/images/home-sj-related/违法停车.png" alt="">
                    </div>
                    <p>违法停车</p>
                    <div class="icon-bg" @click="button._14 = !button._14" :class="{'icon-on': button._14}">
                        <img src="../../assets/images/home-sj-related/设备状态.png" alt="">
                    </div>
                    <p>设备状态</p>
                    <div class="icon-bg" @click="toggleKnowledge()" :class="{'icon-on': xqdlPageState.knowledge_show}">
                        <img src="../../assets/images/home-sj-related/知识库-icon.png" alt="">
                    </div>
                    <p>知识库</p>
                </div>
                <div class="line2">
                    <div class="icon-bg" @click="toggleJam()" :class="{'icon-on':  xqdlPageState.jam_point_show}">
                        <img src="../../assets/images/home-sj-related/交通拥堵1.png" alt="">
                    </div>
                    <p>交通拥堵</p>
                    <div class="icon-bg" @click="button._22 = !button._22" :class="{'icon-on': button._22}">
                        <img src="../../assets/images/home-sj-related/恶劣天气1.png" alt="">
                    </div>
                    <p>恶劣天气</p>
                    <div class="icon-bg" @click="button._23 = !button._23" :class="{'icon-on': button._23}">
                        <img src="../../assets/images/home-sj-related/交通事故1.png" alt="">
                    </div>
                    <p>交通事故</p>
                    <div class="icon-bg" @click="button._24 = !button._24" :class="{'icon-on': button._24}">
                        <img src="../../assets/images/home-sj-related/设备故障1.png" alt="">
                    </div>
                    <p>设备故障</p>
                    <div class="icon-bg" @click="togglePoliceman()" :class="{'icon-on': xqdlPageState.police_point_show}">
                        <img style="margin-top: 26px" src="../../assets/images/home-sj-related/警情.png" alt="">
                    </div>
                    <p>警员上图</p>
                </div>
            </div>
        </right-pad>
        <div v-if="xqdlPageState.jam_point_show" class="info-pads">
            <InfoPad class="info-pad_1">
                <div slot="info-pad-detail">
                    <p>1.沪渝高速G50<span style="color: #f77072;float: right">交通拥堵</span></p>
                    <p class="mt-5">2018-06-19 11:42:32,沪渝高速，G50沪渝高速到沪渝高速G70的光谷街道发生严重拥堵；拥堵长达2345米，预计时长90分钟，平均时速为22km/h</p>
                    <p class="mt-5">
                        <span style="color: #05e6ec">重大</span>
                        <el-button size="mini" style="background-color: #f2c12d;border-color: #f2c12d;margin-left: 5px" type="info" round>待审核</el-button>
                        <span style="float: right;color: #05e6ec;line-height: 28px">
                            <span style="cursor: pointer" @click="markMap('jam')">上图</span>
                            <span style="cursor: pointer;margin-left: 10px">处置</span>
                        </span>
                    </p>
                </div>
            </InfoPad>
            <InfoPad class="info-pad_2">
                <div slot="info-pad-detail">
                    <p>1.沪渝高速G50<span style="color: #f77072;float: right">交通拥堵</span></p>
                    <p class="mt-5">2018-06-19 11:42:32,沪渝高速，G50沪渝高速到沪渝高速G70的光谷街道发生严重拥堵；拥堵长达2345米，预计时长90分钟，平均时速为22km/h</p>
                    <p class="mt-5">
                        <span style="color: #05e6ec">重大</span>
                        <el-button size="mini" style="background-color: #f2c12d;border-color: #f2c12d;margin-left: 5px" type="info" round>待审核</el-button>
                        <span style="float: right;color: #05e6ec;line-height: 28px">
                            <span style="cursor: pointer" @click="markMap('jam')">上图</span>
                            <span style="cursor: pointer;margin-left: 10px">处置</span>
                        </span>
                    </p>
                </div>
            </InfoPad>
            <InfoPad class="info-pad_3">
                <div slot="info-pad-detail">
                    <p>1.沪渝高速G50<span style="color: #f77072;float: right">交通拥堵</span></p>
                    <p class="mt-5">2018-06-19 11:42:32,沪渝高速，G50沪渝高速到沪渝高速G70的光谷街道发生严重拥堵；拥堵长达2345米，预计时长90分钟，平均时速为22km/h</p>
                    <p class="mt-5">
                        <span style="color: #05e6ec">重大</span>
                        <el-button size="mini" style="background-color: #f2c12d;border-color: #f2c12d;margin-left: 5px" type="info" round>待审核</el-button>
                        <span style="float: right;color: #05e6ec;line-height: 28px">
                            <span style="cursor: pointer" @click="markMap('jam')">上图</span>
                            <span style="cursor: pointer;margin-left: 10px">处置</span>
                        </span>
                    </p>
                </div>
            </InfoPad>
        </div>
        <div v-if="xqdlPageState.police_point_show" class="info-pads">
            <InfoPad class="info-pad_1">
                <div slot="info-pad-detail">
                    <p>张某某<span style="color: #f77072;float: right">警员信息</span></p>
                    <p class="mt-5">设备编号：71725897</p>
                    <p>所属单位：武汉市公安局交警支队</p>
                    <p>电话号码：13325489630</p>
                    <p>最后时间：2019-07-01 14:25:55</p>
                    <p class="mt-5">
                        <span style="color: #05e6ec">重大</span>
                        <el-button size="mini" style="background-color: #f2c12d;border-color: #f2c12d;margin-left: 5px" type="info" round>待审核</el-button>
                        <span style="float: right;color: #05e6ec;line-height: 28px">
                            <span style="cursor: pointer;margin-left: 10px" @click="markMap('policeman')">上图</span>
                        </span>
                    </p>
                </div>
            </InfoPad>
            <InfoPad class="info-pad_2">
                <div slot="info-pad-detail">
                    <p>李某某<span style="color: #f77072;float: right">警员信息</span></p>
                    <p class="mt-5">设备编号：71702780031</p>
                    <p>所属单位：武汉市公安局交警支队</p>
                    <p>电话号码：188xxxxxxxx</p>
                    <p>最后时间：2019-07-01 19:09:55</p>
                    <p class="mt-5">
                        <span style="color: #05e6ec">重大</span>
                        <el-button size="mini" style="background-color: #f2c12d;border-color: #f2c12d;margin-left: 5px" type="info" round>待审核</el-button>
                        <span style="float: right;color: #05e6ec;line-height: 28px">
                            <span style="cursor: pointer;margin-left: 10px" @click="markMap('policeman')">上图</span>
                        </span>
                    </p>
                </div>
            </InfoPad>
            <InfoPad class="info-pad_3">
                <div slot="info-pad-detail">
                    <p>刘某某<span style="color: #f77072;float: right">警员信息</span></p>
                    <p class="mt-5">设备编号：71726203</p>
                    <p>所属单位：武汉市公安局交警支队</p>
                    <p>电话号码：159xxxxxxxx</p>
                    <p>最后时间：2019-07-01 18:25:55</p>
                    <p class="mt-5">
                        <span style="color: #05e6ec">重大</span>
                        <el-button size="mini" style="background-color: #f2c12d;border-color: #f2c12d;margin-left: 5px" type="info" round>待审核</el-button>
                        <span style="float: right;color: #05e6ec;line-height: 28px">
                            <span style="cursor: pointer;margin-left: 10px" @click="markMap('policeman')">上图</span>
                        </span>
                    </p>
                </div>
            </InfoPad>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import RightPad from "../global/right-pad/RightPad.vue";
import InfoPad from '@/components/zyjk/InfoPad.vue';
import iconMap from "@/mapicons/icon.js";
export default {
    name: "",
    components: {
        RightPad,
        InfoPad,
    },
    computed: {
        ...mapGetters(['xqdlPageState'])
    },
    data() {
        return {
            button: {
                _11: false,
                _12: false,
                _13: false,
                _14: false,
                _15: false,
                _21: false,
                _22: false,
                _23: false,
                _24: false,
                _25: false,
            }
        }
    },
    methods: {
        handleClick() {
            this.$store.dispatch("toggleBottomMsgPad");
            if(this.xqdlPageState.knowledge_show) {
                this.$store.commit("TOGGLE_KNOWLEDGE_PAD");
            }
        },
        toggleKnowledge() {
            this.$store.commit("TOGGLE_KNOWLEDGE_PAD");
            if(this.button._12) {
                this.clearCheckAll();
                this.$store.dispatch("toggleBottomMsgPad");
            }
        },
        toggleJam() {
            this.$store.commit("SET_JAM_POINT_SHOW", !this.xqdlPageState.jam_point_show);
            if(!this.xqdlPageState.jam_point_show) {
                this.$store.commit("CLEAR_CUS_POINT");
            } else {
                this.$store.commit("SET_POLICE_POINT_SHOW", false);
                if (this.button._12) {
                    this.clearCheckAll();
                    this.$store.dispatch("toggleBottomMsgPad");
                }
                if (this.xqdlPageState.knowledge_show) {
                    this.$store.commit("TOGGLE_KNOWLEDGE_PAD");
                }
            }
        },
        togglePoliceman() {
            this.$store.commit("SET_POLICE_POINT_SHOW", !this.xqdlPageState.police_point_show);
            if(!this.xqdlPageState.police_point_show) {
                this.$store.commit("CLEAR_CUS_POINT");
            } else {
                this.$store.commit("SET_JAM_POINT_SHOW", false);
                if (this.button._12) {
                    this.clearCheckAll();
                    this.$store.dispatch("toggleBottomMsgPad");
                }
                if (this.xqdlPageState.knowledge_show) {
                    this.$store.commit("TOGGLE_KNOWLEDGE_PAD");
                }
            }
        },
        clearCheckAll() {
            this.button = {
                _11: false,
                _12: false,
                _13: false,
                _14: false,
                _15: false,
                _21: false,
                _22: false,
                _23: false,
                _24: false,
                _25: false,
            }
        },
        markMap(type) {
            this.$store.commit("SET_CAN_MARK", true);
            if(type === 'jam') {
                this.$store.commit("SET_MARK_ICON", iconMap._2);
            }
            if(type === 'policeman') {
                this.$store.commit("SET_MARK_ICON", iconMap._9);
            }
        }
    }
}
</script>

<style scoped lang="scss">
.emergency-pad {
    .info-pads {
        position: absolute;
        right: 630px;
        top: 15px;
        p {
            color: #ffffff;
            &.mt-5 {
                margin-top: 5px;
            }
        }
        .info-pad_1 {

        }
        .info-pad_2 {
            margin-top: 160px;
        }
        .info-pad_3 {
            margin-top: 320px;
        }
    }
    .right-pad-detail {
        display: flex;
        justify-content:space-between;
        text-align: center;
        width: 80%;
        .line1 {
            padding: 65px 0 0 0;
            width: 50%;
            height: 100%;
        }
        .line2 {
            padding: 20px 0 0 0;
            width: 50%;
            height: 100%;
        }
        .icon-bg {
            width: 103px;
            height: 103px;
            display: inline-block;
            cursor: pointer;
            &:hover {
                background: url('../../assets/images/hv.png') no-repeat center;
            }
            background: url('../../assets/images/mr.png') no-repeat center;
            img {
                margin-top: 34px;
            }
        }
        .icon-on {
            background: url('../../assets/images/hv.png') no-repeat center;
        }
        p {
            color: #ffffff;
            height: 45px;
            line-height: 35px
        }
    }
}
</style>