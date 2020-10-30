import React, { Fragment } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../redux/actions';

const ItemComponent = ({ item }) => {
    const dispatch = useDispatch();
    const search = useSelector(state => state.AppReducer.search);

    const showData = () => {
        if (search) {
            if (item.title.trim().toLowerCase().indexOf(search.trim().toLowerCase()) !== -1) {
                return <tr>
                    <td>{item.id}</td>
                    <td>
                        <span title={item.title}>
                            {item.title}
                        </span>
                    </td>
                    <td>
                        <span className={String(item.completed) == "true" ? 'finish' : 'unfinish'}>{String(item.completed) == "true" ? 'Hoàn thành' : 'Chưa hoàn thành'}</span>
                    </td>
                    <td>
                        <button className="btn btn__update" onClick={() => dispatch(actions.assignItemUpdate(item))}>Cập nhật</button>
                        <button className="btn btn__delete" onClick={() => dispatch(actions.deleteItem(item.id))}>Xóa</button>
                    </td>
                </tr>
            }
        } else {
            return <tr>
                <td>{item.id}</td>
                <td>
                    <span title={item.title}>
                        {item.title}
                    </span>
                </td>
                <td>
                    <span className={String(item.completed) == "true" ? 'finish' : 'unfinish'}>{String(item.completed) == "true" ? 'Hoàn thành' : 'Chưa hoàn thành'}</span>
                </td>
                <td>
                    <button className="btn btn__update" onClick={() => dispatch(actions.assignItemUpdate(item))}>Cập nhật</button>
                    <button className="btn btn__delete" onClick={() => dispatch(actions.deleteItem(item.id))}>Xóa</button>
                </td>
            </tr>
        }
    }
    return (
        <Fragment>{showData()}</Fragment>
    )
}

export default ItemComponent
