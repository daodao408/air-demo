<template>
  <!--警情大数据-->
  <div class="loginPage">
    <div class="loginPage-content">
      <div class="loginPage-content-detail">
        <div class="loginPage-text">欢迎登录</div>
          <el-form class="login-form" autoComplete="off" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left">
            <el-form-item prop="username" class="login-username-item">
              <el-input name="username" type="text" prefix-icon="user-icon" v-model="loginForm.username" auto-complete="off" placeholder="请输入用户名"
              />
            </el-form-item>
            <el-form-item prop="password" class="login-pwd-item">
              <el-input name="password" type="password" prefix-icon="pwd-icon" @keyup.enter.native="handleLogin" v-model="loginForm.password"
                auto-complete="new-password" placeholder="请输入密码" />
            </el-form-item>
            <el-button type="primary" class="login-bth" @click.native.prevent="handleLogin">登录</el-button>
          </el-form>
      </div>
        
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  components: {},
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'change'
          }
          // {
          //   validator: (rule, value, callback) => {
          //     if (value !== 'admin') {
          //       callback(new Error('用户名错误'));
          //     } else {
          //       callback();
          //     }
          //   },
          //   trigger: 'blur'
          // }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'change'
          }
          // {
          //   validator: (rule, value, callback) => {
          //     if (value !== '123456') {
          //       callback(new Error('密码错误'));
          //     } else {
          //       callback();
          //     }
          //   },
          //   trigger: 'blur'
          // }
        ]
      }
    };
  },
  created() {},
  mounted() {
    this.$nextTick(() => {});
  },
  methods: {
    handleLogin() {
      let self = this;
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          if (this.loginForm.username !== 'admin' || this.loginForm.password !== '123456') {
            this.$message({
              type: 'error',
              message: '用户名或者密码错误',
              duration: 1000
            });
          } else {
            this.$router.push({
              path: '/dlxxksh/zyjk'
            });
          }
        } else {
        }
      });
    }
  }
};
</script>

<style lang="scss">
.loginPage {
  width: 100%;
  height: 100%;
  position: relative;
  background: url('../../assets/images/login/bg_login.jpg') no-repeat center center;
  background-size: 100% 100%;

  .loginPage-content {
    position: absolute;
    width: 467px;
    height: 476px;
    right: 328px;
    top: 50%;
    margin-top: -238px;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
    padding: 16px;
    box-sizing: border-box;
    .loginPage-content-detail {
      width: 100%;
      height: 100%;
      background-color: #fff;
      border: 1px solid #0783e5;
      border-radius: 4px;
      padding: 0 26px;
      box-sizing: border-box;
    }
    .loginPage-text {
      width: 100%;
      text-align: center;
      color: #1a50a8;
      font-size: 30px;
      font-weight: bold;
      letter-spacing: 1.5px;
      margin-top: 50px;
      margin-bottom: 48px;
    }
    .login-form {
      width: 100%;
      .el-form-item {
        margin-bottom: 27px;
        &:nth-child(2) {
          margin-bottom: 53px;
        }
        &:last-child {
          margin-bottom: 0;
        }
        &.is-error {
          .el-input__inner {
            border: none;
          }
        }
        .el-form-item__content {
          .el-input {
            .el-input__inner {
              width: 100%;
              height: 50px;
              line-height: 50px;
              color: #0c59b0;
              padding-left: 155px;
              border-radius: 2px;
              border: 1px solid #22639a;
              box-sizing: border-box;
              font-size: 16px;
              &:hover {
                border: 1px solid rgba(34, 99, 154, 0.8);
              }
              &:focus {
                border: 1px solid rgba(34, 99, 154, 0.8);
              }
            }
          }
          .user-icon {
            position: absolute;
            top: 15px;
            left: 125px;
            display: inline-block;
            width: 17px;
            height: 19px;
            background: url('../../assets/images/login/user_icon.png') no-repeat center center;
          }
          .pwd-icon {
            position: absolute;
            top: 14px;
            left: 125px;
            display: inline-block;
            width: 18px;
            height: 21px;
            background: url('../../assets/images/login/pwd_icon.png') no-repeat center center;
          }
        }
      }
      .login-bth {
        &.el-button {
          width: 100%;
          height: 76px;
          line-height: 50px;
          background: url('../../assets/images/login/bg_login_btn.png') no-repeat center center;
          background-size: 100% 100%;
          color: #fefefe;
          font-size: 18px;
          font-weight: bold;
          border: none;
          letter-spacing: 3.2px;
          span {
            display: inline-block;
            height: 100%;
            line-height: 100%;
          }
        }
      }
    }
  }
}
</style>
