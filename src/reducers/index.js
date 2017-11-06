import { combineReducers } from 'redux';
import { i18nReducer } from 'react-redux-i18n';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
	i18n: i18nReducer
});

export default rootReducer;
