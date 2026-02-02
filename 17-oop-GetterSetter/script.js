"use strict";
class Point2D {
    constructor(xPosInput, yPosInput) {
        this._xPos = xPosInput;
        this._yPos = yPosInput;
    }
    get xPos() {
        return this._xPos;
    }
    set xPos(xPosNew) {
        this._xPos = xPosNew;
    }
    get yPos() {
        return this._yPos;
    }
    set yPos(yPosNew) {
        this._yPos = yPosNew;
    }
}
class Point3D extends Point2D {
    constructor(xPosInput, yPosInput, zPosInput) {
        super(xPosInput, yPosInput);
        this._zPos = zPosInput;
    }
    get zPos() {
        return this._zPos;
    }
}
const p1 = new Point2D(0, 0);
console.log(p1);
p1.xPos = 4;
console.log(p1);
const p2 = new Point3D(0, 0, 0);
console.log(p2);
// p2.zPos = 8;
console.log(p2);
