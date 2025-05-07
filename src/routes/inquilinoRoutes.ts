import { Router } from 'express';
import {
  getAllInquilinos,
  getInquilinoById,
  getInquilinoSummaryController,
  createInquilino,
  updateInquilino,
  deleteInquilino
} from '../controllers/inquilinoController';

const router = Router();

router.get('/', getAllInquilinos);
router.get('/:id', getInquilinoById);
router.get('/:id/summary', getInquilinoSummaryController);
router.post('/', createInquilino);
router.put('/:id', updateInquilino);
router.delete('/:id', deleteInquilino);

export default router;