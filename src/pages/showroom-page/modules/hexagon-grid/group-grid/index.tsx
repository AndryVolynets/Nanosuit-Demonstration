import React, { useState } from 'react'
import styles from './index.module.css'
import { HexagonLayout } from '../../../../../components'

interface ImageBlock {
    src: string
    x: number
    y: number
}

interface IHexagonGrid {
    icon: string
    sizeSegments: number
    reverd?: boolean | null
    closed?: boolean | null
    xAxis: number
    yAxis: number
    imageURL: string | null // Добавляем пропс для imageURL
}

function splitImageIntoBlocks(
    image: HTMLImageElement,
    n: number,
    m: number
): ImageBlock[] {
    const blockWidth = Math.floor(image.width / n)
    const blockHeight = Math.floor(image.height / m)
    const blocks: ImageBlock[] = []

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            const x = i * blockWidth
            const y = j * blockHeight
            const canvas = document.createElement('canvas')
            canvas.width = blockWidth
            canvas.height = blockHeight
            const ctx = canvas.getContext('2d')
            if (ctx !== null)
                ctx.drawImage(
                    image,
                    x,
                    y,
                    blockWidth,
                    blockHeight,
                    0,
                    0,
                    blockWidth,
                    blockHeight
                )
            blocks.push({ src: canvas.toDataURL(), x, y })
        }
    }

    return blocks
}

export default function HexagonGroupGridLayout(props: IHexagonGrid) {
    const { sizeSegments, closed, xAxis, yAxis, imageURL } = props
    const isClosed = closed ?? false

    const x = xAxis
    const y = yAxis * 2

    const [gridColumn, gridRow] = SetSpacing(sizeSegments, y, isClosed)

    const gridParentStyle = {
        gridTemplateColumns: `repeat(${x}, ${gridColumn}px)`,
        gridTemplateRows: `repeat(${y}, ${gridRow}px)`
    }

    const generateGridArea = (): JSX.Element[] => {
        const blocks: JSX.Element[] = []

        if (x !== undefined && y !== undefined && imageURL) {
            const image = new Image()
            image.src = imageURL

            // Разбиваем изображение на блоки
            const blocksData = splitImageIntoBlocks(image, x, y)

            for (let i = 0; i < y; i++) {
                for (let j = 0; j < x; j++) {
                    if ((i + j) % 2 === 1) {
                        const block = blocksData[i * x + j]

                        blocks.push(
                            <div
                                key={`${i}-${j}`}
                                style={{
                                    gridArea: `${i + 1} / ${j + 1} / ${
                                        i + 3
                                    } / ${j + 3}`
                                }}
                            >
                                <HexagonLayout
                                    size={sizeSegments + 10}
                                    className={styles.parentHex}
                                >
                                    <HexagonLayout
                                        size={sizeSegments}
                                        className={styles.childHex}
                                    >
                                        <img
                                            src={block.src}
                                            alt={`Block ${i}-${j}`}
                                        />
                                    </HexagonLayout>
                                </HexagonLayout>
                            </div>
                        )
                    }
                }
            }
        }

        return blocks
    }

    return (
        <div className={styles.container}>
            <div
                id="gridParentId"
                className={styles.gridParent}
                style={gridParentStyle}
            >
                {generateGridArea()}
            </div>
        </div>
    )
}

const SetSpacing = (
    sizeSegments: number,
    ySegments: number,
    isClosed: boolean | null | undefined
): [number, number] => {
    const baseSpacing = sizeSegments < 100 ? 15 : 11
    const bottomSpacing = ySegments > 1 || isClosed ? sizeSegments % 0.05 : 0
    const spacingFactor = sizeSegments < 100 ? 2.0 : 1.5
    const rowSpacingFactor = ySegments > 1 ? 2.5 : 2.0

    const gridColumn = Math.floor((sizeSegments + baseSpacing) / spacingFactor)
    const gridRow = Math.ceil((sizeSegments + bottomSpacing) / rowSpacingFactor)

    return [gridColumn, gridRow]
}
