import React, { CSSProperties } from 'react';
import styles from './index.module.css';
import { LineDirections } from '../../types/enums';

interface FadingLineProps {
  thickness: number;
  width: number;
  direction: LineDirections;
}

const FadingLine: React.FC<FadingLineProps> = ({ thickness, width, direction }) => {
  const lineStyle: CSSProperties = {
    width: `${width}px`,
    height: `${thickness}px`,
    background: `linear-gradient(to ${LineDirections[direction]}, transparent 0%, #789287 100%)`,
  };

  return <div className={styles.fadingLine} style={lineStyle}></div>;
};

export default FadingLine;
