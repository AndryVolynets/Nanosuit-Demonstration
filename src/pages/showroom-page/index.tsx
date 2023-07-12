import React from "react";
import { DesktopLayout, ContentSnippet, HexagonGridLayout } from "../../components/blocks";
import styles from "./index.module.scss"
import { ModuleOption } from "../../components/buttons";
import { CapitalText, CryScroll, FadingLine } from "../../components";
import { LineDirections } from "../../types/enums";
import { CalloutBasic } from "../../components";


const ShowRoom = () => {
    return (
        <div className={styles.adaptiveContainer}>
            <div className={styles.optionsContainer}>
               
            </div>
            <div className={styles.modelContainer}>

                <div className="">
                    <iframe
                        title="Crysis 2 Nanosuit"
                        frameBorder="0"
                        width={"100%"}
                        height={"600"}
                        allowFullScreen={true}
                        allow="autoplay; fullscreen; xr-spatial-tracking"
                        xr-spatial-tracking
                        execution-while-out-of-viewport
                        execution-while-not-rendered
                        web-share
                        src="https://sketchfab.com/models/824cd0e86fd04e7eb6d0a1fef5463f2d/embed?ui_theme=dark"
                    ></iframe>
                    <p
                        style={{
                            fontSize: '13px',
                            fontWeight: 'normal',
                            margin: '5px',
                            color: '#4A4A4A',
                        }}
                    >
                    </p>
                </div>

            </div>
            <div className={styles.descContainer}>
                <div style={{ padding: 10 }}>
                    <CryScroll>
                        <h1>Поправка</h1>
                        <FadingLine thickness={3} width={'40%'} direction={LineDirections.left} />

                        <div style={{ marginTop: 10 }}>
                            <CapitalText
                                to="/"
                                fontSize={14}
                                text="* Value vaksfkaskfask"
                            />
                            <CapitalText
                                to="/"
                                fontSize={14}
                                text="* Value vaksfkaskfask"
                            />
                            <CapitalText
                                to="/"
                                fontSize={14}
                                text="* Value vaksfkaskfask"
                            />
                            <CapitalText
                                to="/"
                                fontSize={14}
                                text="* Value vaksfkaskfask"
                            />

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