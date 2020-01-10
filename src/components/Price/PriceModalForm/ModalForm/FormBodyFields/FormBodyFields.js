import React, {useCallback} from "react";
import {useDispatch, useSelector} from 'react-redux';
import MaskedInput from 'react-maskedinput';
import './FormBodyFields.scss';
import {createFormSubmit, createFormNameFieldEdit, createFormPhoneFieldEdit, createFormMessageFieldEdit} from "../../../../../actions/Actions";

const FormBodyFields = () => {
    const dispatch = useDispatch();
    const state_ = useSelector(state => {return {...state}});
    const dispatch_form_submit = useCallback((e) => {dispatch(createFormSubmit(e))}, []);
    const dispatch_form_name = useCallback((e) => {dispatch(createFormNameFieldEdit(e))}, []);
    const dispatch_form_phone = useCallback((e) => {dispatch(createFormPhoneFieldEdit(e))}, []);
    const dispatch_form_message = useCallback((e) => {dispatch(createFormMessageFieldEdit(e))}, []);


    return (
        <>
            <div className={'form_body_name' + (!state_.selected_value.zakaz_fields.buttonflag ? !state_.selected_value.zakaz_fields.succesflag && state_.selected_value.zakaz_fields.name.length == 0 ? ' error' : ' succes' : '')}>
                <input type="text"
                       autoComplete="off"
                       placeholder="Введите ваши ФИО (обязательно)"
                       name="name"
                       defaultValue={state_.selected_value.zakaz_fields.name}
                       onChange={dispatch_form_name}
                       id="name"
                />
            </div>
            <div className={"form_body_phone" + (!state_.selected_value.zakaz_fields.buttonflag ? !state_.selected_value.zakaz_fields.succesflag && state_.selected_value.zakaz_fields.phone.replace(/[^0-9]/gim, '').length != 11 ? ' error' : ' succes' : '')}>
                <MaskedInput autoComplete="off"
                             mask="+7 (111) 111-11-11"
                             placeholder="Введите ваш телефон (обязательно)"
                             size="17"
                             type="tel"
                             name="phone"
                             value={state_.selected_value.zakaz_fields.phone}
                             onChange={dispatch_form_phone}
                             id="phone"
                />
            </div>
            <div className={"form_body_message" + (!state_.selected_value.zakaz_fields.buttonflag ? !state_.selected_value.zakaz_fields.succesflag && state_.selected_value.zakaz_fields.message.length == 0 ? ' error' : ' succes' : '')}>
                <textarea name="message"
                          id="message"
                          cols="30"
                          rows="10"
                          placeholder="Здесь вы можете указать Ваш населённый пункт(обязательно) или написать пожелания к заказу."
                          defaultValue={state_.selected_value.zakaz_fields.message}
                          onChange={dispatch_form_message}
                >
                </textarea>
            </div>
            <div className="form_body_button_submit">
                <input type="button"
                       value="Заказать"
                       onClick={dispatch_form_submit}
                       className={(state_.selected_value.zakaz_fields.buttonflag || state_.selected_value.zakaz_fields.succesflag || state_.selected_value.zakaz_fields.ajaxflag) ? '' : 'error'} />
            </div>
        </>
    )
};

export {FormBodyFields};