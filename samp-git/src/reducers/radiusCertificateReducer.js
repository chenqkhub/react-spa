import actionTypes from '../actions/radius-certificate/actionTypes';
const defaultState = {
    list: [],
    columns: [],
    editFlag: true,
    deleteFlag: true,
    downloadFlag: true,
    activateFlag: true,
    loading: false,
    visible: false,//详情页
    isShowModal: false,//删除模态框
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
    if (action.type === actionTypes.DELETE_DISABLED) {
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.deleteFlag = action.value
        return newState;
    }
    if (action.type === actionTypes.EDIT_DISABLED) {
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.editFlag = action.value
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
    if (action.type === actionTypes.DOWNLOAD) {
        console.log(action)
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.downloadFlag = action.value
        return newState;
    }
    if (action.type === actionTypes.ACTIVATE) {
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.activateFlag = action.value
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