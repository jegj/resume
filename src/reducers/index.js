import { combineReducers } from 'redux';
import lang from './lang';

const rootReducer = combineReducers({
	language: lang
});

export default rootReducer;
