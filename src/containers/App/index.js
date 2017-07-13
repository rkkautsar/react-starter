import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import routes from '../../routes';
import theme from '../../common/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        {routes.map(route => <Route key={route.path} {...route} />)}
      </Switch>
    </ThemeProvider>
  );
}

export default App;
