import React from "react";
import styles from './index.module.css'
import { IntrinsicElements } from "../../types/interfaces/IntrinsicElements";

type TextProp = IntrinsicElements["a"];

const CapitalText: React.FC<TextProp> = (props) => {
    const { children } = props;

    return (
        <a {...props} className={styles.capital}>
            {children}
        </a>
    );
}

export default CapitalText;