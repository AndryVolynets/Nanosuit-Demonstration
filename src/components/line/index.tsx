import React, { CSSProperties } from 'react';
import styles from './index.module.css';
import { LineDirections } from '../../types/enums';

interface FadingLineProps {
    thickness: number;
    width: number | string;
    direction: LineDirections;
}

const FadingLine: React.FC<FadingLineProps> = ({ thickness, width, direction }) => {
    const lineStyle: CSSProperties = {
        width: `${width}px`,
        height: `${thickness}px`,
        clipPath: 'polygon(0% 0%, 0 0, 100% 50%, 0 100%, 0 100%)'
    };

    if (direction === LineDirections.right) {
        lineStyle.background = `linear-gradient(to left, #789287 0%, transparent 100%)`;
        lineStyle.clipPath = 'polygon(100% 0%, 100% 0, 0 50%, 100% 100%, 100% 100%)';
    } else {
        lineStyle.background = `linear-gradient(to left, transparent 0%, #789287 100%)`;
    }

    return <div className={styles.fadingLine} style={lineStyle}></div>;
};

export default FadingLine;
