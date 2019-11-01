import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index.js';
import BaiduMap from 'vue-baidu-map';
import ElementUi from 'element-ui';
import echarts from 'echarts';
import 'element-ui/lib/theme-chalk/index.css';
// 全局样式reset
import 'normalize.css';
import './sass/default.scss';
import './sass/common.scss';
import 'ztree/js/jquery-1.4.4.min.js';
import 'ztree/css/zTreeStyle/zTreeStyle.css';
import 'ztree/js/jquery.ztree.core.min.js';
import 'ztree/js/jquery.ztree.excheck.min.js';
Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;

Vue.use(ElementUi);
Vue.use(BaiduMap, {
    ak: 'nSxiPohfziUaCuONe4ViUP2N'
});

new Vue({
    router,
    store,
    data: {
        eventHub: new Vue()
    },
    render: h => h(App)
}).$mount('#app');