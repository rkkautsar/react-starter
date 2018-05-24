import { configure } from 'enzyme'; // eslint-disable-line
import Adapter from 'enzyme-adapter-react-16'; // eslint-disable-line

/**
 * Stub assets
 */

process.env.NODE_ENV = 'test';

const noop = () => null;

require.extensions['.css'] = noop;
require.extensions['.scss'] = noop;
require.extensions['.md'] = noop;
require.extensions['.png'] = noop;
require.extensions['.svg'] = noop;
require.extensions['.jpg'] = noop;
require.extensions['.jpeg'] = noop;
require.extensions['.gif'] = noop;

/**
 * Enzyme setup
 */

configure({ adapter: new Adapter() });
