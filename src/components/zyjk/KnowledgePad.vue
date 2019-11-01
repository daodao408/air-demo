<template>
    <div class="knowledge-pad">
        <div class="title">
            <div class="close-icon" @click="closeKnowledgePad"></div>
        </div>
        <div class="content">
            <div class="search-container">
                <el-input placeholder="输入关键字" suffix-icon="el-icon-search" v-model="search_text"></el-input>
            </div>
            <div style="padding: 20px">
                <el-tabs type="border-card">
                    <el-tab-pane label="应急预案">
                        <p>
                            为规范省管高速公路重特大事故应急处置程序，快速、及时、妥善地组织实施应急救援、处置工作，最大限度减少交通事故伤亡、财产损失和社会影响，根据《中华人民共和国道路交通安全法》、《中华人民共和国道路交通安全法实施条例》、《道路交通事故处理程序规定》等法律法规的规定，结合我省高速公路的实际，制定本预案。
                        </p>
                        <p>一、本预案适用范围</p>
                        <p>本预案中的重特大事故，是指省管高速公路上发生的一次死亡3人以上较大交通事故及其他可能造成重大影响的案事件。主要有以下情形：</p>
                        <p>(一)一次死亡3人以上较大交通事故；</p>
                        <p>(二)运载危险物品的车辆发生泄漏、爆炸、燃烧等交通事故；</p>
                        <p>(三)发生副厅（局）以上领导、社会名人伤亡交通事故；</p>
                        <p>(四)发生外国人及港澳台人员死亡或者造成3名以上外国人及港澳台人员受重伤交通事故；</p>
                        <p>(五)发生涉及军警车辆或人员的死亡交通事故；</p>
                        <p>(六)发生涉疆、涉藏人员1人以上死亡或3人以上重伤交通事故；</p>
                        <p>(七)发生5辆以上机动车连环相撞或者同向1公里以内发生3起以上多车相撞交通事故；</p>
                        <p>(八)因交通事故引发群体性事件或者其他社会安全事件；</p>
                        <p>(九)客运车辆发生10人以上重伤或影响特别恶劣的道路交通事故；</p>
                        <p>(十)由于地震、山洪、塌方、泥石流、雷击等不可抗拒的自然灾害等意外情况造成伤亡人数较多的交通事故。</p>
                        <p>二、处置原则</p>
                        <p>本预案的实施,坚持“依法、快速、高效”的基本原则，强化抢救意识和大局观念，统一指挥，明确分工，各尽其责，保证救援和处理工作高效、快速、有序的进行。</p>
                        <p>三、人员构成及职责</p>
                        <p>为加强重特大事故应急处置工作的领导，高警总队成立重特大事故应急处置领导小组，根据实际需要下设现场指挥组、现场保护和交通疏导组、应急救援组、事故调查组、信息联络组、后勤保障组、善后工作组、对外协调组等若干工作组：</p>
                        <p>（一）现场指挥组：由高警总队总队长担任组长，分管副总队长为副组长，相关支队支队长为成员。</p>
                        <p>职责：按照处置原则，负责应急救援、处置工作的指挥、组织和部门之间的工作协调及应急救援工作情况的汇报。</p>
                        <p>（二）现场保护和交通疏导组：由案发地大队巡逻中队干部带领巡逻民警组成，负责现场的保护、警戒、交通疏导、管制和安全防范。</p>
                        <p>（三）应急救援组：由案发地大队大队长带领大队民警组成，组织协调当地政府和公安、消防、交通、安监、卫生、环保、社会施救等部门进行现场救护和抢险救援。</p>
                        <p>（四）事故调查组：由案发地大队分管事故处理的大队领导带领事故处理民警组成，总队交管支队协助，负责对现场进行勘查、记录、拍摄，制作现场勘查记录图，提取、固定相关证据，对事故车辆基本情况进行检验、记录,对事故原因进行调查。</p>
                        <p>（五）信息联络组：由案发地大队领导（或相关支队领导）带领大队办公室民警组成，总队综合保障支队协助，负责收集案件信息及处置进展情况，做好上传下达、请示报告、对外新闻发布等工作，并按时逐级向当地党委、政府及上级公安机关及其有关部门汇报。</p>
                        <p>（六）后勤保障组：由案发地大队领导带领大队民警组成，总队综合保障支队协助，负责交通事故相关人员和物质的应急保障工作，并根据勘查和救援工作的需要，做好车辆、物资的调度工作。</p>
                        <p>（七）善后工作组：由案发地大队分管事故处理的大队领导带领大队民警组成，根据案情及案发大队警力的实际，指挥组可抽调其他大队民警予以协助，负责伤亡人员及家属的接待、安抚和善后处理工作。</p>
                        <p>（八）对外协调组：由案发地大队领导带领大队民警组成，负责协调事发地公安、民政、财政、卫生、保险公司等相关部门。</p>
                    </el-tab-pane>
                    <el-tab-pane label="法律法规" header-row-class-name ="tb_head">
                        <el-table
                                class="custom-el-table"
                                :data="tableRows"
                                :row-class-name="'custom-el-table-hover-row'"
                                :header-row-class-name="'custom-el-table-hd-row'"
                                style="width: 100%">
                            <el-table-column
                                    prop="code"
                                    label="违法代码"
                                    width="90">
                            </el-table-column>
                            <el-table-column
                                    prop="des"
                                    label="违法描述"
                                    width="575">
                            </el-table-column>
                            <el-table-column
                                    prop="point"
                                    label="计分"
                                    width="90">
                            </el-table-column>
                            <el-table-column
                                    prop="cost"
                                    label="罚款"
                                    width="90">
                            </el-table-column>
                        </el-table>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </div>
    </div>
</template>

