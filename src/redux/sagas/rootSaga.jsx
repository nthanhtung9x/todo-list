import { put, takeEvery, fork, take, call } from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../actions/actionType';
const URL = 'https://5dcdf496d795470014e4d45d.mockapi.io/api';


function* watchingGetList() {
    yield take(types.FETCH_DATA_ITEM);
    const resp = yield call(() => axios({
        method: 'GET',
        url: `${URL}/todos`
    }));
    try {
        const { status, data } = resp;
        yield put({
            type: types.GET_ALL_ITEM,
            list: data
        })
    } catch (e) {
        console.log(e);
    }
}

function* watchingToggleForm() {
    while (true) {
        yield take(types.WATCH_TOGGLE_FORM);
        yield put({
            type: types.TOGGLE_FORM
        })
    }
}

function* watchingAddItem() {
    while(true) {
        const payload = yield take(types.WATCH_ADD_ITEM);
        const { data } = payload;
        const resp = yield call(() => axios({
            method: 'POST',
            url:`${URL}/todos`,
            data
        }));
        try {
            yield put({
                type: types.ADD_ITEM,
                item:resp.data
            })
        } catch(e) {
            console.log(e);
        }
    }
}

function* watchingDeleteItem() {
    while(true) {
        const payload = yield take(types.WATCH_DELETE_ITEM);
        const { id } = payload;
        const resp = yield call(() => axios({
            method:'DELETE',
            url:`${URL}/todos/${id}`
        }));
        try {
            const { data } = resp;
            yield put({
                type: types.DELETE_ITEM,
                item: data
            })
        } catch(e) {
            console.log(e);
        }
    }
}

function* watchingUpdateItem() {
    while(true) {
        const payload = yield take(types.WATCH_UPDATE_ITEM);
        const { data } = payload;
        const resp = yield call(() => axios({
            method:'PUT',
            url:`${URL}/todos/${data.id}`,
            data
        }));
        try {
            const { data } = resp;
            yield put({
                type: types.UPDATE_ITEM,
                item: data
            })
        } catch(e) {
            console.log(e);
        }
    }
}


export function* rootSaga() {
    yield fork(watchingGetList);
    yield fork(watchingToggleForm);
    yield fork(watchingAddItem);
    yield fork(watchingDeleteItem);
    yield fork(watchingUpdateItem);
}