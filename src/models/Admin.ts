import { AdminPermission } from "../types/admin";
import { Category } from "../types/category";
import { UserType } from "../types/user";
import { DigitalProduct } from "./DigitalProduct";
import { PhysicalProduct } from "./PhysicalProduct";
import { Product } from "./Product";
import { User } from "./User";

export class Admin extends User {
  private readonly managedProducts: Product[] = [];

  constructor(name: string, email: string) {
    super(name, email);
  }

  getRole(): UserType {
    return "Admin";
  }

  getPermissions(): AdminPermission[] {
    return ["manage_products", "manage_orders", "manage_users", "manage_store"];
  }

  public addPhysicalProduct(
    name: string,
    price: number,
    stock: number,
    weight: number,
    dimensions: string
  ): PhysicalProduct {
    const product = new PhysicalProduct(
      name,
      price,
      stock,
      "Physical",
      weight,
      dimensions
    );

    this.managedProducts.push(product);
    return product;
  }

  public addDigitalProduct(
    name: string,
    price: number,
    downloadLink: string,
    fileSize: number
  ): DigitalProduct {
    const product = new DigitalProduct(name, price, downloadLink, fileSize);
    this.managedProducts.push(product);

    return product;
  }

  /**
   * Update price of a managed product
   * @param productId - ID of the product to update
   * @param newPrice - New price to set
   * @returns true if updated successfully, false if product not found
   * @throws Error if price is invalid
   */
  updateProductPrice(productId: number, newPrice: number): boolean {
    if (newPrice <= 0) {
      throw new Error("Price must be positive");
    }

    const product = this.managedProducts.find((product) => product.id);

    if (product) {
      product.price = newPrice;

      return true;
    }

    return false;
  }

  /**
   * Update stock of a managed physical product
   * @param productId - ID of the product to update
   * @param newStock - New stock quantity to set
   * @returns true if updated successfully, false if product not found
   * @throws Error if stock is invalid
   */
  public updateProductStock(productId: number, newStock: number): boolean {
    if (newStock < 0) {
      throw new Error("Stock cannot be negative");
    }
    const product = this.managedProducts.find((p) => p.id === productId);
    if (product && product instanceof PhysicalProduct) {
      product.stock = newStock;
      return true;
    }
    return false;
  }
}
