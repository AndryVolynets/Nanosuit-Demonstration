import React, { ReactNode } from "react";
import styles from "./index.module.css"

interface IChild {
    children: ReactNode;
}

const Layout = (props: IChild) => {
    const { children } = props;

    <div className={styles.layout}>
        {children}
    </div>
}

export default Layout;