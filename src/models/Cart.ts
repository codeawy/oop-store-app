import { CartItem } from "./CartItem";

/**
 * Cart class - Manges shopping cart functionality
 */
export class Cart {
  private items: CartItem[] = [];

  // Methods
  addItem() {}
  removeItem(productId: number) {}
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
