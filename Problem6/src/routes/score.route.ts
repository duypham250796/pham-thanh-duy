import express, { Router } from 'express';
import { updateScore, getTopScores } from '../controllers/score.controller';

const router:Router = express.Router();

router.post('/update', updateScore);
router.get('/top', getTopScores);

export default router;
