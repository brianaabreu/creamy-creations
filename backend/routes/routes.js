import {createContact} from '../controllers/contact.js';
import { order } from '../controllers/order.js';
import express from 'express'
const router = express.Router();

router.post('/', createContact);
router.post('/', order)

export default router;