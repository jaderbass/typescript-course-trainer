export class Point2D {
    constructor(xPosInput, yPosInput) {
        this._xPos = xPosInput;
        this._yPos = yPosInput;
    }
    get xPos() {
        return this._xPos;
    }
    set xPos(pos) {
        this._xPos = pos;
    }
    get yPos() {
        return this._yPos;
    }
    set yPos(pos) {
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
//# sourceMappingURL=Point2D.js.map