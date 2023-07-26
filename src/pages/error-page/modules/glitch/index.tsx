import React from 'react';
import styles from './index.module.css';
import { DividerProps } from '@fluentui/react-components';

const GlitchEffect: React.FC<DividerProps> = ({ children }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.glitch}>
                <span>{children}</span>
            </div>
        </div>
    );
};

export default GlitchEffect;
