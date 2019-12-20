import React, {useCallback} from "react";
import {useDispatch, useSelector} from 'react-redux';
import './ButtonPriceSizeWidth.scss';
import {createWidthButtonAction} from '../../../../../actions/Actions';

const getUnicValue = (arr, v) => {
    let unic_obj = {};
    arr.forEach((value) => unic_obj[value[v]] = true)
    let inic_arr = Object.keys(unic_obj);
    inic_arr.sort();
    return inic_arr;
};

const ButtonPriceSizeWidth = (props) => {

    const dispatch = useDispatch();
    const state_ = useSelector(state => {return {...state}});
    const dispatch_width_button = useCallback((e) => {dispatch(createWidthButtonAction(e.target))}, []);
    const model = state_.data.model;

    return (
        <div className="panel-price-size-width">
            <h2>Ширина:</h2>
            <div className="panel-price-size-width-body">
                { getUnicValue(state_.data.price_size, "width" ).map((value) =>
                    <div key={value} className="panel-price-size-width-content">
                        <input type="radio"
                               onClick={dispatch_width_button}
                               value={+value}
                               id={`${value}_width${model}`}
                               name="width"
                               defaultChecked={value == state_.selected_value.price_size.width} />
                        <label htmlFor={`${value}_width${model}`}
                               className={value == state_.selected_value.price_size.width ? 'checked' : ''}>
                               {value.replace(/\./i,',') + ' м'}
                        </label>
                    </div>
                )}
            </div>
        </div>
    );
};

export {ButtonPriceSizeWidth};