<template>
    <!--以图搜车组件-->
    <div class="znsrjgPage-content clearfloat">
      <p class="result-text">以图搜车在2149304条过车数据中，共找到3条相似数据，用时0.14秒</p>
      <ul>
        <li v-for="(item,index) in carInfoDataArr" :key="index">
          <div class="people-info-detail clearfloat">
            <img :src="item.peopleImgSrc"/>
            <div class="people-info-text">
              <div class="people-info-list">
                <span>身份证号：</span>
                <b>{{item.identityNum}}</b>
              </div>
              <div class="people-info-list">
                <span>姓名：</span>
                <b>{{item.name}}</b>
              </div>
              <div class="people-info-list">
                <span>性别：</span>
                <b>{{item.sex}}</b>
              </div>
              <div class="people-info-list">
                <span>年龄：</span>
                <b>{{item.age}}</b>
              </div>
              <div class="people-info-list">
                <span>驾龄：</span>
                <b>{{item.driverAge}}</b>
              </div>
              <div class="people-info-list">
                <span>发证相关机构：</span>
                <b>{{item.fzjg}}</b>
              </div>
              <div class="people-info-btn">
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
          identityNum: '420121198208255718',
          name: '宋力平',
          sex: '男',
          driverAge: '3年',
          age: '37',
          fzjg: '武汉市交管局',
          // zjcx: 'C1',
          peopleImgSrc: carImg.peopleimg1
        },
        {
          identityNum: '420111198909286678',
          name: '张萍萍',
          sex: '女',
          driverAge: '2年',
          age: '30',
          fzjg: '武汉市交管局',
          // zjcx: 'C1',
          peopleImgSrc: carImg.peopleimg2
        },
        {
          identityNum: '420112197205142256',
          name: '付久丰',
          sex: '男',
          driverAge: '12年',
          age: '47',
          fzjg: '武汉市交管局',
          // zjcx: 'A1',
          peopleImgSrc: carImg.peopleimg3
        }
      ]
    };
  },
  created() {},
  methods: {
    // 显示智能搜人一车一档界面
    goToNextPage() {
      this.$emit('toShowPage', {
        pageNum: 6
      });
    }
  }
};
</script>

<style lang="scss">
.znsrjgPage-content {
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
      width: calc((100% - 150px) / 3);
      margin-right: 50px;
      box-sizing: border-box;
      &:last-child {
        margin-right: 0;
      }
      .people-info-detail {
        width: 100%;
        img {
          float: left;
          width: 212px;
          height: 249px;
        }
        .people-info-text {
          float: left;
          width: calc(100% - 215px);
          height: 249px;
          background-color: #0e1849;
          padding-top: 20px;
          box-sizing: border-box;
          .people-info-list {
            width: 100%;
            padding-left: 20px;
            margin-bottom: 14px;
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
          .people-info-btn {
            width: 100%;
            height: 40px;
            margin-top: 10px;
            padding: 0 45px;
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
