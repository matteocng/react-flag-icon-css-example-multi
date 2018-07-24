// @flow
import React from 'react';
import PropTypes from 'prop-types';
import CssModules from 'react-css-modules';
import type { Node } from 'react';
import CustomFlag from './CustomFlag';
import {
  getStylePropName,
  generateFlagLink,
  getRandomElements
} from './functions';
import type { FlagBlockPropsType } from '../types/flow';
import styles from '../styles/FlagBlock.scss';

const renderCustomFlagChildren = (
  i: number,
  props: FlagBlockPropsType
): ?Node => {
  const { name, code } = props;
  const containerProps = { [getStylePropName()]: 'country-name' };
  const codeProps = { [getStylePropName()]: 'country-code' };

  return i === 4 ? (
    <div {...containerProps}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={generateFlagLink(name)}
      >
        {name}
      </a>
      <span {...codeProps}>
        {code}
      </span>
    </div>
  ) : null;
};

renderCustomFlagChildren.propTypes = {
  name: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired
};

const FlagBlock = (props: FlagBlockPropsType): Node => {
  const { code, name } = props;
  const sizes = ['', 'lg', '2x', '3x', '4x'];
  const flip = ['', '', '', 'vertical', 'horizontal'];
  const rotate = ['', 30, 60, 90, 180, 270];
  const containerProps = { [getStylePropName()]: 'flag-block' };
  const randomRotates: Array<string | number> = getRandomElements(
    rotate,
    rotate.length
  );
  const randomFlips: Array<string | number> = getRandomElements(
    flip,
    flip.length
  );

  return (
    <div {...containerProps}>
      {sizes.map((size: string, i: number): Node => {
        const customFlagProps = Object.assign(
          {},
          { code, name, [getStylePropName()]: 'flag' },
          size ? { size } : {},
          randomFlips[i] ? { flip: randomFlips[i] } : {},
          randomRotates[i] ? { rotate: randomRotates[i] } : {}
        );
        const n = i;

        return (
          <CustomFlag key={`${code}${n}`} {...customFlagProps}>
            {renderCustomFlagChildren(i, props)}
          </CustomFlag>
        );
      })}
    </div>
  );
};

const FlagBlockComponent = __USE_CSS_MODULES__
  ? CssModules(styles)(FlagBlock)
  : FlagBlock;
export default FlagBlockComponent;
