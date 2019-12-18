import React, {useCallback} from "react";
import {useDispatch, useSelector} from 'react-redux';
import './ButtonPriceLength.scss';
import {createLenghtInpAction, createLenghtLiAction, createLenghtMinusAction, createLenghtPlusAction} from '../../../../../actions/Actions';

const ButtonPriceLength = (props) => {

    const state_ = useSelector(state => {return {...state}});
    const dispatch = useDispatch();
    const dispatch_length_inp = useCallback((e) => {dispatch(createLenghtInpAction(e.target))}, []);
    const dispatch_length_ul = useCallback((e) => {dispatch(createLenghtLiAction(e.currentTarget))}, []);
    const dispatch_length_minus = useCallback((e) => {dispatch(createLenghtMinusAction(e.target))}, []);
    const dispatch_length_plus = useCallback((e) => {dispatch(createLenghtPlusAction(e.target))}, []);

    let udl_price = +state_.selected_value.price_size.price_udlinenie;
    let base_udl_value = +state_.selected_value.base_udl_value;
    let base = +state_.data.base_value;
    let udl = +state_.data.udl_value;

    return (
        <div className="button-price-length">
            <h2>Длина в метрах:</h2>
            <div>
                <div className="line-dop"></div>
                <div className="range">
                    <input onInput={dispatch_length_inp}
                           type="range"
                           min="1"
                           max="5"
                           steps="1"
                           defaultValue={+state_.selected_value.value_inp_length} />
                </div>
                <ul className="range-labels">
                    <li className="active selected"
                        data-n="1"
                        data-udl={base}
                        onClick={dispatch_length_ul}>{base}
                    </li>
                    <li className=""
                        data-n="2"
                        data-udl={base+udl}
                        onClick={dispatch_length_ul}>
                        <span className="pagination__dot"
                              data-tooltip={'+ ' + udl_price}>{base+udl}
                        </span>
                    </li>
                    <li className=""
                        data-n="3"
                        data-udl={base+udl*2}
                        onClick={dispatch_length_ul}>
                        <span className="pagination__dot"
                              data-tooltip={'+ ' + 2*udl_price}>{base+udl*2}
                        </span>
                    </li>
                    <li className=""
                        data-n="4"
                        data-udl={base+udl*3}
                        onClick={dispatch_length_ul}>
                        <span className="pagination__dot"
                              data-tooltip={'+ ' + 3*udl_price}>{base+udl*3}
                        </span>
                    </li>
                    <li className="last"
                        data-n="5"
                        data-udl={base+udl*4}
                        data-min-udl={base+udl*4}
                        onClick={dispatch_length_ul}>{'> ' + (base+udl*3)}
                    </li>
                </ul>
                <div className={"dop-pp " + (+state_.selected_value.value_inp_length == 5 ? "open" : "")}>
                    <div className="minus"
                         onClick={dispatch_length_minus}>-
                    </div>
                    <span className="ss">{+state_.selected_value.value_inp_length == 5 && base_udl_value}</span>
                    <div className="plus"
                         onClick={dispatch_length_plus}>+
                    </div>
                </div>
            </div>
        </div>
    );
};

export {ButtonPriceLength};