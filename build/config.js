"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB_PORT = exports.DB_NAME = exports.DB_PASSWORD = exports.DB_USER = exports.DB_HOST = exports.PORT = void 0;
exports.PORT = process.env.PORT || 3000;
exports.DB_HOST = process.env.DB_HOST || "localhost";
exports.DB_USER = process.env.DB_DB_USER || "root";
exports.DB_PASSWORD = process.env.DB_PASSWORD || "danielvelasco1234";
exports.DB_NAME = process.env.DB_NAME || "ecommercedb";
exports.DB_PORT = process.env.DB_PORT || 3306;
