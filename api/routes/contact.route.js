import express from 'express';
import { addContact, getContact } from '../controllers/contact.controller.js';

const router= express.Router();

router.post("/send-message",addContact);
router.get("/get-message/:service",getContact);

export default router;