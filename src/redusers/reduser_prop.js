import C from '../actions/constants.js';

const clearFilter = (store, action) => {
	let _store = {...store};
	_store.search[action.el.dataset.name] = [];
	return _store;
};

const reduser_props = (store=[], action) => { 
		
	switch (action.type) {
		case C.EDIT_WORKER:
				return editWorkersEditStore(store, action);
			break;

		default:
				return store;
			break;
	}

};

export default reduser_props;