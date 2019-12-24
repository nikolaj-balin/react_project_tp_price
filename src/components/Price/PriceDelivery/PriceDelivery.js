import React from "react";
import {ListTitlePrice} from "../../Views/ListTitlePrice/ListTitlePrice";
import {DeliveryBody} from "./DeliveryBody/DeliveryBody";
import './PriceDelivery.scss'

const PriceDelivery =() => (
	<div className="price_delivery">
        <ListTitlePrice data-text-num="3" data-text-title="Рассчитайте стоимость доставки" />
        <DeliveryBody />
    </div>
);

export {PriceDelivery};