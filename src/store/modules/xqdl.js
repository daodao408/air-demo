import res from '../../components/zyjk/mapData';
import _ from 'lodash';
const xqdl = {
    state: {
        // 左边-地图图元过滤面板(图层管理器)
        eventPad: {
            visible: true
        },
        // 左边-事件信息面板
        eventInfoPad: {
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
        //支队道路折线
        road_polyline: [],
        //视屏框和地图的点连线(默认连线，第一个点为摄像头点，第二个为屏幕坐标x:1589,y:196 对应的地图坐标点)
        video_line: [{ lng: 112.859771, lat: 30.364617 }, { lng: 118.444784, lat: 32.958363 }],
        //是否显示video弹出框
        video_show: false,
        //是否显示知识库弹出框
        knowledge_show: false,
        //是否可以在地图上标点标志位
        can_mark: false,
        //标点的图标种类
        mark_icon: false,
        //是否显示拥堵自定义标注面板
        jam_point_show: false,
        //是否显示拥堵自定义标注面板
        police_point_show: false,
        //视频窗口的中心屏幕坐标点
        video_middle_point: {
            x: 1589,
            y: 196
        },
        //手动自定义地图标点
        cus_points: [],
        //地图配置
        mapConfig: _.cloneDeep(res.mapConfig)
    },
    mutations: {
        SET_EVENT_PAD_VISIBLE: (state, bool) => {
            state.eventPad.visible = bool;
        },
        /*SET_EVENT_INFO_PAD_VISIBLE: (state, bool) => {
          state.eventInfoPad.visible = bool;
        },*/
        SET_EMERGENCY_PAD_VISIBLE: (state, bool) => {
            state.emergencyPad.visible = bool;
        },
        /*SET_BOTTOM_MSG_PAD: (state, bool) => {
          state.bottomMsgPad.visible = bool;
          state.emergency_map_items = bool ? res.emergency_dot : []
          if(!bool) state.emergency_map_items_events = []
          //回到原来的缩放等级
          state.mapConfig.zoom = 8
          //回到原来的中心定位，让湖北省居中
          state.mapConfig.center = { lng: 112.309286, lat: 31.014132 };
        },*/
        SET_ROAD_POLYLINE(state, arr) {
            state.road_polyline = arr;
        },
        /**
         * 根据区划id，在地图上添加或移除行政区划
         * 当没有区划id的时候，默认添加全部地图区划
         * @param commit
         * @param state
         * @param id
         */
        TOGGLEAREA(state, id) {
            if (!id) {
                //当id不存在，该方法机制为显示全部行政区划
                let allAreas = _.cloneDeep(res.mapAreaArr);
                state.map_area_arr = allAreas;
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
        REFLESH_VIDEO_LINE(state, winPoint) {
            //摄像头图标的经纬度坐标
            const iconPoint = { lng: 112.859771, lat: 30.364617 };
            const res = [iconPoint, winPoint];
            //console.log(point)
            state.video_line = res;
        },
        REFLESH_VIDEO_POINT(state) {
            const video_middle_point = state.video_middle_point;
            const p = new wm.BMap.Pixel(video_middle_point.x, video_middle_point.y);
            const point1 = wm.map.pixelToPoint(p);
            const new_video_line = _.cloneDeep(state.video_line);
            new_video_line[1] = point1;
            state.video_line = new_video_line;
        },
        //存放视频窗口的中心屏幕坐标点
        SET_VIDEO_MIDDLE_POINT(state, point) {
            state.video_middle_point = point;
        },
        //卡口摄像头视频弹框显示隐藏
        TOGGLE_VIDEO_SHOW(state) {
            state.video_show = !state.video_show;
            if (state.video_show) {
                //视频弹框中心点的像素坐标
                state.video_middle_point = { x: 1589, y: 196 };
                //像素坐标转化为地图经纬度坐标
                this.commit('REFLESH_VIDEO_POINT');
            }
        },
        TOGGLE_KNOWLEDGE_PAD(state) {
            state.knowledge_show = !state.knowledge_show;
        },
        //添加自定义地图标注点
        ADD_CUS_POINT(state, point) {
            if (state.can_mark) {
                state.cus_points.push({ point: point, iconurl: state.mark_icon });
                //一次只能放一个地图标注点，放完之后，标志位设置为false，不能放置
                state.can_mark = false;
            }
        },
        //清空自定义地图标注点
        CLEAR_CUS_POINT(state) {
            state.cus_points = [];
        },
        SET_CAN_MARK(state, bool) {
            state.can_mark = bool;
        },
        SET_MARK_ICON(state, icon) {
            state.mark_icon = icon;
        },
        SET_JAM_POINT_SHOW(state, bool) {
            state.jam_point_show = bool;
        },
        SET_POLICE_POINT_SHOW(state, bool) {
            state.police_point_show = bool;
        }
    },
    actions: {
        /*togglePad({commit, state}) {
          commit("SET_EVENT_PAD_VISIBLE", !state.eventPad.visible);
          commit("SET_EVENT_INFO_PAD_VISIBLE", !state.eventInfoPad.visible);
        },*/
        /**
         * 让底部信息msg显示和隐藏
         * @param commit
         * @param state
         */
        /*toggleBottomMsgPad({commit, state}) {
          commit("SET_BOTTOM_MSG_PAD", !state.bottomMsgPad.visible);
        },*/
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

export default xqdl;