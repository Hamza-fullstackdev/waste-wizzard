import express from 'express';
import { addProduct, getProduct, getProducts } from '../controllers/product.controller.js';

const router= express.Router();

router.post("/add-product",addProduct);
router.get("/get-products/:category",getProducts);
router.get("/get-product-detail/:id",getProduct);

export default router;