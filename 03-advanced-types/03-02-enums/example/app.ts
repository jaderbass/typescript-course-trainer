/**
 * Kapitel 3.2
 * Enums
 *
 * GeoShop – Bestellstatus eindeutig festlegen
 */

enum OrderStatus {
    Open = "open",
    Paid = "paid",
    Shipped = "shipped",
    Cancelled = "cancelled",
}

enum PaymentMethod {
    Invoice = "invoice",
    PayPal = "paypal",
    CreditCard = "credit-card",
}

type Order = {
    orderNumber: string;
    status: OrderStatus;
    paymentMethod: PaymentMethod;
    total: number;
};

const order: Order = {
    orderNumber: "GS-2026-001",
    status: OrderStatus.Open,
    paymentMethod: PaymentMethod.Invoice,
    total: 179.8,
};

/**
 * Gibt einen verständlichen Text zum Bestellstatus zurück.
 */
function getStatusLabel(status: OrderStatus): string {
    switch (status) {
        case OrderStatus.Open:
            return "Bestellung ist offen.";

        case OrderStatus.Paid:
            return "Bestellung wurde bezahlt.";

        case OrderStatus.Shipped:
            return "Bestellung wurde versendet.";

        case OrderStatus.Cancelled:
            return "Bestellung wurde storniert.";
    }
}

/**
 * Ändert den Bestellstatus.
 */
function updateOrderStatus(
    order: Order,
    newStatus: OrderStatus
): void {
    order.status = newStatus;

    console.log(
        `${order.orderNumber}: ${getStatusLabel(order.status)}`
    );
}

console.log(getStatusLabel(order.status));

updateOrderStatus(order, OrderStatus.Paid);
updateOrderStatus(order, OrderStatus.Shipped);

console.log(
    `Zahlungsart: ${order.paymentMethod}`
);
