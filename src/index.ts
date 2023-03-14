import express from "express";
import cors from "cors";
import productsRoutes from "./routes/product.routes";
import { PORT } from "./config";

const app = express();
app.use(express.json());
app.use(cors());

app.use(productsRoutes);

app.listen(PORT);
