import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './containers/App';
import './style';

const renderRoot = Component => {
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  );
};

renderRoot(App);

if (module.hot) {
  module.hot.accept('./containers/App/index.js', () => {
    // eslint-disable-next-line global-require
    const NextRootContainer = require('./containers/App');
    renderRoot(NextRootContainer);
  });
}
