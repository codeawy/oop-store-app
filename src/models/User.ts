import { AdminPermission } from "../types/admin";
import { CustomerPermission, UserType } from "../types/user";

/**
 * Abstract Class for all users types
 * - Cannot be Instantiated directly
 */
export abstract class User {
  protected readonly userId: number;
  private static _nextUserId: number;

  constructor(protected _name: string, protected _email: string) {
    this.userId = User._nextUserId++;
  }

  // Methods
  abstract getRole(): UserType;
  abstract getPermissions(): CustomerPermission[] | AdminPermission[];

  // Concrete method - shared by all subclasses
  public getInfo(): string {
    return `${this._name} (${this._email}) - Role: ${this.getRole()}`;
  }

  // Getters
  get id(): number {
    return this.userId;
  }

  get name(): string {
    return this._name;
  }

  get email(): string {
    return this._email;
  }

  // Setters
  set name(newName: string) {
    // Validation
    if (!newName || newName.trim().length === 0) {
      throw new Error("Name cannot be empty");
    }

    if (newName.trim().length < 2) {
      throw new Error("Name must be at least 2 characters long!");
    }

    this._name = newName.trim();
  }

  set email(newEmail: string) {
    if (!newEmail || !this.isValidEmail(newEmail)) {
      throw new Error("Invalid Email Address!");
    }

    this._email = newEmail.toLowerCase();
  }

  /**
   * Private helper method to validate email format
   */
  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
