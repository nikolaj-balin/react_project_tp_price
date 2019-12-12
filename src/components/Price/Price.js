import React from "react";
import './stylePrice.scss';
import {PriceSize} from './PriceSize/PriceSize.js';
import {PriceSoptov} from './PriceSoptov/PriceSoptov.js';
import {PriceDelivery} from './PriceDelivery/PriceDelivery.js';
import {PriceModalForm} from './PriceModalForm/PriceModalForm.js';


const Price = () => (
        <div className="container_price">
            <h1>Стоимость</h1>
            <PriceSize />
            <PriceSoptov />
            <PriceDelivery />
            <PriceModalForm />
        </div>
    );

export {Price};