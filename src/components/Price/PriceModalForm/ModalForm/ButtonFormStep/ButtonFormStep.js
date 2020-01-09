import React, {useCallback} from "react";
import {useDispatch, useSelector} from 'react-redux';
import './ButtonFormStep.scss';
import {createStepButtonFormAction} from "../../../../../actions/Actions";

const getUnicValue = (arr, v, width ) => {
    let unic_obj = {};
    let _arr = arr.filter((value)=> value.width == width );
    _arr.forEach((value) => unic_obj[value[v]] = true)
    let inic_arr = Object.keys(unic_obj);
    inic_arr.sort();
    return inic_arr;
};

const ButtonFormStep = () => {

    const dispatch = useDispatch();
    const state_ = useSelector(state => {return {...state}});
    const dispatch_step_button = useCallback((e) => {dispatch(createStepButtonFormAction(e.target))}, []);
    const model = state_.data.model;

    return (
        <div className='button_form_step'>
            { getUnicValue(state_.data.price_size, "dlinadugi", +state_.selected_value.width ).map((value) =>
                <div key={value}>
                    <input type="radio"
                           value={+value}
                           id={`${value}_step_form_${model}`}
                           onClick={dispatch_step_button}
                           name="step"
                           defaultChecked={value == state_.selected_value.price_size.dlinadugi} />
                    <label htmlFor={`${value}_step_form_${model}`}
                           className={value == state_.selected_value.price_size.dlinadugi ? 'checked' : ''} >
                        {value.replace(/\./i,',') + ' м'}
                    </label>
                </div>
            )}
        </div>
    )
};

export {ButtonFormStep};