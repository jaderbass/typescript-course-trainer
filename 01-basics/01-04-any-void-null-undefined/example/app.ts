/**
 * Kapitel 1.4
 * Any, Void, Null und Undefined
 *
 * GeoShop – Unvollständige und fehlende Werte behandeln
 *
 * Hinweis:
 * Der Datentyp unknown wird später gemeinsam mit Type Guards behandelt.
 */

// any: TypeScript prüft den Wert nicht
let importedValue: any = "89.90";

console.log("Importierter Wert:", importedValue);

// Der Wert kann ohne Prüfung überschrieben werden
importedValue = 89.9;
importedValue = true;

/**
 * Gibt eine Produktmeldung aus.
 *
 * Der Rückgabewert void bedeutet:
 * Die Funktion gibt keinen verwendbaren Wert zurück.
 */
function showProductMessage(message: string): void {
    console.log(`[GeoShop] ${message}`);
}

showProductMessage("Produktdaten wurden geladen.");

// null: Ein Wert wurde bewusst nicht vergeben
let selectedProductId: number | null = null;

console.log("Ausgewählte Produkt-ID:", selectedProductId);

selectedProductId = 1001;

console.log("Neue Produkt-ID:", selectedProductId);

// undefined: Ein Wert wurde noch nicht gesetzt
let discountCode: string | undefined;

console.log("Rabattcode:", discountCode);

discountCode = "ERFURT10";

console.log("Aktiver Rabattcode:", discountCode);

// Optionaler Funktionsparameter erzeugt string | undefined
function calculateDiscount(
    price: number,
    code?: string
): number {
    if (code === "ERFURT10") {
        return price * 0.9;
    }

    return price;
}

const regularPrice: number = calculateDiscount(89.9);
const reducedPrice: number = calculateDiscount(89.9, "ERFURT10");

console.log(`Normalpreis: ${regularPrice.toFixed(2)} €`);
console.log(`Rabattpreis: ${reducedPrice.toFixed(2)} €`);
