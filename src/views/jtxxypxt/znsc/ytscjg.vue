<template>
    <!--以图搜车组件-->
    <div class="znscjgPage-content clearfloat">
      <p class="result-text">以图搜车在2149304条过车数据中，共找到4条相似数据，用时0.14秒</p>
      <ul>
        <li v-for="(item,index) in carInfoDataArr" :key="index">
          <div class="car-info-detail">
            <img :src="item.carImgSrc"/>
            <div class="car-info-text">
              <div class="car-info-list">
                <span>车牌：</span>
                <b>{{item.carNum}}</b>
              </div>
              <div class="car-info-list">
                <span>车型：</span>
                <b>{{item.carType}}</b>
              </div>
              <div class="car-info-list">
                <span>时间：</span>
                <b>{{item.carTime}}</b>
              </div>
              <div class="car-info-btn">
                <a @click="goToNextPage">一车一档</a>
                <a>纠错</a>
                <a>更多研判</a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    
</template>

<script>
import carImg from '@/mapicons/carimg.js';
export default {
  name: 'Ytscjg',
  data() {
    return {
      carInfoDataArr: [
        {
          carNum: '鄂AEG005',
          carType: '福特-福克斯-两厢',
          carTime: '2019-06-19  06:10:45',
          carImgSrc: carImg.carimg1
        },
        {
          carNum: '鄂AEG005',
          carType: '福特-福克斯-两厢',
          carTime: '2019-06-19  06:20:45',
          carImgSrc: carImg.carimg2
        },
        {
          carNum: '鄂AEG005',
          carType: '福特-福克斯-两厢',
          carTime: '2019-06-19  06:25:45',
          carImgSrc: carImg.carimg3
        },
        {
          carNum: '鄂AEG005',
          carType: '福特-福克斯-两厢',
          carTime: '2019-06-19  08:10:45',
          carImgSrc: carImg.carimg4
        }
      ]
    };
  },
  created() {},
  methods: {
    // 显示以图搜车界面
    goToNextPage() {
      this.$emit('toShowPage', {
        pageNum: 3
      });
    }
  }
};
</script>

<style lang="scss">
.znscjgPage-content {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 30px 24px 24px 24px;
  box-sizing: border-box;
  .result-text {
    width: 100%;
    color: #fff;
    font-size: 14px;
  }
  ul {
    width: 100%;
    padding-top: 35px;
    li {
      float: left;
      width: calc((100% - 150px) / 4);
      margin-right: 50px;
      box-sizing: border-box;
      &:last-child {
        margin-right: 0;
      }
      .car-info-detail {
        width: 100%;
        img {
          width: 100%;
          height: auto;
        }
        .car-info-text {
          width: 100%;
          height: 130px;
          margin-top: -5px;
          padding-top: 20px;
          background-color: #0e1849;
          .car-info-list {
            width: 100%;
            padding-left: 20px;
            margin-bottom: 10px;
            box-sizing: border-box;
            span {
              color: #fff;
              font-size: 14px;
            }
            b {
              font-weight: normal;
              color: #fff;
              font-size: 14px;
            }
          }
          .car-info-btn {
            width: 100%;
            height: 40px;
            margin-top: 10px;
            padding: 0 80px;
            border-top: 1px solid #0b1444;
            a {
              float: left;
              color: #175ea7;
              height: 40px;
              line-height: 40px;
              font-size: 14px;
              margin-right: 40px;
              cursor: pointer;
              &:last-child {
                margin-right: 0;
              }
            }
          }
        }
      }
    }
  }
}
</style>
