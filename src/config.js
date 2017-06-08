const config = {
  production: {
    API_URL: 'http://example.com',
  },
  development: {
    API_URL: 'http://example.dev',
  },
};

export default config[process.env.NODE_ENV || 'development'];
