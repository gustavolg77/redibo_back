import { Router } from 'express';
import { validateWhatsapp } from '../controllers/whatsappController';

const router = Router();

router.post('/validate-whatsapp', validateWhatsapp);

export default router;