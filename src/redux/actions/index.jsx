import * as types from './actionType';

export const fetchListData = () => {
    return {
        type: types.FETCH_DATA_ITEM
    }
}

export const toggleForm = () => {
    return {
        type: types.WATCH_TOGGLE_FORM
    }
}

export const addItem = (data) => {
    return {
        type: types.WATCH_ADD_ITEM,
        data
    }
}

export const deleteItem = (id) => {
    return {
        type: types.WATCH_DELETE_ITEM,
        id
    }
}

export const updateItem = (data) => {
    return {
        type: types.WATCH_UPDATE_ITEM,
        data
    }
}

export const assignItemUpdate = (data) => {
    return {
        type: types.ASSIGN_ITEM_UPDATE,
        data
    }
}

export const searchItem = (title) => {
    return {
        type: types.SEARCH_ITEM,
        title
    }
}