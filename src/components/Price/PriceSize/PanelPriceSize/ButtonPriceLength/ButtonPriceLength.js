import React, {useCallback, useRef, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import './ButtonPriceLength.scss';
import {createLenghtInpAction, createLenghtLiAction, createLenghtMinusAction, createLenghtPlusAction, createLenghtInpActionKeyDown} from '../../../../../actions/Actions';

const ButtonPriceLength = (props) => {

    const state_ = useSelector(state => {return {...state}});
    const dispatch = useDispatch();
    const ref_el = useRef(null);
    const dispatch_length_inp = useCallback((e) => {dispatch(createLenghtInpAction(e.target))}, []);
    const dispatch_length_inp_key_down = useCallback((e) => {dispatch(createLenghtInpActionKeyDown(e))}, []);
    const dispatch_length_ul = useCallback((e) => {dispatch(createLenghtLiAction(e.currentTarget))}, []);
    const dispatch_length_minus = useCallback((e) => {dispatch(createLenghtMinusAction(e.target))}, []);
    const dispatch_length_plus = useCallback((e) => {dispatch(createLenghtPlusAction(e.target))}, []);

    useEffect(() => {
        ref_el.current.setAttribute('value', +state_.selected_value.value_inp_length);
        ref_el.current.value = +state_.selected_value.value_inp_length;
        ref_el.current.focus();
    }, [+state_.selected_value.base_udl_value]);

    let udl_price = +state_.selected_value.price_size.price_udlinenie;
    let base_udl_value = +state_.selected_value.base_udl_value;
    let base = +state_.data.base_value;
    let udl = +state_.data.udl_value;

    return (
        <div className="button-price-length">
            <h2>Длина в метрах:</h2>
            <div className={"panel-price-size-length-body" + (/edge/i.test(navigator.userAgent) ? ' agent_edge' : '')}>

                <div className="panel-price-size-length-range-conteiner">
                    <div className={`panel-price-size-length-range pos${+state_.selected_value.value_inp_length}`}>
                        <input onInput={dispatch_length_inp}
                               type="range"
                               min="1"
                               max="5"
                               ref={ref_el}
                               steps="1"
                               className='range_price_size'
                               onKeyDown={dispatch_length_inp_key_down}
                        />
                    </div>
                    <ul className="panel-price-size-length-list">
                        <li data-n="1"
                            data-udl={base}
                            onClick={dispatch_length_ul}
                            className={(+state_.selected_value.value_inp_length == 1 ? 'active ' : '') +
                                       (+state_.selected_value.value_inp_length >= 1 ? 'selected' : '')}
                        >
                            <span className="pagination__dot">
                                {base}
                            </span>
                        </li>
                        <li data-n="2"
                            data-udl={base+udl}
                            onClick={dispatch_length_ul}
                            className={(+state_.selected_value.value_inp_length == 2 ? 'active ' : '') +
                                       (+state_.selected_value.value_inp_length >= 2 ? 'selected ' : '') +
                                        'hover_plus_price'}
                        >
                            <span className="pagination__dot"
                                  data-tooltip={'+ ' + udl_price}>{base+udl}
                            </span>
                            <span className='hover_price'>{'+ ' + udl_price.toLocaleString("ru-RU",{useGrouping:true}) + ' руб'}</span>
                        </li>
                        <li data-n="3"
                            data-udl={base+udl*2}
                            onClick={dispatch_length_ul}
                            className={(+state_.selected_value.value_inp_length == 3 ? 'active ' : '') +
                                       (+state_.selected_value.value_inp_length >= 3 ? 'selected ' : '') +
                                        'hover_plus_price'}
                        >
                            <span className="pagination__dot"
                                  data-tooltip={'+ ' + 2*udl_price}>{base+udl*2}
                            </span>
                            <span className='hover_price'>{'+ ' + ((2*udl_price).toLocaleString("ru-RU",{useGrouping:true})) + ' руб'}</span>
                        </li>
                        <li data-n="4"
                            data-udl={base+udl*3}
                            onClick={dispatch_length_ul}
                            className={(+state_.selected_value.value_inp_length == 4 ? 'active ' : '') +
                                       (+state_.selected_value.value_inp_length >= 4 ? 'selected ' : '') +
                                        'hover_plus_price'}
                        >
                            <span className="pagination__dot"
                                  data-tooltip={'+ ' + 3*udl_price}>{base+udl*3}
                            </span>
                            <span className='hover_price'>{'+ ' + ((3*udl_price).toLocaleString("ru-RU",{useGrouping:true})) + ' руб'}</span>
                        </li>
                        <li className="last"
                            data-n="5"
                            data-udl={base+udl*4}
                            data-min-udl={base+udl*4}
                            onClick={dispatch_length_ul}
                            className={(+state_.selected_value.value_inp_length == 5 ? 'active ' : '') +
                                       (+state_.selected_value.value_inp_length >= 5 ? 'selected' : '')}
                        >
                            <span className="pagination__dot">
                                {'> ' + (base+udl*3)}
                            </span>
                        </li>
                    </ul>
                </div>
                <div className={"dop_pp " + (+state_.selected_value.value_inp_length == 5 ? "open" : "")}>
                    <div className="minus"
                         onClick={dispatch_length_minus}>-</div>
                    <span className="ss">{+state_.selected_value.value_inp_length == 5 && base_udl_value}</span>
                    <div className="plus"
                         onClick={dispatch_length_plus}>+</div>
                </div>
            </div>
        </div>
    );
};

export {ButtonPriceLength};