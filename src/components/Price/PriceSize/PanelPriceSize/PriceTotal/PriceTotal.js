import React from "react";
import {useDispatch, useSelector} from 'react-redux';

const PriceTotal = (props) => {

    const state_ = useSelector(state => {return {...state}});
    let udl_price = +state_.selected_value.price_size.price_udlinenie;
    let base_price = +state_.selected_value.price_size.price_base;
    let base = +state_.data.base_value;
    let udl = +state_.data.udl_value;
    let base_selected = +state_.selected_value.base_udl_value;
    let koef_udl = (base_selected - base)/udl;
    let total_price = (base_price+udl_price*koef_udl).toLocaleString("ru-RU",{useGrouping:true});

    return (
        <div className="price-total">
            <h2>Итого:</h2>
            <div className="sum-price">
                <div className="sum-price-dubl">
                    <span className="n">{total_price}</span><span> руб.</span>
                </div>
            </div>
        </div>
    );
};

export {PriceTotal};