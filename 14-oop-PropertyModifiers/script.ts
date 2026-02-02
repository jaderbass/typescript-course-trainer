interface Point2D {
    xPos: number;
    yPos: number;
    readonly name?: string; // ? bedeutet Eigenschft ist optional
}

const p1: Point2D = { xPos: 0, yPos: 0, name: 'centerPoint' };

console.log(p1);

// p1.name = 'point1';
console.log(p1);

const p2: Point2D = { yPos: 1, xPos: 1 };
// p2.name = 'point2';
console.log(p2);
