import C from '../actions/constants.js';

const editLenghtInp = (store, action) => {
	let _store = {...store};
	_store.selected_value.base_udl_value = (action.value - 1)*_store.data.udl_value + +_store.data.base_value;
	_store.selected_value.value_inp_length = action.value;
	return _store;
};

const editLenghtLi = (store, action) => {
	let _store = {...store};
	_store.selected_value.base_udl_value = action.udl_value;
	_store.selected_value.value_inp_length = action.number;
	return _store;
};

const editLenghtMinus = (store, action) => {
	let _store = {...store};

	if( +_store.selected_value.base_udl_value === +_store.data.base_value + +_store.data.udl_value * 4){
		_store.selected_value.base_udl_value -= +_store.data.udl_value;
		_store.selected_value.value_inp_length -= 1;
	} else if ( +_store.selected_value.base_udl_value > +_store.data.base_value + +_store.data.udl_value * 4) {
		_store.selected_value.base_udl_value -= +_store.data.udl_value;
	};
	return _store;
};

const editLenghtPlus = (store, action) => {
	let _store = {...store};
	let base_udl_value = +_store.selected_value.base_udl_value;
	let udl_value = _store.data.udl_value;

	if( base_udl_value >= +_store.data.base_value + +_store.data.udl_value * 4){
		_store.selected_value.base_udl_value = base_udl_value + udl_value;
	};
	return _store;
};

const editWidthSize = (store, action) => {
	let _store = {...store};
	_store.selected_value.width = action.value;


	return _store;
};

const reduser_props = (store=[], action) => { 
		
	switch (action.type) {
		case C.LENGTH_EDIT_IN:
				return editLenghtInp(store, action);
			break;
	case C.LENGTH_EDIT_LI:
				return editLenghtLi(store, action);
			break;

	case C.LENGTH_EDIT_MINUS:
				return editLenghtMinus(store, action);
			break;

	case C.LENGTH_EDIT_PLUS:
				return editLenghtPlus(store, action);
			break;
	case C.WiDTH_EDIT:
				return editWidthSize(store, action);
			break;

		default:
				return store;
			break;
	}

};

export default reduser_props;