<script>
import _ from 'lodash';
export default {
  name: '',
  components: {},
  computed: {},
  data() {
    return {
      search_text: '',
      tableRows: [
        { code: '60450', des: '机动车号牌不清晰、不完整的', point: '0', cost: '200' },
        {
          code: '70010',
          des: '在高速公路上执行救援、清障任务的车辆未按规定安装示警灯，喷涂明显标志图案',
          point: '0',
          cost: '200'
        },
        {
          code: '70020',
          des: '在没有交通信号的道路上，机动车未在确保安全、畅通的原则下通行的',
          point: '0',
          cost: '200'
        },
        { code: '70170', des: '超过运输车辆的核定载质量装载危险化学品的', point: '0', cost: '50000' },
        { code: '70171', des: '超过运输车辆的核定载质量装载危险化学品的', point: '0', cost: '80000' },
        { code: '70172', des: '超过运输车辆的核定载质量装载危险化学品的', point: '0', cost: '100000' },
        { code: '70180', des: '使用安全技术条件不符合国家标准要求的车辆运输危险化学品的', point: '0', cost: '50000' },
        { code: '70181', des: '使用安全技术条件不符合国家标准要求的车辆运输危险化学品的', point: '0', cost: '80000' },
        { code: '70182', des: '使用安全技术条件不符合国家标准要求的车辆运输危险化学品的', point: '0', cost: '100000' },
        {
          code: '70190',
          des: '运输危险化学品的车辆未经公安机关批准进入危险化学品运输车辆限制通行的区域的',
          point: '0',
          cost: '50000'
        },
        {
          code: '70191',
          des: '运输危险化学品的车辆未经公安机关批准进入危险化学品运输车辆限制通行的区域的',
          point: '0',
          cost: '80000'
        },
        {
          code: '70192',
          des: '运输危险化学品的车辆未经公安机关批准进入危险化学品运输车辆限制通行的区域的',
          point: '0',
          cost: '100000'
        },
        { code: '70200', des: '未取得剧毒化学品道路运输通行证，通过道路运输剧毒化学品的', point: '0', cost: '50000' },
        { code: '70201', des: '未取得剧毒化学品道路运输通行证，通过道路运输剧毒化学品的', point: '0', cost: '80000' },
        { code: '70202', des: '未取得剧毒化学品道路运输通行证，通过道路运输剧毒化学品的', point: '0', cost: '100000' },
        {
          code: '70210',
          des: '危险化学品运输车辆未悬挂或者喷涂警示标志，或者悬挂或者喷涂的警示标志不符合国家标准要求的',
          point: '0',
          cost: '10000'
        },
          { code: '70220', des: '通过道路运输危险化学品，不配备押运人员的', point: '0', cost: '10000' },
          { code: '70221', des: '通过道路运输危险化学品，不配备押运人员的', point: '0', cost: '30000' },
          { code: '70222', des: '通过道路运输危险化学品，不配备押运人员的', point: '0', cost: '50000' },
          { code: '70230', des: '运输剧毒化学品或者易制爆危险化学品途中需要较长时间停车，驾驶人员、押运人员不向当地公安机关报告的', point: '0', cost: '10000' },
          { code: '70231', des: '运输剧毒化学品或者易制爆危险化学品途中需要较长时间停车，驾驶人员、押运人员不向当地公安机关报告的', point: '0', cost: '30000' },
          { code: '70232', des: '运输剧毒化学品或者易制爆危险化学品途中需要较长时间停车，驾驶人员、押运人员不向当地公安机关报告的', point: '0', cost: '50000' },
      ]
    };
  },
  methods: {
    closeKnowledgePad() {
      this.$store.commit('TOGGLE_KNOWLEDGE_PAD');
    }
  }
};
</script>

<style lang="scss">
.knowledge-pad {
  width: 924px;
  height: 549px;
  position: absolute;
  bottom: 181px;
  left: 515px;
  background: url('../../assets/images/home-sj-related/知识库.png') no-repeat center;
  .search-container {
    width: 200px;
    position: absolute;
    right: 22px;
    top: 68px;
    z-index: 1;
    .el-input__inner {
      background-color: transparent;
      border: 1px solid #1e4179;
      color: #99bbef;
    }
    input {
      padding-left: 20px;
    }
  }
  .el-table::before {
    background-color: transparent;
  }
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
          color: #99bbef !important;
          border-bottom: 1px solid #1e4179;
        }
      }
      &:hover {
        > td {
          background-color: #3f9ece !important;
          transition: 0.3s;
          color: #fff !important;
        }
      }
    }
      .el-table__body-wrapper {
        overflow-x: hidden;
      }
  }
  .title {
    width: 100%;
    height: 50px;
    text-align: right;
    vertical-align: middle;
    .close-icon {
      width: 23px;
      height: 23px;
      background: url('../../assets/images/home-sj-related/知识库关闭.png') no-repeat center;
      cursor: pointer;
      position: absolute;
      top: 20px;
      right: 20px;
    }
  }
  .content {
    width: calc(100% - 2px);
    height: 497px;
    p {
      color: #99bbef;
      line-height: 2em; //行间距（应该是2倍行间距的意思）
      text-indent: 2em; //首行缩进2个字
    }
  }
  .el-tabs--border-card {
    background: transparent;
    border: none;
    > .el-tabs__header {
      border-bottom: none;
      background-color: transparent;
      .el-tabs__item {
        border: none;
      }
    }
    .el-tabs__nav-scroll {
      .el-tabs__item.is-active {
        color: #ffffff;
        background-color: #3b64b6;
        border: 0;
      }
    }
    .el-tabs__content {
      border: 1px solid #226298;
      height: 390px;
      overflow: auto;
      overflow-x: hidden;
    }
  }
}
</style>