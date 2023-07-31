import { Direction } from 'readline'
import { Axial, Cartesian, Coordinates, Cuboid } from '../../../types/default'
import { isAxial, isCartesian } from '../../../helpers/functions'

import { Vector2 } from 'three'
import { Layout } from '../Layout'

export interface Context {
    layout: Layout
}

/**
 * Represents hexagons within a hexagonal grid.
 * @template TValue user defined extra information stored in each Hex.
 */
export class Hex<TValue> {
    readonly coordinates: Cuboid
    readonly symbol: symbol

    value: TValue | undefined
    context: Context | undefined

    constructor(coordinates: Coordinates, value?: TValue) {
        this.coordinates = Hex.detectCoordinates(coordinates)
        this.value = value
        this.validate()
        Object.freeze(this.coordinates)
        this.symbol = Symbol.for(this.computeSymbolKey())
    }

    add(b: Hex<TValue>): Hex<TValue> {
        const { q, r, s } = this.coordinates
        return new Hex(
            {
                q: q + b.coordinates.q,
                r: r + b.coordinates.r,
                s: s + b.coordinates.s
            },
            this.value
        )
    }

    subtract(b: Hex<TValue>): Hex<TValue> {
        const { q, r, s } = this.coordinates
        return new Hex(
            {
                q: q - b.coordinates.q,
                r: r - b.coordinates.r,
                s: s - b.coordinates.s
            },
            this.value
        )
    }

    multiply(k: number): Hex<TValue> {
        const { q, r, s } = this.coordinates
        return new Hex({ q: q * k, r: r * k, s: s * k }, this.value)
    }

    length(): number {
        const { q, r, s } = this.coordinates
        const abs = Math.abs
        return (abs(q) + abs(r) + abs(s)) / 2
    }

    distanceTo(b: Hex<TValue>): number {
        return this.subtract(b).length()
    }

    neighbor(direction: Direction): Hex<TValue> {
        const inDirection = new Hex<TValue>(Hex.directions[direction])
        return this.add(inDirection)
    }

    toPoint(): Vector2 {
        if (!this.context) {
            throw new ReferenceError('No context for converting a point')
        }
        return this.context.layout.hexToPixel(this)
    }

    private static detectCoordinates(coordinates: Coordinates): Cuboid {
        if (isAxial(coordinates)) {
            return Hex.fromAxial(coordinates)
        } else if (isCartesian(coordinates)) {
            return Hex.fromCartesian(coordinates)
        } else {
            return coordinates
        }
    }

    private static fromAxial(coordinates: Axial): Cuboid {
        return {
            q: coordinates.q,
            r: coordinates.r,
            s: -coordinates.q - coordinates.r
        }
    }

    private static fromCartesian(coordinates: Cartesian): Cuboid {
        const { row, col, offset } = coordinates
        return Hex.fromAxial({
            q: col,
            r: row - (col + offset * (col & 1)) / 2
        })
    }

    private validate() {
        const { q, r, s } = this.coordinates
        if (q + r + s !== 0) {
            throw new RangeError(
                `Hex(${q}, ${r}, ${s}) invalid: does not zero-sum`
            )
        }
    }

    private computeSymbolKey() {
        const { q, r, s } = this.coordinates
        return `hex(${q},${r},${s})`
    }

    private static directions: Axial[] = [
        { q: 1, r: 0 },
        { q: 0, r: 1 },
        { q: -1, r: 1 },
        { q: -1, r: 0 },
        { q: 0, r: -1 },
        { q: 1, r: -1 }
    ]
}
