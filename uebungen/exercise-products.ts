// exercise-products.ts

/**
 * Ausgangsdaten (kommen z. B. aus einer API)
 * ACHTUNG: absichtlich unknown
 */

const rawData: unknown = [
    {
        id: 'p1',
        title: 'Karabiner HMS',
        priceCents: 1299,
        tags: ['climbing', 'safety'],
    },
    {id: 'p2', title: 'Express-Set', priceCents: 2599},
    {id: 'p3', title: 'Helm', priceCents: '3999'}, // Fehler
    {title: 'Seil 60m', priceCents: 8999}, // Fehler
];

function isProduct(value: unknown) {
    // TODO
}

function filterProducts(data: unknown[]): /* Rückgabetyp */ {
    // TODO
}

function formatPrice(priceCents: number): string {
    // TODO
}

function printProducts(products: /* Typ */): void {
  // TODO
}

function totalPrice(products: /* Typ */): number {
  // TODO
}

function filterByTag(products: /* Typ */, tag: string) {
  // TODO
}

function first<T>(items: T[]): T | undefined {
  // TODO
}

const products = filterProducts(rawData as unknown[]);
printProducts(products);

console.log("Summe:", formatPrice(totalPrice(products)));

// Bonus Level 2

type RawProduct = {
  id: unknown;
  title: unknown;
  priceCents: unknown;
  tags?: unknown;
};

function parseProduct(value: unknown): Product | null {
  // TODO
}

function parseProducts(data: unknown[]): Product[] {
  // TODO
}

function topNByPrice(products: Product[], n: number): Product[] {
  // TODO
}

type TagStats = {
  tag: string;
  count: number;
};

function buildTagStats(products: Product[]): TagStats[] {
  // TODO
}

const rawDataLevel2: unknown = [
  { id: "p10", title: "Klettergurt", priceCents: "5999", tags: ["climbing"] },
  { id: "p11", title: "Chalk", priceCents: 699, tags: ["climbing", "accessories"] },
  { id: "p12", title: "Seil", priceCents: "8.999" }, // ungültig (Punkt)
  { id: 123, title: "Karabiner", priceCents: 999 },  // ungültig (id)
  { id: "p13", title: "Helm", priceCents: " 3999 " }, // gültig (trim)
  { id: "p14", title: "Sicherungsgerät", priceCents: null }, // ungültig
];
