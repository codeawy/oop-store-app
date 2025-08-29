import { OrderStatus } from "../types/order";
import { CartItem } from "./CartItem";
import { Customer } from "./Customer";

export class Order {
  // Attributes
  private readonly orderId: number;
  private readonly customer: Customer;
  private readonly items: CartItem[];
  private readonly total: number;
  private readonly status: OrderStatus;
  private readonly createdAt: Date;
  private readonly updatedAt: Date;

  private static nextOrderId: number = 1;

  constructor(customer: Customer, items: CartItem[]) {
    if (!customer) {
      throw new Error("Customer is required");
    }
    if (!items || items.length === 0) {
      throw new Error("Items are required");
    }

    this.orderId = Order.nextOrderId++;
    this.customer = customer;
    this.items = items;
    this.total = this.calculateTotal();
    this.status = "Pending";
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  calculateTotal(): number {
    return this.items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }
}
