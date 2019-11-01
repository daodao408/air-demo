<template>
  <!--警情大数据-->
  <div class="yjtsspthPage-xzzz">
    <div class="bg-yjtsspthPage-close" @click="closeJqdsjPage"></div>
    <div class="yjtsspthPage-xzzz-title">{{dialogTitle}}</div>
    <div class="yjtsspthPage-ztree">
      <el-scrollbar>
        <div id="treeDemo" class="ztree"></div>
      </el-scrollbar> 
    </div>
    <div class="yjtsspthPage-btn">
      <el-button class="ljth-btn" type="primary" @click="goToLjth">确定</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Jqdsj',
  props: ['dialogTitle', 'xzzzIsChoseFlag'],
  components: {},
  data() {
    return {
      zNodes: [
        {
          id: 1,
          pId: 0,
          name: '湖北高警总队',
          open: true,
          iconSkin: 'pIcon01',
          children: [
            {
              id: 21,
              name: '湖北高警一支队汉川大队',
              click: false,
              iconSkin: 'pIcon01',
              open: true,
              children: [
                {
                  id: 29,
                  name: '刘某某(队长)',
                  click: false
                },
                {
                  id: 30,
                  name: '程某某',
                  click: false
                },
                {
                  id: 31,
                  name: '陈某某',
                  click: false
                },
                {
                  id: 32,
                  name: '郑某某',
                  click: false
                },
                {
                  id: 33,
                  name: '沈某某',
                  click: false
                },
                {
                  id: 34,
                  name: '唐某某',
                  click: false
                },
                {
                  id: 35,
                  name: '谢某某',
                  click: false
                },
                {
                  id: 36,
                  name: '付某某',
                  click: false
                }
              ]
            },
            {
              id: 22,
              name: '湖北高警一支队仙桃大队',
              click: false,
              iconSkin: 'pIcon01',
              open: false,
              children: [
                {
                  id: 29,
                  name: '刘某某(队长)',
                  click: false
                },
                {
                  id: 30,
                  name: '程某某',
                  click: false
                },
                {
                  id: 31,
                  name: '陈某某',
                  click: false
                },
                {
                  id: 32,
                  name: '郑某某',
                  click: false
                },
                {
                  id: 33,
                  name: '沈某某',
                  click: false
                },
                {
                  id: 34,
                  name: '唐某某',
                  click: false
                },
                {
                  id: 35,
                  name: '谢某某',
                  click: false
                },
                {
                  id: 36,
                  name: '付某某',
                  click: false
                }
              ]
            },
            {
              id: 23,
              name: '湖北高警一支队孝感大队',
              click: false,
              iconSkin: 'pIcon01',
              open: false,
              children: [
                {
                  id: 29,
                  name: '刘某某(队长)',
                  click: false
                },
                {
                  id: 30,
                  name: '程某某',
                  click: false
                },
                {
                  id: 31,
                  name: '陈某某',
                  click: false
                },
                {
                  id: 32,
                  name: '郑某某',
                  click: false
                },
                {
                  id: 33,
                  name: '沈某某',
                  click: false
                },
                {
                  id: 34,
                  name: '唐某某',
                  click: false
                },
                {
                  id: 35,
                  name: '谢某某',
                  click: false
                },
                {
                  id: 36,
                  name: '付某某',
                  click: false
                }
              ]
            },
            {
              id: 24,
              name: '湖北高警一支队蔡甸大队',
              click: false,
              iconSkin: 'pIcon01',
              open: false,
              children: [
                {
                  id: 29,
                  name: '刘某某(队长)',
                  click: false
                },
                {
                  id: 30,
                  name: '程某某',
                  click: false
                },
                {
                  id: 31,
                  name: '陈某某',
                  click: false
                },
                {
                  id: 32,
                  name: '郑某某',
                  click: false
                },
                {
                  id: 33,
                  name: '沈某某',
                  click: false
                },
                {
                  id: 34,
                  name: '唐某某',
                  click: false
                },
                {
                  id: 35,
                  name: '谢某某',
                  click: false
                },
                {
                  id: 36,
                  name: '付某某',
                  click: false
                }
              ]
            },
            {
              id: 25,
              name: '湖北高警一支队江夏大队',
              click: false,
              iconSkin: 'pIcon01',
              open: false,
              children: [
                {
                  id: 29,
                  name: '刘某某(队长)',
                  click: false
                },
                {
                  id: 30,
                  name: '程某某',
                  click: false
                },
                {
                  id: 31,
                  name: '陈某某',
                  click: false
                },
                {
                  id: 32,
                  name: '郑某某',
                  click: false
                },
                {
                  id: 33,
                  name: '沈某某',
                  click: false
                },
                {
                  id: 34,
                  name: '唐某某',
                  click: false
                },
                {
                  id: 35,
                  name: '谢某某',
                  click: false
                },
                {
                  id: 36,
                  name: '付某某',
                  click: false
                }
              ]
            },
            {
              id: 26,
              name: '湖北高警一支队咸宁大队',
              click: false,
              iconSkin: 'pIcon01',
              open: false,
              children: [
                {
                  id: 29,
                  name: '刘某某(队长)',
                  click: false
                },
                {
                  id: 30,
                  name: '程某某',
                  click: false
                },
                {
                  id: 31,
                  name: '陈某某',
                  click: false
                },
                {
                  id: 32,
                  name: '郑某某',
                  click: false
                },
                {
                  id: 33,
                  name: '沈某某',
                  click: false
                },
                {
                  id: 34,
                  name: '唐某某',
                  click: false
                },
                {
                  id: 35,
                  name: '谢某某',
                  click: false
                },
                {
                  id: 36,
                  name: '付某某',
                  click: false
                }
              ]
            },
            {
              id: 27,
              name: '湖北高警一支队云梦大队',
              click: false,
              iconSkin: 'pIcon01',
              open: false,
              children: [
                {
                  id: 29,
                  name: '刘某某(队长)',
                  click: false
                },
                {
                  id: 30,
                  name: '程某某',
                  click: false
                },
                {
                  id: 31,
                  name: '陈某某',
                  click: false
                },
                {
                  id: 32,
                  name: '郑某某',
                  click: false
                },
                {
                  id: 33,
                  name: '沈某某',
                  click: false
                },
                {
                  id: 34,
                  name: '唐某某',
                  click: false
                },
                {
                  id: 35,
                  name: '谢某某',
                  click: false
                },
                {
                  id: 36,
                  name: '付某某',
                  click: false
                }
              ]
            }
          ]
          // icon: '../../../assets/images/home-sj-info/jingyuan.png',
          // iconOpen: '../../../assets/images/home-sj-info/jingyuan.png',
          // iconClose: '../../../assets/images/home-sj-info/jingyuan.png'
        },
        {
          id: 2,
          name: '湖北高警一支队',
          open: true,
          iconSkin: 'pIcon01'
        }
      ],
      setting: {
        data: {
          key: {
            name: 'name'
          },
          simpleData: {
            enable: false,
            idKey: 'id',
            pIdKey: 'pId'
          }
        },
        check: {
          enable: false
        },
        view: {
          showIcon: true,
          showLine: true
        },
        callback: {
          // beforeClick: this.beforeClick,
          // onClick: this.onClick
          onRightClick: this.OnRightClick,
          onNodeCreated: this.ztreeNodeCreated
        }
      },
      checkNodeArr: []
    };
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      $('#treeDemo_1_ul')
        .find('.iconChecked')
        .removeClass('checkedPeopleIcon');
      this.ztreeInit();
      if (
        this.xzzzIsChoseFlag &&
        $('#treeDemo_1_ul')
          .find('.iconChecked')
          .hasClass('noCheckedPeopleIcon')
      ) {
        $('#treeDemo_1_ul')
          .find('.iconChecked')
          .removeClass('noCheckedPeopleIcon');
        $('#treeDemo_1_ul')
          .find('.iconChecked')
          .addClass('checkedPeopleIcon');
        $('#treeDemo_8_a')
          .find('.iconChecked')
          .removeClass('checkedPeopleIcon');
        $('#treeDemo_8_a')
          .find('.iconChecked')
          .addClass('noCheckedPeopleIcon');
        $('#treeDemo_9_a')
          .find('.iconChecked')
          .removeClass('checkedPeopleIcon');
        $('#treeDemo_9_a')
          .find('.iconChecked')
          .addClass('noCheckedPeopleIcon');
        $('#treeDemo_10_a')
          .find('.iconChecked')
          .removeClass('checkedPeopleIcon');
        $('#treeDemo_10_a')
          .find('.iconChecked')
          .addClass('noCheckedPeopleIcon');
      }
    });
  },
  methods: {
    // 点击关闭按钮关闭弹出框
    closeJqdsjPage() {
      this.$emit('close');
    },
    OnRightClick(a, b, c) {},
    // 节点生成回调
    ztreeNodeCreated: function(event, treeId, treeNode) {
      if (treeNode.level < 2) {
        return;
      }
      var parentNode = treeNode.getParentNode();
      // 给节点添加内容
      var aDom = $(`#${treeNode.tId}_a`);
      const img = $(`<span class="noCheckedPeopleIcon iconChecked"></span>`);
      img.appendTo(aDom);
      $(aDom).bind('click', function() {
        if (
          $(this)
            .find('.iconChecked')
            .hasClass('checkedPeopleIcon')
        ) {
          $(this)
            .find('.iconChecked')
            .removeClass('checkedPeopleIcon');
          $(this)
            .find('.iconChecked')
            .addClass('noCheckedPeopleIcon');
        } else {
          $(this)
            .find('.iconChecked')
            .addClass('checkedPeopleIcon');
          $(this)
            .find('.iconChecked')
            .removeClass('noCheckedPeopleIcon');
        }
      });
    },

    // ztree初始化
    ztreeInit() {
      $.fn.zTree.init($('#treeDemo'), this.setting, this.zNodes);
    },
    // 点击立即通话按钮
    goToLjth() {
      this.$emit('close', {
        showPageStr: 'spth'
      });
    }
  }
};
</script>

