import { Router } from 'express';
import { getRatings } from '../controllers/ratingController'; 

const router = Router();

router.get('/', getRatings); 

export default router;