import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from '../../common/theme';

function App({ routes, store }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          {routes}
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

App.propTypes = {
  routes: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
};

export default App;
