import actionTypes from './actionTypes';
export const tableLoading = (value) => ({
    type: actionTypes.TABLE_LOADING,
    value
})
export const deleteDisbaled = (value) => ({
    type: actionTypes.DELETE_DISABLED,
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
export const listData = (value) => ({
    type: actionTypes.LIST_DATA,
    value
})
export const copyData = (value) => ({
    type: actionTypes.COPY_DATA,
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
export const approveDisabled = (value) => ({
    type: actionTypes.APPROVE_DISABLED,
    value
})
export const rejectDisabled = (value) => ({
    type: actionTypes.REJECT_DISABLED,
    value
})
export const approveItem = (value) => ({
    type: actionTypes.APPROVE_ITEM,
    value
})
export const rejectItem = (value) => ({
    type: actionTypes.REJECT_ITEM,
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
