import React from "react";
import Header from "../../header";
import styles from "./index.module.css"
import { DividerProps } from "@fluentui/react-components";
import { usePerspective } from "./../../../hooks/use-perspect";

const BaseLayout: React.FC<DividerProps> = (props) => {
    const { children } = props;
    const [bendContainerRef, perspectiveStyle] = usePerspective();

    return (
        <div className="container-fluid">
            <div className="header">
                <Header />
            </div>
            <div>
                {children}
            </div>
        </div>
    );
}

export default BaseLayout;
