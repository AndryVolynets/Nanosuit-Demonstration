import React from "react";
import styles from "./index.module.css";
import HexagonLayout from "../hexagon";

interface ISegment {
    sizeSegments: number;
}

interface IHexagonGrid {
    xSegments: number;
    ySegments: number;
    sizeSegments: number;
    reverd?: boolean | null;
    closed?: boolean | null;
}

const Segment = (props: ISegment) => {
    const { sizeSegments } = props;

    return (
        <HexagonLayout size={sizeSegments} color="rgba(162, 223, 194, 0.2)">
            <HexagonLayout size={sizeSegments - 10} color="rgba(255, 255, 255, 0.1)">
                <button color="rgba(162, 223, 194, 1)">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        width={sizeSegments - 10}
                        height={sizeSegments - 10}
                        fill="currentColor"
                        className="bi bi-compass"
                        viewBox="0 0 16 16">
                        <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                        <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z" />
                    </svg>
                </button>
            </HexagonLayout>
        </HexagonLayout>
    );
};

const HexagonGridLayout = (props: IHexagonGrid) => {
    const { xSegments, ySegments, sizeSegments, closed, reverd } = props;
    const isClosed = closed ?? false;

    const n = xSegments;
    const m = ySegments * 2 + 1;

    const gtc = (sizeSegments + (sizeSegments < 100 ? 15 : 11) + sizeSegments / 2.0) / 2;
    const gtr = (sizeSegments + sizeSegments * (ySegments > 1 || isClosed ? sizeSegments % 0.05 : 0)) / 2;

    const gridParentStyle = {
        display: 'grid',
        gridTemplateColumns: `repeat(${n}, ${gtc}px)`,
        gridTemplateRows: `repeat(${m}, ${gtr}px)`,
    };

    const isExist = (value: any): boolean => {
        return value !== undefined && value !== null;
    };

    const isExistAndTrue = (value: any): boolean => {
        return isExist(value) && value === true;
    };

    const generateGridArea = (): JSX.Element[] => {
        const blocks: JSX.Element[] = [];

        for (let i = 1; i < m; i += 2) {
            for (let j = 1; j <= n; j++) {
                let i_new = (isExistAndTrue(reverd) ? j % 2 === 0 : j % 2 !== 0) ?
                    i + 1 : i;

                blocks.push(
                    <div key={`${i_new}-${j}`} style={{ gridArea: `${i_new} / ${j} / ${i_new + 2} / ${j + 2}` }}>
                        <Segment sizeSegments={sizeSegments} />
                    </div>
                );
            }
        }

        if (isExistAndTrue(closed)) {
            let lastRow = m - 1;

            for (let j = 1; j < n; j += 2) {
                let i_new = j % 2 !== 0 ? lastRow + 1 : lastRow;

                blocks.push(
                    <div key={`${i_new}-${j}`} style={{ gridArea: `${i_new} / ${j + 1} / ${i_new + 2} / ${j + 2}` }}>
                        <Segment sizeSegments={sizeSegments} />
                    </div>
                );
            }
        }

        return blocks;
    };

    return (
        <div className={styles.container}>
            <div className={styles.gridParent} style={gridParentStyle}>
                {generateGridArea()}
            </div>
        </div>
    );
};

export default HexagonGridLayout;