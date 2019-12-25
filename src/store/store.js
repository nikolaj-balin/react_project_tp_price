import {createStore, combineReducers, applyMiddleware} from 'redux';
import reduser_prop from '../redusers/reduser_prop.js';

const getArrSoptovar = (arr) => {
    let obj = {};
    for(let value of arr) {
        obj[value.name] = value;
    }
    return obj;
};

const getArrSoptovarSelected = (arr) => {
    let obj = {};
    for(let value of arr) {
        obj[value.name] = 0;
    }
    return obj;
};

const createData = (obj) => {

    return {
        data: {
            price_size: [...obj.price],
            base_value: obj.base,
            sale: obj.sale,
            udl_value: obj.udl,
            model: obj.model,
            soptovar: {...getArrSoptovar(obj.soptovar)},
        },
        selected_value: {
            price_size: {...obj.price[0]},
            base_udl_value: obj.base,
            value_inp_length: 1,
            width: obj.price[0].width,
            dlinadugi: obj.price[0].dlinadugi,
            soptovar: {...getArrSoptovarSelected(obj.soptovar)},
            delivery: {
                org: 'delline',
                kladr: 0,
                city: '',
                state_delivery_el: 0
            }
        }
    };
};

const logger = store => next => action => {

    let result = null;

    console.groupCollapsed("dispatching", action.type);
    console.log('action', action);
    result = next(action);
    console.log('next state', store.getState());
    console.groupEnd();

};

const storeFactory = (data) => applyMiddleware(logger)(createStore)(reduser_prop, data);

const createStoreData = (obj) => {
    return storeFactory(createData(obj))
};

export {createStoreData};