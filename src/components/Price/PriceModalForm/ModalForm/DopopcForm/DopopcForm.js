import React, {useCallback} from "react";
import {useDispatch, useSelector} from 'react-redux';


const getSoptovarArr = (obj) => {
    let arr = [];
    for(let value in obj) {
        arr.push(obj[value]);
    }
    return arr;
};


const DopopcForm = () => {

    const state_ = useSelector(state => {return {...state}});
    const dispatch = useDispatch();

    return (
        getSoptovarArr(state_.data.soptovar).map((value) => (
            <div key={value.name} className="form_panel_dopopc_row">
                <div className='form_panel_dopopc_check'>
                    <input type="checkbox" id={`form_dopopc_check_${value.name}`} />
                    <label htmlFor={`form_dopopc_check_${value.name}`}></label>
                </div>
                <div className='form_panel_dopopc_text'>
                    {value.label}
                </div>
                <div className='form_panel_dopopc_button'>
                    <span className='minus'>-</span>
                    <span className='value'>10</span>
                    <span className='plus'>+</span>
                </div>
            </div>
        ))
    )
};

export {DopopcForm};