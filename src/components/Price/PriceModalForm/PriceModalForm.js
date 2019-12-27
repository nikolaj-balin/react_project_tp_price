import React, {useCallback} from "react";
import {useDispatch, useSelector} from 'react-redux';
import './PriceModalForm.scss';
import {createShowButtonForm} from "../../../actions/Actions";
import {ModalForm} from "./ModalForm/ModalForm.js";


const PriceModalForm = () => {
    const state_ = useSelector(state => {return {...state}});
    const dispatch = useDispatch();
    const dispatch_show_button_form = useCallback(() => {dispatch(createShowButtonForm(false))}, []);

    return (
        <div className={"price_modal_form " + (state_.selected_value.form_show ? 'show' : '')}>
            <div className='conteiner_modal'>
                <h2>Оформить заказ</h2>
                <div className="close_button"
                     onClick={dispatch_show_button_form}
                >&times;
                </div>
                <div className='conteiner_body'>
                    <ModalForm />
                </div>
            </div>
        </div>
    );
};



export { PriceModalForm };