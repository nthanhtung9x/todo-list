import * as types from '../actions/actionType';

const initialState = {
    listItem: [],
    toggle: false,
    itemUpdate: {
        id: null,
        title: '',
        completed: false
    },
    search: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.GET_ALL_ITEM: {
            let list = [...action.list];
            state = {
                ...state,
                listItem: list
            }
            return {...state};
        }
        case types.TOGGLE_FORM: {
            let temp = state.toggle;
            state = {
                ...state,
                toggle: !temp,
                itemUpdate: {
                    id: null,
                    title: '',
                    completed: false
                }
            }
            return {...state};
        }
        case types.ADD_ITEM: {
            let list = [...state.listItem, action.item];
            state = {
                ...state,
                listItem: list
            }
            return {...state};
        }
        case types.DELETE_ITEM: {
            let list = [...state.listItem];
            console.log(action.item.id);
            let index = list.findIndex(item => item.id.indexOf(action.item.id) !== -1);
            list.splice(index, 1);
            state = {
                ...state,
                listItem: list
            }
            return {...state};
        }
        case types.ASSIGN_ITEM_UPDATE: {
            let temp = {...state.itemUpdate, ...action.data};
            state = {
                ...state,
                toggle: false,
                itemUpdate: temp
            }
            return {...state};
        }
        case types.UPDATE_ITEM: {
            let list = [...state.listItem];
            let index = list.findIndex(item => item.id.indexOf(action.item.id) !== -1);
            if(index !== -1) {
                list.splice(index, 1, action.item);
            }
            state = {
                ...state,
                listItem: list
            };
            return {...state};
        }
        case types.SEARCH_ITEM: {
            state.search = action.title;
            return {...state};
        }
        default:
            return {...state};
    }
}
