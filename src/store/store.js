import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduser_prop from '../redusers/reduser_prop.js';

const createData = (price, base) => {
    return {
    				data: {
    				    price_size: [...price]
                    },
    				selected_value: {
    				    price_size: {...price[0]},
                        base_value: base
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

const createStoreData = (price, base) => {
    return storeFactory(createData(price, base))
};

export {createStoreData};