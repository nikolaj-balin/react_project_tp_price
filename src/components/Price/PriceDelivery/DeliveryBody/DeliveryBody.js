import React, {useCallback, useRef, useEffect, forwardRef, useImperativeHandle} from "react";
import {useDispatch, useSelector} from "react-redux";
import '../../../../kladr-api/jquery.fias.min.js';
import '../../../../kladr-api/jquery.fias.min.css';
import './DeliveryBody.scss';
import {createKlardEdit} from "../../../../actions/Actions";
import {createOrgKlardEdit} from "../../../../actions/Actions";

const init_api = (el, dispatch) => {
    $(el).fias({
        type: $.fias.type.city,
        withParents: true,
        verify: true,
        select: function(obj){
            dispatch(obj);
        },
    });
};


let InputSearchCity = (props, ref) => {

    const ref_el = useRef(null);
    useImperativeHandle(ref, () => ({
        focus: () => {
            ref_el.current.focus();
        },
        value: () => {
            return ref_el.current.value;
        }
    }));

    const state_ = useSelector(state => {return {...state}});
    const dispatch = useDispatch();
    const search_adres = useCallback((e) => {getAdres(e)}, []);

    useEffect(() => {
        init_api(ref_el.current, (params) => dispatch(createKlardEdit(params)));
    }, []);

    return (
        <div className="delline_search">
                <input name="delline_address"
                       ref={ref_el}
                       type="text"
                       defaultValue=""
                       placeholder="Введите название Вашего населенного пункта"
                       autoComplete="off"
                />
                <span>Стоимость доставки ориентировочная. Точную стоимость доставки уточняйте при оформлении заказа.</span>
        </div>

    );
};

InputSearchCity = forwardRef(InputSearchCity);

const DeliveryBody = () => {

    const state_ = useSelector(state => {return {...state}});
    const inputRef = useRef(null);
    const dispatch = useDispatch();
    const dispatch_org_edit_klar = useCallback((e) => {dispatch(createOrgKlardEdit(e))}, []);

    const dispatch_org_edit_fetch = useCallback((e) => {
        let city_state = state_.selected_value.delivery.city.replace(/(г\.)|\s/ig, '');
        let value = inputRef.current.value().replace(/\s/ig,'');
        let succes_city = city_state == value;

        if(state_.selected_value.delivery.kladr == 0 || !succes_city) {
                inputRef.current.focus();
            return;
        }
    }, []);

    return (
        <div className="delivery_body">
            <div className={"img delline_delivery " + (state_.selected_value.delivery.org == 'delline' ? 'active' : '')}
                 onClick={dispatch_org_edit_klar}
                 data-org="delline">

            </div>
            <div className={"img gtd_delivery " + (state_.selected_value.delivery.org == 'gtd' ? 'active' : '')}
                 onClick={dispatch_org_edit_fetch}
                 data-org="gtd">
            </div>
            <InputSearchCity ref={inputRef} />
            <div className="field_button">
                <input type="button"
                       defaultValue="Рассчитать"
                       onClick={dispatch_org_edit_fetch}
                />
            </div>
        </div>
    )
};

export {DeliveryBody};