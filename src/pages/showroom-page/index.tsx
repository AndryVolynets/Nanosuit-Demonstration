import React, { useState } from "react";
import styles from "./index.module.scss";

import {
    CalloutOption,
    CryScroll,
    FadingLine,
    ContentSnippet,
} from "../../components";

import { HexagonGridLayout } from "./modules";

import { LineDirections } from "../../types/enums";
import { Data, Module } from "../../types/interfaces";

import myData from "./../../assets/test-data/pages/showroom/suit-options.json";

const data: Data = myData;

const ShowRoom = () => {
    const [selectedModule, setSelectedModule] = useState<Module | null>(null);

    const handleSelectModule = (module: Module) => {
        setSelectedModule(module);
    };

    return (
        <div className={styles.adaptiveContainer}>
            <div className={styles.optionsContainer}>
                {data.items.map((element, index) => (
                    <CalloutOption key={index}>
                        <HexagonGridLayout
                            key={index}
                            maxWidth={4}
                            sizeSegments={70}
                            modules={element.modules}
                            onSelectModule={handleSelectModule} // Pass the module selection handler function
                        />
                    </CalloutOption>
                ))}
            </div>
            <div className={styles.modelContainer}>
                <div>

                </div>
            </div>
            <div className={styles.descContainer}>
                <div style={{ padding: 10 }}>
                    <CryScroll>
                        <h1>{selectedModule && <p>{selectedModule.Title}</p>}</h1>
                        <FadingLine thickness={3} width={"40%"} direction={LineDirections.left} />
                        <div style={{ marginTop: 10 }}>
                            <div style={{ marginTop: 10 }}>
                                <ContentSnippet>
                                    <div style={{ padding: 10 }}>
                                        {selectedModule && <p>{selectedModule.Description}</p>}
                                    </div>
                                </ContentSnippet>
                            </div>
                        </div>
                    </CryScroll>
                </div>
            </div>
        </div>
    );
};

export default ShowRoom;
