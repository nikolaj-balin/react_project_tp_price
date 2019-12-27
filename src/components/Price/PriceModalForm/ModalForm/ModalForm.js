import React from "react";
import './ModalForm.scss';
import {DopopcForm} from './DopopcForm/DopopcForm';
import {ButtonFormWidth} from './ButtonFormWidth/ButtonFormWidth';
import {ButtonFormStep} from './ButtonFormStep/ButtonFormStep';
import {ButtonFormLength} from './ButtonFormLength/ButtonFormLength';
import {FormBodyFields} from './FormBodyFields/FormBodyFields';

const ModalForm = () => {

    return (
        <div className='modal_form_body'>
            <div className='form_body_panel'>
                <h2>Name</h2>
                <div className='form_body_panel_content'>
                    <div className='body_panel_label'>
                        <div className='body_panel_row'>Длина теплицы</div>
                        <div className='body_panel_row'>Ширина теплицы</div>
                        <div className='body_panel_row'>Шаг дуг</div>
                    </div>
                    <div className='body_panel_buttons'>
                        <div className='body_panel_row'>
                            <ButtonFormLength />
                        </div>
                        <div className='body_panel_row'>
                            <ButtonFormWidth />
                        </div>
                        <div className='body_panel_row'>
                            <ButtonFormStep />
                        </div>
                    </div>
                </div>
                <h2>Дополнительные опции</h2>
                <div className='form_panel_dopopc'>
                    <DopopcForm />
                </div>
            </div>
            <div className='form_body_fields'>
                <FormBodyFields />
            </div>
        </div>
    )
};

export {ModalForm};