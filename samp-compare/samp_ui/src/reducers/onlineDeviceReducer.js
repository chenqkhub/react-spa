import actionTypes from '../actions/online-device/actionTypes';
const defaultState = {
    list: [],
    columns: [],
    kickoffFlag: true,
    loading: false,
    visible: false,//详情页
    isShowModal: false,//KICKOFF模态框
    selectedSize: 0,
    selectedItem: {},
    current: 1,
    pageSize: 5,
}
export default (state = defaultState, action) => {
    if (action.type === actionTypes.TABLE_LOADING) {
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.loading = action.value
        return newState;
    }
    if (action.type === actionTypes.KICKOFF_DISABLED) {
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.kickoffFlag = action.value
        return newState;
    }
    if (action.type === actionTypes.KICK_OFF) {
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.isShowModal = action.value
        return newState;
    }
    if (action.type === actionTypes.DETAIL_SHOW) {
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.visible = action.value
        return newState;
    }
    if (action.type === actionTypes.LOADING_SHOW) {
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.visible = action.value
        return newState;
    }
    if (action.type === actionTypes.LIST_DATA) {
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.list = action.value
        return newState;
    }
    if (action.type === actionTypes.COLUMN) {
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.columns = action.value
        return newState;
    }
    if (action.type === actionTypes.SELECTED_SIZE) {
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.selectedSize = action.value
        return newState;
    }
    if (action.type === actionTypes.SELECTED_ITEM) {
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.selectedItem = action.value
        return newState;
    }
    if (action.type === actionTypes.CURRENT_PAGE) {
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.current = action.value
        return newState;
    }
    if (action.type === actionTypes.PAGE_SIZE) {
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.pageSize = action.value
        return newState;
    }
    return state
}