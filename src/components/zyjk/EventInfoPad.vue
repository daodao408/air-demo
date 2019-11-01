<template>
  <left-pad>
    <div slot="left-pad-detail" class="pad_sjinfo">
      <div class="info-head">
        <h5 class="info-title">事件信息</h5>
        <div class="info-set">
          <img class="info-setimg" src="../../assets/images/home-sj-info/bjBtn.png">
          <span>编辑</span>
        </div>
      </div>
      <ul class="info-content">
        <li>
          <span class="info-content-left">事件信息：</span>
          <span>大客车追尾起火</span>
        </li>
        <li>
          <span class="info-content-left">事件级别：</span>
          <span class="sjjb">严重</span>
        </li>
        <li>
          <span class="info-content-left">发生时间：</span>
          <span>2019年3月20日 19：00：00</span>
        </li>
        <li>
          <span class="info-content-left">事件地点：</span>
          <span>华中农业大学南门十字路口</span>
        </li>
        <li>
          <span class="info-content-left">事件位置：</span>
          <span class="sjdw" @click="sjdwClick">定位</span>
        </li>
      </ul>
      <div class="info-head">
        <h5 class="info-title">附近资源</h5>
        <div class="info-set">
          <img class="info-setimg" src="../../assets/images/home-sj-info/shaixuan.png">
          <span>筛选</span>
        </div>
      </div>
      <div class="fwSearch">
        <span class="fwSearchTitle">范围（{{zyjkPageState.sjdd.radius/1000}}公里）</span>
        <el-slider
          :min="10000"
          :max="50000"
          :step="10000"
          :show-tooltip="false"
          v-model="zyjkPageState.sjdd.radius"
          class="fwSlider"
        ></el-slider>
      </div>

      <el-tabs v-model="curTab" @tab-click="handleClick">
        <el-tab-pane label="视频" name="first">
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="视频(2)" name="1">
              <ul class="el-collapse-sp">
                <li class="sp-item" v-for="(item,index) in spInfo" :key="index">
                  <dl>
                    <dt>
                      <img src="../../assets/images/home-sj-info/hulan.png" alt>
                      <span>{{item.title}}</span>
                    </dt>
                    <dd>
                      <img src="../../assets/images/home-sj-info/sjinfo_jingyuan.png" alt>
                      <span>{{item.dw}}</span>
                    </dd>
                    <dd>
                      <img src="../../assets/images/home-sj-info/sjinfo_dingwei.png" alt>
                      <span>{{item.dz}}</span>
                    </dd>
                  </dl>
                  <div class="sp-item-zt">正常</div>
                </li>
              </ul>
            </el-collapse-item>
            <el-collapse-item title="卡口(2)" name="2">
              <ul class="el-collapse-sp">
                <li class="sp-item" v-for="(item,index) in spInfo" :key="index">
                  <dl>
                    <dt>
                      <img src="../../assets/images/home-sj-info/hulan.png" alt>
                      <span>{{item.title}}</span>
                    </dt>
                    <dd>
                      <img src="../../assets/images/home-sj-info/sjinfo_jingyuan.png" alt>
                      <span>{{item.dw}}</span>
                    </dd>
                    <dd>
                      <img src="../../assets/images/home-sj-info/sjinfo_dingwei.png" alt>
                      <span>{{item.dz}}</span>
                    </dd>
                  </dl>
                  <div class="sp-item-zt">正常</div>
                </li>
              </ul>
            </el-collapse-item>
          </el-collapse>
        </el-tab-pane>
        <el-tab-pane label="诱导" name="second">
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="诱导(3)" name="1">
              <ul class="el-collapse-sp">
                <li class="sp-item" v-for="(item, index) in ydInfo" :key="index">
                  <dl>
                    <dt>
                      <img src="../../assets/images/home-sj-info/ydp.png" alt>
                      <span>{{item.title}}</span>
                    </dt>
                    <dd>
                      <img src="../../assets/images/home-sj-info/sjinfo_jingyuan.png" alt>
                      <span>{{item.dw}}</span>
                    </dd>
                    <dd>
                      <img src="../../assets/images/home-sj-info/sjinfo_dingwei.png" alt>
                      <span>{{item.dz}}</span>
                    </dd>
                  </dl>
                  <div class="sp-item-zt">正常</div>
                </li>
              </ul>
            </el-collapse-item>
          </el-collapse>
        </el-tab-pane>
        <el-tab-pane label="警力" name="third">
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="警力(6)" name="1">
              <ul class="el-collapse-sp">
                <li class="sp-item" v-for="(item, index) in jlInfo" :key="index">
                  <dl>
                    <dt>
                      <img src="../../assets/images/home-sj-info/jingyuan.png" alt>
                      <span>{{item.title}}</span>
                    </dt>
                    <dd>
                      <img src="../../assets/images/home-sj-info/sjinfo_jingyuan.png" alt>
                      <span>{{item.dw}}</span>
                    </dd>
                    <dd>
                      <img src="../../assets/images/home-sj-info/sjinfo_dingwei.png" alt>
                      <span>{{item.dz}}</span>
                    </dd>
                  </dl>
                  <div class="sp-item-zt">报送</div>
                </li>
              </ul>
            </el-collapse-item>
          </el-collapse>
        </el-tab-pane>
        <el-tab-pane label="资源" name="fourth">
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="医院(3)" name="1">
              <ul class="el-collapse-sp">
                <li class="sp-item" v-for="(item,index) in yyInfo" :key="index">
                  <dl>
                    <dt>
                      <img src="../../assets/images/home-sj-related/医院.png" alt>
                      <span>{{item.title}}</span>
                    </dt>
                    <dd>
                      <img src="../../assets/images/home-sj-info/电话.png" alt>
                      <span>{{item.dw}}</span>
                    </dd>
                    <dd>
                      <img src="../../assets/images/home-sj-info/sjinfo_dingwei.png" alt>
                      <span>{{item.dz}}</span>
                    </dd>
                  </dl>
                  <div class="sp-item-zt">报送</div>
                </li>
              </ul>
            </el-collapse-item>
          </el-collapse>
        </el-tab-pane>
        <el-tab-pane label="事件" name="five">
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="事件(3)" name="1">
              <ul class="el-collapse-sp">
                <li class="sp-item" v-for="(item,index) in sjInfo" :key="index">
                  <dl>
                    <dt>
                      <img src="../../assets/images/home-sj-info/事件.png" alt>
                      <span>{{item.title}}</span>
                    </dt>
                    <dd>
                      <img src="../../assets/images/home-sj-info/时间.png" alt>
                      <span>{{item.dw}}</span>
                    </dd>
                    <dd>
                      <img src="../../assets/images/home-sj-info/sjinfo_dingwei.png" alt>
                      <span>{{item.dz}}</span>
                    </dd>
                  </dl>
                  <div class="sp-item-zt">报送</div>
                </li>
              </ul>
            </el-collapse-item>
          </el-collapse>
        </el-tab-pane>
      </el-tabs>
      <!-- 视频通话 -->
      <div class="spthBtn" v-show="spth" @click="startPlan"></div>
      <!-- 开启预案 -->
      <div class="openYaBtn" @click="openya">开启预案</div>
    </div>
  </left-pad>
