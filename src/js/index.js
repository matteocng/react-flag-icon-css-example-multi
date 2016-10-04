// @flow
import ReactDOM from 'react-dom'
import React from 'react'
import App from './App'
import type { AppPropsType } from '../types/flow'


const appProps: AppPropsType = {
  headingText: 'React Flag Icon Css',
  subHeadingText: `Webpack Example ${__USE_CSS_MODULES__ ? 'using CSS Modules' : 'with global CSS'}`
}

const rootEL = document.querySelector('#app')
const render = () => {
  ReactDOM.render(<App {...appProps} />, rootEL)
}

if (module.hot) {
  module.hot.accept('./App', () : void => render())
}

render()
