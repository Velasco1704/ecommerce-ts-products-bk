import { Request, Response } from "express";
import { pool } from "../db";

export const getProducts = async (req: Request, res: Response) => {
  try {
    const [result] = await pool.query("SELECT * FROM products");
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
export const getProduct = async (req: Request, res: Response) => {
  try {
    const [result] = await pool.query("SELECT * FROM products WHERE id = ?", [
      req.params.id,
    ]);
    res.json(result)
  } catch (error) {
    return res.status(404).json({ message: "Product not found" });
  }
};
