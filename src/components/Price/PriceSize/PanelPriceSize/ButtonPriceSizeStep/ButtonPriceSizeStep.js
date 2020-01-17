import React, {useCallback} from "react";
import {useDispatch, useSelector} from 'react-redux';
import './ButtonPriceSizeStep.scss';
import {createStepButtonAction} from '../../../../../actions/Actions';

const getUnicValue = (arr, v, width ) => {
    let unic_obj = {};
    let _arr = arr.filter((value)=> value.width == width );
    _arr.forEach((value) => unic_obj[value[v]] = true)
    let inic_arr = Object.keys(unic_obj);
    inic_arr.sort();
    return inic_arr;
};

const ButtonPriceSizeStep = (props) => {

    const dispatch = useDispatch();
    const state_ = useSelector(state => {return {...state}});
    const dispatch_step_button = useCallback((e) => {dispatch(createStepButtonAction(e.target))}, []);
    const model = state_.data.model;

    return (
        <div className="panel-price-size-step">
            <div className='conteiner'>
                <h2>Шаг дуг:</h2>
                <div className="panel-price-size-step-body">
                    { getUnicValue(state_.data.price_size, "dlinadugi", +state_.selected_value.width ).map((value) =>
                        <div key={value} className="panel-price-size-step-content">
                            <input type="radio"
                                   onClick={dispatch_step_button}
                                   value={+value}
                                   id={`${value}_step${model}`}
                                   name="step"
                                   defaultChecked={value == state_.selected_value.price_size.dlinadugi} />
                            <label htmlFor={`${value}_step${model}`}
                                   className={value == state_.selected_value.price_size.dlinadugi ? 'checked' : ''}>
                                {value.replace(/\./i,',') + ' м'}
                            </label>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export {ButtonPriceSizeStep};