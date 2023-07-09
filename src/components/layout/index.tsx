import React, { ReactNode } from "react";
import styles from "./index.module.css"
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="container-fluid ">
            <div className={styles.layout}>
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;