// @flow
import * as React from 'react'
import type { Node } from 'react';
import FlagIcon from './FlagIcon';
import { pick } from './functions'
import type { CustomFlagPropsType } from '../types/flow'

export default ({ children, ...props }: CustomFlagPropsType): Node => {
  const { className } = props
  const flagIconProps = pick(props, ['code', 'size', 'flip', 'rotate', 'squared', 'Component'])

  return (
    <span className={className}>
      <FlagIcon {...flagIconProps} />
      {children}
    </span>
  )
}
