/**
 * Kapitel 2.3
 * Interfaces
 *
 * GeoShop – Einheitliche Strukturen für Produkte und Kunden
 */

interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    isActive: boolean;
}

interface Customer {
    customerNumber: string;
    firstName: string;
    lastName: string;
    email: string;
}

interface Order {
    orderNumber: string;
    customer: Customer;
    product: Product;
    quantity: number;
}

const product: Product = {
    id: 1001,
    name: "Weltkarte aus Holz",
    price: 89.9,
    stock: 12,
    isActive: true,
};

const customer: Customer = {
    customerNumber: "K-100",
    firstName: "Anna",
    lastName: "Müller",
    email: "anna.mueller@example.org",
};

const order: Order = {
    orderNumber: "GS-2026-001",
    customer,
    product,
    quantity: 2,
};

/**
 * Berechnet den Gesamtpreis einer Bestellung.
 */
function calculateOrderTotal(order: Order): number {
    return order.product.price * order.quantity;
}

/**
 * Gibt eine Bestellübersicht aus.
 */
function printOrder(order: Order): void {
    const total: number = calculateOrderTotal(order);

    console.log(`
Bestellung: ${order.orderNumber}
Kunde: ${order.customer.firstName} ${order.customer.lastName}
Produkt: ${order.product.name}
Menge: ${order.quantity}
Gesamtpreis: ${total.toFixed(2)} €
    `);
}

printOrder(order);
