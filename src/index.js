import React from "react";
import ReactDOM from "react-dom";
import './scss/style.scss';
import { Provider} from 'react-redux';
import {Price} from './components/Price/Price.js';
import {createStoreData} from './store/store.js';

const getPrice = (obj) => {
    obj.price.sort((valueA, valueB) => valueA.width - valueB.width);
    obj.price.sort((valueA, valueB) => valueA.dlinadugi - valueB.dlinadugi);
    return obj;
};


let elements = document.querySelectorAll(".full_container_react");

for(let el of elements){
    let store_arr = JSON.parse(el.dataset.pricejson);
    ReactDOM.render(
        <Provider store={createStoreData(getPrice(store_arr))}>
            <Price />
        </Provider>,
        el
    )
}