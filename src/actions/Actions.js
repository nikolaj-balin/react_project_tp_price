import C from './constants.js';


const createSearchAction = (string) => {
		return {
			type: C.SEARCH_WORKER,
			value: string
		}
};

export {createSearchAction};