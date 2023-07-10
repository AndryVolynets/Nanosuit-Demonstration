import React, { ReactNode } from "react";
import styles from "./index.module.css"
import { Outlet } from "react-router-dom";
import Header from "../header";

const Layout = () => {
    return (
        <div className="container-fluid ">
            <React.StrictMode>
                <div className={styles.layout}>
                    <Header />
                    <Outlet />
                </div>
            </React.StrictMode>
        </div>
    );
}

export default Layout;