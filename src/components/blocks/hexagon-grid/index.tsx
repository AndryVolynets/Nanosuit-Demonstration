import React from "react";
import styles from "./index.module.css"
import HexagonLayout from "../hexagon";

const Octagons = () => {
    return (
        <HexagonLayout size={100} color="#42e3f5">
            <HexagonLayout size={90} color="#ffffff">
                <img width={90}
                    height={90}
                    src="https://p1.hiclipart.com/preview/1004/894/505/crysis-3-crysis-3-icon-png-icon-thumbnail.jpg" alt="" />
            </HexagonLayout>
        </HexagonLayout>
    );
}

const HexagonGridLayout = () => {
    return (
        <div className={styles.container}>
            <div className={styles.gridParent}>
                <div className={styles.div1}>
                    <Octagons />
                </div>
                <div className={styles.div2}>
                    <Octagons />
                </div>
                <div className={styles.div3}>
                    <Octagons />
                </div>
                <div className={styles.div4}>
                    <Octagons />
                </div>          
            </div>
        </div>
    );
}

export default HexagonGridLayout;