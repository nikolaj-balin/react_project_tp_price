import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import './PriceTotal.scss';

const getSalePrice = (sale, price) => {
    return (Math.ceil(((price/(100 - sale))*100)/100)*100).toLocaleString("ru-RU",{useGrouping:true});
};

const PriceTotal = (props) => {

    const state_ = useSelector(state => {return {...state}});
    let udl_price = +state_.selected_value.price_size.price_udlinenie;
    let base_price = +state_.selected_value.price_size.price_base;
    let base = +state_.data.base_value;
    let udl = +state_.data.udl_value;
    let sale = +state_.data.sale;
    let base_selected = +state_.selected_value.base_udl_value;
    let koef_udl = (base_selected - base)/udl;
    let total_price = (base_price+udl_price*koef_udl).toLocaleString("ru-RU",{useGrouping:true});

    return (
        <div className="price-total">
            <h2>Итого:</h2>
            <div className="sum-price">
                <div className={"sum-price-dubl " + (sale != 0 ? "sale" : "")}>
                    {sale != 0 && <span className="sale_prise_total">{getSalePrice(sale, base_price+udl_price*koef_udl)}</span>}
                    <span className="n">{total_price}</span>
                    <span>&nbsp;руб.</span>
                </div>
            </div>
            {+state_.selected_value.price_size.exist == 0 && <span className='no_nal'>Нет в наличии</span>}
        </div>
    );
};

export {PriceTotal};