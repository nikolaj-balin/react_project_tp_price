import C from '../actions/constants.js';

const editLenghtInp = (store, action) => {
	let _store = {...store};
	_store.selected_value.base_udl_value = (action.value - 1)*_store.data.udl_value + +_store.data.base_value;
	_store.selected_value.value_inp_length = action.value;
	return _store;
};

const editLenghtLi = (store, action) => {
	let _store = {...store};
	_store.selected_value.base_udl_value = +action.udl_value;
	_store.selected_value.value_inp_length = +action.number;
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
	let udl_price = +_store.selected_value.price_size.price_udlinenie;
	let base_price = +_store.selected_value.price_size.price_base;
	let base = +_store.data.base_value;
	let udl_value = +_store.data.udl_value;
	let base_udl_value = +_store.selected_value.base_udl_value;
	let koef_udl = (base_udl_value - base)/udl_value;
	let value_step = base_udl_value + udl_value;
	let total_price = (base_price+udl_price*(koef_udl+1))+'';

	if( base_udl_value >= +_store.data.base_value + +_store.data.udl_value * 4){

		if(total_price.length < 6){
			_store.selected_value.base_udl_value = value_step;
		};

	};
	return _store;
};

const editLenghtPlusForm = (store, action) => {

	let _store = {...store};
	let base_udl_value = +_store.selected_value.base_udl_value;
	let base = +_store.data.base_value;
	let udl_value = +_store.data.udl_value;
	let koef_udl = (base_udl_value - base)/udl_value;
	let base_price = +_store.selected_value.price_size.price_base;
	let udl_price = +_store.selected_value.price_size.price_udlinenie;
	let total_price = (base_price+udl_price*(koef_udl+1))+'';
	let value_step = base_udl_value + udl_value;

	if(total_price.length >= 6){
		return _store;
	}

	if( base_udl_value >= +_store.data.base_value + +_store.data.udl_value * 4){
		_store.selected_value.base_udl_value = value_step;
	} else {
		_store.selected_value.base_udl_value = value_step;
		_store.selected_value.value_inp_length += 1;
	};

	return _store;
};

const editLenghtMinusForm = (store, action) => {

	let _store = {...store};

	if(+_store.selected_value.value_inp_length == 1) {
		return _store;
	};

	if( +_store.selected_value.base_udl_value <= +_store.data.base_value + +_store.data.udl_value * 4){
		_store.selected_value.base_udl_value -= +_store.data.udl_value;
		_store.selected_value.value_inp_length -= 1;
	} else if ( +_store.selected_value.base_udl_value > +_store.data.base_value + +_store.data.udl_value * 4) {
		_store.selected_value.base_udl_value -= +_store.data.udl_value;
	};

	return _store;
};

const editKeyDownSicePrice = (store, action) => {

	let _store = {...store};
	let inp_step = +_store.selected_value.value_inp_length;

	if(inp_step == 5 && (action.value == 'ArrowUp' || action.value == 'ArrowRight')){
		editLenghtPlus(store, action)
	}

	if(inp_step == 5 && (action.value == 'ArrowLeft' || action.value == 'ArrowDown')){
		action.event.preventDefault();
		action.event.stopPropagation();
		editLenghtMinus(store, action)
	}


	return _store;
};

const editLenghtDop = (store, action) => {

	let _store = {...store};
	let base_udl_value = +_store.selected_value.base_udl_value;
	let base = +_store.data.base_value;
	let udl_value = +_store.data.udl_value;
	let koef_udl = (base_udl_value - base)/udl_value;
	let base_price = +_store.selected_value.price_size.price_base;
	let udl_price = +_store.selected_value.price_size.price_udlinenie;
	let total_price = (base_price+udl_price*(koef_udl))+'';

	if(total_price.length >= 6) {
		_store = editLenghtMinusForm(_store, action);
		return editLenghtDop(_store, action)
	} else {
		return _store;
	}
};

const editWidthSize = (store, action) => {
	let _store = {...store};
	let dlinadugi = +_store.selected_value.dlinadugi;
	let width = +action.value;

	let arr_new = [..._store.data.price_size].filter((value) => value.width == width && value.dlinadugi == dlinadugi);

	if(arr_new.length == 0) {
		let _arr = [..._store.data.price_size].filter((value) => value.width == width)[0];
		_store.selected_value.price_size = _arr;
		_store.selected_value.dlinadugi = _arr.dlinadugi;
	} else {
		_store.selected_value.price_size = arr_new[0];
	};

	_store.selected_value.width = width;

	return editLenghtDop(_store, action);
};

const editWidthFormSize = (store, action) => {
	return editWidthSize(store, action);
};

const editStepSize = (store, action) => {
	let _store = {...store};
	let width = +_store.selected_value.width;
	let dlinadugi = +action.value;

	let arr_new = [..._store.data.price_size].filter((value) => value.width == width && value.dlinadugi == dlinadugi);
	_store.selected_value.price_size = arr_new[0];
	_store.selected_value.dlinadugi = dlinadugi;

	return editLenghtDop(_store, action);
};

const editStepFormSize = (store, action) => {
	return editStepSize(store, action);
};

const editSoptovar = (store, action) => {
	let _store = {...store};

	if(action.el.target.classList.contains('dopopciya_col')) {
		if(_store.selected_value.soptovar[action.name] > 0) {
			_store.selected_value.soptovar[action.name] -= 1;
		} else {
			_store.selected_value.soptovar[action.name] += 1;
		}
	} else {
		_store.selected_value.soptovar[action.name] += 1;
	}

	return _store;
};

const editKlar = (store, action) => {

	let _store = {...store};
	_store.selected_value.delivery.kladr = action.params.id;
	_store.selected_value.delivery.city = action.params.typeShort + '. ' + action.params.name;
	return _store;
};

const editKlarOrg = (store, action) => {
	let _store = {...store};
	_store.selected_value.delivery.org = action.value;
	return _store;
};

const editKlarElStatus = (store, action) => {
	let _store = {...store};
	_store.selected_value.delivery.state_delivery_el = action.value;
	return _store;
};

const editShowForm = (store, action) => {
	let _store = {...store};
	_store.selected_value.form_show = action.value;
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
	case C.LENGTH_EDIT_MINUS_FORM:
				return editLenghtMinusForm(store, action);
			break;

	case C.LENGTH_EDIT_PLUS_FORM:
				return editLenghtPlusForm(store, action);
			break;
	case C.WiDTH_EDIT:
				return editWidthSize(store, action);
			break;
	case C.WiDTH_EDIT_FORM:
				return editWidthFormSize(store, action);
			break;
	case C.STEP_EDIT:
				return editStepSize(store, action);
			break;
	case C.STEP_EDIT_FORM:
				return editStepFormSize(store, action);
			break;

	case C.KEY_DOWN_EDIT:
				return editKeyDownSicePrice(store, action);
			break;

	case C.SOPTOVAR_EDIT:
				return editSoptovar(store, action);
			break;
	case C.KLAR_EDIT:
				return editKlar(store, action);
			break;
	case C.ORG_KLAR_EDIT:
				return editKlarOrg(store, action);
			break;
	case C.EL_STATUS_KLAR_EDIT:
				return editKlarElStatus(store, action);
			break;
	case C.SHOW_FORM:
				return editShowForm(store, action);
			break;

		default:
				return store;
			break;
	}

};

export default reduser_props;