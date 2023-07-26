import { FlatDirection, Offset, PointyDirection } from "../enums";

export type Cuboid = {
    q: number;
    r: number;
    s: number;
};

export type Axial = {
    q: number;
    r: number;
};

export type Cartesian = {
    col: number;
    row: number;
    offset: Offset;
};

export type Coordinates = Cuboid | Axial | Cartesian;
export type Direction = PointyDirection | FlatDirection;
