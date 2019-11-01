<template>
    <!--智能搜车-->
    <div class="znscPage">
        <div class="border-top-left"></div>
        <div class="border-top-right"></div>
        <div class="border-bottom-left"></div>
        <div class="border-bottom-right"></div>
        <el-tabs class="znscPage-tabs" v-if="ytscShowPageNum === 1 || ytscShowPageNum === 2" v-model="activeName" @tab-click="handleTabClick">
            <el-tab-pane label="以图搜车" name="first">
              <ytsc @toShowPage="toShowPage" v-if="ytscShowPageNum === 1"></ytsc>  
              <ytscjg @toShowPage="toShowPage" v-if="ytscShowPageNum === 2"></ytscjg> 
            </el-tab-pane>
            <el-tab-pane label="手工搜车" name="second">
              <sgsc @toShowPage="toShowPage"></sgsc>
            </el-tab-pane>
        </el-tabs>
        <ytscycyd v-if="ytscShowPageNum === 3"></ytscycyd>
    </div>
</template>

<script>
import ytsc from './ytsc';
import ytscjg from './ytscjg';
import ytscycyd from './ytscycyd';
import sgsc from './sgsc';
export default {
  name: 'Znss',
  components: {
    ytsc,
    ytscjg,
    ytscycyd,
    sgsc
  },
  data() {
    return {
      activeName: 'first',
      ytscShowPageNum: 1,
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
      this.ytscShowPageNum = 1;
    },
    // 上传图片钩子
    handleAvatarProgress() {
      this.isLoading = true;
    },
    // 上传图片组件上传图片成功显示图片
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },

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
    // 以图搜车切换显示界面
    toShowPage(data) {
      this.ytscShowPageNum = data.pageNum;
    }
  }
};
</script>

<style lang="scss">
.znscPage {
  width: 1818px;
  height: 810px;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid #182e65;
  left: 45px;
  top: 181px;
  overflow-y: auto;
  overflow-x: hidden;
  .znscPage-tabs {
    &.el-tabs {
      .el-tabs__header {
        margin: 0;
        .el-tabs__nav-wrap {
          &:after {
            height: 0;
          }
          .el-tabs__nav-scroll {
            width: 100%;
            height: 48px;
            line-height: 48px;
            background-color: rgba(255, 255, 255, 0.09);
            .el-tabs__nav {
              padding-left: 30px;
              .el-tabs__active-bar {
                width: 40px !important;
                left: 40px;
                background-color: #fbf201;
              }
              .el-tabs__item {
                color: #fff;
                font-size: 16px;
                letter-spacing: 1.5;
                box-sizing: border-box;
                &.is-active {
                  color: #fbf201;
                }
              }
            }
          }
        }
      }
      .el-tabs__content {
        width: 100%;
        height: calc(100vh - 200px);
      }
    }
  }
}
</style>
