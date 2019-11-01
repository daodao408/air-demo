<template>
    <div class="ksh-head clearfloat">
      <div class="ksh-head-left">
        <div class="head-to-index" >
          <i @click="goToIndex"></i>
          <span @click="goToIndex">首页</span>
        </div>
        <div class="head-select-pages" >
          <el-select :value="this.$route.path" placeholder="请选择"  @change="changePages">
                <el-option
                v-for="item in pagesOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
        </div> 
      </div>
      <div class="ksh-head-title">{{headTitle}}</div>    
      <div class="ksh-head-right">
        <span class="jump-index-icon" @click="goToKshIndex(headTitle)"></span>
        <span class="time-month">{{timeStr.yearMonth}}</span>
        <b class="time-week">{{timeStr.week}}</b>
        <i class="time-now-time">{{timeStr.nowTime}}</i>
      </div>
    </div>
</template>

<script>
import DateTimeFormat from 'format-date-time';
export default {
  name: 'kshHead',
  props: ['headTitle'],
  data() {
    return {
      topTitle: this.headTitle,
      pagesValue: '/jtkshxt',
      pagesOptions: [
        {
          label: '交通违法数据分析',
          value: '/jtwfsjfxksh'
        },
        {
          label: '交通事故分析',
          value: '/jtkshxt'
        },
        {
          label: '交通态势研判分析',
          value: '/jttsypfxksh'
        },
        {
          label: '交通流量分析',
          value: '/jtllfxksh'
        },
        {
          label: '重点对象分析',
          value: '/zddxfxksh'
        }
      ],
      timeStr: {
        yearMonth: '',
        week: '',
        nowTime: ''
      }
    };
  },
  mounted() {
    const defaultFormatter = new DateTimeFormat();
    this.timeStr.yearMonth = defaultFormatter.now('YYYY/MM/DD');
    this.timeStr.nowTime = defaultFormatter.now('HH:mm');
    let weekArr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    this.timeStr.week = weekArr[new Date().getDay()];
  },
  methods: {
    // 首页点击回到首页
    goToIndex() {
      this.$router.push({
        path: '/dlxxksh'
      });
    },
    // 首页点击回到可视化首页
    goToKshIndex() {
      window.headTitle = this.headTitle;
      this.$router.push({
        path: '/kshindex'
      });
    },
    // 切换页面
    changePages(selectedVal) {
      if (selectedVal === '/wfsjfxksh') {
        this.topTitle = '交通违法数据分析';
      } else if (selectedVal === '/jtkshxt') {
        this.topTitle = '交通事故分析';
      }
      this.$router.push({
        path: selectedVal
      });
    }
  }
};
</script>

<style lang="scss">
.ksh-head {
  width: 100%;
  height: 85px;
  background: url('../../../assets/images/jtkshxt/bg_top_ksh.png') no-repeat center center;
  background-size: 50% 100%;
  text-align: center;
  position: relative;
  .ksh-head-left {
    float: left;
    cursor: pointer;
    .head-to-index {
      float: left;
      i {
        display: inline-block;
        width: 20px;
        height: 16px;
        background: url('../../../assets/images/jtkshxt/home_icon.png') no-repeat center center;
        background-size: 100% 100%;
        color: #fff;
        margin-right: 6px;
        margin-left: 24px;
        vertical-align: top;
        margin-top: 32px;
      }
      span {
        display: inline-block;
        height: 85px;
        line-height: 85px;
        color: #7fb3df;
        font-size: 16px;
      }
    }
    .head-select-pages {
      float: left;
      .el-select {
        margin-top: 27px;
        margin-left: 25px;
        .el-input {
          .el-input__inner {
            width: 185px;
            height: 28px;
            line-height: 28px;
            padding-left: 15px;
            color: #7fb3df;
            background-color: transparent;
            border: 1px solid #7fb3df;
          }
          .el-input__suffix {
            .el-input__suffix-inner {
              i {
                &.el-select__caret {
                  font-size: 16px;
                  color: #7fb3df;
                  height: 28px;
                  line-height: 28px;
                  // margin-top: 5px;
                  // &.is-reverse {
                  //   margin-top: 0;
                  // }
                }
              }
            }
          }
        }
      }
    }
  }
  .ksh-head-title {
    width: 300px;
    height: 85px;
    line-height: 85px;
    font-size: 22px;
    font-weight: 700;
    letter-spacing: 5px;
    color: #fff;
    margin: 0 auto;
  }
  .ksh-head-right {
    height: 85px;
    line-height: 85px;
    position: absolute;
    top: 0;
    right: 24px;
    span {
      &.jump-index-icon {
        display: inline-block;
        width: 23px;
        height: 21px;
        background: url('../../../assets/images/jtkshxt/jump_index_icon.png') no-repeat center center;
        background-size: 100% 100%;
        margin-top: 31px;
        margin-right: 18px;
        vertical-align: top;
        cursor: pointer;
      }
      &.time-month {
        display: inline-block;
        color: #7fb3df;
        font-size: 16px;
        margin-right: 8px;
      }
    }
    b {
      &.time-week {
        display: inline-block;
        color: #7fb3df;
        font-weight: normal;
        font-size: 16px;
        margin-right: 8px;
      }
    }
    i {
      &.time-now-time {
        color: #7fb3df;
        font-size: 16px;
        font-style: normal;
      }
    }
  }
}
</style>