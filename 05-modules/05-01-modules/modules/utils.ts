/**
 * Hilfsfunktionen
 */

/**
 * Formatiert einen Zahlenwert als Euro-Betrag.
 */
export function formatCurrency(value: number): string {
    return `${value.toFixed(2)} €`;
}

/**
 * Formatiert einen Produktnamen für die Ausgabe.
 */
export function formatProductName(name: string): string {
    return name.trim().toUpperCase();
}
