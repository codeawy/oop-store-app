import { AdminPermission } from "../types/admin";
import { UserType } from "../types/user";
import { User } from "./User";

export class Admin extends User {
  constructor(name: string, email: string) {
    super(name, email);
  }

  getRole(): UserType {
    return "Admin";
  }

  getPermissions(): AdminPermission[] {
    return ["manage_products", "manage_orders", "manage_users", "manage_store"];
  }
}
