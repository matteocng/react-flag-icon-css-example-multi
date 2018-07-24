// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import CssModulesTransform from 'react-css-modules';
import { functions } from 'react-flag-icon-css';

import type { StatelessFunctionalComponent, Node } from 'react';
import type { CountryType } from 'react-flag-icon-css/lib/types/flow';
import type { AppPropsType, AppFactoryOptionsType } from '../types/flow';

import styles from '../styles/app.scss';
import { getStylePropName } from './functions';
import FlagBlock from './FlagBlock';

const { getCountries } = functions.countries;
const stylePropName = getStylePropName();
const aCountries = getCountries();

const CssModules = CssModulesTransform(styles, { allowMultiple: true });

const renderFlagBlock = (oCountry: CountryType): Node => (
  <FlagBlock key={oCountry.code} {...oCountry} />
);

const AppFactory = (options: AppFactoryOptionsType): StatelessFunctionalComponent<AppPropsType> => {
  const { stylePropName: styleProp } = options;

  const App = (props: AppPropsType): Node => {
    const propsHeader = { [styleProp]: 'header' };
    const propsHeading = { [styleProp]: 'heading' };
    const propsSubHeading = { [styleProp]: 'sub-heading' };
    const propsFlagContainer = { [styleProp]: 'flag-container' };
    const { headingText, subHeadingText } = props;

    return (
      <span>
        <div {...propsHeader}>
          <div {...propsHeading}>
            {headingText}
          </div>
          <div {...propsSubHeading}>
            {subHeadingText}
          </div>
        </div>
        <div {...propsFlagContainer}>
          <FlagBlock name="Custom 1" code="w1" />
          <FlagBlock name="Custom 2" code="w2" />
          <FlagBlock name="Custom 3" code="w3" />
          {aCountries.map((obj: CountryType): FlagBlock => renderFlagBlock(obj))}
        </div>
      </span>
    );
  };
  App.displayName = 'App';

  App.propTypes = {
    stylePropName: PropTypes.string.isRequired,
    headingText: PropTypes.string.isRequired,
    subHeadingText: PropTypes.string.isRequired,
  };

  return App
}
const AppComponent = AppFactory({ stylePropName });
const AppComponentTransformed = __USE_CSS_MODULES__
  ? CssModules(AppComponent)
  : AppComponent;

export default AppComponentTransformed;
