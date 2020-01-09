import C from './constants.js';


const createLenghtInpAction = (target) => {
		return {
			type: C.LENGTH_EDIT_IN,
			value: target.value
		}
};

const createLenghtLiAction = (target) => {
		return {
			type: C.LENGTH_EDIT_LI,
			udl_value: target.dataset.udl,
			number: target.dataset.n
		}
};

const createLenghtMinusAction = (target) => {
		return {
			type: C.LENGTH_EDIT_MINUS,
			value: "-",
		}
};

const createLenghtMinusFormAction = (target) => {
		return {
			type: C.LENGTH_EDIT_MINUS_FORM,
			value: "-",
		}
};

const createLenghtPlusAction = (target) => {
		return {
			type: C.LENGTH_EDIT_PLUS,
			value: "+",
		}
};

const createLenghtPlusFormAction = (target) => {
		return {
			type: C.LENGTH_EDIT_PLUS_FORM,
			value: "+",
		}
};

const createWidthButtonAction = (target) => {
		return {
			type: C.WiDTH_EDIT,
			value: target.value,
		}
};

const createWidthButtonFormAction = (target) => {
		return {
			type: C.WiDTH_EDIT_FORM,
			value: target.value,
		}
};

const createStepButtonAction = (target) => {
		return {
			type: C.STEP_EDIT,
			value: target.value,
		}
};

const createStepButtonFormAction = (target) => {
		return {
			type: C.STEP_EDIT_FORM,
			value: target.value,
		}
};

const createLenghtInpActionKeyDown = (event) => {
		return {
			type: C.KEY_DOWN_EDIT,
			value: event.key,
			event: event
		}
};

const createSoptovarAction = (event) => {
		return {
			type: C.SOPTOVAR_EDIT,
			name: event.currentTarget.dataset.name,
			el: event,
		}
};

const createKlardEdit = (params) => {
		return {
			type: C.KLAR_EDIT,
			params: params,
		}
};

const createOrgKlardEdit = (el) => {
		return {
			type: C.ORG_KLAR_EDIT,
			value: el.target.dataset.org,
		}
};

const createKlardEditElStatus = (value) => {
		return {
			type: C.EL_STATUS_KLAR_EDIT,
			value: value,
		}
};

const createShowButtonForm = (value) => {
		return {
			type: C.SHOW_FORM,
			value: value,
		}
};

export {createLenghtInpAction, createLenghtLiAction, createLenghtMinusAction, createLenghtPlusAction, createWidthButtonAction, createStepButtonAction,createLenghtInpActionKeyDown, createSoptovarAction, createKlardEdit, createOrgKlardEdit, createKlardEditElStatus, createShowButtonForm, createLenghtMinusFormAction, createLenghtPlusFormAction, createWidthButtonFormAction, createStepButtonFormAction};