import React from "react";
import styles from "./index.module.css";
import GlitchEffect from "./modules/glitch";

const Error = () => {
    return (
        <div className={styles.backgroundError}>
            <div className={styles.display}>
                <GlitchEffect>
                    404
                </GlitchEffect>
            </div>
        </div>
    );
}

export default Error;