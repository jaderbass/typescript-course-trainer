/**
 * Kapitel 1.1
 * String, Boolean und Number
 *
 * GeoShop – Produktname, Preis und Aktivstatus
 */

// Produktdaten
const productName: string = "Weltkarte aus Holz";
const category: string = "Dekoration";
const price: number = 89.9;
const vatRate: number = 0.19;
const isActive: boolean = true;
const stock: number = 12;

// Berechnungen
const vatAmount: number = price * vatRate;
const grossPrice: number = price + vatAmount;
const totalStockValue: number = grossPrice * stock;

// Textausgabe
const availability: string = isActive && stock > 0
    ? "verfügbar"
    : "nicht verfügbar";

const productSummary: string = `
Produkt: ${productName}
Kategorie: ${category}
Nettopreis: ${price.toFixed(2)} €
Mehrwertsteuer: ${vatAmount.toFixed(2)} €
Bruttopreis: ${grossPrice.toFixed(2)} €
Lagerbestand: ${stock}
Status: ${availability}
`;

console.log(productSummary);
console.log(
    `Gesamtwert des Lagerbestands: ${totalStockValue.toFixed(2)} €`
);
