/**
 * Kapitel 2.4
 * Extending Interfaces
 *
 * GeoShop – Bestehende Produktstrukturen erweitern
 *
 * Praxisidee:
 * Verwandte Objekte teilen eine gemeinsame Grundstruktur.
 * Spezialisierte Interfaces erweitern diese Struktur dauerhaft.
 */

interface BaseProduct {
    id: number;
    name: string;
    price: number;
    stock: number;
}

interface PhysicalProduct extends BaseProduct {
    weightInGrams: number;
    shippingClass: "small" | "medium" | "large";
}

interface DigitalProduct extends BaseProduct {
    downloadUrl: string;
    fileSizeInMb: number;
}

const woodenMap: PhysicalProduct = {
    id: 1001,
    name: "Weltkarte aus Holz",
    price: 89.9,
    stock: 12,
    weightInGrams: 2400,
    shippingClass: "large",
};

const travelGuide: DigitalProduct = {
    id: 2001,
    name: "Digitaler Reiseführer Europa",
    price: 14.9,
    stock: 999,
    downloadUrl: "/downloads/reisefuehrer-europa.pdf",
    fileSizeInMb: 18.4,
};

/**
 * Gibt gemeinsame Produktdaten aus.
 */
function printBaseProduct(product: BaseProduct): void {
    console.log(
        `${product.name} – ${product.price.toFixed(2)} €`
    );
}

/**
 * Gibt Versandinformationen für physische Produkte aus.
 */
function printShippingInfo(product: PhysicalProduct): void {
    console.log(
        `Gewicht: ${product.weightInGrams} g, `
        + `Versandklasse: ${product.shippingClass}`
    );
}

/**
 * Gibt Downloadinformationen für digitale Produkte aus.
 */
function printDownloadInfo(product: DigitalProduct): void {
    console.log(
        `Download: ${product.downloadUrl}, `
        + `Dateigröße: ${product.fileSizeInMb} MB`
    );
}

printBaseProduct(woodenMap);
printShippingInfo(woodenMap);

printBaseProduct(travelGuide);
printDownloadInfo(travelGuide);
