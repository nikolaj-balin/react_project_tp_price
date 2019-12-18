import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import './ButtonPriceSizeWidth.scss';

const getUnicValue = (arr, v) => {
    let unic_obj = {};
    arr.forEach((value) => unic_obj[value[v]] = true)
    let inic_arr = Object.keys(unic_obj);
    inic_arr.sort();
    return inic_arr;
};

const ButtonPriceSizeWidth = (props) => {
    const state_ = useSelector(state => {return {...state}});

    return (
        <div className="panel-price-size-width">
            <h2>Ширина:</h2>
            <div className="panel-price-size-width-body">
                { getUnicValue(state_.data.price_size, "width" ).map((value) =>
                    <label key={value}>
                        <input type="button"
                               value={value.replace(/\./i,',')}
                               name="width"
                               defaultChecked={value == state_.selected_value.price_size.dlinadugi
                                               || value == state_.selected_value.price_size.width} />
                    </label>
                )}
            </div>
        </div>
    );
};

export {ButtonPriceSizeWidth};