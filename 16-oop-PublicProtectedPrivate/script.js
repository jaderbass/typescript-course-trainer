"use strict";
class Point2D {
    constructor(xPosInput, yPosInput) {
        this.xPos = xPosInput;
        this.yPos = yPosInput;
    }
    movePosX(pos) {
        this.xPos = pos;
    }
}
class Point3D extends Point2D {
    constructor(xPosInput, yPosInput, zPosInput) {
        super(xPosInput, yPosInput);
        this.zPos = zPosInput;
    }
}
const p1 = new Point2D(0, 0);
// p1.xPos = 5;
console.log(p1);
const p2 = new Point3D(0, 0, 0);
// p2.xPos = 9;
p2.movePosX(6);
console.log(p2);
