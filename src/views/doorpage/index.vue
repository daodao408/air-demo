<template>
  <!--警情大数据-->
  <div class="doorPage">
    <div class="top-nav-info">
      <ul class="clearfloat">
        <li>
          <span>用户:</span>
          <b>admin</b>
        </li>
        <li>
          <span>消息</span>
          <i class="icon-message"></i>
        </li>
        <li>
          <span>设置</span>
          <i class="icon-setting"></i>
        </li>
      </ul>
    </div>
    <div class="doorPage-content">
      <ul class="clearfloat">
        <li v-for="(item,index) in doorPageData" :key="index" @click="goToPage(item.path)">
          <div class="door-item">
            <i class="door-page-icon" :class="item.iconClass"></i>
          <span>{{item.name}}</span>
          </div>
          
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  components: {},
  data() {
    return {
      doorPageData: [
        {
          name: '资源监控',
          path: '/dlxxksh/zyjk',
          iconClass: 'door-page-icon1'
        },
        {
          name: '辖区道路',
          path: '',
          iconClass: 'door-page-icon2'
        },
        {
          name: '车辆分析',
          path: '',
          iconClass: 'door-page-icon3'
        },
        {
          name: '一车三证',
          path: '',
          iconClass: 'door-page-icon4'
        },
        {
          name: '一证三车',
          path: '',
          iconClass: 'door-page-icon5'
        },
        {
          name: '智能搜索',
          path: '',
          iconClass: 'door-page-icon6'
        },
        {
          name: '交通态势研判分析',
          path: '',
          iconClass: 'door-page-icon7'
        },
        {
          name: '交通事故分析',
          path: '',
          iconClass: 'door-page-icon8'
        }
      ]
    };
  },
  created() {},
  mounted() {
    this.$nextTick(() => {});
  },
  methods: {
    goToPage(path) {
      this.$router.push({
        path: path
      });
    }
  }
};
</script>

<style lang="scss">
.doorPage {
  width: 100%;
  height: 100%;
  position: relative;
  background: url('../../assets/images/login/bg_login.png') no-repeat center center;
  background-size: 100% 100%;
  .top-nav-info {
    position: absolute;
    right: 65px;
    top: 40px;
    ul {
      li {
        float: left;
        margin-right: 30px;
        cursor: pointer;
        span {
          display: inline-block;
          line-height: 22px;
          color: #23adf3;
          font-size: 14px;
          vertical-align: top;
        }
        b {
          display: inline-block;
          line-height: 22px;
          color: #23adf3;
          font-weight: normal;
          font-size: 14px;
          padding-left: 5px;
          vertical-align: top;
        }
        i {
          display: inline-block;
          &.icon-message {
            width: 17px;
            height: 12px;
            line-height: 22px;
            background: url('../../assets/images/login/icon-message.png') no-repeat center center;
            background-size: 100% 100%;
            margin-top: 4px;
            margin-left: 8px;
          }
          &.icon-setting {
            width: 14px;
            height: 14px;
            line-height: 22px;
            background: url('../../assets/images/login/icon-setting.png') no-repeat center center;
            background-size: 100% 100%;
            margin-top: 3px;
            margin-left: 8px;
          }
        }
      }
    }
  }
  .doorPage-content {
    position: absolute;
    width: calc(100% - 225px);
    height: 400px;
    top: 35%;
    margin: 0 75px 0 150px;
    box-sizing: border-box;
    ul {
      width: 100%;
      li {
        float: left;
        width: 25%;
        padding-right: 75px;
        box-sizing: border-box;
        margin-bottom: 50px;
        cursor: pointer;
        &:hover {
          transform: scale(1.1);
          transition: All 0.5s ease-in-out;
        }
        .door-item {
          width: 100%;
          height: 200px;
          background: url('../../assets/images/login/bg_door_item.png') no-repeat center center;
          background-size: 100% 100%;
          text-align: center;
          .door-page-icon {
            display: inline-block;
            width: 75px;
            height: 75px;
            margin-top: 30px;
          }
          .door-page-icon1 {
            background: url('../../assets/images/login/icon_1.png') no-repeat center center;
            background-size: 100% 100%;
          }
          .door-page-icon2 {
            background: url('../../assets/images/login/icon_2.png') no-repeat center center;
            background-size: 100% 100%;
          }
          .door-page-icon3 {
            background: url('../../assets/images/login/icon_3.png') no-repeat center center;
            background-size: 100% 100%;
          }
          .door-page-icon4 {
            background: url('../../assets/images/login/icon_4.png') no-repeat center center;
            background-size: 100% 100%;
          }
          .door-page-icon5 {
            background: url('../../assets/images/login/icon_5.png') no-repeat center center;
            background-size: 100% 100%;
          }
          .door-page-icon6 {
            background: url('../../assets/images/login/icon_6.png') no-repeat center center;
            background-size: 100% 100%;
          }
          .door-page-icon7 {
            background: url('../../assets/images/login/icon_7.png') no-repeat center center;
            background-size: 100% 100%;
          }
          .door-page-icon8 {
            background: url('../../assets/images/login/icon_8.png') no-repeat center center;
            background-size: 100% 100%;
          }
          span {
            display: inline-block;
            width: 100%;
            margin-top: 5px;
            font-size: 18px;
            color: #fff;
            font-weight: 500;
            letter-spacing: 2px;
          }
        }
      }
    }
  }
}
</style>
