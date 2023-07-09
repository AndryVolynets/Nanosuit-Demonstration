import React from "react";
import styles from "./index.module.css"

const CryScroll = () => {
    return (
        <div className={styles.container}>
            <div className={styles.scrollbar} id={styles.scrollbar1}>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu posuere eros. Aliquam finibus ipsum vel massa molestie semper. Praesent cursus finibus est eu feugiat. Vestibulum aliquam faucibus malesuada. Mauris rhoncus odio id blandit porta.
                    Maecenas ut bibendum augue. Nam pretium fermentum mattis. Aenean nec magna id sapien gravida suscipit. Aliquam molestie hendrerit nulla, sit amet tempor arcu rutrum in. Cras varius turpis id rhoncus vehicula. Sed interdum, orci egestas
                    mollis maximus,
                </div>
            </div>
        </div>

    );
}

export default CryScroll;