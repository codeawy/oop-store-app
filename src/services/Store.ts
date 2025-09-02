import { Order } from "../models/Order";
import { Product } from "../models/Product";
import { User } from "../models/User";

export class Store {
  // Attributes
  private readonly products: Product[] = [];
  private readonly users: User[] = [];
  private readonly orders: Order[] = [];
  private _storeName: string;
  private _isOpen: boolean = true;

  constructor(storeName: string) {
    this._storeName = storeName;
  }

  // Getters
  get storeName(): string {
    return this._storeName;
  }

  get isOpen(): boolean {
    return this._isOpen;
  }

  get productCount(): number {
    return this.products.length;
  }

  get userCount(): number {
    return this.users.length;
  }

  get orderCount(): number {
    return this.orders.length;
  }

  // Setters with validation
  set storeName(storeName: string) {
    if (!storeName || storeName.trim().length === 0) {
      throw new Error("Store name cannot be empty");
    }

    if (storeName.trim().length < 2) {
      throw new Error("Store name must be at least 2 characters long");
    }

    this._storeName = storeName;
  }

  set isOpen(isOpen: boolean) {
    if (typeof isOpen !== "boolean") {
      throw new Error("Is open must be a boolean");
    }

    this._isOpen = isOpen;
  }
}
