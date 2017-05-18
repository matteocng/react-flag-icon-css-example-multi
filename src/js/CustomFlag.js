// @flow
import React from 'react'
import FlagIconFactory from 'react-flag-icon-css'

import { pick } from './functions'
import type { CustomFlagPropsType } from '../types/flow'

import { styles, codes } from '../meta-flags-css'

const FlagIcon = FlagIconFactory(React, {
  useCssModules: __USE_CSS_MODULES__,
  themeStyles: styles,
  customCodes: codes,
})

export default ({ ...props, children }: CustomFlagPropsType): React$Element<*> => {
  const { className } = props
  const flagIconProps = pick(props, ['code', 'size', 'flip', 'rotate', 'squared', 'Component'])

  return (<span className={className}>
    <FlagIcon {...flagIconProps} />
    {children}
  </span>)
}
