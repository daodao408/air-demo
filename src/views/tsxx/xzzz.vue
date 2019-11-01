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
  props: ['dialogTitle'],
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
              id: 2,
              name: '湖北高警一支队',
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
                      id: 211,
                      name: '刘某某(队长)',
                      click: false
                    },
                    {
                      id: 212,
                      name: '程某某',
                      click: false
                    },
                    {
                      id: 213,
                      name: '陈某某',
                      click: false
                    },
                    {
                      id: 214,
                      name: '郑某某',
                      click: false
                    },
                    {
                      id: 215,
                      name: '沈某某',
                      click: false
                    },
                    {
                      id: 216,
                      name: '唐某某',
                      click: false
                    },
                    {
                      id: 217,
                      name: '谢某某',
                      click: false
                    },
                    {
                      id: 218,
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
                  open: true,
                  children: [
                    {
                      id: 221,
                      name: '刘某某(队长)',
                      click: false
                    },
                    {
                      id: 222,
                      name: '程某某',
                      click: false
                    },
                    {
                      id: 223,
                      name: '陈某某',
                      click: false
                    },
                    {
                      id: 224,
                      name: '郑某某',
                      click: false
                    },
                    {
                      id: 225,
                      name: '沈某某',
                      click: false
                    }
                  ]
                },
                {
                  id: 23,
                  name: '湖北高警一支队孝感大队',
                  click: false,
                  iconSkin: 'pIcon01',
                  open: true,
                  children: [
                    {
                      id: 231,
                      name: '刘某某(队长)',
                      click: false
                    },
                    {
                      id: 234,
                      name: '程某某',
                      click: false
                    },
                    {
                      id: 235,
                      name: '陈某某',
                      click: false
                    },
                    {
                      id: 236,
                      name: '郑某某',
                      click: false
                    },
                    {
                      id: 237,
                      name: '沈某某',
                      click: false
                    },
                    {
                      id: 238,
                      name: '唐某某',
                      click: false
                    },
                    {
                      id: 239,
                      name: '谢某某',
                      click: false
                    }
                  ]
                },
                {
                  id: 24,
                  name: '湖北高警一支队蔡甸大队',
                  click: false,
                  iconSkin: 'pIcon01',
                  open: true,
                  children: [
                    {
                      id: 241,
                      name: '刘某某(队长)',
                      click: false
                    },
                    {
                      id: 242,
                      name: '程某某',
                      click: false
                    },
                    {
                      id: 243,
                      name: '陈某某',
                      click: false
                    },
                    {
                      id: 244,
                      name: '郑某某',
                      click: false
                    },
                    {
                      id: 245,
                      name: '沈某某',
                      click: false
                    },
                    {
                      id: 246,
                      name: '唐某某',
                      click: false
                    },
                    {
                      id: 247,
                      name: '谢某某',
                      click: false
                    },
                    {
                      id: 248,
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
                  open: true,
                  children: [
                    {
                      id: 251,
                      name: '刘某某(队长)',
                      click: false
                    },
                    {
                      id: 252,
                      name: '程某某',
                      click: false
                    },
                    {
                      id: 253,
                      name: '陈某某',
                      click: false
                    },
                    {
                      id: 254,
                      name: '郑某某',
                      click: false
                    },
                    {
                      id: 255,
                      name: '沈某某',
                      click: false
                    },
                    {
                      id: 256,
                      name: '唐某某',
                      click: false
                    }
                  ]
                },
                {
                  id: 26,
                  name: '湖北高警一支队咸宁大队',
                  click: false,
                  iconSkin: 'pIcon01',
                  open: true,
                  children: [
                    {
                      id: 261,
                      name: '刘某某(队长)',
                      click: false
                    },
                    {
                      id: 262,
                      name: '程某某',
                      click: false
                    },
                    {
                      id: 263,
                      name: '陈某某',
                      click: false
                    },
                    {
                      id: 264,
                      name: '郑某某',
                      click: false
                    },
                    {
                      id: 265,
                      name: '沈某某',
                      click: false
                    }
                  ]
                },
                {
                  id: 27,
                  name: '湖北高警一支队云梦大队',
                  click: false,
                  iconSkin: 'pIcon01',
                  open: true,
                  children: [
                    {
                      id: 271,
                      name: '刘某某(队长)',
                      click: false
                    },
                    {
                      id: 272,
                      name: '程某某',
                      click: false
                    },
                    {
                      id: 273,
                      name: '陈某某',
                      click: false
                    },
                    {
                      id: 274,
                      name: '郑某某',
                      click: false
                    },
                    {
                      id: 275,
                      name: '沈某某',
                      click: false
                    }
                  ]
                }
              ]
            },
            {
              id: 3,
              name: '湖北高警二支队',
              open: true,
              iconSkin: 'pIcon01',
              children: [
                {
                  id: 31,
                  name: '湖北高警二支队黄梅大队',
                  click: false,
                  iconSkin: 'pIcon01',
                  open: true,
                  children: [
                    {
                      id: 311,
                      name: '刘某某(队长)',
                      click: false
                    },
                    {
                      id: 312,
                      name: '程某某',
                      click: false
                    },
                    {
                      id: 313,
                      name: '陈某某',
                      click: false
                    },
                    {
                      id: 314,
                      name: '郑某某',
                      click: false
                    },
                    {
                      id: 315,
                      name: '沈某某',
                      click: false
                    }
                  ]
                },
                {
                  id: 32,
                  name: '湖北高警二支队黄石大队',
                  click: false,
                  iconSkin: 'pIcon01',
                  open: true,
                  children: [
                    {
                      id: 321,
                      name: '刘某某(队长)',
                      click: false
                    },
                    {
                      id: 322,
                      name: '程某某',
                      click: false
                    },
                    {
                      id: 323,
                      name: '唐某某',
                      click: false
                    },
                    {
                      id: 324,
                      name: '谢某某',
                      click: false
                    },
                    {
                      id: 325,
                      name: '付某某',
                      click: false
                    }
                  ]
                },
                {
                  id: 33,
                  name: '湖北高警二支队鄂州大队',
                  click: false,
                  iconSkin: 'pIcon01',
                  open: true,
                  children: [
                    {
                      id: 331,
                      name: '刘某某(队长)',
                      click: false
                    },
                    {
                      id: 332,
                      name: '沈某某',
                      click: false
                    },
                    {
                      id: 333,
                      name: '唐某某',
                      click: false
                    },
                    {
                      id: 334,
                      name: '谢某某',
                      click: false
                    },
                    {
                      id: 335,
                      name: '付某某',
                      click: false
                    }
                  ]
                },
                {
                  id: 34,
                  name: '湖北高警二支队下陆大队',
                  click: false,
                  iconSkin: 'pIcon01',
                  open: true,
                  children: [
                    {
                      id: 341,
                      name: '刘某某(队长)',
                      click: false
                    },
                    {
                      id: 342,
                      name: '程某某',
                      click: false
                    },
                    {
                      id: 343,
                      name: '陈某某',
                      click: false
                    },
                    {
                      id: 344,
                      name: '郑某某',
                      click: false
                    },
                    {
                      id: 345,
                      name: '沈某某',
                      click: false
                    },
                    {
                      id: 346,
                      name: '唐某某',
                      click: false
                    },
                    {
                      id: 347,
                      name: '谢某某',
                      click: false
                    }
                  ]
                },
                {
                  id: 35,
                  name: '湖北高警二支队崇阳大队',
                  click: false,
                  iconSkin: 'pIcon01',
                  open: true,
                  children: [
                    {
                      id: 351,
                      name: '刘某某(队长)',
                      click: false
                    },
                    {
                      id: 352,
                      name: '程某某',
                      click: false
                    },
                    {
                      id: 353,
                      name: '陈某某',
                      click: false
                    },
                    {
                      id: 354,
                      name: '郑某某',
                      click: false
                    },
                    {
                      id: 355,
                      name: '沈某某',
                      click: false
                    }
                  ]
                },
                {
                  id: 36,
                  name: '湖北高警一支队咸宁大队',
                  click: false,
                  iconSkin: 'pIcon01',
                  open: true,
                  children: [
                    {
                      id: 361,
                      name: '郑某某',
                      click: false
                    },
                    {
                      id: 362,
                      name: '沈某某',
                      click: false
                    },
                    {
                      id: 363,
                      name: '唐某某',
                      click: false
                    },
                    {
                      id: 364,
                      name: '谢某某',
                      click: false
                    },
                    {
                      id: 365,
                      name: '付某某',
                      click: false
                    }
                  ]
                },
                {
                  id: 37,
                  name: '湖北高警二支队阳新大队',
                  click: false,
                  iconSkin: 'pIcon01',
                  open: true,
                  children: [
                    {
                      id: 371,
                      name: '刘某某(队长)',
                      click: false
                    },
                    {
                      id: 372,
                      name: '程某某',
                      click: false
                    },
                    {
                      id: 373,
                      name: '陈某某',
                      click: false
                    },
                    {
                      id: 374,
                      name: '郑某某',
                      click: false
                    },
                    {
                      id: 375,
                      name: '沈某某',
                      click: false
                    },
                    {
                      id: 376,
                      name: '唐某某',
                      click: false
                    },
                    {
                      id: 377,
                      name: '谢某某',
                      click: false
                    },
                    {
                      id: 378,
                      name: '付某某',
                      click: false
                    }
                  ]
                }
              ]
            }
          ]

          // icon: '../../../assets/images/home-sj-info/jingyuan.png',
          // iconOpen: '../../../assets/images/home-sj-info/jingyuan.png',
          // iconClose: '../../../assets/images/home-sj-info/jingyuan.png'
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
          showLine: true,
          dblClickExpand: false
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
      this.ztreeInit();
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
      // if (treeNode.level < 2) {
      //   return;
      // }
      // 给节点添加内容
      //console.log(treeNode);
      var parentNode = treeNode.getParentNode();
      var aDom = $(`#${treeNode.tId}_a`);
      let pClass = '';
      let cClass = '';
      if (parentNode) {
        cClass = `c_${parentNode.tId}_icon_check`;
        pClass = `p_${treeNode.tId}_icon_check`;
      }
      const img = $(`<span class="noCheckedPeopleIcon iconChecked ${pClass} ${cClass}"></span>`);
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
          $(this)
            .siblings('ul')
            .find('.iconChecked')
            .addClass('noCheckedPeopleIcon');
          $(this)
            .siblings('ul')
            .find('.iconChecked')
            .removeClass('checkedPeopleIcon');
          if (
            $(this)
              .parents('ul')
              .hasClass('level2')
          ) {
            $(this)
              .parents('ul.level2')
              .siblings('a')
              .find('.iconChecked')
              .removeClass('checkedPeopleIcon');
            $(this)
              .parents('ul.level2')
              .siblings('a')
              .find('.iconChecked')
              .addClass('noCheckedPeopleIcon');
          }
          if (
            $(this)
              .parents('ul')
              .hasClass('level1')
          ) {
            $(this)
              .parents('ul.level1')
              .siblings('a')
              .find('.iconChecked')
              .removeClass('checkedPeopleIcon');
            $(this)
              .parents('ul.level1')
              .siblings('a')
              .find('.iconChecked')
              .addClass('noCheckedPeopleIcon');
          }
          if (
            $(this)
              .parents('ul')
              .hasClass('level0')
          ) {
            $(this)
              .parents('ul.level0')
              .siblings('a')
              .find('.iconChecked')
              .removeClass('checkedPeopleIcon');
            $(this)
              .parents('ul.level0')
              .siblings('a')
              .find('.iconChecked')
              .addClass('noCheckedPeopleIcon');
          }
        } else {
          $(this)
            .find('.iconChecked')
            .addClass('checkedPeopleIcon');
          $(this)
            .find('.iconChecked')
            .removeClass('noCheckedPeopleIcon');
          $(this)
            .siblings('ul')
            .find('.iconChecked')
            .removeClass('noCheckedPeopleIcon');
          $(this)
            .siblings('ul')
            .find('.iconChecked')
            .addClass('checkedPeopleIcon');
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
        showPageStr: 'tsxx',
        chosePeopleData: [
          {
            name: '湖北高警一支队全部警员',
            showFlag: true
          }
        ]
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
    background: url('../../assets/images/bg-jqdsj-close.png') no-repeat center;
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
            &.level0 {
              &.root_open {
                background: url(../../assets/images/home-yjts-spth/chosezuzhi-icon2.png) no-repeat;
                background-size: 16px 16px;
                vertical-align: top;
                vertical-align: middle;
                margin-right: 8px;
                margin-top: 2px;
              }
              &.root_close {
                background: url(../../assets/images/home-yjts-spth/chosezuzhi-icon3.png) no-repeat;
                background-size: 16px 16px;
                vertical-align: top;
                vertical-align: middle;
                margin-right: 8px;
                margin-top: 2px;
              }
            }
            &.pIcon01_ico_docu {
              margin-right: 3px;
              margin-left: -5px;
              background: url(../../assets/images/home-yjts-spth/chosezuzhi-icon1.png) no-repeat;
              background-size: 16px 16px;
              vertical-align: top;
              margin-top: 3px;
            }
            &.pIcon01_ico_open {
              margin-right: 3px;
              margin-left: -5px;
              background: url(../../assets/images/home-yjts-spth/chosezuzhi-icon1.png) no-repeat;
              background-size: 16px 16px;
              vertical-align: top;
              margin-top: 3px;
            }
            &.pIcon01_ico_close {
              margin-right: 3px;
              background: url(../../assets/images/home-yjts-spth/chosezuzhi-icon1.png) no-repeat;
              background-size: 16px 16px;
              vertical-align: top;
              margin-top: 3px;
            }
            &.roots_open {
              background: url(../../assets/images/home-yjts-spth/chosezuzhi-icon2.png) no-repeat;
              background-size: 16px 16px;
              vertical-align: top;
              vertical-align: middle;
              margin-right: 8px;
              margin-top: 2px;
            }
            &.roots_close {
              background: url(../../assets/images/home-yjts-spth/chosezuzhi-icon3.png) no-repeat;
              background-size: 16px 16px;
              vertical-align: top;
              vertical-align: middle;
              margin-right: 8px;
              margin-top: 2px;
            }
            &.center_open {
              background: url(../../assets/images/home-yjts-spth/chosezuzhi-icon2.png) no-repeat;
              background-size: 16px 16px;
              vertical-align: top;
              vertical-align: middle;
              margin-right: 8px;
              margin-top: 2px;
            }
            &.center_close {
              background: url(../../assets/images/home-yjts-spth/chosezuzhi-icon3.png) no-repeat;
              background-size: 16px 16px;
              vertical-align: top;
              vertical-align: middle;
              margin-right: 8px;
              margin-top: 2px;
            }
            &.bottom_open {
              background: url(../../assets/images/home-yjts-spth/chosezuzhi-icon2.png) no-repeat;
              background-size: 16px 16px;
              vertical-align: top;
              vertical-align: middle;
              margin-right: 8px;
              margin-top: 2px;
            }
            &.bottom_close {
              background: url(../../assets/images/home-yjts-spth/chosezuzhi-icon3.png) no-repeat;
              background-size: 16px 16px;
              vertical-align: top;
              vertical-align: middle;
              margin-right: 8px;
              margin-top: 2px;
            }

            &.switch {
              // width: 20px;
              // height: 26px;
              &.roots_open {
                background: url(../../assets/images/home-yjts-spth/chosezuzhi-icon2.png) no-repeat;
                background-size: 16px 16px;
                vertical-align: top;
                vertical-align: middle;
                margin-right: 8px;
                margin-top: 2px;
              }
              &.roots_close {
                background: url(../../assets/images/home-yjts-spth/chosezuzhi-icon3.png) no-repeat;
                background-size: 16px 16px;
                vertical-align: top;
                vertical-align: middle;
                margin-right: 8px;
                margin-top: 2px;
              }
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
          &.level0 {
            width: calc(100% - 20px);
            padding-left: 5px;
            position: relative;
            box-sizing: border-box;
            .iconChecked {
              display: inline-block;
              width: 16px;
              height: 16px;
              background-size: 16px 16px;
              position: absolute;
              top: 4px;
              right: 68px;
            }
          }
          &.level1 {
            width: calc(100% - 20px);
            padding-left: 5px;
            position: relative;
            box-sizing: border-box;
            .iconChecked {
              display: inline-block;
              width: 16px;
              height: 16px;
              background-size: 16px 16px;
              position: absolute;
              top: 4px;
              right: 68px;
            }
          }
          &.level2 {
            width: calc(100% - 20px);
            padding-left: 5px;
            position: relative;
            box-sizing: border-box;
            .iconChecked {
              display: inline-block;
              width: 16px;
              height: 16px;
              background-size: 16px 16px;
              position: absolute;
              top: 4px;
              right: 68px;
            }
          }
          &.level3 {
            width: calc(100% - 20px);
            padding-left: 5px;
            position: relative;
            box-sizing: border-box;
            .iconChecked {
              display: inline-block;
              width: 16px;
              height: 16px;
              background-size: 16px 16px;
              position: absolute;
              top: 4px;
              right: 60px;
            }
          }

          .checkedPeopleIcon {
            background: url(../../assets/images/home-yjts-spth/chosezuzhi-icon5.png) no-repeat;
          }
          .noCheckedPeopleIcon {
            background: url(../../assets/images/home-yjts-spth/chosezuzhi-icon4.png) no-repeat;
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
