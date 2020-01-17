import React, {useCallback} from "react";
import {useDispatch, useSelector} from 'react-redux';
import MaskedInput from 'react-maskedinput';
import './FormBodyFields.scss';
import {createFormSubmit, createFormNameFieldEdit, createFormPhoneFieldEdit, createFormMessageFieldEdit, createFormAjax} from "../../../../../actions/Actions";

const FormBodyFields = () => {
    const dispatch = useDispatch();
    const state_ = useSelector(state => {return {...state}});
    const dispatch_form_name = useCallback((e) => {dispatch(createFormNameFieldEdit(e))}, []);
    const dispatch_form_phone = useCallback((e) => {dispatch(createFormPhoneFieldEdit(e))}, []);
    const dispatch_form_message = useCallback((e) => {dispatch(createFormMessageFieldEdit(e))}, []);
    const model = state_.data.model;
    const name = state_.data.name;

    const dispatch_form_submit = useCallback((e) => {

        dispatch(createFormSubmit(e));

        if(state_.selected_value.zakaz_fields.succesflag && !state_.selected_value.zakaz_fields.ajaxflag) {

            dispatch(createFormAjax('Пожалуйста подождите - идет отправка заказа!', 'before'));

            let formData = new FormData();
            formData.append('query','newzakaz');
            formData.append('fio_zakaz', state_.selected_value.zakaz_fields.name);
            formData.append('phone_zakaz', state_.selected_value.zakaz_fields.phone);
            formData.append('text_zakaz', state_.selected_value.zakaz_fields.message);
            formData.append('teplica', name);
            formData.append('length', +state_.selected_value.base_udl_value + ' м');
            formData.append('weight', +state_.selected_value.price_size.width + ' м');
            formData.append('dlinadugi', +state_.selected_value.price_size.dlinadugi + ' м');

            for( let value in state_.selected_value.soptovar) {
              if(state_.selected_value.soptovar[value] != 0) {
                  formData.append(state_.data.soptovar[value].ajaxinfo, state_.data.soptovar[value].label + ' (' + state_.selected_value.soptovar[value] + 'шт.)');
              }
            };

            let options = {
                method: 'POST',
                body: formData,
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                }

            }

            fetch('ajax.html', options).then(response => {
                return response.text();
            }).then(resolve => {
                dispatch(createFormAjax(resolve, 'succes'));
            }).catch(error => {
                dispatch(createFormAjax('Произошла ошибка попробуйте снова!', 'error'))
            });

            // let xhr = new XMLHttpRequest();
            // xhr.open('POST', 'ajax.html');
            // // xhr.responseType = 'text';
            // // xhr.withCredentials = true;
            // xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            //
            // xhr.onload = function() {
            //     if (xhr.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
            //         // alert(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
            //         dispatch(createFormAjax('Произошла ошибка попробуйте снова!', 'error'));
            //     } else { // если всё прошло гладко, выводим результат
            //         // alert(`Готово, получили ${xhr.response.length} байт`); // response -- это ответ сервера
            //         dispatch(createFormAjax(xhr.response, 'succes'));
            //     }
            // };
            //
            // xhr.onerror = function() {
            //     dispatch(createFormAjax('Произошла ошибка попробуйте снова!', 'error'));
            // };
            //
            // xhr.send(formData);

        };

    }, []);




    return (
        <>
            <div className={'form_body_name' + (!state_.selected_value.zakaz_fields.buttonflag ? !state_.selected_value.zakaz_fields.succesflag && state_.selected_value.zakaz_fields.name.length == 0 ? ' error' : ' succes' : '')}>
                <input type="text"
                       autoComplete="off"
                       placeholder="Введите ваши ФИО (обязательно)"
                       name={`name_${model}`}
                       defaultValue={state_.selected_value.zakaz_fields.name}
                       onChange={dispatch_form_name}
                       id={`name_${model}`}
                />
                <span className={'icon'}></span>
                <span className={'textinfo'}>
                    {(!state_.selected_value.zakaz_fields.buttonflag ? !state_.selected_value.zakaz_fields.succesflag && state_.selected_value.zakaz_fields.name.length == 0 ? 'Имя не может быть пустым' : '' : '')}
                </span>
            </div>
            <div className={"form_body_phone" + (!state_.selected_value.zakaz_fields.buttonflag ? !state_.selected_value.zakaz_fields.succesflag && state_.selected_value.zakaz_fields.phone.replace(/[^0-9]/gim, '').length != 11 ? ' error' : ' succes' : '')}>
                <MaskedInput autoComplete="off"
                             mask="+7 (111) 111-11-11"
                             placeholder="Введите ваш телефон (обязательно)"
                             size="17"
                             type="tel"
                             name={`phone_${model}`}
                             value={state_.selected_value.zakaz_fields.phone}
                             onChange={dispatch_form_phone}
                             id={`phone_${model}`}
                />
                <span className={'icon'}></span>
                <span className={'textinfo'}>
                    {(!state_.selected_value.zakaz_fields.buttonflag ? !state_.selected_value.zakaz_fields.succesflag && state_.selected_value.zakaz_fields.phone.replace(/[^0-9]/gim, '').length != 11 ? 'Телефон не корректен' : '' : '')}
                </span>
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
                <span className={'icon'}></span>
                <span className={'textinfo'}>
                    {(!state_.selected_value.zakaz_fields.buttonflag ? !state_.selected_value.zakaz_fields.succesflag && state_.selected_value.zakaz_fields.message.length == 0 ? 'Комментарий не может быть пустым' : '' : '')}
                </span>
                {state_.selected_value.zakaz_fields.messageflag ? <span dangerouslySetInnerHTML={{__html: state_.selected_value.zakaz_fields.messageajax}} className={'ajaxinfo ' + state_.selected_value.zakaz_fields.messageClass}>
                </span> : ''}

            </div>
            <div className="form_body_button_submit">
                <input type="button"
                       value="Заказать"
                       onClick={dispatch_form_submit}
                       className={((state_.selected_value.zakaz_fields.buttonflag || state_.selected_value.zakaz_fields.succesflag) && !state_.selected_value.zakaz_fields.ajaxflag) ? '' : 'error'} />
            </div>
        </>
    )
};

export {FormBodyFields};