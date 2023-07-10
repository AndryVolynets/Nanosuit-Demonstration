import React from "react";
import { ContentSnippet, CryButton, CryScroll, FadingLine } from "../../components";
import { CapitalText } from "../../components";
import { LineDirections } from "../../types/enums";
import styles from "./index.module.css"

const MainMenu = () => {
    return (
        <div>
            <FadingLine thickness={4} width={500} direction={LineDirections.left} />
            <FadingLine thickness={4} width={500} direction={LineDirections.right} />

            <div className={styles.flexContainer}>
                <div>
                    <CapitalText to="/" text="Демонстрация нанокостюма" fontSize={24} />
                    <CapitalText to="/" text="Демонстрация нанокостюма" fontSize={24} />
                    <CapitalText to="/" text="Демонстрация нанокостюма" fontSize={24} />
                    <CapitalText to="/" text="Демонстрация нанокостюма" fontSize={24} />
                    <CapitalText to="/" text="Демонстрация нанокостюма" fontSize={24} />
                    <CryButton />
                </div>
                <div>
                    <ContentSnippet>
                        <div style={{padding: 10}}>
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