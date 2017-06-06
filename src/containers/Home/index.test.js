import React from 'react';
import test from 'ava';
import { render } from 'enzyme';
import { mockThunkStore } from '../../common/test-utils';
import Home from './index';

const initialState = {
  counter: {
    count: 0,
    loading: false,
  },
};
const store = mockThunkStore(initialState);

test('renders', t => {
  const wrapper = render(<Home store={store} />);
  t.truthy(wrapper);
});

test('have two buttons', t => {
  const wrapper = render(<Home store={store} />);
  t.is(wrapper.find('button').length, 2);
});

test('show correct counter state', t => {
  const wrapper = render(<Home store={store} />);
  t.is(wrapper.find('h1').text(), 'Hello React! (0)');
});
