import React, {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import './PriceModalForm.scss';
import {createKlardEdit, createShowButtonForm} from "../../../actions/Actions";
import {ModalForm} from "./ModalForm/ModalForm.js";


const PriceModalForm = () => {
    const state_ = useSelector(state => {return {...state}});
    const dispatch = useDispatch();
    const dispatch_show_button_form = useCallback(() => {dispatch(createShowButtonForm(false))}, []);

    useEffect(() => {
        if(state_.selected_value.form_show) {
            document.body.classList.add('open');
        } else {
            document.body.classList.remove('open');
        };

    }, [state_.selected_value.form_show]);

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