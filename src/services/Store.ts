import { Customer } from "../models/Customer";
import { Order } from "../models/Order";
import { Product } from "../models/Product";
import { User } from "../models/User";
import { Admin } from "../models/Admin";

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

  // Methods
  /**
   * Registers a new user
   * @param name - The name of the user
   * @param email - The email of the user
   * @param isAdmin - Whether the user is an admin
   * @returns The new user
   */
  public registerUser(
    name: string,
    email: string,
    isAdmin: boolean = false
  ): User {
    if (!this._isOpen) {
      throw new Error("Store is closed");
    }

    if (!name || name.trim().length === 0) {
      throw new Error("Name cannot be empty");
    }

    if (!email || !this.isValidEmail(email)) {
      throw new Error("Invalid email");
    }

    if (this.users.some((user) => user.email === email)) {
      throw new Error("User already exists");
    }

    if (isAdmin) {
      const newAdmin = new Admin(name, email);
      this.users.push(newAdmin);
      return newAdmin;
    } else {
      const newCustomer = new Customer(name, email);
      this.users.push(newCustomer);
      return newCustomer;
    }
  }

  /**
   * Validates an email address
   * @param email - The email address to validate
   * @returns True if the email address is valid, false otherwise
   */
  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * Adds a product to the store
   * @param product - The product to add
   */
  public addProduct(product: Product): void {
    if (!this._isOpen) {
      throw new Error("Store is closed");
    }

    if (!product) {
      throw new Error("Product is required");
    }

    if (this.products.some((p) => p.id === product.id)) {
      throw new Error("Product already exists");
    }

    this.products.push(product);
  }

  /**
   * Returns a copy of all products
   * @returns A copy of all products
   */
  public getProducts(): Product[] {
    return [...this.products];
  }

  /**
   * Finds a product by its ID
   * @param id - The ID of the product to find
   * @returns The product if found, undefined otherwise
   */
  public findProductById(id: number): Product | undefined {
    // Check if id is a positive integer
    if (!Number.isInteger(id) || id <= 0) {
      throw new Error("Invalid product ID");
    }

    return this.products.find((p) => p.id === id);
  }

  /**
   * Gets user information
   * @param userId - The ID of the user to get information for
   * @returns The user information
   */
  public getUserInfo(userId: number): string {
    const user = this.users.find((user) => user.id === userId);

    if (!user) {
      throw new Error("User not found");
    }

    return `${user.getInfo()} - Permissions: ${user
      .getPermissions()
      .join(", ")}`;
  }
}
