import React from "react";
import { IconType } from "react-icons/lib";
import { CiSettings, CiMobile3 } from "react-icons/ci";
import { GiArtificialHive } from "react-icons/gi";
import { TbDatabaseExclamation } from "react-icons/tb";
import { CapitalText, ContentSnippet, CryButton, CryScroll, FadingLine, HexagonGridLayout } from "../../components";
import styles from "./index.module.css";
import useSound from "../../hooks/use-sound";
import hoverSound from './../../assets/audio/click/click.mp3';
import { AiFillStar } from "react-icons/ai";

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
    const [handleMouseEnter, handleMouseLeave] = useSound(hoverSound);

    const CapitalTextList: React.FC = () => {
        return (
            <>
                {capitalTextData.map((item, index) => (
                    <div key={index}>
                        <CapitalText
                            href={item.to}
                            style={{ fontSize: 24 }}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}>
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
                <div className={styles.flexLeft}>
                    <div>
                        <CapitalTextList />
                    </div>

                    <div className={styles.navButton}>
                        <CryButton>
                            Назад
                        </CryButton>
                    </div>
                </div>
                <div >
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