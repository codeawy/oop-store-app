import { Category } from "../types/category";

export class Product {
  protected readonly _id: number;

  private static nextId: number = 1;

  constructor(
    // Private properties - only accessible within this class
    private _name: string,
    private _price: number,
    private _stock: number,
    private _category: Category
  ) {
    this._id = Product.nextId++;
  }

  // Getters
  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get price(): number {
    return this._price;
  }

  get stock(): number {
    return this._stock;
  }

  get category(): string {
    return this._category;
  }

  // Setters
  set price(newPrice: number) {
    if (newPrice > 0) {
      this._price = newPrice;
    } else {
      throw new Error("Price must be positive!");
    }
  }

  set stock(newStock: number) {
    if (newStock > 0) {
      this._stock = newStock;
    } else {
      throw new Error("Stock cannot be negative!");
    }
  }

  reduceStock(quantity: number): boolean {
    if (this._stock >= quantity) {
      // stock => 20 => product qty => 5
      this._stock -= quantity;

      return true;
    }

    return false;
  }
}
