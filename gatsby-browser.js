import React from 'react';
import App from './src/components/App';

require('./src/styles/prism.css');

export const wrapRootElement = ({ element }) => {
  return <App>{element}</App>;
};
