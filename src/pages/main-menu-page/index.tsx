import React from "react";
import { IconType } from "react-icons/lib";
import styles from "./index.module.css";

import { AiFillStar } from "react-icons/ai";
import { CiMobile3, CiSettings } from "react-icons/ci";
import { GiArtificialHive } from "react-icons/gi";
import { TbDatabaseExclamation } from "react-icons/tb";

import { CapitalText, ContentSnippet, CryButton, CryScroll } from "../../components";

interface ICapitalText {
    to: string;
    text?: string;
    fontSize?: number;
    icon: IconType
}

const SingleStar = () => {
    return (
        <AiFillStar width={15} height={15} className={styles.singleStar} />
    );
}

const MainMenu = () => {
    
    const capitalTextData: ICapitalText[] = [
        {
            to: "/showroom",
            text: "Демонстрация нанокостюма",
            icon: GiArtificialHive
        },
        {
            to: "/archive",
            text: "Архивы Карла Раша",
            icon: TbDatabaseExclamation
        },
        {
            to: "/personal",
            text: "Личное дело",
            icon: CiMobile3
        },
        {
            to: "/setting",
            text: "Настройки",
            icon: CiSettings
        }
    ];

    const CapitalTextList: React.FC = () => {
        return (
            <>
                {capitalTextData.map((item, index) => (
                    <div key={index}>
                        <CapitalText
                            href={item.to}
                            style={{ fontSize: 24 }}>
                            <span>
                                <SingleStar />
                            </span>
                            {item.text}
                        </CapitalText>
                    </div>
                ))}
            </>
        );
    }

    return (
        <div className="container">
            <div className={styles.flexContainer}>
                <div className={styles.flexItems}>
                    <CapitalTextList />
                </div>
                <div className={styles.flexItems}>

                </div>
            </div>
        </div>
    );
}

export default MainMenu;