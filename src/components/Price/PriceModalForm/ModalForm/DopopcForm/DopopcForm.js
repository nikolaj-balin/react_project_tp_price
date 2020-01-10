import React, {useCallback} from "react";
import {useDispatch, useSelector} from 'react-redux';
import './DopopcForm.scss';
import {createSoptovarFormAction, createSoptovarFormMinusAction, createSoptovarFormPlusAction} from "../../../../../actions/Actions";


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
    const dispatch_soptovar_form = useCallback((e) => {dispatch(createSoptovarFormAction(e))}, []);
    const dispatch_soptovar_form_minus = useCallback((e) => {dispatch(createSoptovarFormMinusAction(e))}, []);
    const dispatch_soptovar_form_plus = useCallback((e) => {dispatch(createSoptovarFormPlusAction(e))}, []);
    const model = state_.data.model;

    return (
        getSoptovarArr(state_.data.soptovar).map((value) => (
            <div key={value.name} className="form_panel_dopopc_row">
                <div className={'form_panel_dopopc_check ' + (state_.selected_value.soptovar[value.name] != 0 ? 'checked' : '')}>
                    <input type="checkbox"
                           id={`form_dopopc_check_${value.name+model}`}
                           defaultChecked={state_.selected_value.soptovar[value.name] != 0 ? true : false}
                           onClick={dispatch_soptovar_form}
                           name={value.name}
                    />
                    <label htmlFor={`form_dopopc_check_${value.name+model}`}></label>
                </div>
                <div className='form_panel_dopopc_text'>
                    {value.label}
                </div>
                <div className={'form_panel_dopopc_button '+ (state_.selected_value.soptovar[value.name] != 0 ? 'active' : '+')}>
                    <span className='minus'
                          data-name={value.name}
                          onClick={dispatch_soptovar_form_minus}
                    >-</span>
                    <span className='value'>
                        {state_.selected_value.soptovar[value.name] != 0 ? state_.selected_value.soptovar[value.name] : ''}
                    </span>
                    <span className='plus'
                          data-name={value.name}
                          onClick={dispatch_soptovar_form_plus}
                    >+</span>
                </div>
            </div>
        ))
    )
};

export {DopopcForm};