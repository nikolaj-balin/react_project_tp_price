import React, {useCallback, useRef, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import './PriceSoptov.scss';
import {ListTitlePrice} from '../../Views/ListTitlePrice/ListTitlePrice.js';
import {PanelPriceSoptovar} from "./PanelPriceSoptovar/PanelPriceSoptovar";

const PriceSoptov =() => (
	<div className="price_soptov">
		<ListTitlePrice data-text-num="2" data-text-title="Выберите сопутствующие товары" />
		<PanelPriceSoptovar />
	</div>
);

export {PriceSoptov};