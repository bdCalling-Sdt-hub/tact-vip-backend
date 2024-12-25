
import { Router } from 'express';
import { challengesController } from './challenges.controller';

const router = Router();

router.post('/', challengesController.createChallenges);
router.patch('/:id', challengesController.updateChallenges);
router.delete('/:id', challengesController.deleteChallenges);
router.get('/:id', challengesController.getChallengesById);
router.get('/', challengesController.getAllChallenges);

export const challengesRoutes = router;