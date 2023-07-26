import React, { useState } from "react";
import styles from "./index.module.css";
import { HexagonLayout } from "../../../../../components";
import { Module } from "../../../../../types/interfaces";
import { HexGrid, Layout, Hexagon, Text, Pattern, Path, Hex } from 'react-hexgrid';



interface ISegment {
    sizeSegments: number;
    icon: any;
    onClick: () => void;
}

interface IHexagonGrid {
    icon: string;
    maxWidth: number;
    sizeSegments: number;
    reverd?: boolean | null;
    closed?: boolean | null;
    modules?: Module[];
    onSelectModule: (module: Module) => void;
}

export default function HexagonGridLayout(props: IHexagonGrid) {
    const { maxWidth, sizeSegments, closed, modules, icon, onSelectModule } = props;
    const isClosed = closed ?? false;

    const closeIndx = closed ? 1 : 0;
    const x = Math.min((modules?.length ?? 0) + closeIndx, maxWidth);
    const y = Math.ceil((modules?.length ?? 0) / 2) + closeIndx;

    const [gridColumn, gridRow] = SetSpacing(sizeSegments, y, isClosed);

    const gridParentStyle = {
        gridTemplateColumns: `repeat(${x}, ${gridColumn}px)`,
        gridTemplateRows: `repeat(${y}, ${gridRow}px)`,
    };
    const [, setSelectedModule] = useState<Module | null>(null);

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
                                    icon={module.Icon}
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
                    {icon}
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