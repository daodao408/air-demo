<template>
  <div class="global-top-nav">
    <div class="global-top-nav-bg"></div>
    <ul class="top-nav-ul first-nav">
      <li v-for="item in firstMenuArr" :key="item.title">
        <router-link :to="item.path">{{ item.title }}</router-link>
      </li>
    </ul>
    <ul class="top-nav-ul second-nav">
      <li v-for="obj in secondMenuArr" :key="obj.title">
        <router-link :to="obj.path">{{ obj.title}}</router-link>
      </li>
    </ul>
    <!-- <el-button type="text" @click="togglePad" style="position:relative;left:300px;">toggle pad</el-button> -->
    <ul class="right_nav">
      <p><img src="../../../assets/images/home-sj-related/sj.png" alt=""></p>
      <p><img src="../../../assets/images/icon-plane.png" alt="" @click="toPushMessage('tsxx')"></p>
      <p><img src="../../../assets/images/email.png" alt=""  @click="toPushMessage('xxgl')"></p>
      <p><img src="../../../assets/images/setting.png" alt=""  @click="clickSettings"></p>
    </ul>
    <SystemSettings v-if="zyjkPageState.show_settings"></SystemSettings>
  </div>
</template>

<script>
import _ from 'lodash';
import { mapGetters } from 'vuex';
import SystemSettings from '@/components/zyjk/SystemSettings.vue';
export default {
  name: 'GlobalTopNav',
  components: {
    SystemSettings
  },
  computed: {
    ...mapGetters(['zyjkPageState'])
  },
  data() {
    return {
      routesArray: [],
      firstMenuArr: [],
      secondMenuArr: []
    };
  },
  // 监听,当路由发生变化的时候执行
  watch: {
    $route(to, from) {
      this.setMenu();
    }
  },
  mounted() {
    this.setMenu();
  },
  methods: {
    togglePad() {
      this.$store.dispatch('togglePad');
    },
    clickSettings() {
      if (!this.zyjkPageState.show_settings) {
        this.$store.commit('TOGGLE_SETTINGS_PAD');
        this.$emit('closePage');
      }
    },
    setMenu() {
      this.routesArray = this.$router.options.routes;
      this.firstMenuArr = [];
      this.secondMenuArr = [];
      _.forEach(this.routesArray, o => {
        if (o.meta.level === 0) {
          this.firstMenuArr.push({
            path: o.path,
            title: o.meta.title
          });
        }
        if (o.name === this.$router.currentRoute.matched[0].name) {
          _.forEach(o.children, obj => {
            this.secondMenuArr.push({
              path: obj.path,
              title: obj.meta.title
            });
          });
        }
      });
    },

    // 推送消息和消息管理点击  通过传值name判断跳转页面
    toPushMessage(name) {
      this.$emit('pushMessage', {
        showPageStr: name
      });
    }
  }
};
</script>

<style lang="scss">
$GlobalTopNavBgColor: #24aef4;
$selectedLinkColor: #fff600;
.global-top-nav {
  width: 100%;
  height: 40px;
  position: absolute;
  left: 0;
  top: 71px;

  .global-top-nav-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: $GlobalTopNavBgColor;
    opacity: 0.3;
  }
  ul.first-nav {
    position: absolute;
    top: -50px;
    left: 8px;
    li {
      a {
        border: none !important;
      }
    }
  }
  ul.second-nav {
    position: absolute;
    left: 8px;
    height: 40px;
  }
  ul.top-nav-ul {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      float: left;
      font-size: 14px;
      line-height: 40px;
      color: $GlobalTopNavBgColor;
      font-weight: 500;
      a {
        color: $GlobalTopNavBgColor;
        text-decoration: none;
        padding: 0 22px;
        border-right: 2px solid $GlobalTopNavBgColor;
        cursor: pointer;
        &.router-link-active {
          color: #fff600;
        }
      }
      // &.selected{
      //     color:$selectedLinkColor;
      // }
      &:hover {
        a {
          transition: 0.3s;
          color: $selectedLinkColor;
        }
      }
      &:last-child {
        a {
          border-right: none;
        }
      }
    }
  }
  .right_nav {
    color: #24aef4;
    float: right;
    padding-right: 270px;
    position: relative;
    p {
      display: inline-block;
      height: 40px;
      line-height: 45px;
      width: 40px;
      text-align: center;
      > img {
        cursor: pointer;
      }
    }
  }
}
</style>