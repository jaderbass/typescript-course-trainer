import { Point2D as P2D } from './Point2D.js';

export class Point3D extends P2D {
    protected _zPos: number;

    constructor(xPosInput: number, yPosInput: number, zPosInput: number) {
        super(xPosInput, yPosInput);
        this._zPos = zPosInput;
    }

    public get zPos(): number {
        return this._zPos;
    }

    public set zPos(pos: number) {
        this._zPos = pos;
    }
}
