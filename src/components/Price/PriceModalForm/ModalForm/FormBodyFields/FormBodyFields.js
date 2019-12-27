import React, {useCallback} from "react";
import {useDispatch, useSelector} from 'react-redux';
import './FormBodyFields.scss';

const FormBodyFields = () => {
    const dispatch = useDispatch();
    const state_ = useSelector(state => {return {...state}});

    return (
        <>
            <div className="form_body_name">
                <input type="text"
                       placeholder="Введите ваши ФИО (обязательно)"
                       name="name"
                       defaultValue={state_.selected_value.zakaz_fields.name}
                       id="name"
                />
            </div>
            <div className="form_body_phone">
                <input type="tel"
                       placeholder="Введите ваш телефон (обязательно)"
                       name="phone"
                       defaultValue={state_.selected_value.zakaz_fields.phone}
                       id="phone"
                />
            </div>
            <div className="form_body_message">
                <textarea name="message"
                          id="message"
                          cols="30"
                          rows="10"
                          placeholder="Здесь вы можете указать Ваш населённый пункт(обязательно) или написать пожелания к заказу."
                          defaultValue={state_.selected_value.zakaz_fields.message}
                >
                </textarea>
                />
            </div>
            <div className="form_body_button_submit">
                <input type="button" value="Заказать" />
            </div>
        </>
    )
};

export {FormBodyFields};