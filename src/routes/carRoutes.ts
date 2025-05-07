import { Router } from 'express';
import { getAllCars, getCarById, getCarSummaryController } from '../controllers/carController';

const router = Router();

// Ruta para obtener todos los autos
router.get('/', getAllCars);

// Ruta para obtener un auto por su ID
router.get('/:id', getCarById);

// Ruta para obtener un resumen de un auto por su ID
router.get('/summary/:id', getCarSummaryController);

export default router;
