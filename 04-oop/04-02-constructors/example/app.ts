/**
 * Kapitel 4.2
 * Constructors
 *
 * GeoShop – Produkte mit Anfangswerten erzeugen
 */

class Product {
    public id: number;
    public name: string;
    public price: number;
    public stock: number;
    public isActive: boolean;

    public constructor(
        id: number,
        name: string,
        price: number,
        stock: number,
        isActive: boolean
    ) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.isActive = isActive;
    }
}

const woodenMap = new Product(
    1001,
    "Weltkarte aus Holz",
    89.9,
    12,
    true
);

const globe = new Product(
    1002,
    "Globus Retro",
    49.5,
    8,
    true
);

console.log(woodenMap);
console.log(globe);
