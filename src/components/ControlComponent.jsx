import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../redux/actions';


const ControlComponent = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }
 
    return (
        <div className="control">
            <button className="btn__toggle" onClick={() => dispatch(actions.toggleForm())}>
                <i className="fa fa-plus"></i> 
                Thêm Công Việc
            </button>
            <div className="control__block">
                <input type="text" placeholder="Nhập từ khóa" onChange={handleSearch} value={search}/>
                <button className="btn__toggle" onClick={() => dispatch(actions.searchItem(search))}>
                    <i className="fa fa-search"></i>    
                    Tìm
                </button>
            </div>
        </div>
    )
}

export default ControlComponent;

