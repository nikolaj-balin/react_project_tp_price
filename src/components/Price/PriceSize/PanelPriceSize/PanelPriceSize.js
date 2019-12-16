import React from "react";
import {ButtonPriceSize} from "../../../Views/ButtonPriceSize/ButtonPriceSize";
import {ButtonPriceLength} from "./ButtonPriceLength/ButtonPriceLength.js"

const PanelPriceSize = () => (
    <div className="panel-price-size">
        <div className="panel-price-size-img"><img src={require("./images/kapl.png").default} alt=""/></div>
        <ButtonPriceSize className="panel-price-size-width" data-header={"Ширина:"} data-value={"width"} />
        <ButtonPriceSize className="panel-price-size-step-body" data-header={"Шаг дуг:"} data-value={"dlinadugi"} />
        <ButtonPriceLength className="button-price-length" data-header={"Шаг дуг:"} data-value={"dlinadugi"} />
    </div>
);

export {PanelPriceSize};