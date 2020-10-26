import * as types from './actionType';
import axios from 'axios';

const URL = 'https://5dcdf496d795470014e4d45d.mockapi.io/api';

export const getListAPI = () => {
    return (dispatch) => {
        return axios({
            method:'GET',
            url: `${URL}/todos`
        }).then(res => {
            dispatch({
                type: types.GET_ALL_ITEM,
                list: res.data
            })
        }).catch(err => console.log(err));
    }
};

export const toggleForm = () => {
    return {
        type: types.TOGGLE_FORM
    }
}

export const addItem = (data) => {
    return (dispatch) => {
        return axios({
            method: 'POST',
            url:`${URL}/todos`,
            data
        }).then(res => {
            dispatch({
                type: types.ADD_ITEM,
                item: res.data
            })
            
        }).catch(err => console.log(err));
    }
}

export const deleteItem = (id) => {
    return (dispatch) => {
        return axios({
            method:'DELETE',
            url:`${URL}/todos/${id}`
        }).then(res => {
            dispatch({
                type: types.DELETE_ITEM,
                item: res.data
            })
        }).catch(err => console.log(err));
    }
}

export const assignItemUpdate = (data) => {
    return {
        type: types.ASSIGN_ITEM_UPDATE,
        data
    }
}

export const updateItem = (data) => {
    return (dispatch) => {
        return axios({
            method:'PUT',
            url:`${URL}/todos/${data.id}`,
            data
        }).then(res => {
            dispatch({
                type: types.UPDATE_ITEM,
                item: res.data
            })
        })
    }
}

export const searchItem = (title) => {
    return {
        type: types.SEARCH_ITEM,
        title
    }
}