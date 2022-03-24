import { Router } from 'express';
import { getCarts, validateValueCart } from '../controllers/GameUser'
const router = Router();

router.get('/carts', getCarts)
router.post('/validate', validateValueCart)

export default router;
