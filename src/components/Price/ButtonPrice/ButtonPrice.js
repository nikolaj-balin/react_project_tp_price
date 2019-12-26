import React, {useCallback} from "react";
import {useDispatch} from "react-redux";
import {createShowButtonForm} from "../../../actions/Actions";
import './ButtonPrice.scss';

const ButtonPrice = () => {

    const dispatch = useDispatch();
    const dispatch_show_button_form = useCallback(() => {dispatch(createShowButtonForm(true))}, []);

    return (
        <div className='button_price'>
            <div className='button_price_body'>
                <div className='button'
                     onClick={dispatch_show_button_form}>
                    ЗАКАЖИТЕ ТЕПЛИЦУ ПРЯМО СЕЙЧАС!
                </div>
            </div>
        </div>
    )
};

export {ButtonPrice};