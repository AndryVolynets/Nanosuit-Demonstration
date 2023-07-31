import { Axial, Cartesian, Coordinates, Cuboid } from '../../types/default'

export function isCuboid(x: Coordinates): x is Cuboid {
    return 's' in x
}

export function isCartesian(x: Coordinates): x is Cartesian {
    return 'row' in x && 'col' in x && 'offset' in x
}

export function isAxial(x: Coordinates): x is Axial {
    return !isCuboid(x) && !isCartesian(x)
}
