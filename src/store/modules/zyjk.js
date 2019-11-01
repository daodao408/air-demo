import res from '../../components/zyjk/mapData';
import _ from 'lodash';
const zyjk = {
    state: {
        // 左边-地图图元过滤面板(图层管理器)
        eventPad: {
            visible: true
        },
        // 左边-事件信息面板
        eventInfoPad: {
            visible: false
        },
        //定位与事件调度
        sjdd: {
            visible: false,
            radius: 10000
        },
        carInfowindow: {
            visible: false
        },
        carXqList: {
            visible: false
        },
        carXq: {
            visible: false
        },
        // 右边-导航面板
        emergencyPad: {
            visible: true
        },
        // 底部信息pad
        bottomMsgPad: {
            visible: false
        },
        //是否显示行政区划,默认不显示 这个标志位貌似没什么用 百度地图图层api不支持hide和show
        mapArea: {
            visible: false
        },
        //地图上紧急事件的点数据
        emergency_map_items: [],
        //地图上紧急事件详情点数据
        emergency_map_items_events: [],
        //地图上行政区划数据
        map_area_arr: [],
        //地图配置
        mapConfig: _.cloneDeep(res.mapConfig),
        //是否显示所有事件的点,首页默认为true显示
        show_point_arr: true,
        // 预案名称面板
        planPad: {
            visible: false
        },
        handlePlanPad: {
            visible: false
        },
        //预案流程面板
        flowPlanPad: {
            visible: false
        },
        evaluationPad: {
            visible: false
        },
        //演练评估
        ylpgPad: {
            visible: false
        },
        //演练计划
        yljhPad: {
            visible: false
        },
        show_settings: false,
        show_road_pad: false
    },
    mutations: {
        SET_YLJHPAD_VISIBLE: (state, bool) => {
            state.yljhPad.visible = bool;
        },
        SET_YLPGPAD_VISIBLE: (state, bool) => {
            state.ylpgPad.visible = bool;
        },
        //预案流程
        SET_PLANPAD_VISIBLE: (state, bool) => {
            state.planPad.visible = bool;
        },
        SET_FLOWPLANPAD_VISIBLE: (state, bool) => {
            state.flowPlanPad.visible = bool;
        },
        SET_HANDLEPLANPAD_VISIBLE: (state, bool) => {
            state.handlePlanPad.visible = bool;
        },
        SET_EVALUATIONPAD_VISIBLE: (state, bool) => {
            state.evaluationPad.visible = bool;
        },
        SET_EVENT_PAD_VISIBLE: (state, bool) => {
            state.eventPad.visible = bool;
        },
        SET_EVENT_INFO_PAD_VISIBLE: (state, bool) => {
            state.eventInfoPad.visible = bool;
        },
        SET_CARINFOWINDOW_VISIBLE: (state, bool) => {
            state.carInfowindow.visible = bool;
        },
        //事件调度
        SET_SJDD_VISIBLE: (state, bool) => {
            state.sjdd.visible = bool;
            state.mapConfig.zoom = 11;
            state.mapConfig.center = {
                lng: 112.787619,
                lat: 30.382938
            };
        },

        SET_CARXQLIST_VISIBLE: (state, bool) => {
            state.carXqList.visible = bool;
        },
        SET_CARXQ_VISIBLE: (state, bool) => {
            state.carXq.visible = bool;
        },
        SET_EMERGENCY_PAD_VISIBLE: (state, bool) => {
            state.emergencyPad.visible = bool;
        },
        SET_BOTTOM_MSG_PAD: (state, bool) => {
            state.bottomMsgPad.visible = bool;
            state.emergency_map_items = bool ? res.emergency_dot : [];
            if (!bool) state.emergency_map_items_events = [];
            //回到原来的缩放等级
            state.mapConfig.zoom = 8;
            //回到原来的中心定位，让湖北省居中
            state.mapConfig.center = { lng: 112.309286, lat: 31.014132 };
        },
        /**
         * 更新地图上 event point特定类型的点，显示或隐藏
         * @param state
         * @param id
         * @param flag true显示   false隐藏
         * @constructor
         */
        RESET_EVENT_POINT(state) {
            //重置pointArr
            state.mapConfig.pointArr = _.cloneDeep(res.mapConfig.pointArr);
        },
        /**
         * 更新地图上 event point特定类型的点，显示或隐藏
         * @param state
         * @param id
         * @param flag true显示   false隐藏
         * @constructor
         */
        REFLESH_EVENT_POINT(state, params) {
            //pointArr 里为所有的点 通过isShowFlag标志位控制显示和隐藏
            const id = params.key;
            const flag = params.flag;
            const pointArr = state.mapConfig.pointArr;
            state.mapConfig.pointArr = _.forEach(pointArr, point => {
                if (point.id.startsWith(id)) {
                    point.isShowFlag = flag;
                }
            });
        },
        /**
         * 根据区划id，在地图上添加或移除行政区划
         * 当没有区划id的时候，默认添加全部地图区划
         * @param commit
         * @param state
         * @param id
         */
        TOGGLEAREA_ZYJK(state, id) {
            if (!id) {
                //当id不存在，该方法机制为显示/移除全部行政区划
                if (state.map_area_arr.length > 0) {
                    state.map_area_arr = [];
                } else {
                    state.map_area_arr = _.cloneDeep(res.mapAreaArr);
                }
            }
            const _this = _.find(state.map_area_arr, item => item.id === id);
            if (_this) {
                //如果地图上存在此区划就移除掉
                state.map_area_arr = _.remove(state.map_area_arr, item => item.id !== id);
            } else {
                //如果不存在该区划，则在地图上添加该区划
                let thisArea = _.find(res.mapAreaArr, o => o.id === id);
                if (thisArea) state.map_area_arr.push(thisArea);
            }
        },
        /**
         * 清空所有行政区划图层
         * @param state
         * @param id
         */
        CERAR_AREA(state) {
            state.map_area_arr = [];
        },
        /**
         * 定位至武汉中心
         * @param state
         * @param id
         */
        TO_WH(state) {
            state.mapConfig.center.lng = 114.311984;
            state.mapConfig.center.lat = 30.598483;
            state.mapConfig.zoom = 10;
        },
        /**
         * 定位至湖北中心
         * @param state
         * @param id
         */
        TO_HB(state) {
            // 中心点经纬度初始化
            state.mapConfig.center = { lng: 112.309286, lat: 31.014132 };
            // 缩放比例设置
            state.mapConfig.zoom = 8;
        },
        SET_POINT(state, point) {
            if (point) state.mapConfig.center = point;
        },
        SET_ZOOM(state, zoom) {
            state.mapConfig.zoom = zoom;
        },
        TOGGLE_SETTINGS_PAD(state) {
            state.eventPad.visible = state.emergencyPad.visible = state.show_settings;
            state.show_settings = !state.show_settings;
            if (state.show_settings) {
                this.commit('SET_EVENT_INFO_PAD_VISIBLE', false);
            }
        },
        CLOSE_SETTINGS_PAD(state) {
            state.eventPad.visible = state.emergencyPad.visible = true;
            state.show_settings = false;
        },
        SET_SHOW_SETTINGS(state, bool) {
            state.show_settings = bool;
        },
        TOGGLE_SHOW_ROAD_PAD(state, bool) {
            state.show_road_pad = !state.show_road_pad;
            if (!state.show_road_pad) {}
        }
    },
    actions: {
        /**
         * 演练计划
         * @param commit
         * @param state
         */
        openYljh({ commit, state }) {
            commit('SET_YLJHPAD_VISIBLE', true);
        },
        closeYljh({ commit, state }) {
            commit('SET_YLJHPAD_VISIBLE', false);
        },
        /**
         * 演练评估
         * @param commit
         * @param state
         */
        openYlpg({ commit, state }) {
            commit('SET_YLPGPAD_VISIBLE', true);
        },
        closeYlpg({ commit, state }) {
            commit('SET_YLPGPAD_VISIBLE', false);
        },
        /**
         * 开启预案
         * @param commit
         * @param state
         */
        toggleya({ commit, state }) {
            commit('SET_PLANPAD_VISIBLE', true);
        },
        closePlan({ commit, state }) {
            commit('SET_PLANPAD_VISIBLE', false);
        },
        openFlow({ commit, state }) {
            commit('SET_FLOWPLANPAD_VISIBLE', true);
        },
        closeFlow({ commit, state }) {
            commit('SET_FLOWPLANPAD_VISIBLE', false);
        },
        openHandle({ commit, state }) {
            commit('SET_HANDLEPLANPAD_VISIBLE', true);
        },
        closeHandle({ commit, state }) {
            commit('SET_HANDLEPLANPAD_VISIBLE', false);
        },
        openEvaluation({ commit, state }) {
            commit('SET_EVALUATIONPAD_VISIBLE', true);
        },
        closeEvaluation({ commit, state }) {
            commit('SET_EVALUATIONPAD_VISIBLE', false);
        },
        /**
         * 切换事件信息面板
         * @param commit
         * @param state
         */
        togglePad({ commit, state }) {
            commit('SET_EVENT_PAD_VISIBLE', !state.eventPad.visible);
            commit('SET_EVENT_INFO_PAD_VISIBLE', !state.eventInfoPad.visible);
        },

        /**
         * 打开车辆信息简介
         * @param commit
         * @param state
         */
        openCarInfowindow({ commit, state }) {
            commit('SET_CARINFOWINDOW_VISIBLE', true);
        },
        /**
         * 打开车辆信息列表
         * @param commit
         * @param state
         */
        openCarXqList({ commit, state }) {
            commit('SET_CARXQLIST_VISIBLE', true);
        },
        closeCarXqList({ commit, state }) {
            commit('SET_CARXQLIST_VISIBLE', false);
        },
        /**
         * 打开车辆信息简介
         * @param commit
         * @param state
         */
        openCarXq({ commit, state }) {
            commit('SET_CARXQ_VISIBLE', true);
        },
        closeCarXq({ commit, state }) {
            commit('SET_CARXQ_VISIBLE', false);
        },
        /**
         * 事件调度
         * @param commit
         * @param state
         */
        toggleSjdd({ commit, state }) {
            commit('SET_SJDD_VISIBLE', !state.sjdd.visible);
        },
        closeSjdd({ commit, state }) {
            commit('SET_SJDD_VISIBLE', false);
        },
        /**
         * 让底部信息msg显示和隐藏
         * @param commit
         * @param state
         */
        toggleBottomMsgPad({ commit, state }, ids) {
            commit('SET_BOTTOM_MSG_PAD', !state.bottomMsgPad.visible);
            //底部显示的时候，event Point 全部隐藏
            if (state.bottomMsgPad.visible) {
                state.show_point_arr = false;
            } else {
                //底部pad隐藏的时候，还原显示原来的点
                //if(ids) commit("REFLESH_EVENT_POINT", ids);
                state.show_point_arr = true;
            }
        },
        /**
         * 点击警情详情的时候，缩放地图，显示详情点
         * @param commit
         * @param state
         */
        jqClick({ commit, state }) {
            //让武汉市居中
            state.mapConfig.center.lng = 114.311984;
            state.mapConfig.center.lat = 30.598483;
            //缩放地图至zoom 10
            state.mapConfig.zoom = 12;
            //清空原来的点击进来的点
            state.emergency_map_items = [];
            //显示详情点
            state.emergency_map_items_events = res.emergency_dot_detail;
        },
        /**
         * 显示警情详情的弹框
         * @param commit
         * @param state
         * @param id
         */
        showDetailWin({ commit, state }, id) {
            //关掉其他的弹出框
            _.forEach(state.emergency_map_items_events, o => {
                o.showWin = false;
            });
            //显示当前点击item的弹出框
            let _this = _.find(state.emergency_map_items_events, item => item.id === id);
            _this.showWin = true;
        },
        /**
         * 关闭掉当前显示的警情详情的弹框
         * @param commit
         * @param state
         * @param id
         */
        closeDetailWin({ commit, state }, id) {
            //关闭当前点击item的弹出框
            let _this = _.find(state.emergency_map_items_events, item => item.id === id);
            _this.showWin = false;
        },
        /**
         * 是否显示行政区划
         * @param commit
         * @param state
         */
        toggleAreaMod({ commit, state }) {
            state.mapArea.visible = !state.mapArea.visible;
        }
    }
};

export default zyjk;