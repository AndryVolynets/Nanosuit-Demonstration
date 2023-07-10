import React from "react";
import { CalloutBasic, CapitalText, ContentSnippet, CryButton, CryScroll, FadingLine, HexagonGridLayout } from "../../components";
import { LineDirections } from "../../types/enums";
import styles from "./index.module.css"

const MainMenu = () => {
    return (
        <div className="container">
            <div className={styles.flexContainer}>
                <div>
                    <div className={styles.fandingLine}>
                        <FadingLine thickness={3} width={'40%'} direction={LineDirections.left} />
                    </div>
                    <div className={styles.flexMenu}>
                        <CapitalText to="/" text="Демонстрация нанокостюма" fontSize={24} />
                        <CapitalText to="/" text="Демонстрация нанокостюма" fontSize={24} />
                        <CapitalText to="/" text="Демонстрация нанокостюма" fontSize={24} />
                        <CapitalText to="/" text="Демонстрация нанокостюма" fontSize={24} />
                        <CapitalText to="/" text="Демонстрация нанокостюма" fontSize={24} />
                    </div>
                    <CalloutBasic>
                        <HexagonGridLayout />
                    </CalloutBasic>
                    <div className={styles.navButton}>
                        <CryButton />
                    </div>
                </div>
                <div>
                    <div className={styles.fandingLine}>
                        <FadingLine thickness={3} width={'40%'} direction={LineDirections.right} />
                    </div>
                    <ContentSnippet>
                        <div style={{ padding: 10 }}>
                            <CryScroll>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ipsum, odio veniam, tempore in cum suscipit saepe quibusdam consectetur sit consequatur eos, doloribus necessitatibus modi. Molestias similique enim quisquam odit.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ipsum, odio veniam, tempore in cum suscipit saepe quibusdam consectetur sit consequatur eos, doloribus necessitatibus modi. Molestias similique enim quisquam odit.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ipsum, odio veniam, tempore in cum suscipit saepe quibusdam consectetur sit consequatur eos, doloribus necessitatibus modi. Molestias similique enim quisquam odit.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ipsum, odio veniam, tempore in cum suscipit saepe quibusdam consectetur sit consequatur eos, doloribus necessitatibus modi. Molestias similique enim quisquam odit.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ipsum, odio veniam, tempore in cum suscipit saepe quibusdam consectetur sit consequatur eos, doloribus necessitatibus modi. Molestias similique enim quisquam odit.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ipsum, odio veniam, tempore in cum suscipit saepe quibusdam consectetur sit consequatur eos, doloribus necessitatibus modi. Molestias similique enim quisquam odit.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ipsum, odio veniam, tempore in cum suscipit saepe quibusdam consectetur sit consequatur eos, doloribus necessitatibus modi. Molestias similique enim quisquam odit.
                            </CryScroll>
                        </div>
                    </ContentSnippet>
                </div>
            </div>

        </div>
    );
}

export default MainMenu;