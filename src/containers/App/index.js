import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ConnectedRouter } from 'react-router-redux';
import history from '../../common/routing';
import configureStore from '../../redux/configureStore';
import routes from '../../routes';
import theme from '../../common/theme';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ConnectedRouter history={history}>
          {routes}
        </ConnectedRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
