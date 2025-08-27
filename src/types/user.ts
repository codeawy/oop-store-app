export type UserType = "Customer" | "Admin";

export type CustomerPermission =
  | "browse_products"
  | "add_to_cart"
  | "place_order"
  | "view_orders";
