/**
 * Abstract Class for all users types
 * - Cannot be Instantiated directly
 */
abstract class User {
  private static _nextUserId: number;

  constructor(
    protected readonly userId: number,
    protected _name: string,
    protected _email: string
  ) {}

  // Getters
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
}
