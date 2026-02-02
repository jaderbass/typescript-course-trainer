import { Point2D as P2D } from './Point2D.js';
export class Point3D extends P2D {
    constructor(xPosInput, yPosInput, zPosInput) {
        super(xPosInput, yPosInput);
        this._zPos = zPosInput;
    }
    get zPos() {
        return this._zPos;
    }
    set zPos(pos) {
        this._zPos = pos;
    }
}
//# sourceMappingURL=Point3D.js.map