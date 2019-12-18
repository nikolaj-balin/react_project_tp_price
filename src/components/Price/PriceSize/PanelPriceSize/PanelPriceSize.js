import React from "react";
import {ButtonPriceSizeWidth} from "./ButtonPriceSizeWidth/ButtonPriceSizeWidth";
import {ButtonPriceLength} from "./ButtonPriceLength/ButtonPriceLength.js"
import {PriceTotal} from "./PriceTotal/PriceTotal.js"

const PanelPriceSize = () => (
    <div className="panel-price-size">
        <div className="panel-price-size-img"><img src={require("./images/kapl.png").default} alt=""/></div>
        <ButtonPriceSizeWidth />
        {/*<ButtonPriceSizeWidth className="panel-price-size-step-body" data-header={"Шаг дуг:"} data-value={"dlinadugi"} />*/}
        <ButtonPriceLength />
        <PriceTotal />
    </div>
);

export {PanelPriceSize};