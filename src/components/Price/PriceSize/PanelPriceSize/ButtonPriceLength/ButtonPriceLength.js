import React from "react";
import {useDispatch, useSelector} from 'react-redux';

const ButtonPriceLength = (props) => {

    const state_ = useSelector(state => {return {...state}});
    let udl_price = +state_.selected_value.price_size.price_udlinenie;
    let base = +state_.selected_value.base_value;

    return (
        <div className="button-price-length">
            <h2>Длина в метрах:</h2>
            <div>
                <div className="line-dop"></div>
                <div className="range">
                    <input type="range" min="1" max="5" steps="1" defaultValue="1" />
                </div>
                <ul className="range-labels">
                    <li className="active selected" data-udl={base}>{base}</li>
                    <li className="" data-udl={base+2}>
                        <span className="pagination__dot" data-tooltip={'+ ' + udl_price}>{base+2}</span>
                    </li>
                    <li className="" data-udl={base+4}>
                        <span className="pagination__dot" data-tooltip={'+ ' + 2*udl_price}>{base+4}</span>
                    </li>
                    <li className="" data-udl={base+6}>
                        <span className="pagination__dot" data-tooltip={'+ ' + 3*udl_price}>{base+6}</span>
                    </li>
                    <li className="last" data-udl={base+8} data-min-udl={base+8}>{'> ' + (base+6)}</li>
                </ul>
                <div className="dop-pp">
                    <div className="minus">-</div>
                    <span className="ss">&nbsp;</span>
                    <div className="plus">+</div>
                </div>
            </div>
        </div>
    );
};

export {ButtonPriceLength};