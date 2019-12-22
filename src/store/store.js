import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduser_prop from '../redusers/reduser_prop.js';

const createData = (obj) => {
    return {
    				data: {
    				    price_size: [...obj.price],
                        base_value: obj.base,
                        sale: obj.sale,
                        udl_value: obj.udl,
                        model: obj.model,
                    },
    				selected_value: {
    				    price_size: {...obj.price[0]},
                        base_udl_value: obj.base,
                        value_inp_length: 1,
                        width: obj.price[0].width,
                        dlinadugi: obj.price[0].dlinadugi,
    				}
    			};
};

const logger = store => next => action => {

    let result = null;

    console.groupCollapsed("dispatching", action.type)
    console.log('action', action)
    result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()

};

const storeFactory = (data) => applyMiddleware(logger)(createStore)(reduser_prop, data);

const createStoreData = (obj) => {
    return storeFactory(createData(obj))
};

export {createStoreData};