import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduser_prop from '../redusers/reduser_prop.js';

const createData = (data) => {
    return {
    				data: {
    				    price_size: [...data]
                    },
    				selected_value: {
    				    price_size: {...data[0]},
                        base_value: 4
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

const createStoreData = (data) => {
    return storeFactory(createData(data))
};

export {createStoreData};