import actionTypes from '../actions/log-server/actionTypes';
const defaultState = {
    list: [],
    columns: [],
    downloadFlag: true,
    downloadAllFlag: true,
    loading: false,
    visible: false,//详情页
    isShowModal: false,//删除模态框
    selectedSize: 0,
    selectedItem: {},
    current: 1,
    pageSize: 5,
    tableDetail:"table"
}
export default (state = defaultState, action) => {
    if (action.type === actionTypes.TABLE_LOADING) {
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.loading = action.value
        return newState;
    }
    if (action.type === actionTypes.DOWNLOAD_DISABLED) {
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.downloadFlag = action.value
        return newState;
    }
    if (action.type === actionTypes.DOWNLOADALL_DISABLED) {
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.downloadAllFlag = action.value
        return newState;
    }
    if (action.type === actionTypes.DELETE_SHOW) {
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
    if (action.type === actionTypes.TABLE_DETAIL) {
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.tableDetail = action.value
        return newState;
    }
    return state
}