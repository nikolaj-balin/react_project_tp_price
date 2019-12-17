import React from "react";
import {useDispatch, useSelector} from 'react-redux';

const PriceTotal = (props) => {

    const state_ = useSelector(state => {return {...state}});
    let udl_price = +state_.selected_value.price_size.price_udlinenie;
    let base = +state_.selected_value.base_value;

    return (
        <div className="price-total">
            <h2>Итого:</h2>
            <div className="sum-price">
                <div className="sum-price-dubl">
                    <span className="n">53 799</span><span> руб.</span>
                </div>
            </div>
        </div>
    );
};

export {PriceTotal};