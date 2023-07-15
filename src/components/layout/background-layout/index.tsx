import React from "react";
import { DividerProps } from "@fluentui/react-components";

import styles from "./index.module.css";

const BackgroundLayout: React.FC<DividerProps> = (props) => {
    const { children } = props;

    return (
        <div {...props} className={styles.backgroundLayout}>
            {children}
        </div>
    );
}

export default BackgroundLayout;