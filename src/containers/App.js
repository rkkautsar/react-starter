import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from '@/common/theme';

const App = ({ routes, store }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router>
        {routes}
      </Router>
    </ThemeProvider>
  </Provider>
);

export default App;
