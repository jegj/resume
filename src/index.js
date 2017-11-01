
import React from 'react';
import { render as reactRender}  from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import reducer from './reducers';

const store = createStore(reducer);

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