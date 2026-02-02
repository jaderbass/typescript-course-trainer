class Point2D {
    private xPos: number; // ohne weitere Angabe sind Eigenschften immer public
    protected yPos: number;

    constructor(xPosInput: number, yPosInput: number) {
        this.xPos = xPosInput;
        this.yPos = yPosInput;
    }

    movePosX(pos: number) {
        this.xPos = pos;
    }
}

class Point3D extends Point2D {
    protected zPos: number;

    constructor(xPosInput: number, yPosInput: number, zPosInput: number) {
        super(xPosInput, yPosInput);
        this.zPos = zPosInput;
    }

    /* movePosX(pos: number) {
        this.xPos = pos;
    } */
}

const p1 = new Point2D(0, 0);
// p1.xPos = 5;
console.log(p1);

const p2 = new Point3D(0, 0, 0);
// p2.xPos = 9;
p2.movePosX(6);
console.log(p2);
