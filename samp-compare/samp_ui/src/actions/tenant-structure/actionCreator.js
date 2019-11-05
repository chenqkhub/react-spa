import actionTypes from './actionTypes';
export const deleteDisbaled = (value) => ({
    type: actionTypes.DELETE_DISABLED,
    value
})
export const tableLoading = (value) => ({
    type: actionTypes.TABLE_LOADING,
    value
})
export const editDisbaled = (value) => ({
    type: actionTypes.EDIT_DISABLED,
    value
})
export const deleteShow = (value) => ({
    type: actionTypes.DELETE_SHOW,
    value
})
export const detailShow = (value) => ({
    type: actionTypes.DETAIL_SHOW,
    value
})
export const loadingShow = (value) => ({
    type: actionTypes.LOADING_SHOW,
    value
})
export const listData = (value) => ({
    type: actionTypes.LIST_DATA,
    value
})
export const createColumn = (value) => ({
    type: actionTypes.COLUMN,
    value
})
export const selectedSize = (value) => ({
    type: actionTypes.SELECTED_SIZE,
    value
})
export const selectedItem = (value) => ({
    type: actionTypes.SELECTED_ITEM,
    value
})
export const currentPage = (value) => ({
    type: actionTypes.CURRENT_PAGE,
    value
})
export const pageSize = (value) => ({
    type: actionTypes.PAGE_SIZE,
    value
})