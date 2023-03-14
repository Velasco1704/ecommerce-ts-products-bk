import { Router } from 'express';
import { getProduct, getProducts } from '../controllers/products.controller';

const router = Router();

router.get('/api/products', getProducts);
router.get('/api/products/:id', getProduct);

export default router;