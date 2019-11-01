<template>
  <!--警情大数据-->
  <div class="yjtsspthPage-spth">
    <div class="bg-yjtsspthPage-close" @click="closeJqdsjPage"></div>
    <div class="yjtsspthPage-spth-title">视频通话</div>
    <div class="yjtsspthPage-spth-content">
      <ul class="clearfloat">
        <li class="el-col el-col-8" v-for="(item, index) in spthPeopleDataArr" :key="index">
          <img :src="item.imgSrc" @click="toAddNewPolice(index)"/>
          <p>{{item.name}}</p>
          <div class="yjtsspthPage-spth-police-num">
            <span>警员编号</span>
            <b>{{item.policeNum}}</b>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import spthImg from '@/mapicons/spthimg.js';
export default {
  name: 'Yjtsspth',
  components: {},
  data() {
    return {
      spthPeopleDataArr: [
        {
          name: '刘某某(队长)',
          policeNum: '1258954',
          imgSrc: spthImg.policeImg1
        },
        {
          name: '程某某',
          policeNum: '1217854',
          imgSrc: spthImg.policeImg2
        },
        {
          name: '陈某某',
          policeNum: '1912954',
          imgSrc: spthImg.policeImg3
        },
        {
          name: '郑某某',
          policeNum: '1365478',
          imgSrc: spthImg.policeImg4
        },
        {
          name: '沈某某',
          policeNum: '5612478',
          imgSrc: spthImg.policeImg5
        },
        {
          name: '',
          policeNum: '',
          imgSrc: spthImg.policeImg6
        }
      ]
    };
  },
  created() {},
  mounted() {
    this.$nextTick(() => {});
  },
  methods: {
    // 点击关闭按钮关闭弹出框
    closeJqdsjPage() {
      this.$emit('close');
    },

    // 添加新成员
    toAddNewPolice(index) {
      if (index === this.spthPeopleDataArr.length - 1) {
        this.$emit('close', {
          showPageStr: 'xzzz'
        });
      }
    }
  }
};
</script>

<style lang="scss">
$BlueColor: #207ec0;
.yjtsspthPage-spth {
  width: 100%;
  position: relative;
  .bg-yjtsspthPage-close {
    width: 20px;
    height: 20px;
    background: url('../../../assets/images/bg-jqdsj-close.png') no-repeat center;
    position: absolute;
    background-size: 100% 100%;
    top: -3px;
    right: 24px;
    cursor: pointer;
  }
  .yjtsspthPage-spth-title {
    width: 100%;
    text-align: left;
    padding-left: 24px;
    margin-top: 20px;
    margin-bottom: 30px;
    font-size: 16px;
    letter-spacing: 2px;
    color: rgba(255, 255, 255, 1);
    box-sizing: border-box;
  }
  .yjtsspthPage-spth-content {
    width: 100%;
    padding-left: 24px;
    height: 420px;
    box-sizing: border-box;
    ul {
      width: 100%;
      height: 100%;
      overflow-y: auto;
      li {
        float: left;
        padding-right: 24px;
        // width: calc((100% -120px) * 0.33333);
        // margin-right: 24px;
        &:nth-child(3n + 3) {
          margin-right: 0;
        }
        img {
          width: 100%;
          height: auto;
          cursor: pointer;
        }
        p {
          color: #9cdaff;
          font-size: 16px;
          margin-top: 10px;
        }
        .yjtsspthPage-spth-police-num {
          width: 100%;
          margin-top: 5px;
          margin-bottom: 10px;
          span {
            color: #9cdaff;
            font-size: 14px;
          }
          b {
            color: #9cdaff;
            font-size: 14px;
            font-weight: normal;
          }
        }
      }
    }
  }
}
</style>
