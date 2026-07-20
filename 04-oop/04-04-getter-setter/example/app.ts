/**
 * Kapitel 4.4
 * Getter und Setter
 *
 * GeoShop – Preise und Lagerbestände kontrolliert verändern
 */

class Product {
    private _price: number;
    private _stock: number;

    public constructor(
        public id: number,
        public name: string,
        price: number,
        stock: number
    ) {
        this._price = price;
        this._stock = stock;
    }

    public get price(): number {
        return this._price;
    }

    public set price(value: number) {
        if (value < 0) {
            throw new Error("Der Preis darf nicht negativ sein.");
        }

        this._price = value;
    }

    public get stock(): number {
        return this._stock;
    }

    public set stock(value: number) {
        if (!Number.isInteger(value) || value < 0) {
            throw new Error(
                "Der Lagerbestand muss eine positive Ganzzahl sein."
            );
        }

        this._stock = value;
    }
}

const product = new Product(
    1001,
    "Weltkarte aus Holz",
    89.9,
    12
);

console.log(
    `${product.name}: ${product.price.toFixed(2)} €, `
    + `${product.stock} Stück`
);

product.price = 84.9;
product.stock = 10;

console.log(
    `Aktualisiert: ${product.price.toFixed(2)} €, `
    + `${product.stock} Stück`
);
