import React from "react";
import { FadingLine } from "../../components";
import { CapitalText } from "../../components";

const MainMenu = () => {
    return (
        <div>
            <FadingLine />
            <div
                style={{
                    position: "absolute",
                    top: "100px",
                    left: "100px",
                    transform: 'rotateY(20deg)',
                    perspective: '1000px',
                    perspectiveOrigin: '50% 50%'
                }}
            >
                <CapitalText to="/" text="Демонстрация нанокостюма" fontSize={24} />
                <CapitalText to="/" text="Демонстрация нанокостюма" fontSize={24} />
                <CapitalText to="/" text="Демонстрация нанокостюма" fontSize={24} />
                <CapitalText to="/" text="Демонстрация нанокостюма" fontSize={24} />
                <CapitalText to="/" text="Демонстрация нанокостюма" fontSize={24} />
            </div>
        </div>
    );
}

export default MainMenu;