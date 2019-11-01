<template>
    <!--智能搜索-->
    <div class="znsrPage">
        <div class="border-top-left"></div>
        <div class="border-top-right"></div>
        <div class="border-bottom-left"></div>
        <div class="border-bottom-right"></div>
        <div class="znsrPage-content" v-if="znsrShowPageNum === 4">
          <el-form class="search-people-form clearfloat" autoComplete="off" :model="peopleForm" ref="peopleForm">
            <el-form-item class="left-form-item">
                <p>身份证号查询</p>
                <el-input v-model="peopleForm.identityNum" placeholder="请输入身份证号查询" @input="toValidate(peopleForm.identityNum)"></el-input>
            </el-form-item>
            <el-form-item class="right-form-item">
                <p>发证相关机构</p>
                <el-input v-model="peopleForm.fzjg" placeholder="请输入发证相关机构"></el-input>
            </el-form-item>
            <el-form-item class="left-form-item">
              <div class="form-radio-content">
                <span class="form-radio-text">性别：</span>
                <el-checkbox-group v-model="checkedSex">
                  <el-checkbox v-for="sex in SexArr" :label="sex" :key="sex">{{sex}}</el-checkbox>
                </el-checkbox-group>
              </div>
            </el-form-item>
            <el-form-item class="right-form-item">
              <!-- <p>是否有酒驾记录</p> -->
              <div class="form-radio-content">
                <span class="form-radio-text">是否有酒驾记录：</span>
                <el-checkbox-group v-model="checkedJjjl">
                  <el-checkbox v-for="jjjl in jjjlArr" :label="jjjl" :key="jjjl">{{jjjl}}</el-checkbox>
                </el-checkbox-group>
                <!-- <el-radio v-model="peopleForm.jjjlRadio" label="1">是</el-radio>
                <el-radio v-model="peopleForm.jjjlRadio" label="2">否</el-radio> -->
              </div>
            </el-form-item>
            <el-form-item class="right-form-item">
              <p>年龄</p>
              <el-select v-model="peopleForm.age" placeholder="请选择年龄">
                <el-option
                  v-for="item in ageOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="left-form-item">
                <p>驾校名称</p>
                <el-input v-model="peopleForm.jxmc" placeholder="请输入驾校名称"></el-input>
            </el-form-item>
            <el-form-item class="right-form-item">
              <p>驾龄</p>
              <el-select v-model="peopleForm.driverAge" placeholder="请选择驾龄">
                <el-option
                  v-for="item in driverAgeOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item >
            <el-form-item class="left-form-item">
                <p>准驾车型</p>
                <el-input v-model="peopleForm.zjcx" placeholder="请输入准驾车型"></el-input>
            </el-form-item>
            <el-form-item class="right-form-item">
                <p>连续三年内违章次数</p>
                <el-input v-model="peopleForm.snnwzcs" placeholder="请输入连续三年内违章次数"></el-input>
            </el-form-item>
            <el-form-item class="left-form-item">
                <p>连续三年内发生交通事故定责为主要责任次数</p>
                <el-input v-model="peopleForm.snndzcs" placeholder="请输入连续三年内发生交通事故定责为主要责任次数"></el-input>
            </el-form-item>
            <!-- <el-form-item class="right-form-item">
                <p>是否有酒驾记录</p>
              <el-select v-model="peopleForm.jjjl" placeholder="请选择是否有酒驾记录">
                <el-option
                  v-for="item in jjjlOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item> -->
            <el-form-item>
                <el-button class="people-search-btn" type="primary" @click="submitForm('peopleForm')" icon="el-icon-search">查询</el-button>
            </el-form-item>
          </el-form>    
        </div>
        <znsrjg @toShowPage="showPage" v-if="znsrShowPageNum === 5"></znsrjg>
        <znsrycyd v-if="znsrShowPageNum === 6"></znsrycyd>
    </div>
</template>

