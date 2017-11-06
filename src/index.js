
import React from 'react';
import thunk from 'redux-thunk';
import { render as reactRender}  from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { loadTranslations, setLocale, syncTranslationWithStore } from 'react-redux-i18n';
import translationsObject  from './i18n';
import App from './containers/App';
import reducer from './reducers';

const store = createStore(reducer, applyMiddleware(thunk));

syncTranslationWithStore(store);
store.dispatch(loadTranslations(translationsObject));
store.dispatch(setLocale('ES'));

const rootEl = document.getElementById("root");

let render = () => (
	reactRender(
		<Provider store={store}>
			<App />
		</Provider>,
		rootEl
	)
);

if (module.hot) {
	const renderApp = render;
	const renderError = (error) => {
		const RedBox = require("redbox-react");
		reactRender(
			<RedBox error={error} />,
			rootEl,
		);
	};

	render = () => {
		try {
			renderApp();
		}
		catch (error) {
			renderError(error);
		}
	};

	module.hot.accept("./containers/App", () => {
		setTimeout(render);
	});
}

render();