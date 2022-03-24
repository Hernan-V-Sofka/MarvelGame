import { Router } from 'express';
import { getCarts } from '../controllers/GameUser'
const router = Router();

router.get('/carts', getCarts)

export default router;
