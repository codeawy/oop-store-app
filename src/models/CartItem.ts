import { Product } from "./Product";

/**
 * CartItem class - represents an item in the shopping cart
 */
export class CartItem {
  constructor(public readonly product: Product, private _quantity: number) {}

  // Getters
  get quantity(): number {
    return this._quantity;
  }

  // Setters
  set quantity(newQuantity: number) {
    if (newQuantity > 0) {
      this._quantity = newQuantity;
    } else {
      throw new Error("Quantity must be positive");
    }
  }

  // Methods
  getTotalPrice(): number {
    return this.product.price * this._quantity;
  }
}
