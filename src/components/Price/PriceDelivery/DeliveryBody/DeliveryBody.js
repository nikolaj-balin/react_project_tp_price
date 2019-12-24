import React, {useCallback, useRef, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import '../../../../kladr-api/jquery.fias.min.js';
import '../../../../kladr-api/jquery.fias.min.css';
import './DeliveryBody.scss';
import {createKlardEdit} from "../../../../actions/Actions";

const init_api = (el, dispatch) => {
    $(el).fias({
        type: $.fias.type.city,
        withParents: true,
        change: function(obj){
            // $(this).attr('data-city',obj.typeShort+'. '+obj.name);

            // $(this).closest('.block_teplica').find('.zakaz_form').find('textarea[name="text_zakaz"]').val('Город доставки: '+labelFormatKladr(obj));
            // setParamsInputCity(obj);
        },
        select : function(obj){
            dispatch(obj);
        },
    });
};

// function setParamsInputCity(param) {
//     $('.loadcity').attr({
//         'data-kladr-id': param.id,
//         'data-city': param.typeShort + '. ' + param.name,
//     }).val(param.typeShort + '. ' + param.name);
// }


const InputSearchCity = () => {

    const ref_el = useRef(null);
    const state_ = useSelector(state => {return {...state}});
    const dispatch = useDispatch();
    const search_adres = useCallback((e) => {getAdres(e)}, []);

    useEffect(() => {
        init_api(ref_el.current, (params) => dispatch(createKlardEdit(params)));
    }, []);

    return (
        <div>
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
        </div>

    );
};

const DeliveryBody = () => {

    return (
        <div className="delivery_body">
            <div className="img gtd_delivery"
                 data-org="gtd">
            </div>
            <div className="img delline_delivery"
                 data-org="delline">
            </div>
            <InputSearchCity />
            <div className="field_button">
                <input type="button" defaultValue="Рассчитать" />
            </div>
        </div>
    )
};

export {DeliveryBody};