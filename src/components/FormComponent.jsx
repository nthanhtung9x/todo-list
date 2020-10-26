import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../redux/actions';
const FormComponent = () => {
    const dispatch = useDispatch();
    const itemUpdate = useSelector(state => state.AppReducer.itemUpdate);
    const [data, setData] = useState({
        id: '',
        title: '',
        completed: false
    });

    const handleChange = (e) => {
        let { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        })
    }
    const [showNotiAdd, setShowNotiAdd] = useState(false);
    const [showNotiUpdate, setShowNotiUpdate] = useState(false);
    const handleAddItem = async() => {
        await dispatch(actions.addItem(data));
        await setShowNotiAdd(true);  
        setTimeout(() => {
            setShowNotiAdd(false); 
        }, 2000);
    }

    useEffect(() => {
        setData({
            id: itemUpdate.id,
            title: itemUpdate.title,
            completed: itemUpdate.completed
        });
    }, [itemUpdate.id]);

    const handleUpdateItem = async() => {
        await dispatch(actions.updateItem(data));
        await setShowNotiUpdate(true);  
        setTimeout(() => {
            setShowNotiUpdate(false); 
        }, 2000);
    }
    
    return (
        <>
        {
            showNotiAdd ? <div className="alert alert__add">Thêm thành công !!!</div> : null
        }
        {
            showNotiUpdate ? <div className="alert alert__update">Cập nhật thành công !!!</div> : null
        }
        
        <div className="form">
            <h4>{ itemUpdate.id ? 'Cập Nhật Công Việc' : 'Thêm Công Việc'}</h4>
            <hr />
            <div className="form__group">
                <label htmlFor="">Mô Tả:</label>
                <input type="text" placeholder="Mô tả công việc" name="title" value={data.title} onChange={handleChange}/>
            </div>
            <div className="form__group">
                <label htmlFor="">Trạng Thái:</label>
                <select value={data.completed} onChange={handleChange} name="completed">
                    <option value={true}>Hoàn thành</option>
                    <option value={false}>Chưa hoàn thành</option>
                </select>
            </div>
            <div className="form__group">
                {
                    itemUpdate.id ? <button className="btn__submit" onClick={() => handleUpdateItem()}>Cập nhật</button> : <button className="btn__submit" onClick={() => handleAddItem()}>Thêm</button>
                }
                <button className="btn__close" onClick={() => dispatch(actions.toggleForm())}>Hủy</button> 
            </div>
        </div>
        </>
    )
}

export default FormComponent;
