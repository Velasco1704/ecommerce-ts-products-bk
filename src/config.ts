export const PORT = process.env.PORT || 3000;

export const DB_HOST = <string>process.env.DB_HOST || "localhost";
export const DB_USER = <string>process.env.DB_DB_USER || "root";
export const DB_PASSWORD =
  <string>process.env.DB_PASSWORD || "danielvelasco1234";
export const DB_NAME = <string>process.env.DB_NAME || "ecommercedb";
export const DB_PORT = <number>(<unknown>process.env.DB_PORT) || 3306;
