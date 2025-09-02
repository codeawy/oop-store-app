import { Category } from "../types/category";
import { Product } from "./Product";

export class PhysicalProduct extends Product {
  private _weight: number; // in kg
  private _dimensions: string;

  constructor(
    name: string,
    price: number,
    stock: number,
    category: "Physical",
    weight: number,
    dimensions: string
  ) {
    super(name, price, stock, category);

    // Validation
    if (weight <= 0) {
      throw new Error("Weight must be positive");
    }
    if (!dimensions || dimensions.trim().length === 0) {
      throw new Error("Dimensions cannot be empty");
    }

    this._weight = weight;
    this._dimensions = dimensions.trim();
  }

  get weight(): number {
    return this._weight;
  }

  get dimensions(): string {
    return this._dimensions;
  }
}
