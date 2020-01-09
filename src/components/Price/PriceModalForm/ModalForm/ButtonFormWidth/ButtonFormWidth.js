import React, {useCallback} from "react";
import {useDispatch, useSelector} from 'react-redux';
import './ButtonFormWidth.scss';
import {createWidthButtonFormAction} from "../../../../../actions/Actions";

const getUnicValue = (arr, v) => {
    let unic_obj = {};
    arr.forEach((value) => unic_obj[value[v]] = true)
    let inic_arr = Object.keys(unic_obj);
    inic_arr.sort();
    return inic_arr;
};

const ButtonFormWidth = () => {
    const dispatch = useDispatch();
    const state_ = useSelector(state => {return {...state}});
    const dispatch_width_button = useCallback((e) => {dispatch(createWidthButtonFormAction(e.target))}, []);
    const model = state_.data.model;

    return (
        <div className='button_form_width'>
            { getUnicValue(state_.data.price_size, "width" ).map((value) => {
                return (
                    <div key={value}>
                        <input id={`${value}_width_form_${model}`}
                               name="width"
                               defaultChecked={value == +state_.selected_value.price_size.width}
                               value={+value}
                               onClick={dispatch_width_button}
                               type="radio" />
                        <label htmlFor={`${value}_width_form_${model}`} className={value == state_.selected_value.price_size.width ? 'checked' : ''}>
                            {value.replace(/\./i,',') + ' м'}
                        </label>
                    </div>
            )}
            )}
        </div>
    )
};

export {ButtonFormWidth};