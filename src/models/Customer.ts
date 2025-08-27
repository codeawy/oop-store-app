import { CustomerPermission, UserType } from "../types/user";
import { User } from "./User";

/**
 * Customer class extends abstract User
 * - Implement abstract methods with customer-specific behavior
 */
export class Customer extends User {
  getRole(): UserType {
    return "Customer";
  }

  getPermissions(): CustomerPermission[] {
    return ["browse_products", "add_to_cart", "place_order", "view_orders"];
  }
}
