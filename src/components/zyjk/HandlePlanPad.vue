<template>
  <div class="handle-plan-pad">
    <div class="content-room">
      <p class="pad-title">预案处置</p>
      <div class="flow-map">
        <div>
          <p>
            <span style="width: 112px;">接到交通事件</span>
          </p>
        </div>
        <div>
          <p>
            <span style="width: 80px">先期处置</span>
          </p>
          <p>
            <span style="width: 80px">立即报告</span>
          </p>
          <p>
            <span style="width: 80px">视屏监控</span>
          </p>
        </div>
        <div>
          <div>
            <p>
              <span style="width: 100px">周边警力</span>
            </p>
            <p>
              <span style="width: 100px">通知120</span>
            </p>
            <p>
              <span style="width: 100px">通知110</span>
            </p>
          </div>
          <div>
            <p>
              <span style="width: 100px">总值班长</span>
            </p>
            <p>
              <span style="width: 100px">值班局领导</span>
            </p>
          </div>
          <div>
            <p>
              <span style="width: 100px">周边视频</span>
            </p>
            <p>
              <span style="width: 100px">周边4G图传</span>
            </p>
          </div>
        </div>
        <div>
          <p>
            <span style="width: 80px">后续工作</span>
          </p>
        </div>
        <div>
          <p>
            <span style="width: 125px">交通安全服务站</span>
          </p>
          <p>
            <span style="width: 125px">市相关职能部门</span>
          </p>
        </div>
        <div>
          <p>
            <span style="width: 80px">处置结果</span>
          </p>
        </div>
      </div>
      <svg class="svg-container">
        <polyline points="140,142 190,50"></polyline>
        <polyline points="140,142 190,142"></polyline>
        <polyline points="140,142 190,234"></polyline>
        <polyline points="284,50 335,15"></polyline>
        <polyline points="284,50 335,50"></polyline>
        <polyline points="284,50 335,80"></polyline>
        <polyline points="284,142 335,120"></polyline>
        <polyline points="284,142 335,165"></polyline>
        <polyline points="284,234 335,213"></polyline>
        <polyline points="284,234 335,258"></polyline>
        <polyline points="450,142 500,142"></polyline>
        <polyline points="600,142 635,72"></polyline>
        <polyline points="600,142 635,212"></polyline>
        <polyline points="600,142 815,142"></polyline>
      </svg>
      <div class="tabs-container">
        <el-tabs v-model="curTab" type="border-card">
          <el-tab-pane label="节点描述" name="1">节点描述</el-tab-pane>
          <el-tab-pane label="动作指令" name="2">动作指令</el-tab-pane>
          <el-tab-pane label="流程附件" name="3">流程附件</el-tab-pane>
          <el-tab-pane label="应急资源" name="4">应急资源</el-tab-pane>
          <el-tab-pane label="关联预案" name="5">
            <el-table
                    class="custom-el-table"
                    :data="tableRows"
                    :row-class-name="'custom-el-table-hover-row'"
                    :header-row-class-name="'custom-el-table-hd-row'"
                    style="width: 100%"
            >
              <el-table-column prop="id" label="序号" width="180"></el-table-column>
              <el-table-column prop="name" label="预案名称" width="180"></el-table-column>
              <el-table-column prop="type" label="预案类型"></el-table-column>
              <el-table-column prop="dept" label="所属单位"></el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="content-bottom">
        <el-button type="primary" @click="queren">确认</el-button>
        <el-button style="margin-left: 15px" @click="close">关闭</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      curTab: '5',
      tableRows: [
        {
          id: '0001',
          name: 'AAAAAAAAAAAAAA',
          type: '类型001',
          dept: '单位21212112151'
        },
        { id: '0002', name: 'BBBBB', type: '类型001', dept: '单位21212112151' },
        {
          id: '0003',
          name: 'CCCCCCCC',
          type: '类型001',
          dept: '单位21212112151'
        },
        {
          id: '0004',
          name: 'DDDDDDDD',
          type: '类型001',
          dept: '单位21212112151'
        },
        {
          id: '0005',
          name: 'EEEEEEEEEEEE',
          type: '类型001',
          dept: '单位21212112151'
        }
      ]
    };
  },
  methods: {
    queren() {
      this.$store.dispatch('openFlow');
      this.$store.dispatch('closeHandle');
    },
    close() {
      this.$store.dispatch('closeHandle');
    }
  }
};
</script>

<style lang="scss">
.custom-el-table {
  background-color: transparent !important;
  tr.custom-el-table-hd-row {
    background-color: #1f4d88 !important;

    > th {
      background-color: #1f4d88 !important;
      color: #fff !important;
      border-bottom: none !important;
    }
  }
  tr.custom-el-table-hover-row {
    background: transparent !important;
    & {
      > td {
        color: #fff !important;
        border-bottom: 1px solid #1e4179;
      }
    }
    &:hover {
      > td {
        background-color: #3f9ece !important;
        transition: 0.3s;
        color: #fff;
      }
    }
  }
}

.handle-plan-pad {
  width: 999px;
  height: 766px;
  left: 485px;
  bottom: 65px;
  position: absolute;
  background: url('../../assets/images/home-sj-related/handle-plan.png') no-repeat center;
  .content-room {
    padding: 20px 30px 10px 30px;
    .pad-title {
      font-size: 16px;
      color: #edf9ff;
    }
    .flow-map {
      border: 2px solid #2e4994;
      width: 100%;
      height: 284px;
      margin-top: 10px;
      display: flex;
      flex-direction: row;
      > div {
        width: 100%;
        // border: 1px solid red;
        display: flex;
        flex-direction: column;
        > p {
          height: 100%;
          color: #edf9ff;
          display: flex;
          align-items: center; /*垂直居中*/
          justify-content: center; /*水平居中*/
        }
        > div {
          height: 100%;
          display: flex;
          flex-direction: column;
          > p {
            height: 100%;
            color: #edf9ff;
            display: flex;
            align-items: center; /*垂直居中*/
            justify-content: center; /*水平居中*/
          }
        }
      }
      span {
        background-color: #3781d3;
        display: inline-block;
        height: 25px;
        font-size: 14px;
        line-height: 27px;
        text-align: center;
        border-radius: 3px;
        font-weight: normal;
      }
    }
    .svg-container {
      width: 100%;
      height: 284px;
      /*border: 1px solid red;*/
      position: absolute;
      width: 940px;
      top: 49px;
      > polyline {
        fill: white;
        stroke: #3781d3;
        stroke-width: 2px;
      }
    }
    .tabs-container {
      width: calc(100% + 3px);
      height: 350px;
      margin-top: 15px;
      .el-tabs--border-card {
        border: 0;
        background-color: transparent;
        .el-tabs__nav-scroll {
          background-color: #19376b;
          .el-tabs__item {
            &.is-active {
              color: rgba(255, 255, 255, 1);
              background-color: #39729d;
              border: 0;
            }
            color: rgba(255, 255, 255, 0.75);
            border: 0;
          }
        }
        .el-tabs__content {
          padding: 0;
          margin-top: 2px;
          background-color: transparent;
        }
      }
      .el-table::before {
        background-color: transparent;
      }
    }
    .content-bottom {
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