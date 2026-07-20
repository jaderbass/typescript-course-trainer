/**
 * Kapitel 4.1
 * Property Modifiers
 *
 * GeoShop – Eigenschaften einer Produktklasse definieren
 */

class Product {
    public id: number;
    public name: string;
    public price: number;
    public stock: number;
    public isActive: boolean;
}

const product = new Product();

product.id = 1001;
product.name = "Weltkarte aus Holz";
product.price = 89.9;
product.stock = 12;
product.isActive = true;

console.log(product);
console.log(
    `${product.name} kostet ${product.price.toFixed(2)} €.`
);
