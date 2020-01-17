import React, {useCallback} from "react";
import {useDispatch, useSelector} from 'react-redux';
import './ButtonFormLength.scss';
import {createLenghtMinusFormAction, createLenghtPlusFormAction} from "../../../../../actions/Actions";

const ButtonFormLength = () => {

    const dispatch = useDispatch();
    const state_ = useSelector(state => {return {...state}});
    const dispatch_length_minus_form = useCallback((e) => {dispatch(createLenghtMinusFormAction(e.target))}, []);
    const dispatch_length_plus_form = useCallback((e) => {dispatch(createLenghtPlusFormAction(e.target))}, []);
    let base_udl_value = +state_.selected_value.base_udl_value;

    return (
        <div className='button_form_length'>
            <span className='minus' onClick={dispatch_length_minus_form}>-</span>
            <span className='value_form_length'>{base_udl_value + ' м'}</span>
            <span className='plus' onClick={dispatch_length_plus_form}>+</span>
        </div>
    )
};

export {ButtonFormLength};