import Vue from 'vue';
import Router from 'vue-router';
import Index from './views/index.vue';
import sgfxksh from './views/sgfxksh';
import jtwfsjfxksh from './views/jtwfsjfxksh';
import jttsypfxksh from './views/jttsypfxksh';
import zddxfxksh from './views/zddxfxksh';
import login from './views/login';
import doorpage from './views/doorpage';
import jtllfxksh from './views/jtllfxksh';
import kshindex from './views/kshindex';

Vue.use(Router);

export default new Router({
    routes: [{
            path: '/',
            name: 'login',
            redirect: '/login',
            meta: {
                level: -1,
                title: 'abstruct'
            }
        },
        {
            path: '/login',
            name: 'login',
            component: login,
            meta: {
                level: -1,
                title: '登录'
            }
        },
        {
            path: '/doorpage',
            name: 'doorpage',
            component: doorpage,
            meta: {
                level: -1,
                title: '门户'
            }
        },
        // {
        //     path: '/',
        //     name: 'home',
        //     redirect: '/dlxxksh',
        //     meta: {
        //         level: -1,
        //         title: 'abstruct'
        //     }
        // },
        // 一级菜单：地理信息可视化（默认显示）
        {
            path: '/dlxxksh',
            name: 'dlxxksh',
            component: Index,
            meta: {
                level: 0,
                title: '应急态势监控'
            },
            // 二级菜单
            children: [{
                    // 资源监控
                    path: 'zyjk', // 为什么不能加 '/'
                    name: 'zyjk',
                    component: () =>
                        import ('@/views/dlxxksh/zyjk'),
                    meta: {
                        level: 1,
                        title: '资源监控'
                    }
                },
                /*{
                                                                                                    // 辖区道路
                                                                                                    path: 'xqdl',
                                                                                                    name: 'xqdl',
                                                                                                    component: () =>
                                                                                                        import ('@/views/dlxxksh/xqdl'),
                                                                                                    meta: {
                                                                                                        level: 1,
                                                                                                        title: '辖区道路'
                                                                                                    }
                                                                                                },*/
                {
                    // 预案演练
                    path: 'yayl',
                    name: 'yayl',
                    component: () =>
                        import ('@/views/dlxxksh/yayl'),
                    meta: {
                        level: 1,
                        title: '预案演练'
                    }
                }
                // {
                //     // 预案演练
                //     path: 'yayl',
                //     name: 'yayl',
                //     component: () =>
                //         import ('@/views/dlxxksh/yayl'),
                //     meta: {
                //         level: 1,
                //         title: '预案演练'
                //     }
                // }
            ],
            redirect: '/dlxxksh/zyjk'
        },
        // 一级菜单: 交通信息研判系统
        {
            path: '/jtxxypxt',
            name: 'jtxxypxt',
            component: Index,
            meta: {
                level: 0,
                title: '交通信息研判系统'
            },
            // 二级菜单
            children: [{
                    // 车辆分析
                    path: 'clfx',
                    name: 'clfx',
                    component: () =>
                        import ('@/views/jtxxypxt/clfx'),
                    meta: {
                        level: 1,
                        title: '车辆分析'
                    }
                },
                {
                    // 积分模型
                    path: 'jfmx',
                    name: 'jfmx',
                    component: () =>
                        import ('@/views/jtxxypxt/jfmx'),
                    meta: {
                        level: 1,
                        title: '积分模型'
                    }
                },
                {
                    // 一车多证
                    path: 'ycdz',
                    name: 'ycdz',
                    component: () =>
                        import ('@/views/jtxxypxt/ycdz'),
                    meta: {
                        level: 1,
                        title: '一车三证'
                    }
                },
                {
                    // 一证多车
                    path: 'yzdc',
                    name: 'yzdc',
                    component: () =>
                        import ('@/views/jtxxypxt/yzdc'),
                    meta: {
                        level: 1,
                        title: '一证三车'
                    }
                },
                {
                    // 智能搜车
                    path: 'znsc',
                    name: 'znsc',
                    component: () =>
                        import ('@/views/jtxxypxt/znsc'),
                    meta: {
                        level: 1,
                        title: '智能搜车'
                    }
                },
                {
                    // 智能搜人
                    path: 'znsr',
                    name: 'znsr',
                    component: () =>
                        import ('@/views/jtxxypxt/znsr'),
                    meta: {
                        level: 1,
                        title: '智能搜人'
                    }
                }
            ],
            redirect: '/jtxxypxt/clfx'
        },
        // 一级菜单： 交通可视化系统
        {
            path: '/kshindex',
            name: 'kshindex',
            component: kshindex,
            meta: {
                level: 0,
                title: '交通数据可视化系统'
            }
        },
        {
            path: '/jtkshxt',
            name: 'jtkshxt',
            component: sgfxksh,
            meta: {
                level: -1,
                title: '交通事故分析可视化'
            }
        },
        {
            path: '/jtwfsjfxksh',
            name: 'jtwfsjfxksh',
            component: jtwfsjfxksh,
            meta: {
                level: -1,
                title: '交通违法数据分析可视化'
            }
        },
        {
            path: '/jttsypfxksh',
            name: 'jttsypfxksh',
            component: jttsypfxksh,
            meta: {
                level: -1,
                title: '交通态势研判分析可视化'
            }
        },
        {
            path: '/zddxfxksh',
            name: 'zddxfxksh',
            component: zddxfxksh,
            meta: {
                level: -1,
                title: '重点对象分析'
            }
        },
        {
            path: '/jtllfxksh',
            name: 'jtllfxksh',
            component: jtllfxksh,
            meta: {
                level: -1,
                title: '交通流量分析'
            }
        }
    ]
});