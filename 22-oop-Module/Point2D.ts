export class Point2D {
    protected _xPos: number; // ohne weitere Angaben sind Eigenschaften immer public
    protected _yPos: number;

    constructor(xPosInput: number, yPosInput: number) {
        this._xPos = xPosInput;
        this._yPos = yPosInput;
    }

    public get xPos(): number {
        return this._xPos;
    }

    public set xPos(pos: number) {
        this._xPos = pos;
    }

    public get yPos(): number {
        return this._yPos;
    }

    public set yPos(pos: number) {
        this._yPos = pos;
    }
}

/* export class Point3D extends Point2D {
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
} */