<style lang="scss">
$BlueColor: #207ec0;
.yjtsspthPage-xzzz {
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
  .yjtsspthPage-xzzz-title {
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
  .yjtsspthPage-ztree {
    width: calc(100% - 60px);
    height: 415px;
    margin: 0 30px;
    padding: 15px 20px 15px 0;
    background-color: #2c326b;
    border: 1px solid #4558a8;
    box-sizing: border-box;
    .el-scrollbar {
      height: 385px;
      z-index: 18;
      .el-scrollbar__wrap {
        position: relative;
        overflow-x: hidden;
        overflow-y: auto;
      }
    }
    .ztree {
      width: 100%;
      height: 100%;
      padding: 0 15px;
      box-sizing: border-box;
      li {
        span {
          &.button {
            &.pIcon01_ico_docu {
              margin-right: 3px;
              margin-left: -5px;
              background: url(../../../assets/images/home-yjts-spth/chosezuzhi-icon1.png) no-repeat;
              background-size: 16px 16px;
              vertical-align: top;
              margin-top: 3px;
            }
            &.pIcon01_ico_open {
              margin-right: 3px;
              margin-left: -5px;
              background: url(../../../assets/images/home-yjts-spth/chosezuzhi-icon1.png) no-repeat;
              background-size: 16px 16px;
              vertical-align: top;
              margin-top: 3px;
            }
            &.pIcon01_ico_close {
              margin-right: 3px;
              background: url(../../../assets/images/home-yjts-spth/chosezuzhi-icon1.png) no-repeat;
              background-size: 16px 16px;
              vertical-align: top;
              margin-top: 3px;
            }
            &.roots_open {
              background: url(../../../assets/images/home-yjts-spth/chosezuzhi-icon2.png) no-repeat;
              background-size: 16px 16px;
              vertical-align: top;
              vertical-align: middle;
              margin-right: 8px;
              margin-top: 2px;
            }
            &.roots_close {
              background: url(../../../assets/images/home-yjts-spth/chosezuzhi-icon3.png) no-repeat;
              background-size: 16px 16px;
              vertical-align: top;
              vertical-align: middle;
              margin-right: 8px;
              margin-top: 2px;
            }
            &.center_open {
              background: url(../../../assets/images/home-yjts-spth/chosezuzhi-icon2.png) no-repeat;
              background-size: 16px 16px;
              vertical-align: top;
              vertical-align: middle;
              margin-right: 8px;
              margin-top: 2px;
            }
            &.center_close {
              background: url(../../../assets/images/home-yjts-spth/chosezuzhi-icon3.png) no-repeat;
              background-size: 16px 16px;
              vertical-align: top;
              vertical-align: middle;
              margin-right: 8px;
              margin-top: 2px;
            }
            &.bottom_open {
              background: url(../../../assets/images/home-yjts-spth/chosezuzhi-icon2.png) no-repeat;
              background-size: 16px 16px;
              vertical-align: top;
              vertical-align: middle;
              margin-right: 8px;
              margin-top: 2px;
            }
            &.bottom_close {
              background: url(../../../assets/images/home-yjts-spth/chosezuzhi-icon3.png) no-repeat;
              background-size: 16px 16px;
              vertical-align: top;
              vertical-align: middle;
              margin-right: 8px;
              margin-top: 2px;
            }

            &.switch {
              width: 20px;
              height: 26px;
            }
            &.ico_docu {
              display: none;
            }
          }
        }

        a {
          color: #fff;
          height: 24px;
          line-height: 24px;
          margin-top: -2px;
          &.level2 {
            width: calc(100% - 20px);
            padding-left: 5px;
            position: relative;
            box-sizing: border-box;
          }
          .iconChecked {
            display: inline-block;
            width: 16px;
            height: 16px;
            background-size: 16px 16px;
            position: absolute;
            top: 4px;
            right: 60px;
          }
          .checkedPeopleIcon {
            background: url(../../../assets/images/home-yjts-spth/chosezuzhi-icon5.png) no-repeat;
          }
          .noCheckedPeopleIcon {
            background: url(../../../assets/images/home-yjts-spth/chosezuzhi-icon4.png) no-repeat;
          }
          &:hover {
            text-decoration: none;
          }
          &.curSelectedNode {
            background-color: #344889;
            border: none;
          }
          span {
            &.node_name {
              margin-left: 8px;
              font-size: 14px;
            }
          }
        }
        ul {
          &.level0 {
            padding: 10px 0 10px 18px;
          }
        }
        #treeDemo_65_ico {
          margin-left: 3px;
        }
      }
    }
  }
  .yjtsspthPage-btn {
    width: 100%;
    text-align: center;
    margin-top: 25px;
    .el-button {
      &.ljth-btn {
        width: 120px;
        padding: 0;
        height: 35px;
        line-height: 35px;
        background: transparent;
        border: 1px solid #4469ba;
        text-align: center;
        color: #8aa9e2;
      }
      &:hover {
        background: #4a78d0;
        color: #fff;
      }
    }
  }
}
</style>
