
import { Router } from 'express';
import { leaderboardMenuController } from './leaderboardMenu.controller';

const router = Router();

router.post('/', leaderboardMenuController.createLeaderboardMenu);
router.patch('/:id', leaderboardMenuController.updateLeaderboardMenu);
router.delete('/:id', leaderboardMenuController.deleteLeaderboardMenu);
router.get('/:id', leaderboardMenuController.getLeaderboardMenuById);
router.get('/', leaderboardMenuController.getAllLeaderboardMenu);

export const leaderboardMenuRoutes = router;