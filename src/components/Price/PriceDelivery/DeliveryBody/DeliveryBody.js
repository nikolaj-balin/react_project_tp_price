import React, {useCallback, useRef, useEffect, forwardRef, useImperativeHandle} from "react";
import {useDispatch, useSelector} from "react-redux";
import '../../../../kladr-api/jquery.fias.min.js';
import '../../../../kladr-api/jquery.fias.min.css';
import './DeliveryBody.scss';
import {createKlardEdit, createKlardEditElStatus, createOrgKlardEdit} from "../../../../actions/Actions";

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
        get value() {
            return ref_el.current.value;
        },
        set value(value) {
            ref_el.current.value = value;
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
                       placeholder="Введите и выберите название Вашего населенного пункта из выпадающего списка"
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
    const dispatch_edit_el_status = useCallback((n, message) => {dispatch(createKlardEditElStatus(n, message))}, []);


    const dispatch_org_edit_fetch = useCallback((e) => {
        let city_state = state_.selected_value.delivery.city.replace(/([а-яА-ЯёЁ]+\.)|\s/ig, '');
        let value = inputRef.current.value.replace(/\s/ig,'');
        let succes_city = city_state == value;

        if(state_.selected_value.delivery.kladr == 0) {
                dispatch_edit_el_status(1);
                inputRef.current.value = '';
                inputRef.current.focus();
            return;
        };

        if(!succes_city) {
                dispatch_edit_el_status(2);
                inputRef.current.focus();
            return;
        };

        let base_price = +state_.selected_value.price_size.price_base;
        let udl_price = +state_.selected_value.price_size.price_udlinenie;
        let base_selected = +state_.selected_value.base_udl_value;
        let base = +state_.data.base_value;
        let udl = +state_.data.udl_value;

        let koef_udl = (base_selected - base)/udl;
        let price = base_price+udl_price*koef_udl;

        let kladr = +state_.selected_value.delivery.kladr;
        let org = state_.selected_value.delivery.org;
        let weight_base = +state_.selected_value.price_size.weight_base;
        let weight_udl = +state_.selected_value.price_size.weight_udl;
        let volume_base = +state_.selected_value.price_size.volume_base;
        let volume_udl = +state_.selected_value.price_size.volume_udl;
        let city = +state_.selected_value.delivery.city;

        let weight = weight_base + weight_udl*koef_udl;
        let volume = volume_base + volume_udl*koef_udl;

        dispatch_edit_el_status(4);
        let formData = new FormData();
        formData.append('query', 'raschet');
        formData.append('kladr', kladr);
        formData.append('org', org);
        formData.append('weight', weight);
        formData.append('volume', volume);
        formData.append('price', +price);
        formData.append('city', city);

        let options = {
            method: 'POST',
            body: formData,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
            }
        };

        fetch('ajax.html', options).then(response =>{ return response.text()}).then(response => dispatch_edit_el_status(5, response)).catch(error => dispatch_edit_el_status(6, error));

        // setTimeout(() => {
        //     let html =  '<span class="dopinfo">' +
        //                     'Стоимость доставки ориентировочная. Точную стоимость доставки уточняйте при оформлении заказа.' +
        //                 '</span>' +
        //                 '<span class="cena">' +
        //                     '<span class="title">Стоимость доставки: </span>' +
        //                     '<span class="cost">2 981 руб.</span>' +
        //                 '</span>' +
        //                 '<span class="title">Пункт выдачи:</span>\n' +
        //                 '<ul>\n' +
        //                     '<li>г. Володарск, </li>\n' +
        //                 '</ul>';
        //
        //     dispatch_edit_el_status(6, html);
        //
        // }, 2000)

    }, []);


    return (
        <div className="delivery_body">
            <div className={"img delline_delivery " + (state_.selected_value.delivery.org == 'delline' ? 'active' : '')}
                 onClick={dispatch_org_edit_klar}
                 data-org="delline">

            </div>
            <div className={"img gtd_delivery " + (state_.selected_value.delivery.org == 'gtd' ? 'active' : '')}
                 onClick={dispatch_org_edit_klar}
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