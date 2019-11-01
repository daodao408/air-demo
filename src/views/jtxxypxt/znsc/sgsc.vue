<template>
    <!--以图搜车组件-->
    <div class="sgscPage-content clearfloat">
      <div class="sgscPage-form">
        <el-form class="search-car-form" autoComplete="off" :model="sgscForm" ref="sgscForm">
            <el-form-item>
                <p>请输入查询车辆信息</p>
                <el-input v-model="sgscForm.carType" placeholder="请输入车牌号" @input="toValidate(sgscForm.carType)"></el-input>
                <el-select class="sgscPage-carno-type-select" v-model="sgscForm.carNumTypeValue" placeholder="请选择号牌种类"  @change="changeCarNumType">
                    <el-option
                    v-for="item in carNumTypeOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <p>过车时段选择</p>
                <el-date-picker
                    class="start-date-picker"
                    v-model="sgscForm.startVal"
                    type="datetime"
                    :clearable="false"
                    placeholder="请选择开始时间">
                </el-date-picker>
                <el-date-picker
                    class="end-date-picker"
                    v-model="sgscForm.endVal"
                    type="datetime"
                    :clearable="false"
                    placeholder="请选择结束时间">
                </el-date-picker>
            </el-form-item>
            <el-form-item>
                <el-button class="car-search-btn" type="primary" @click="submitForm('sgscForm')" icon="el-icon-search">查询</el-button>
            </el-form-item>
        </el-form>
      </div>
    </div>
    
</template>

<script>
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
      sgscForm: {
        carType: '',
        carNumTypeValue: '',
        startVal: '',
        endVal: ''
      },
      carNumTypeOptions: [
        {
          value: '0',
          label: '蓝牌白字'
        },
        {
          value: '1',
          label: '黄牌黑字'
        },
        {
          value: '2',
          label: '黑牌白字'
        },
        {
          value: '3',
          label: '白牌'
        }
      ],
      imageUrl: '',
      isLoading: false
    };
  },
  created() {
    this.sgscForm.startVal = new Date(new Date(new Date().toLocaleDateString()).getTime());
    this.sgscForm.endVal = new Date();
  },
  methods: {
    // 校验车牌号  自动输入鄂AEG005
    toValidate(value) {
      if (value && value.length === 1) {
        this.sgscForm.carType = '鄂';
      } else if (value && value.length === 2) {
        this.sgscForm.carType = '鄂A';
      } else if (value && value.length === 3) {
        this.sgscForm.carType = '鄂AE';
      } else if (value && value.length === 4) {
        this.sgscForm.carType = '鄂AEG';
      } else if (value && value.length === 5) {
        this.sgscForm.carType = '鄂AEG0';
      } else if (value && value.length === 6) {
        this.sgscForm.carType = '鄂AEG00';
      } else if (value && value.length === 7) {
        this.sgscForm.carType = '鄂AEG005';
      } else if (value && value.length > 7) {
        this.sgscForm.carType = '鄂AEG005';
      }
    },
    // 选择号牌种类
    changeCarNumType(value) {
      console.log(value);
    },
    // 以图搜车查询按钮点击
    submitForm(formName) {
      if (this.sgscForm.carType === '') {
        this.$message({
          type: 'warning',
          message: '请输入车辆型号',
          duration: 500
        });
      } else {
        this.$emit('toShowPage', {
          pageNum: 3
        });
      }
    }
  }
};
</script>

<style lang="scss">
.sgscPage-content {
  position: absolute;
  width: 400px;
  height: 400px;
  top: 175px;
  left: 50%;
  margin-left: -200px;
  box-sizing: border-box;
  .sgscPage-form {
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
            .el-select {
              width: 100%;
              &.sgscPage-carno-type-select {
                padding-top: 20px;
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
