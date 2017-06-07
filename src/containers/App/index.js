import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import configureStore from '../../redux/configureStore';
import routes from '../../routes';
import theme from '../../common/theme';

const store = configureStore();

function App() {
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

export default App;
