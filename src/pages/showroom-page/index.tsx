import React from "react";
import styles from "./index.module.scss";

import {
    CalloutOption,
    CapitalText,
    CryScroll,
    FadingLine,
    ContentSnippet,
    HexagonGridLayout,
    CryButton,
    ModuleOption
} from "../../components";

import ModelLayout from "../../graphic/effects/test";

const ShowRoom = () => {
    return (
        <>
            <ModelLayout />
            <div className={styles.adaptiveContainer}>
                <div className={styles.optionsContainer}>
                    <CalloutOption>
                        <HexagonGridLayout xSegments={4} ySegments={1} sizeSegments={70} />
                    </CalloutOption>
                </div>
                <div className={styles.modelContainer}>
                    <div>
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
        </>
    );
}

export default ShowRoom;