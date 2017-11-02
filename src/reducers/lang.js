import { CHANGE_LANGUAGE } from '../constants/BasicTypes';

const initialState = {
	code: 'ES'
};

export default function lang(state = initialState, action) {
	switch (action.type) {
		case CHANGE_LANGUAGE: 
			return {
				...state,
				...{ code: action.code }
			};
		default:
			return state;
	}
}
