import React from "react";
import ModelLayout from "../../../graphic/effects/test";
import styles from "./index.module.css";
import { DividerProps } from "@fluentui/react-components";

const ShowroomLayout: React.FC<DividerProps> = ({ children }) => {
    return (
        <div>
            <ModelLayout />
            <div className={styles.showroomLayout}>
                {children}
            </div>
        </div>
    );
}

export default ShowroomLayout;