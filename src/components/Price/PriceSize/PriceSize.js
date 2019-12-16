import React from "react";
import './PriceSize.scss';
import {ListTitlePrice} from '../../Views/ListTitlePrice/ListTitlePrice.js';
import {PanelPriceSize} from './PanelPriceSize/PanelPriceSize.js';

const PriceSize = () => (
		<div className="price_size">			
			<ListTitlePrice data-text-num="1" data-text-title="Выберите размер теплицы" />
			<PanelPriceSize />
		</div>
	);

export {PriceSize};