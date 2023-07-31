import { Vector2 } from 'three'
import { Orientation } from '../Orientation'
import { Hex } from '../Hex'

export class Layout {
    orientation: Orientation
    size: Vector2
    origin: Vector2

    constructor(orientation: Orientation, size: Vector2, origin: Vector2) {
        this.orientation = orientation
        this.size = size
        this.origin = origin
    }

    hexToPixel<T>(h: Hex<T>): Vector2 {
        const f = this.orientation.f
        const { q, r } = h.coordinates

        const x = (f[0] * q + f[1] * r) * this.size.x
        const y = (f[2] * q + f[3] * r) * this.size.y

        return new Vector2(x + this.origin.x, y + this.origin.y)
    }

    pixelToHex<T>(p: Vector2): Hex<T> {
        const b = this.orientation.b

        const pt = new Vector2(
            (p.x - this.origin.x) / this.size.x,
            (p.y - this.origin.y) / this.size.y
        )

        const q = b[0] * pt.x + b[1] * pt.y
        const r = b[2] * pt.x + b[3] * pt.y

        return new Hex<T>({ q, r })
    }
}
