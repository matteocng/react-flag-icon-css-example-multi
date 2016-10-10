// @flow
import React from 'react'
import CssModulesTransform from 'react-css-modules'
import { functions } from 'react-flag-icon-css'

import type { CountryType } from 'react-flag-icon-css/lib/types/flow'
import type { default as ReactType } from 'react'
import type { AppPropsType, AppFactoryOptionsType } from '../types/flow'

import styles from '../styles/app.scss'
import { getStylePropName } from './functions'
import FlagBlock from './FlagBlock'

const { getCountries } = functions.countries
const stylePropName = getStylePropName()
const aCountries = getCountries()

const CssModules = CssModulesTransform(styles, { allowMultiple: true })


const renderFlagBlock = (oCountry: CountryType) : React$Element<*> =>
  <FlagBlock key={oCountry.code} {...oCountry} />

const AppFactory = (options: AppFactoryOptionsType) : ReactType.createElement =>
  (props: AppPropsType) : React$Element<*> => {
    const propsHeader = { [options.stylePropName]: 'header' }
    const propsHeading = { [options.stylePropName]: 'heading' }
    const propsSubHeading = { [options.stylePropName]: 'sub-heading' }
    const propsFlagContainer = { [options.stylePropName]: 'flag-container' }

    return (<span>
      <div {...propsHeader}>
        <div {...propsHeading}>{props.headingText}</div>
        <div {...propsSubHeading}>{props.subHeadingText}</div>
      </div>
      <div {...propsFlagContainer}>
        <FlagBlock name="Custom 1" code="w1" />
        <FlagBlock name="Custom 2" code="w2" />
        <FlagBlock name="Custom 3" code="w3" />
        { aCountries.map((obj: CountryType) : React$Element<FlagBlock> => renderFlagBlock(obj)) }
      </div>
    </span>)
  }

const AppComponent = AppFactory({ stylePropName })
const AppComponentTransformed = __USE_CSS_MODULES__ ? CssModules(AppComponent) : AppComponent

export default AppComponentTransformed
