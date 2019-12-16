import React from "react";
import ReactDOM from "react-dom";
import './scss/style.scss';
import { Provider} from 'react-redux';
import {Price} from './components/Price/Price.js';
import {createStoreData} from './store/store.js';

const getPrice = (arr) => {
    arr.sort((valueA, valueB) => valueA.width - valueB.width);
    arr.sort((valueA, valueB) => valueA.dlinadugi - valueB.dlinadugi);
    return arr;
};


let elements = document.querySelectorAll(".full_container");

for(let el of elements){
    ReactDOM.render(
        <Provider store={createStoreData(getPrice(JSON.parse(el.dataset.pricejson)))}>
            <Price />
        </Provider>,
        el
    )
}