import React from "react";
import styles from "./index.module.css";
import HexagonLayout from "../hexagon";
import { Vector2 } from "three";
import { Module } from "../../../types/interfaces";

interface ISegment {
    sizeSegments: number;
    icon: any;
}

interface IHexagonGrid {
    maxWidth: number;
    sizeSegments: number;
    reverd?: boolean | null;
    closed?: boolean | null;
    modules?: Module[];
}

export default function HexagonGridLayout(props: IHexagonGrid) {
    const { maxWidth, sizeSegments, closed, modules } = props;
    const isClosed = closed ?? false;

    const closeIndx = closed ? 1 : 0;
    const x = Math.min((modules?.length ?? 0) + closeIndx, maxWidth);
    const y = Math.ceil((modules?.length ?? 0) / 2) + closeIndx;

    console.log(modules?.length);

    const [gridColumn, gridRow] = SetSpacing(sizeSegments, y, isClosed);

    const gridParentStyle = {
        gridTemplateColumns: `repeat(${x}, ${gridColumn}px)`,
        gridTemplateRows: `repeat(${y}, ${gridRow}px)`,
    };

    const generateGridArea = (): JSX.Element[] => {
        const blocks: JSX.Element[] = [];

        if (x !== undefined && y !== undefined && modules) {
            let blockIndex = 0;

            for (let i = 1; i <= y; i++) {
                for (let j = 1; j <= x; j++) {
                    if ((i + j) % 2 === 1 && blockIndex < modules.length) {
                        const module = modules[blockIndex];

                        blocks.push(
                            <div key={`${i}-${j}`} style={{ gridArea: `${i} / ${j} / ${i + 2} / ${j + 2}` }}>
                                <Segment
                                    key={`${i * j + 128 % i + 128 % j}`}
                                    sizeSegments={sizeSegments}
                                    icon={
                                        <span className="ms-Button-flexContainer flexContainer-98" data-automationid="splitbuttonprimary">
                                            {module.Title}
                                        </span>
                                    }
                                />
                            </div>
                        );

                        blockIndex++;
                    }
                }
            }
        }

        return blocks;
    };

    return (
        <div className={styles.container}>
            <div id="gridParentId" className={styles.gridParent} style={gridParentStyle}>
                {generateGridArea()}
            </div>
        </div>
    );
};


const Segment = (props: ISegment) => {
    const { sizeSegments, icon } = props;

    return (
        <HexagonLayout size={sizeSegments} color="rgba(162, 223, 194, 0.2)">
            <HexagonLayout size={sizeSegments - 10} color="rgba(255, 255, 255, 0.1)">
                <button color="rgba(162, 223, 194, 1)">
                    {icon}
                </button>
            </HexagonLayout>
        </HexagonLayout>
    );
};

const SetSpacing = (
    sizeSegments: number,
    ySegments: number,
    isClosed: boolean | null | undefined): [number, number] => {

    const spacing = (sizeSegments < 100 ? 15 : 11) + sizeSegments / 2.0;
    const gridColumn = (sizeSegments + spacing) / 2;

    const bottomSpacing = sizeSegments * (ySegments > 1 || isClosed ? sizeSegments % 0.05 : 0);
    const gridRow = (sizeSegments + bottomSpacing) / 2;

    return [gridColumn, gridRow];
}