import { CustomerPermission, UserType } from "../types/user";
import { Cart } from "./Cart";
import { CartItem } from "./CartItem";
import { Order } from "./Order";
import { Product } from "./Product";
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

  // Getters for customer statistics
  get cartItemCount(): number {
    return this.cart.getItemCount();
  }

  get cartTotal(): number {
    return this.cart.getTotalPrice();
  }

  get orderCount(): number {
    return 0;
  }

  get hasItemsInCart(): boolean {
    return !this.cart.isEmpty();
  }

  /**
   * Adds a product to the customer's cart
   */
  addToCar(product: Product, quantity: number): boolean {
    return this.cart.addItem(product, quantity);
  }

  /**
   * Returns all items currently in the customer's cart
   */
  viewCart(): CartItem[] {
    return this.cart.getItems();
  }

  /**
   * Processes the checkout and creates a new order
   */
  checkout() {
    // checkout functionality here...
  }

  /**
   * Returns a copy of all customer orders
   */
  getOrderHistory(): Order[] {
    return [];
  }

  /**
   * Get recent orders (last N orders)
   * @param count - Number of recent orders to return
   * @returns Array of recent orders
   */
  getRecentOrders(count: number = 5): Order[] {
    return [];
  }

  /**
   * Remove an item from cart
   * @param productId - ID of the product to remove
   * @returns true if removed successfully
   */
  removeFromCart(productId: number): boolean {
    return this.cart.removeItem(productId);
  }

  clearCar(): void {
    this.cart.clear();
  }
}
