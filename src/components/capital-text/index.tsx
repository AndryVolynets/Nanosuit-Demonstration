import React from "react";
import { Link } from "react-router-dom";
import styles from './index.module.css'

interface ICapitalText {
    to: string;
    text?: string;
    fontSize?: number;
}

const CapitalText = (props: ICapitalText) => {
    const { to, text, fontSize } = props;

    return (
        <Link to={to} className={styles.capital} style={{ fontSize: fontSize }}>
            {text}
        </Link>
    );
}

export default CapitalText;