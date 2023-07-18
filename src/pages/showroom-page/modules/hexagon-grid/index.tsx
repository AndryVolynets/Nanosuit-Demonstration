import React, { useState } from "react";
import styles from "./index.module.css";
import { HexagonLayout } from "../../../../components";
import { Module } from "../../../../types/interfaces";

interface ISegment {
    sizeSegments: number;
    icon: any;
    onClick: () => void;
}

interface IHexagonGrid {
    maxWidth: number;
    sizeSegments: number;
    reverd?: boolean | null;
    closed?: boolean | null;
    modules?: Module[];
    onSelectModule: (module: Module) => void;
}

export default function HexagonGridLayout(props: IHexagonGrid) {
    const { maxWidth, sizeSegments, closed, modules, onSelectModule } = props;
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

    const [selectedModule, setSelectedModule] = useState<Module | null>(null);


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
                                    onClick={() => {
                                        setSelectedModule(module);
                                        onSelectModule(module);
                                    }}
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
    const { sizeSegments, icon, onClick } = props;

    return (
        <HexagonLayout size={sizeSegments + 10} className={styles.parentHex}>
            <HexagonLayout size={sizeSegments} className={styles.childHex}>
                <button onClick={onClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width={sizeSegments - 15} height={sizeSegments - 15} fill="currentColor" className="bi bi-android2" viewBox="0 0 16 16">
                        <path d="m10.213 1.471.691-1.26c.046-.083.03-.147-.048-.192-.085-.038-.15-.019-.195.058l-.7 1.27A4.832 4.832 0 0 0 8.005.941c-.688 0-1.34.135-1.956.404l-.7-1.27C5.303 0 5.239-.018 5.154.02c-.078.046-.094.11-.049.193l.691 1.259a4.25 4.25 0 0 0-1.673 1.476A3.697 3.697 0 0 0 3.5 5.02h9c0-.75-.208-1.44-.623-2.072a4.266 4.266 0 0 0-1.664-1.476ZM6.22 3.303a.367.367 0 0 1-.267.11.35.35 0 0 1-.263-.11.366.366 0 0 1-.107-.264.37.37 0 0 1 .107-.265.351.351 0 0 1 .263-.11c.103 0 .193.037.267.11a.36.36 0 0 1 .112.265.36.36 0 0 1-.112.264Zm4.101 0a.351.351 0 0 1-.262.11.366.366 0 0 1-.268-.11.358.358 0 0 1-.112-.264c0-.103.037-.191.112-.265a.367.367 0 0 1 .268-.11c.104 0 .19.037.262.11a.367.367 0 0 1 .107.265c0 .102-.035.19-.107.264ZM3.5 11.77c0 .294.104.544.311.75.208.204.46.307.76.307h.758l.01 2.182c0 .276.097.51.292.703a.961.961 0 0 0 .7.288.973.973 0 0 0 .71-.288.95.95 0 0 0 .292-.703v-2.182h1.343v2.182c0 .276.097.51.292.703a.972.972 0 0 0 .71.288.973.973 0 0 0 .71-.288.95.95 0 0 0 .292-.703v-2.182h.76c.291 0 .54-.103.749-.308.207-.205.311-.455.311-.75V5.365h-9v6.404Zm10.495-6.587a.983.983 0 0 0-.702.278.91.91 0 0 0-.293.685v4.063c0 .271.098.501.293.69a.97.97 0 0 0 .702.284c.28 0 .517-.095.712-.284a.924.924 0 0 0 .293-.69V6.146a.91.91 0 0 0-.293-.685.995.995 0 0 0-.712-.278Zm-12.702.283a.985.985 0 0 1 .712-.283c.273 0 .507.094.702.283a.913.913 0 0 1 .293.68v4.063a.932.932 0 0 1-.288.69.97.97 0 0 1-.707.284.986.986 0 0 1-.712-.284.924.924 0 0 1-.293-.69V6.146c0-.264.098-.491.293-.68Z" />
                    </svg>
                </button>
            </HexagonLayout>
        </HexagonLayout >
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