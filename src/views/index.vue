<template>
  <div class="homePage">
    <global-top-nav @pushMessage="toShowPushMessagePage" @closePage="toClosePopPage"></global-top-nav>
    <div class="top-logout" @click="toLogout">
      <i class="icon-logout"></i>
      <span>退出</span>
    </div>
    <router-view/>
    <!--消息管理弹出框  -->
    <div class="xxgl-dialog-container" v-if="isShowXxglPage">
      <div class="xxgl-dialog">
        <xxgl-dialog @close="closeXxglPageDialog"></xxgl-dialog>
      </div>
    </div>
    <!--推送消息弹出框  -->
    <div class="tsxx-dialog-container" v-if="isShowTsxxPage">
      <div class="tsxx-dialog">
        <tsxx-dialog
          @showXzzzPage="toShowXzzzPage"
          :chosePeopleData="chosePeopleData"
          @close="closeTsxxPageDialog"
        ></tsxx-dialog>
      </div>
    </div>
    <!--推送消息选择人员弹出框  -->
    <div class="tsxx-xzzz-dialog-container" v-if="isShowXzzzPage">
      <div class="tsxx-xzzz-dialog">
        <yjtsxzzz-dialog :dialogTitle="dialogTitle" @close="closeXzzzPageDialog"></yjtsxzzz-dialog>
      </div>
    </div>
  </div>
</template>

<script>
import GlobalTopNav from '@/components/global/top-nav';
import { mapGetters } from 'vuex';
import XxglDialog from '@/views/xxgl';
import TsxxDialog from '@/views/tsxx';
import YjtsxzzzDialog from '@/views/tsxx/xzzz.vue';
export default {
  name: 'homePage',
  computed: {
    ...mapGetters(['zyjkPageState'])
  },
  data() {
    return {
      dialogTitle: '添加你所想要发送推送消息的人员',
      routesArray: [],
      isShowXxglPage: false, // 消息管理弹出框标示量
      isShowTsxxPage: false, // 消息推送弹出框标示量
      isShowXzzzPage: false, // 消息推送选择人员弹出框标示量
      chosePeopleData: [] // 消息推送选择人员data
    };
  },

  components: {
    GlobalTopNav,
    XxglDialog,
    TsxxDialog,
    YjtsxzzzDialog
  },
  mounted() {},
  methods: {
    // 退出点击
    toLogout() {
      this.$router.push({
        path: '/login'
      });
    },
    // 点击打开消息管理弹出框
    toShowXxglPage() {
      alert(458);
    },
    // 关闭消息管理弹出框
    closeXxglPageDialog() {
      this.isShowXxglPage = false;
    },

    // 打开系统设置弹出框 则关闭消息管理和推送消息弹出框
    toClosePopPage() {
      this.isShowTsxxPage = false;
      this.isShowXxglPage = false;
    },

    // 点击打开推送消息
    toShowPushMessagePage(data) {
      if (data && data.showPageStr === 'tsxx') {
        this.isShowTsxxPage = true;
        this.isShowXxglPage = false;
      } else if (data && data.showPageStr === 'xxgl') {
        this.isShowXxglPage = true;
        this.isShowTsxxPage = false;
      }
      this.$store.commit('SET_SHOW_SETTINGS', false);
    },

    // 打开选择人员弹出框
    toShowXzzzPage(data) {
      this.isShowTsxxPage = true;
      if (data && data.showPageStr === 'xzzz') {
        this.isShowXzzzPage = true;
      }
    },

    // 关闭推送消息弹出框
    closeTsxxPageDialog() {
      this.isShowTsxxPage = false;
      // this.$store.commit('TOGGLE_SETTINGS_PAD');
    },
    // 关闭选择组织弹出框
    closeXzzzPageDialog(data) {
      this.isShowXzzzPage = false;
      if (data && data.showPageStr === 'tsxx') {
        this.isShowTsxxPage = true;
        this.chosePeopleData = data.chosePeopleData;
      }
    }
  }
};
</script>

<style lang="scss">
.homePage {
  position: relative;
  width: 1920px;
  height: 1080px;
  background: url('../assets/images/index_bg.jpg') no-repeat center center;
  background-size: 1920px 1080px;
  .top-logout {
    position: absolute;
    right: 24px;
    top: 0;
    cursor: pointer;
    i {
      display: inline-block;
      width: 18px;
      height: 17px;
      background: url('../assets/images/icon-logout.png') no-repeat center center;
      background-size: 100% 100%;
      margin-top: 25px;
      vertical-align: top;
      margin-right: 8px;
    }
    span {
      display: inline-block;
      color: #24aef4;
      font-size: 16px;
      margin-top: 25px;
    }
  }
}
</style>
