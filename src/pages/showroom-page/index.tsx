import React from "react";
import { DesktopLayout, ContentSnippet, HexagonGridLayout } from "../../components/blocks";
import styles from "./index.module.scss"
import { CryButton, ModuleOption } from "../../components/buttons";
import { CapitalText, CryScroll, FadingLine } from "../../components";
import { LineDirections } from "../../types/enums";
import { CalloutBasic } from "../../components";


const ShowRoom = () => {
    return (
        <div className={styles.adaptiveContainer}>
            <div className={styles.optionsContainer}>

            </div>
            <div className={styles.modelContainer}>
                <div className={styles.imageDefault}>

                </div>
            </div>
            <div className={styles.descContainer}>
                <div style={{ padding: 10 }}>
                    <CryScroll>
                        <h1>Поправка</h1>
                        <FadingLine thickness={3} width={'40%'} direction={LineDirections.left} />

                        <div style={{ marginTop: 10 }}>
                        

                            <FadingLine thickness={3} width={'40%'} direction={LineDirections.left} />

                            <div style={{ marginTop: 10 }}>
                                <ContentSnippet>
                                    <div style={{ padding: 10 }}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, voluptatum ratione temporibus non sequi velit, vel nulla neque suscipit cupiditate dolorem asperiores. Tempora exercitationem tempore sit nam sed cupiditate ipsam.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, voluptatum ratione temporibus non sequi velit, vel nulla neque suscipit cupiditate dolorem asperiores. Tempora exercitationem tempore sit nam sed cupiditate ipsam.
                                    </div>
                                </ContentSnippet>
                            </div>
                        </div>
                    </CryScroll>
                </div>
            </div>

        </div>
    );
}

export default ShowRoom;