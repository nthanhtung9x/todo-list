import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as action from '../redux/actions';
import ItemComponent from './ItemComponent';
const ListComponent = () => {
    const dispatch = useDispatch();
    const list = useSelector(state => state.AppReducer);

    useEffect(() => {
        dispatch(action.fetchListData());
    }, [list.search]);

    return (
        <table className="list">
            <thead>
                <tr>
                    <th>STT</th>
                    <th>CÔNG VIỆC</th>
                    <th>TRẠNG THÁI</th>
                    <th>CHỨC NĂNG</th>
                </tr>
            </thead>
            <tbody>
                {
                    list.listItem?.map((item, index) => {
                        {
                            return <ItemComponent item={item} key={index}/>
                        }
                    })
                }

            </tbody>
        </table>
    )
}

export default ListComponent
