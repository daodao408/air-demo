<template>
    <!--以图搜车组件-->
    <div class="znscPage-content clearfloat">
      <div class="znscPage-upload-img">
        <!-- <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :on-progress="">
          <el-button slot="trigger" size="small" type="primary">选择文件</el-button>
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <div v-else class="el-upload__prompt">
            <span class="el-icon-picture-outline"></span>
            <p>上传带查询图片</p>
          </div>
        </el-upload> -->
        <el-upload
          class="avatar-uploader"
          action=""
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :on-progress="handleAvatarProgress">
          <el-button slot="trigger" size="small" type="primary">选择文件</el-button>
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <div v-else class="el-upload__prompt">
            <span class="el-icon-picture-outline"></span>
            <p>上传带查询图片</p>
          </div>
        </el-upload>
        <div v-show="imageUrl" class="img-border-container">
          <div v-for="(item,index) in carDetail" :key="index" class="car-border" :class="[item.borderShowColorFlag ? 'car-border-green' : 'car-border-blue', classStatus[index]]" @click="choseCarFromImg(item, index)"></div>
        </div>
      </div>
      <div class="znscPage-form">
        <el-form class="search-car-form" autoComplete="off" :model="carForm" ref="carForm">
            <el-form-item>
                <p>车辆信息自动填充确认</p>
                <el-input v-model="carForm.carType" placeholder="请输入车牌型号"></el-input>
            </el-form-item>
            <el-form-item>
                <p>过车时段选择</p>
                <el-date-picker
                    class="start-date-picker"
                    v-model="carForm.startVal"
                    type="datetime"
                    :clearable="false"
                    placeholder="请选择开始时间">
                </el-date-picker>
                <el-date-picker
                    class="end-date-picker"
                    v-model="carForm.endVal"
                    type="datetime"
                    :clearable="false"
                    placeholder="请选择结束时间">
                </el-date-picker>
            </el-form-item>
            <el-form-item>
                <el-button class="car-search-btn" type="primary" @click="submitForm('carForm')" icon="el-icon-search">查询</el-button>
            </el-form-item>
        </el-form>
      </div>
    </div>
    
</template>

<script>
import carImg from '@/assets/images/znsc-car-img.jpg'
export default {
  name: 'Ytsc',
  data() {
    return {
      carDetail: [
        {
          carType: '福特-福克斯-两厢',
          borderShowColorFlag: false
        },
        {
          carType: '通用-昂科拉-两厢',
          borderShowColorFlag: false
        },
        {
          carType: '大众-迈腾-三厢',
          borderShowColorFlag: false
        }
      ],
      classStatus: {
        0: 'car-border-0',
        1: 'car-border-1',
        2: 'car-border-2'
      },
      carForm: {
        carType: '',
        startVal: '',
        endVal: ''
      },
      imageUrl: '',
      isLoading: false
    };
  },
  created() {
    this.carForm.startVal = new Date(new Date(new Date().toLocaleDateString()).getTime());
    this.carForm.endVal = new Date();
  },
  methods: {
    // tab点击切换
    handleTabClick(tab, event) {
      this.activeName = tab.name;
    },
    // 上传图片钩子
    handleAvatarProgress() {
      this.imageUrl = carImg
    },
    // 上传图片组件上传图片成功显示图片
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    // 选择图片中的车辆获取对应的型号
    choseCarFromImg(item, index) {
      // item.borderShowColorFlag = !item.borderShowColorFlag
      for (let i = 0; i < this.carDetail.length; i++) {
        if (i === index) {
          this.carDetail[i].borderShowColorFlag = true;
          this.carForm.carType = item.carType;
        } else {
          this.carDetail[i].borderShowColorFlag = false;
        }
      }
    },
    // 以图搜车查询按钮点击
    submitForm(formName) {
      if (this.carForm.carType === '') {
        this.$message({
          type: 'warning',
          message: '请输入车牌型号',
          duration: 500
        });
      } else {
        this.$emit('toShowPage', {
          pageNum: 2
        });
      }
    }
  }
};
</script>

<style lang="scss">
.znscPage-content {
  position: absolute;
  width: 800px;
  height: 400px;
  top: 200px;
  left: 50%;
  margin-left: -400px;
  box-sizing: border-box;
  .znscPage-upload-img {
    float: left;
    position: relative;
    width: 355px;
    height: 355px;
    background-color: #0e1849;
    .avatar-uploader {
      .el-upload {
        cursor: pointer;
        position: absolute;
        top: -40px;
        left: 0;
        overflow: hidden;
        &:hover {
          border-color: #409eff;
        }
        .el-button {
          &.el-button--small {
            border-radius: 0px;
          }
        }
      }
      .el-upload__prompt {
        width: 100%;
        text-align: center;
        height: 70px;
        margin-top: 130px;
        span {
          &.el-icon-picture-outline {
            display: inline-block;
            font-size: 36px;
            color: #fff;
          }
        }
        p {
          width: 100%;
          text-align: center;
          color: #fff;
          font-size: 14px;
          margin-top: 20px;
        }
      }
      .avatar {
        width: 355px;
        height: 355px;
        display: inline-block;
      }
    }
    .img-border-container {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      .car-border {
        position: absolute;
        cursor: pointer;
        &.car-border-0 {
          width: 110px;
          height: 110px;
          bottom: 20px;
          left: 10px;
        }
        &.car-border-1 {
          width: 100px;
          height: 100px;
          bottom: 90px;
          left: 150px;
        }
        &.car-border-2 {
          width: 90px;
          height: 100px;
          bottom: 85px;
          right: 0px;
        }
        &.car-border-blue {
          border: 1px solid #409eff;
        }
        &.car-border-green {
          border: 1px solid greenyellow;
        }
      }
    }
  }
  .znscPage-form {
    float: left;
    width: 400px;
    height: 370px;
    margin-top: -12px;
    padding-left: 45px;
    box-sizing: border-box;
    .search-car-form {
      &.el-form {
        .el-form-item {
          margin-bottom: 35px;
          &:nth-child(2) {
            margin-bottom: 50px;
          }
          .el-form-item__content {
            p {
              width: 100%;
              color: #fff;
              font-weight: 600;
              font-size: 14px;
              letter-spacing: 2px;
              margin-bottom: 10px;
            }
            .el-input {
              width: 100%;
              .el-input__inner {
                color: #fff;
                border: none;
                background-color: #0e1849;
                border-radius: 0;
                padding-left: 15px;
              }
              &.el-date-editor {
                width: 100%;
                &.start-date-picker {
                  margin-bottom: 20px;
                }
                .el-input__inner {
                  padding-left: 15px;
                }
                .el-input__prefix {
                  right: 5px;
                  left: inherit;
                  cursor: pointer;
                  i {
                    &.el-input__icon {
                      color: #fff;
                    }
                  }
                }
              }
            }
            .el-button {
              &.car-search-btn {
                width: 100%;
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
