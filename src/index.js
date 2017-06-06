import React from 'react';
import { render } from 'react-dom';
import App from '@/containers/App';
import configureStore from '@/redux/configureStore';
import routes from '@/routes';
import reducer from '@/redux_modules';
import '@/style';

const store = configureStore();

render(<App routes={routes} store={store} />, document.getElementById('app'));
