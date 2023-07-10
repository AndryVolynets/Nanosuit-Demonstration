import React, { ReactNode } from "react";
import styles from "./index.module.css"
import { IChild } from "../../types/interfaces";

const CryScroll = (props: IChild) => {
    const { children } = props;

    return (
        <div className={styles.scrollbar} id={styles.scrollbar1}>
            {children}
        </div>
    );
}

export default CryScroll;