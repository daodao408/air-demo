<template>
  <div class="plan-pad">
    <p class="p-title">预案名称</p>
    <div class="p-detail-container">
      <p
        class="p-detail"
        v-for="plan in plans"
        v-bind:title="plan.text"
        :key="plan.id"
        @click="selectThis(plan)"
        :class="{'p-detail-on': plan.on}"
      >{{plan.text}}</p>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
const rows = [
  {
    id: "plan_1",
    text: "省管高速公路重特大事故应急处置预案",
    on: false
  },
  {
    id: "plan_2",
    text: "交警支队强降雨天气道路交通管理工作应急预案",
    on: false
  },
  {
    id: "plan_3",
    text: "高警总队恶劣天气交通应急管理工作预案",
    on: false
  },
  {
    id: "plan_4",
    text: "交警支队隧道交通事故应急处置预案",
    on: false
  },
  {
    id: "plan_5",
    text: "全省高速公路恶劣天气条件下联合交通管制工作预案",
    on: false
  },
  {
    id: "plan_6",
    text: "危化品车辆事故应急处置预案",
    on: false
  },
];
export default {
  name: "",
  data() {
    return {
      plans: _.cloneDeep(rows)
    };
  },
  methods: {
    selectThis(item) {
      const plans = _.cloneDeep(rows);
      const _this = _.find(plans, plan => plan.id === item.id);
      _this.on = true;
      this.plans = plans;
      this.$emit("onSelect", item);
      //开启预案流程
      this.$store.dispatch("openHandle");
      this.$store.dispatch("closePlan");
    }
  }
};
</script>

<style lang="scss" scoped>
.plan-pad {
  width: 236px;
  height: 776px;
  position: absolute;
  left: 390px;
  top: 16px;
  background: url("../../assets/images/home-sj-related/plan-pad.png") no-repeat
    center;
  .p-title {
    height: 65px;
    line-height: 90px;
    font-size: 18px;
    color: #f1f2fd;
    padding-left: 35px;
  }
  .p-detail-container {
    overflow: scroll;
    height: calc(100% - 65px);
    .p-detail {
      color: #f1f2fd;
      height: 50px;
      line-height: 50px;
      padding-left: 35px;
      padding-right: 15px;
      overflow: hidden; //超出一行文字自动隐藏
      text-overflow: ellipsis; //文字隐藏后添加省略号
      white-space: nowrap; //强制不换行
      &:hover {
        cursor: pointer;
        background-color: #304d85;
      }
    }
    .p-detail-on {
      background-color: #304d85;
    }
  }
}
</style>