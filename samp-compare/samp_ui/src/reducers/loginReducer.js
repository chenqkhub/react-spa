import actionTypes from '../actions/login/actionTypes';
const defaultState = {
    username: "",
    password: "",
    loginStyle: "USER_ACCOUNT",
    currentModule: "login",//当前显示的模块(login/register/forgot password)
    isShowRetrieve: false,
    isShowRegister: false
}  //默认数据
export default (state = defaultState, action) => {  //就是一个方法函数
    //reducer只能接受state不能修改state，所以我们需要在这里创建一个新的对象，然后深度copy在返回该对象
    if (action.type === actionTypes.SHOW_REGISTER) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.isShowRegister = action.value;
        return newState
    }
    if (action.type === actionTypes.SHOW_RETRIEVE) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.isShowRetrieve = action.value;
        return newState
    }
    if (action.type === actionTypes.LOGIN_STYLE) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.loginStyle = action.value;
        return newState
    }
    if (action.type === actionTypes.CURRENT_MODULE) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.currentModule = action.value;
        return newState
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