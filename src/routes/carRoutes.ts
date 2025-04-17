import { Router } from 'express';
import { getAllCars, getCarById } from '../controllers/carController';

const router = Router();

router.get('/', getAllCars);
router.get('/:id', getCarById);

export default router;
