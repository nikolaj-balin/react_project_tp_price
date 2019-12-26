import React from "react";
import {useSelector} from "react-redux";
import './ResultatKlar.scss';

const ResultatKlar = () => {

    const state_ = useSelector(state => {return {...state}});
    let status_el = state_.selected_value.delivery.state_delivery_el;
    let el = '';

    switch (status_el) {
        case 1:
            el = <div className='text'>Вы не выбрали город из выпадающего списка!</div>;
            break;
        case 2:
            el = <div className='text'>Поле город заполнено не верно выберите город из выпадающего спика!</div>;
            break;
        case 3:
            el = <div className='text'>Поле город заполнено не верно выберите город из выпадающего спика!</div>;
            break;
        case 4:
            el = <div className='text'>Пожалуйста подождите - идет расчет стоимости
                <img className='ajax_loader' src={require("./images/ajax-loader.gif").default} alt=""/>
            </div>;
            break;
        case 5:
            el = <div className='text'>{state_.selected_value.delivery.message_api}</div>;
            break;
        default:
            el = '';
            break;
    }

    return (
        <div className='resultat_klar'>
            {el}
        </div>
    )
};


export {ResultatKlar};