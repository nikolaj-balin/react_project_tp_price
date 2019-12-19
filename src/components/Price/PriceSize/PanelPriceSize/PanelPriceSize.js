import React from "react";
import './PanelPriceSize.scss';
import {ButtonPriceSizeWidth} from "./ButtonPriceSizeWidth/ButtonPriceSizeWidth";
import {ButtonPriceLength} from "./ButtonPriceLength/ButtonPriceLength.js"
import {ButtonPriceSizeStep} from "./ButtonPriceSizeStep/ButtonPriceSizeStep.js"
import {PriceTotal} from "./PriceTotal/PriceTotal.js"

const PanelPriceSize = () => (
    <div className="panel-price-size">
        <div className="panel-price-size-img"><img src={require("./images/kapl.png").default} alt=""/></div>
        <ButtonPriceSizeWidth />
        <ButtonPriceSizeStep />
        <ButtonPriceLength />
        <PriceTotal />
    </div>
);

export {PanelPriceSize};