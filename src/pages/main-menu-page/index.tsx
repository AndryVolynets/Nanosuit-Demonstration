import React from "react";
import { CalloutBasic, CapitalText, ContentSnippet, CryButton, CryScroll, FadingLine, HexagonGridLayout } from "../../components";
import { LineDirections } from "../../types/enums";
import styles from "./index.module.css"

import { CiSettings, CiMobile3 } from "react-icons/ci";
import { GiArtificialHive } from "react-icons/gi";
import { TbDatabaseExclamation } from "react-icons/tb";

import { IconType } from "react-icons/lib";

interface ICapitalText {
    to: string;
    text?: string;
    fontSize?: number;
    icon: IconType
}

const MainMenu = () => {
    const capitalTextData: ICapitalText[] = [
        {
            to: "/showroom",
            text: "Демонстрация нанокостюма",
            icon: GiArtificialHive
        },
        {
            to: "/showroom",
            text: "Архивы Карла Раша",
            icon: TbDatabaseExclamation
        },
        {
            to: "/showroom",
            text: "Личное дело",
            icon: CiMobile3
        },
        {
            to: "/showroom",
            text: "Настройки",
            icon: CiSettings
        }
    ];

    const CapitalTextList: React.FC = () => {
        return (
            <>
                {capitalTextData.map((item, index) => (
                    <CapitalText key={index} href={item.to} style={{ fontSize: 24 }}>
                        <span>{<item.icon height="1.5em" width="1.5em" />}</span>
                        {item.text}
                    </CapitalText>
                ))}
            </>
        );
    }

    return (
        <div className="container">
            <div className={styles.flexContainer}>
                <div>
                    <div className={styles.fandingLine}>
                        <FadingLine thickness={3} width={'40%'} direction={LineDirections.left} />
                    </div>
                    <div className={styles.flexMenu}>
                        <CapitalTextList />
                    </div>
                    <HexagonGridLayout xSegments={4} ySegments={1} sizeSegments={76} />
                    <div className={styles.navButton}>
                        <CryButton>
                            Назад
                        </CryButton>
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