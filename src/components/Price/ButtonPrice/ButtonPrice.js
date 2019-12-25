import React, {useCallback, useRef, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createKlardEdit} from "../../../actions/Actions";
import './ButtonPrice.scss';

const ButtonPrice = () => {
    return (
        <div className='button_price'>
            <div className='button_price_body'>
                <div className='button'>
                    ЗАКАЖИТЕ ТЕПЛИЦУ ПРЯМО СЕЙЧАС!
                </div>
            </div>
        </div>
    )
};

export {ButtonPrice};