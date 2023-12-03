import express from 'express'
import {addToCart, deleteProduct, getCartData} from '../controllers/cart.controller.js'
const router=express.Router();

router.post('/add-to-cart',addToCart)
router.get('/get-cart-product/:id',getCartData);
router.delete('/delete-product/:id',deleteProduct);

export default router;