<script>
import znsrjg from './znsrjg';
import znsrycyd from './znsrycyd';
export default {
  name: 'Znss',
  components: {
    znsrjg,
    znsrycyd
  },
  data() {
    return {
      znsrShowPageNum: 4,
      peopleForm: {
        identityNum: '',
        sexRadio: '1',
        fzjg: '',
        jxmc: '',
        driverAge: '',
        zjcx: '',
        snnwzcs: '',
        snndzcs: '',
        jjjlRadio: '2'
      },
      checkedSex: [],
      SexArr: ['男', '女'],
      checkedJjjl: [],
      jjjlArr: ['是', '否'],
      sexOptions: [
        {
          value: 0,
          label: '男'
        },
        {
          value: 1,
          label: '女'
        }
      ],
      ageOptions: [
        {
          value: 0,
          label: '20岁以下'
        },
        {
          value: 1,
          label: '20岁-30岁之间'
        },
        {
          value: 2,
          label: '30岁-40岁之间'
        },
        {
          value: 3,
          label: '40岁以上'
        }
      ],
      driverAgeOptions: [
        {
          value: 0,
          label: '小于1年'
        },
        {
          value: 1,
          label: '1年~3年之间'
        },
        {
          value: 2,
          label: '3年~10年之间'
        },
        {
          value: 3,
          label: '10年以上'
        }
      ],
      jjjlOptions: [
        {
          value: 0,
          label: '是'
        },
        {
          value: 1,
          label: '否'
        }
      ]
    };
  },
  methods: {
    // 校验身份证号  自动输入420121198208255718
    toValidate(value) {
      if (value && value.length === 1) {
        this.peopleForm.identityNum = '4';
      } else if (value && value.length === 2) {
        this.peopleForm.identityNum = '42';
      } else if (value && value.length === 3) {
        this.peopleForm.identityNum = '420';
      } else if (value && value.length === 4) {
        this.peopleForm.identityNum = '4201';
      } else if (value && value.length === 5) {
        this.peopleForm.identityNum = '42012';
      } else if (value && value.length === 6) {
        this.peopleForm.identityNum = '420121';
      } else if (value && value.length === 7) {
        this.peopleForm.identityNum = '4201211';
      } else if (value && value.length === 8) {
        this.peopleForm.identityNum = '42012119';
      } else if (value && value.length === 9) {
        this.peopleForm.identityNum = '420121198';
      } else if (value && value.length === 10) {
        this.peopleForm.identityNum = '4201211982';
      } else if (value && value.length === 11) {
        this.peopleForm.identityNum = '42012119820';
      } else if (value && value.length === 12) {
        this.peopleForm.identityNum = '420121198208';
      } else if (value && value.length === 13) {
        this.peopleForm.identityNum = '4201211982082';
      } else if (value && value.length === 14) {
        this.peopleForm.identityNum = '42012119820825';
      } else if (value && value.length === 15) {
        this.peopleForm.identityNum = '420121198208255';
      } else if (value && value.length === 16) {
        this.peopleForm.identityNum = '4201211982082557';
      } else if (value && value.length === 17) {
        this.peopleForm.identityNum = '42012119820825571';
      } else if (value && value.length === 18) {
        this.peopleForm.identityNum = '420121198208255718';
      } else if (value && value.length > 18) {
        this.peopleForm.identityNum = '420121198208255718';
      }
    },
    // 智能搜车查询按钮点击
    submitForm(formName) {
      if (this.peopleForm.identityNum === '') {
        this.$message({
          type: 'warning',
          message: '请输入身份证号',
          duration: 500
        });
      } else {
        this.znsrShowPageNum = 5;
      }
    },
    // 显示相关界面
    showPage(data) {
      this.znsrShowPageNum = data.pageNum;
    }
  }
};
</script>

<style lang="scss">
.znsrPage {
  width: 1818px;
  height: 810px;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid #182e65;
  left: 45px;
  top: 181px;
  .znsrPage-content {
    position: absolute;
    width: 800px;
    height: 600px;
    top: 50%;
    left: 50%;
    margin-left: -350px;
    margin-top: -300px;
    box-sizing: border-box;
    .search-people-form {
      &.el-form {
        .el-form-item {
          float: left;
          width: 100%;
          margin-bottom: 20px;
          &.left-form-item {
            float: left;
            width: calc(50% - 10px);
            margin-right: 10px;
          }
          &.right-form-item {
            float: right;
            width: calc(50% - 10px);
            margin-left: 10px;
          }
          &.el-col-10 {
            width: calc(50% -10px);
          }

          .el-form-item__content {
            text-align: center;
            p {
              width: 100%;
              text-align: left;
              color: #fff;
              font-weight: 600;
              font-size: 14px;
              letter-spacing: 2px;
              margin-bottom: 0px;
            }
            .form-radio-content {
              width: 100%;
              text-align: left;
              span {
                &.form-radio-text {
                  text-align: left;
                  color: #fff;
                  font-weight: 600;
                  font-size: 14px;
                  letter-spacing: 2px;
                  padding-right: 15px;
                }
              }
              .el-checkbox-group {
                display: inline-block;
                .el-checkbox {
                  &.is-checked {
                    .el-checkbox__label {
                      color: #409eff;
                    }
                  }
                  .el-checkbox__label {
                    color: #fff;
                  }
                }
              }
              .el-radio {
                .el-radio__label {
                  color: #fff;
                }
              }
            }
            .el-input {
              width: 100%;
              .el-input__inner {
                height: 42px;
                line-height: 42px;
                color: #fff;
                border: none;
                background-color: #0e1849;
                border-radius: 0;
              }
            }
            .el-select {
              width: 100%;
              .el-input {
                width: 100%;
                .el-input__inner {
                  height: 42px;
                  line-height: 42px;
                  color: #fff;
                  border: none;
                  background-color: #0e1849;
                  border-radius: 0;
                }
              }
            }
            .el-button {
              margin-top: 45px;
              &.people-search-btn {
                width: 60%;
                border-radius: 0;
                font-size: 16px;
                i {
                  &.el-icon-search {
                    font-size: 16px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
