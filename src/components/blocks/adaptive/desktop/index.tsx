import React from "react";
import styles from "./index.module.css"

const DesktopLayout = () => {
    return (
        <>
            <div className={styles.adaptiveContainer}>
                <div className={styles.optionsContainer}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque recusandae magnam vel mollitia cupiditate rerum vero, quod error ullam facilis, explicabo suscipit nulla blanditiis voluptatem nostrum totam. Quis, ut autem.
                </div>
                <div className={styles.modelContainer}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, ex! Voluptatibus ipsum expedita vero earum, accusamus adipisci rerum maxime itaque soluta necessitatibus nihil voluptatem dolorum. Veritatis accusamus voluptate reiciendis illum?</div>
                <div className={styles.descContainer}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vitae quis atque nesciunt sapiente quam asperiores sequi corrupti commodi maiores, obcaecati minima, eum nulla maxime, similique quibusdam eveniet est perferendis.</div>
            </div>
        </>
    );
}

export default DesktopLayout;