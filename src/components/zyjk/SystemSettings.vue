<template>
    <div class="system-settings">
        <div class="setting-title">
            <div class="close-icon" @click="closeKnowledgePad"></div>
        </div>
        <div class="setting-content">
            <div class="_1">
                <el-tree :data="data" :props="defaultProps" node-key="id" :default-expand-all="true" :default-checked-keys="[11]" :check-on-click-node="true" @check-change="handleClick" ref="treeForm" @node-click="nodeClick"></el-tree>
            </div>
            <div class="_2">
                <div style="padding: 0 20px">
                    <p class="jg-title">用户机构</p>
                    <div class="jg-tree">
                        <div class="jg-btns">
                            <el-button size="mini" style="background-color: #00a084;border-color: #00a084;" type="success">新增</el-button>
                            <el-button size="mini" style="background-color: #0f51cb;border-color: #0f51cb;" type="primary">编辑</el-button>
                            <el-button size="mini" style="background-color: #519bc8;border-color: #519bc8;" type="info">删除</el-button>
                        </div>
                        <el-tree :data="userData" :props="defaultProps" node-key="id" :default-expand-all="true" :default-checked-keys="[11]" @check-change="handleClick1" ref="treeForm1" @node-click="nodeClick1"></el-tree>
                    </div>
                </div>
            </div>
            <div class="_3">
                <div class="table-btns">
                    <el-input placeholder="输入关键词" suffix-icon="el-icon-search" v-model="search_key"></el-input>
                    <el-button style="float: right;background-color: #519bc8;border-color: #519bc8;margin: 0 20px 0 10px" size="mini" type="info">删除</el-button>
                    <el-button style="float: right;background-color: #2f81d5;border-color: #2f81d5" size="mini" type="success">新增</el-button>
                </div>
                <div class="table-container">
                    <el-table
                            ref="multipleTable"
                            :data="tableRows"
                            tooltip-effect="dark"
                            style="width: 100%"
                            class="custom-el-table"
                            :row-class-name="'custom-el-table-hover-row'"
                            :header-row-class-name="'custom-el-table-hd-row'">
                        <el-table-column
                                type="selection"
                                width="55">
                        </el-table-column>
                        <el-table-column
                                prop="index"
                                label="序号">
                        </el-table-column>
                        <el-table-column
                                prop="userName"
                                label="用户名">
                        </el-table-column>
                        <el-table-column
                                prop="name"
                                label="姓名">
                        </el-table-column>
                        <el-table-column
                                prop="dept"
                                label="所属部门">
                        </el-table-column>
                        <el-table-column
                                prop="phone"
                                label="联系电话">
                        </el-table-column>
                        <el-table-column
                                prop="status"
                                label="状态">
                        </el-table-column>
                        <el-table-column
                                label="操作">
                            <template>
                                <div>
                                    <el-button class="table-operation-btn" type="text" size="small">编辑</el-button>
                                    <el-button class="table-operation-btn" type="text" size="small">删除</el-button>
                                    <el-button class="table-operation-btn" type="text" size="small">角色</el-button>
                                </div>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
                <div class="table-footer">
                    <el-pagination
                            background
                            layout="prev, pager, next"
                            :total="1000">
                    </el-pagination>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import _ from "lodash";
