import { CartItem } from "./CartItem";
import { Product } from "./Product";

/**
 * Cart class - Manges shopping cart functionality
 */
export class Cart {
  private items: CartItem[] = [];

  // Methods
  addItem(product: Product, quantity: number): boolean {
    // Check if product already in cart
    const existingItem = this.items.find(
      (item) => item.product.id === product.id
    );

    if (existingItem) {
      // check if total quantity would exceed available stock
      const totalQuantity = existingItem.quantity + quantity; // 3 + 1

      if (totalQuantity <= product.stock) {
        existingItem.quantity += quantity;
        return true;
      }
    } else {
      // add new item if stock is available
      if (quantity <= product.stock) {
        this.items.push(new CartItem(product, quantity));
        return true;
      }
    }

    return false; // Not enough stock
  }

  removeItem(productId: number): boolean {
    const index = this.items.findIndex((item) => item.product.id == productId);

    if (index > -1) {
      this.items.splice(index, 1);
      return true;
    }

    return false;
  }

  getItems(): CartItem[] {
    return [];
  }

  getTotalPrice(): number {
    return 1000;
  }

  isEmpty(): boolean {
    return true;
  }

  clear(): void {
    this.items = [];
  }

  getItemCount(): number {
    return 1;
  }

  reduceStockOnCheckout(): boolean {
    return false;
  }
}
