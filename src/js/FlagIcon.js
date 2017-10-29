// @flow
import React from 'react';
import FlagIconFactory from 'react-flag-icon-css'
import { styles, codes } from '../meta-flags-css'

const FlagIcon = FlagIconFactory(React, {
  useCssModules: __USE_CSS_MODULES__,
  themeStyles: styles,
  customCodes: codes,
})

export default FlagIcon;
