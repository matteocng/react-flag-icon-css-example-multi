// @flow
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import type { AppPropsType } from '../types/flow';

const appProps: AppPropsType = {
  headingText: 'React Flag Icon Css',
  useCssModules: __USE_CSS_MODULES__,
  moduleVersionWebpack: MODULE_VERSION_WEBPACK,
  moduleVersionReactFlagIconCss: MODULE_VERSION_REACT_FLAG_ICON_CSS
};

const rootEL = document.querySelector('#app');
const render = () => {
  if (rootEL !== null) {
    ReactDOM.render(<App {...appProps} />, rootEL);
  }
};

render();