</template>

<script>
import LeftPad from '@/components/global/left-pad/LeftPad.vue';
import { mapGetters, mapState } from 'vuex';

export default {
  name: 'EventInfoPad',
  components: {
    LeftPad
  },
  computed: {
    ...mapGetters(['zyjkPageState'])
  },
  data() {
    return {
      curTab: 'first',
      activeNames: ['1', '2'],

      //视频列表数据
      spInfo: [
        {
          title: '湖北宜昌高速K2236+100M视频...',
          dw: '高支队曲昆大队...',
          dz: '宜昌高速K2236+100M视频'
        },
        {
          title: '湖北宜昌高速K2236+100M视频...',
          dw: '高支队曲昆大队...',
          dz: '宜昌高速K2236+100M视频'
        }
      ],
      ydInfo: [
        {
          title: 'YDP-01',
          dw: '高支队曲昆大队...',
          dz: '宜昌高速某某大道交汇处'
        },
        {
          title: 'YDP-02',
          dw: '高支队曲昆大队...',
          dz: '宜昌高速某某大道交汇处'
        },
        {
          title: 'YDP-03',
          dw: '高支队曲昆大队...',
          dz: '宜昌高速某某大道交汇处'
        }
      ],
      jlInfo: [
        {
          title: '张某某（KJIJ132452646345676856876）',
          dw: '高支队曲昆大队...',
          dz: '宜昌高速某某大道交汇处'
        },
        {
          title: '张某某（KJIJ132452646345676856876）',
          dw: '高支队曲昆大队...',
          dz: '宜昌高速某某大道交汇处'
        },
        {
          title: '张某某（KJIJ132452646345676856876）',
          dw: '高支队曲昆大队...',
          dz: '宜昌高速某某大道交汇处'
        },
        {
          title: '张某某（KJIJ132452646345676856876）',
          dw: '高支队曲昆大队...',
          dz: '宜昌高速某某大道交汇处'
        },
        {
          title: '张某某（KJIJ132452646345676856876）',
          dw: '高支队曲昆大队...',
          dz: '宜昌高速某某大道交汇处'
        },
        {
          title: '张某某（KJIJ132452646345676856876）',
          dw: '高支队曲昆大队...',
          dz: '宜昌高速某某大道交汇处'
        }
      ],
      yyInfo: [
        {
          title: '某某医院',
          dw: '13356895647',
          dz: '宜昌高速某某大道交汇处'
        },
        {
          title: '某某医院',
          dw: '13356895647',
          dz: '宜昌高速某某大道交汇处'
        },
        {
          title: '某某医院',
          dw: '13356895647',
          dz: '宜昌高速某某大道交汇处'
        }
      ],
      sjInfo: [
        {
          title: '宜昌高速某某大道交汇处发生一起交通事故',
          dw: '2018.11.10 11:00:00',
          dz: '宜昌高速某某大道交汇处'
        },
        {
          title: '宜昌高速某某大道交汇处发生一起交通事故',
          dw: '2018.11.10 11:00:00',
          dz: '宜昌高速某某大道交汇处'
        },
        {
          title: '宜昌高速某某大道交汇处发生一起交通事故',
          dw: '2018.11.10 11:00:00',
          dz: '宜昌高速某某大道交汇处'
        }
      ],
      spth: false
    };
  },
  methods: {
    handleClick(tab, event) {
      if (tab.name == 'third') {
        this.spth = true;
      } else {
        this.spth = false;
      }
    },
    handleChange(tab, event) {},
    startPlan() {
      this.$emit('startPlan', {
        showPageStr: 'xzzz'
      });
    },
    //点击事件定位
    sjdwClick() {
      this.$store.dispatch('toggleSjdd');
    },
    //开启预案
    openya() {
      this.$store.dispatch('toggleya');
    }
  }
};
</script>

