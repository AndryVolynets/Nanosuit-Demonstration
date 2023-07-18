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

import { LineDirections } from "../../types/enums";

import ModelLayout from "../../graphic/effects/test";
import myData from "./../../assets/test-data/pages/showroom/suit-options.json"

import { Module, Item, Data } from "../../types/interfaces";


const data: Data = myData;

const GenerateHexagonGrid = () => {
    return data.items.map((element, index) => (
        <div key={index}>
            <CalloutOption>
                <HexagonGridLayout
                    key={index}
                    maxWidth={4}
                    sizeSegments={70}
                    modules={element.modules}
                />
            </CalloutOption>
        </div>
    ));
}

const ShowRoom = () => {
    return (
        <>
            <div className={styles.adaptiveContainer}>
                <div className={styles.optionsContainer}>
                    {GenerateHexagonGrid()}
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