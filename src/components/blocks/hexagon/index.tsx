import React from "react";
import styles from './index.module.css'
import { DividerProps } from "@fluentui/react-components";

interface IProps {
    size: number;
}

const HexagonLayout: React.FC<DividerProps & IProps> = (props) => {
    const { size, children } = props;

    const octagonStyle = {
        width: `${size + 10}px`,
        height: `${size}px`
    };

    return (
        <div className={`${styles.octagon} ${props.className}`} style={octagonStyle}>
            {children}
        </div>
    );
}

export default HexagonLayout;
