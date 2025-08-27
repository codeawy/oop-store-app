import { CustomerPermission, UserType } from "../types/user";
import { Cart } from "./Cart";
import { Order } from "./Order";
import { User } from "./User";

/**
 * Customer class extends abstract User
 * - Implement abstract methods with customer-specific behavior
 */
export class Customer extends User {
  private readonly cart: Cart;
  private readonly orders: Order[] = [];

  constructor(name: string, email: string) {
    super(name, email);
    this.cart = new Cart(); // Initialize cart for each customer
  }

  getRole(): UserType {
    return "Customer";
  }

  getPermissions(): CustomerPermission[] {
    return ["browse_products", "add_to_cart", "place_order", "view_orders"];
  }
}
