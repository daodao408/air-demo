<template>
  <!--警情大数据-->
  <div class="tsxxPage">
    <div class="tsxxPage-close" @click="closeTsxxPage"></div>
    <div class="tsxxPage-title">移动端推送公告</div>
    <div class="tsxxPage-content">
      <div class="tsxxPage-form-chose clearfloat" :value="pushForm.chosePeople" >
        <div class="tsxxPage-form-chose-title">选择警员:</div>
        <div class="tsxxPage-form-chose-input">
          <div v-for="(item, index) in chosePeopleData" :key="index">
            <div class="tsxxPage-form-chose-item" v-show="item.showFlag">
              <span>{{item.name}}</span>
              <i class="el-icon-error" @click="deletePushPeople(item)"></i>
            </div>
          </div>
        </div>
        <div class="tsxxPage-form-chose-btn" @click="chosePeopleToPushMessage">新增</div>
      </div>
      <el-form class="tsxxPage-form" autoComplete="off" :model="pushForm" ref="loginForm"
      label-position="left" label-width="85px">
        <el-form-item prop="pushType" label="推送方式：">
          <el-radio v-model="pushForm.pushType" label="1">短信发送</el-radio>
          <el-radio v-model="pushForm.pushType" label="2">警务通发送</el-radio>
        </el-form-item>
        <el-form-item prop="pushTitle" label="标题：">
          <el-input class="push-form-item-title" name="password" v-model="pushForm.pushTitle"
            auto-complete="new-password" placeholder="请输入推送标题" />
        </el-form-item>
        <el-form-item prop="pushWords" label="推送内容：">
            <el-input class="push-form-item-words" type="textarea" v-model="pushForm.pushWords" placeholder="请输入推送内容"></el-input>
        </el-form-item>  
      </el-form>
      <div class="tsxxPage-push-btn">
          <el-button type="primary" class="confirm-btn"  @click.native.prevent="handlePush">推送</el-button>
          <el-button type="primary" class="cancle-btn" @click.native.prevent="handleCancle">取消</el-button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tsxx',
  props: ['chosePeopleData'],
  components: {},
  data() {
    return {
      pushForm: {
        chosePeople: '',
        pushType: '2',
        pushTitle: '',
        pushWords: ''
      }
    };
  },
  created() {},
  mounted() {
    this.$nextTick(() => {});
  },
  methods: {
    // 点击去掉已选择的推送人员
    deletePushPeople(item) {
      item.showFlag = !item.showFlag;
    },
    // 点击打开选择人员弹出框
    chosePeopleToPushMessage() {
      this.$emit('showXzzzPage', {
        showPageStr: 'xzzz'
      });
    },
    // 关闭推送消息弹出框
    closeTsxxPage() {
      this.$emit('close');
    },
    // 点击推送按钮
    handlePush() {
      this.$emit('close');
    },
    // 点击取消按钮
    handleCancle() {
      this.$emit('close');
    }
  }
};
</script>

<style lang="scss">
$BlueColor: #207ec0;
.tsxxPage {
  width: 100%;
  padding: 0 26px;
  box-sizing: border-box;
  position: relative;
  .tsxxPage-close {
    width: 20px;
    height: 20px;
    background: url('../../assets/images/bg-jqdsj-close.png') no-repeat center;
    position: absolute;
    background-size: 100% 100%;
    top: 0;
    right: 24px;
    z-index: 999;
    cursor: pointer;
  }
  .tsxxPage-title {
    width: 100%;
    text-align: center;
    padding-left: 24px;
    margin-top: 20px;
    margin-bottom: 30px;
    font-size: 18px;
    letter-spacing: 2px;
    color: rgba(255, 255, 255, 1);
    box-sizing: border-box;
  }
  .tsxxPage-content {
    width: 100%;
    padding: 0 24px;
    margin-top: 30px;
    box-sizing: border-box;
    .tsxxPage-form-chose {
      width: 100%;
      margin-bottom: 40px;
      .tsxxPage-form-chose-title {
        float: left;
        width: 85px;
        height: 34px;
        line-height: 34px;
        color: #c9e7ff;
        font-size: 14px;
      }
      .tsxxPage-form-chose-input {
        float: left;
        width: calc(100% - 215px);
        height: 34px;
        padding-left: 10px;
        border: 1px solid #2f6cab;
        box-sizing: border-box;
        .tsxxPage-form-chose-item {
          display: inline-block;
          height: 22px;
          line-height: 22px;
          padding: 0 15px;
          background-color: #306dac;
          border-radius: 22px;
          margin-top: 5px;
          span {
            display: inline-block;
            height: 22px;
            line-height: 22px;
            color: #fff;
            font-size: 12px;
          }
          i {
            display: inline-block;
            color: #7dbaf9;
            margin-top: 2px;
            vertical-align: top;
            margin-top: 4px;
            margin-left: 5px;
            cursor: pointer;
          }
        }
      }
      .tsxxPage-form-chose-btn {
        float: left;
        width: 126px;
        height: 34px;
        line-height: 34px;
        text-align: center;
        background-color: #3b64b6;
        color: #fff;
        font-size: 14px;
        margin-left: 4px;
        cursor: pointer;
      }
    }
    .tsxxPage-form {
      &.el-form {
        .el-form-item {
          margin-bottom: 40px;
          label {
            color: #c9e7ff;
            font-size: 14px;
          }
          .el-form-item__content {
            .el-radio {
              .el-radio__input {
                display: inline-block;
                &.is-checked {
                  .el-radio__inner {
                    width: 16px;
                    height: 16px;
                    background: url('../../assets/images/push-message/radio-checked.png') no-repeat center;
                    background-size: 100% 100%;
                  }
                }
                .el-radio__inner {
                  width: 16px;
                  height: 16px;
                  background: url('../../assets/images/push-message/radio-nocheck.png') no-repeat center;
                  background-size: 100% 100%;
                  &:after {
                    display: none;
                  }
                }
              }
              .el-radio__label {
                color: #fff;
              }
              .el-radio__input.is-checked + .el-radio__label {
                color: #fff;
              }
            }
            .push-form-item-title {
              width: 60%;
              &.el-input {
                .el-input__inner {
                  width: 100%;
                  height: 34px;
                  line-height: 34px;
                  padding-left: 15px;
                  color: #7dbaf9;
                  background-color: transparent;
                  border: 1px solid #2f6cab;
                }
              }
            }
            .push-form-item-words {
              &.el-textarea {
                .el-textarea__inner {
                  height: 275px;
                  resize: none;
                  color: #7dbaf9;
                  line-height: 24px;
                  background-color: transparent;
                  border: 1px solid #2f6cab;
                }
              }
            }
          }
        }
      }
    }
    .tsxxPage-push-btn {
      width: 100%;
      text-align: center;
      .el-button {
        width: 180px;
        padding: 0;
        border-radius: 0;
        height: 35px;
        line-height: 35px;
        background: transparent;
        border: 1px solid #4469ba;
        text-align: center;
        color: #8aa9e2;
        &:hover {
          background: #4a78d0;
          color: #fff;
        }
      }
    }
  }
}
</style>
