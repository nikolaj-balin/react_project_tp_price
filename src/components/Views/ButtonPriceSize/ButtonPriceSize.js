import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import './ButtonPriceSize.scss';

const getUnicValue = (arr, v) => {
    let unic_obj = {};
    arr.forEach((value) => unic_obj[value[v]] = true)
    let inic_arr = Object.keys(unic_obj);
    inic_arr.sort();
    return inic_arr;
};

const ButtonPriceSize = (props) => {
    const state_ = useSelector(state => {return {...state}});
    console.log(state_.data);

    return (
        <div className={props.className}>
            <h2>{props['data-header']}</h2>
            <div className="panel-price-size-width-body">
                { getUnicValue(state_.data.price_size, props["data-value"]).map((value) =>
                    <label key={value}>
                        <input type="button"
                               value={value.replace(/\./i,',')}
                               name={props["data-value"]}
                               defaultChecked={value == state_.selected_value.price_size.dlinadugi
                                               || value == state_.selected_value.price_size.width} />
                    </label>
                )}
            </div>
        </div>
    );
};

export {ButtonPriceSize};