<style lang="scss">
.pad_sjinfo {
  font-size: 13px;
  color: #b6cbde;
  position: relative;
  .info-head {
    position: relative;
    width: 100%;
    height: 55px;
    border-bottom: 1px solid #1f5093;
    line-height: 55px;
    .info-title {
      color: #fff601;
      margin-left: 32px;
    }
    .info-set {
      position: absolute;
      right: 32px;
      top: 2px;
      color: #24aef6;
    }
    .info-setimg {
      margin-right: 5px;
      vertical-align: middle;
      width: 15px;
      height: 15px;
    }
  }
  .info-content {
    width: 100%;
    .sjjb {
      display: inline-block;
      border-radius: 23px 23px;
      width: 73px;
      height: 23px;
      background: #f85131;
      text-align: center;
      line-height: 23px;
    }
    .sjdw {
      display: inline-block;
      border-radius: 23px 23px;
      width: 75px;
      height: 30px;
      border: 1px solid #4a96d4;
      text-align: center;
      line-height: 30px;
      color: #4a96d4;
      cursor: pointer;
    }
    .sjdw:hover {
      background: #4a78d0;
      color: #fff;
    }
  }
  .info-content li {
    width: 100%;
    height: 45px;
    line-height: 45px;

    .info-content-left {
      margin-left: 32px;
    }
  }
  .fwSearch {
    width: 100%;
    height: 40px;
    line-height: 40px;
    .fwSearchTitle {
      margin: 0 10px 0 32px;
    }
    .fwSlider {
      display: inline-block;
      width: 210px;
      vertical-align: middle;
      &.el-slider {
        .el-slider__runway {
          .el-slider__button-wrapper {
            z-index: 11;
            .el-slider__button {
              width: 12px;
              height: 12px;
            }
          }
        }
      }
    }
  }
  #tab-first,
  #tab-second {
    font-size: 15px;
  }
  .el-tabs__header {
    margin: 0;
  }
  .el-tabs__content {
    background: transparent;
    border: 0;
    height: 390px;
    overflow: auto;
  }
  .el-collapse-item__content {
    padding: 0;
  }
  .el-tabs__active-bar {
    display: none;
  }
  .el-tabs__item.is-active {
    color: #25a0fe;
    border-bottom: #25a0ff 2px solid;
  }
  .el-tabs__item:hover {
    color: #25a0fe;
    border-bottom: #25a0ff 2px solid;
  }

  .el-tabs__item {
    padding: 0;
    color: #b3e5fe;
    line-height: 30px;
    width: 70px;
    height: 30px;
    text-align: center;
  }

  .el-tabs__nav-wrap::after {
    background-color: #24aef4;
  }
  .el-tabs__nav-wrap:after {
    display: none;
  }
  //资源tab切换
  .el-collapse {
    border: 0;
  }
  .el-collapse-item__header {
    height: 32px;
    line-height: 32px;
    position: relative;
    background: #304d85;
    text-indent: 33px;
    color: #93c8f4;
  }
  .el-collapse-item__arrow {
    position: absolute;
    top: 10px;
    left: -18px;
    margin: 0;
  }
  .el-collapse-item__arrow.is-active {
    top: -5px;
    left: 0;
  }
  .el-collapse-item__wrap {
    background: transparent;
    border: 0;
  }
  .el-collapse-item__header {
    border: 0;
  }
  .el-collapse-item__wrap {
    border: 0;
  }
  .el-collapse-sp {
    width: 100%;
  }
  .sp-item {
    position: relative;
    width: 100%;
    height: 100px;
    border-bottom: 1px solid #1f4e92;
    dl {
      width: 100%;
      dt {
        margin-top: 10px;
        height: 33px;
        line-height: 33px;
        color: #c9e7ff;
        img {
          margin: 0 10px 0 24px;
          vertical-align: middle;
          width: 20px;
          height: 20px;
        }
      }
      dd {
        height: 24px;
        line-height: 24px;
        color: #407fab;
        img {
          margin: 0 10px 0 39px;
          vertical-align: middle;
          width: 16px;
          height: 16px;
        }
      }
    }
    .sp-item-zt {
      width: 60px;
      height: 23px;
      background: #4a78d0;
      text-align: center;
      color: #fff;
      line-height: 23px;
      position: absolute;
      right: 19px;
      bottom: 12px;
      border-radius: 23px 23px;
    }
  }
  .openYaBtn {
    width: 192px;
    height: 35px;
    border: 1px solid #4469ba;
    text-align: center;
    color: #8aa9e2;
    line-height: 35px;
    border-radius: 35px 35px;
    margin: 15px 0 0 80px;
    cursor: pointer;
  }
  .openYaBtn:hover {
    background: #4a78d0;
    color: #fff;
  }
  .spthBtn {
    position: absolute;
    bottom: 50px;
    width: 100%;
    height: 56px;
    background: url(../../assets/images/home-sj-info/spth.png) center no-repeat;
    cursor: pointer;
  }
}
</style>
