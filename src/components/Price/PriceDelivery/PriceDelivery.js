import React from "react";
import {ListTitlePrice} from "../../Views/ListTitlePrice/ListTitlePrice";
import './PriceDelivery.scss'

const PriceDelivery =() => (
	<div className="price_delivery">
        <ListTitlePrice data-text-num="3" data-text-title="Рассчитайте стоимость доставки" />
    </div>
);

export {PriceDelivery};