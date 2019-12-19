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

const createLenghtPlusAction = (target) => {
		return {
			type: C.LENGTH_EDIT_PLUS,
			value: "+",

		}
};

const createWidthButtonAction = (target) => {
		return {
			type: C.WiDTH_EDIT,
			value: target.value,

		}
};

const createStepButtonAction = (target) => {
		return {
			type: C.STEP_EDIT,
			value: target.value,

		}
};

export {createLenghtInpAction, createLenghtLiAction, createLenghtMinusAction, createLenghtPlusAction, createWidthButtonAction, createStepButtonAction};