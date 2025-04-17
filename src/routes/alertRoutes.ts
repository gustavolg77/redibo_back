import { Router } from 'express';
import { getAllAlerts, getAlertById, deleteAlert } from '../controllers/alertController';

const router = Router();

router.get('/', getAllAlerts);
router.get('/:id', getAlertById);
router.delete('/:id', deleteAlert);

export default router;
