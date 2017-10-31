import React from 'react';
import ReactDOM from 'react-dom';
import { Hello } from './test';

ReactDOM.render(
  <Hello />,
  document.getElementById('root')
);

const render = (Component) => {
  ReactDOM.render(
    <Component />,
    document.getElementById('root')
  );
};

render(Hello)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./test', () => {
    render(Hello)
  });
}