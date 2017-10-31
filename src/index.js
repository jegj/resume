import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/app';

const render = (Component) => {
	ReactDOM.render(
		<Component />,
		document.getElementById('page-top')
	);
};

render(App)

// Hot Module Replacement API
if (module.hot) {
	module.hot.accept('./components/app', () => {
		render(App)
	});
}