import { mapGetters } from 'vuex';
export default {
    name: "",
    computed: {
        ...mapGetters(['zyjkPageState'])
    },
    computed: {
    },
    data() {
        return {
            search_key: "",
            data: [{
                id: '1',
                label: '系统管理',
                children: [{id: '11', label: '用户机构'}, {id: '12', label: '角色管理'}, {id: '13', label: '子系统管理'}, {id: '14', label: '菜单管理'}]
            }, {
                id: '2',
                label: '日志管理',
                children: [{id: '21', label: '登录日志'}, {id: '22', label: '授权日志'}, {id: '23', label: '操作日志'}]
            }, {
                id: '3',
                label: '岗位管理',
            }],
            defaultProps: {
                children: 'children',
                label: 'label'
            },
            userData: [
                {id: '1', label: '湖北高警一支队', children: [
                        {id: '11', label: '湖北高警一支队汉川大队'},
                        {id: '12', label: '湖北高警一支队仙桃大队'},
                        {id: '13', label: '湖北高警一支队孝感大队'},
                        {id: '14', label: '湖北高警一支队蔡甸大队'},
                        {id: '15', label: '湖北高警一支队江夏大队'},
                        {id: '16', label: '湖北高警一支队咸宁大队'},
                        {id: '17', label: '湖北高警一支队云梦大队'},
                        {id: '18', label: '湖北高警一支队广水大队'},
                    ]},
                {id: '2', label: '湖北高警二支队',  children: [
                        {id: '21', label: '湖北高警二支队黄梅大队'},
                        {id: '22', label: '湖北高警二支队黄石大队'},
                        {id: '23', label: '湖北高警二支队鄂州大队'},
                        {id: '24', label: '湖北高警二支队下陆大队'},
                        {id: '25', label: '湖北高警二支队崇阳大队'},
                        {id: '26', label: '湖北高警二支队阳新大队'},
                    ]},
                {id: '3', label: '湖北高警三支队',  children: [
                        {id: '31', label: '湖北高警三支队荆门大队'},
                        {id: '32', label: '湖北高警三支队公安大队'},
                        {id: '33', label: '湖北高警三支队荆州大队'},
                        {id: '34', label: '湖北高警三支队钟祥大队'},
                        {id: '35', label: '湖北高警三支队京山大队'},
                        {id: '36', label: '湖北高警三支队监利大队'},
                    ]},
            ],
            tableRows: [
                {index:1, userName: 'admin', name: '李某某', dept:'武汉交警支队', phone:'18925935410', status: '正常'},
                {index:2, userName: 'admin', name: '李某某', dept:'武汉交警支队', phone:'18925935410', status: '正常'},
                {index:3, userName: 'admin', name: '李某某', dept:'武汉交警支队', phone:'18925935410', status: '正常'},
                {index:4, userName: 'admin', name: '李某某', dept:'武汉交警支队', phone:'18925935410', status: '正常'},
                {index:5, userName: 'admin', name: '李某某', dept:'武汉交警支队', phone:'18925935410', status: '正常'},
                {index:6, userName: 'admin', name: '李某某', dept:'武汉交警支队', phone:'18925935410', status: '正常'},
                {index:7, userName: 'admin', name: '李某某', dept:'武汉交警支队', phone:'18925935410', status: '正常'},
                {index:8, userName: 'admin', name: '李某某', dept:'武汉交警支队', phone:'18925935410', status: '正常'},
                {index:9, userName: 'admin', name: '李某某', dept:'武汉交警支队', phone:'18925935410', status: '正常'},
                {index:10, userName: 'admin', name: '李某某', dept:'武汉交警支队', phone:'18925935410', status: '正常'},
            ]
        }
    },
    methods: {
        closeKnowledgePad() {
            this.$store.commit("TOGGLE_SETTINGS_PAD");
        },
        handleClick(data, checked){
            if(checked == true){
                //this.checkedId = data.id;
                this.$refs.treeForm.setCheckedNodes([data]);
            }
        },
        nodeClick(data){
            //this.checkedId = data.id
            this.$refs.treeForm.setCheckedNodes([data]);
        },
        handleClick1(data, checked){
            if(checked == true){
                //this.checkedId = data.id;
                this.$refs.treeForm1.setCheckedNodes([data]);
            }
        },
        nodeClick1(data){
            //this.checkedId = data.id
            this.$refs.treeForm1.setCheckedNodes([data]);
        },
    }
}
</script>

<style lang="scss">
.system-settings {
    width: 1737px;
    height: 787px;
    position: absolute;
    top: 125px;
    left: 100px;
    z-index: 1;
    background: url('../../assets/images/home-sj-related/系统管理-bg.png') no-repeat center;
    .setting-title {
        width: 100%;
        height: 60px;
        text-align: right;
        vertical-align: middle;
        border-bottom: 1px dashed #204886;
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
    .setting-content {
        display: flex;
        justify-content:space-between;
        height: calc(100% - 87px);
        >div {
            /*border: 1px solid red;*/
            height: 100%;
        }
        .el-tree {
            background-color: transparent;
            color: #4b8bd1;
            .el-tree-node__content:hover{
                background-color: #285da3;
            }
            .el-tree-node:focus{
                >.el-tree-node__content{
                    background-color: #285da3;
                    color: #ffffff;
                }
            }
            .is-checked {
                background-color: #285da3;
                color: #ffffff;
            }
        }
        ._1 {
            width: 250px;
            border-right: 1px solid #225f96;
            padding: 25px 0 0 25px;
        }
        ._2 {
            width: 250px;
            .jg-title {
                height: 55px;
                line-height: 55px;
                font-size: 18px;
                color: #bfe9ff;
            }
            .jg-tree {
                .jg-btns {
                    text-align: center;
                    padding: 10px 0;
                }
                border: 1px solid #22639b;
                height: 650px;
            }
            .el-tree {
                color: #9fccf1;
            }
        }
        ._3 {
            width: 1235px;
            .table-btns {
                height: 43px;
                margin-top: 13px;
                .el-input {
                    width: 330px;
                    >input {
                        padding-left: 20px;
                        height: 28px;
                    }
                    .el-input__icon{
                        line-height: 30px;
                    }
                }
            }
            .table-container {
                height: 600px;
                width: 1202px;
                .el-table::before {
                    background-color: transparent;
                }
                .el-button--text:hover {
                    color: #ffffff;
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
                                color: #fff !important;;
                            }
                        }
                    }
                }
                .table_row_btns{
                    cursor: pointer;
                }
            }
            .table-footer{
                float: right;
                padding-right: 20px;
            }
        }
    }
}
</style>