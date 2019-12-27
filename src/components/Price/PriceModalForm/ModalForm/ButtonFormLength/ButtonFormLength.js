import React, {useCallback} from "react";
import {useDispatch, useSelector} from 'react-redux';
import './ButtonFormLength.scss';

const ButtonFormLength = () => {
    return (
        <div className='button_form_length'>
            <span className='minus'>-</span>
            <span className='value_form_length'>2 м</span>
            <span className='plus'>+</span>
        </div>
    )
};

export {ButtonFormLength};