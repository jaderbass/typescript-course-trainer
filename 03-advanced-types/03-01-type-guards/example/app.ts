/**
 * Kapitel 3.1
 * Type Guards und unknown
 *
 * GeoShop – Externe Produktdaten sicher prüfen
 */

// Externe Daten sollten zunächst als unknown behandelt werden.
const importedProductData: unknown = {
    id: 1001,
    name: "Weltkarte aus Holz",
    price: 89.9,
    stock: 12,
};

/**
 * Prüft, ob ein unbekannter Wert ein Objekt ist.
 */
function isObject(value: unknown): value is Record<string, unknown> {
    return typeof value === "object" && value !== null;
}

/**
 * Prüft, ob ein unbekannter Wert eine gültige Produktstruktur besitzt.
 */
function isProductData(
    value: unknown
): value is {
    id: number;
    name: string;
    price: number;
    stock: number;
} {
    if (!isObject(value)) {
        return false;
    }

    return (
        typeof value.id === "number"
        && typeof value.name === "string"
        && typeof value.price === "number"
        && typeof value.stock === "number"
    );
}

if (isProductData(importedProductData)) {
    console.log(
        `${importedProductData.name} kostet `
        + `${importedProductData.price.toFixed(2)} €.`
    );
} else {
    console.log("Ungültige Produktdaten.");
}

// Type Guard mit typeof
function formatValue(value: string | number): string {
    if (typeof value === "number") {
        return value.toFixed(2);
    }

    return value.toUpperCase();
}

console.log(formatValue(89.9));
console.log(formatValue("geoshop"));

// Type Guard mit in
type PhysicalProduct = {
    name: string;
    weightInGrams: number;
};

type DigitalProduct = {
    name: string;
    downloadUrl: string;
};

function printDeliveryInfo(
    product: PhysicalProduct | DigitalProduct
): void {
    if ("weightInGrams" in product) {
        console.log(
            `${product.name} wird versendet. `
            + `Gewicht: ${product.weightInGrams} g`
        );

        return;
    }

    console.log(
        `${product.name} steht als Download bereit: `
        + product.downloadUrl
    );
}

printDeliveryInfo({
    name: "Weltkarte aus Holz",
    weightInGrams: 2400,
});

printDeliveryInfo({
    name: "Reiseführer Europa",
    downloadUrl: "/downloads/europa.pdf",
});
