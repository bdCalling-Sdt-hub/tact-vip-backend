
import { Router } from 'express';
import { leaderboardController } from './leaderboard.controller';

const router = Router();

// router.post('/', leaderboardController.createLeaderboard);
// router.patch('/:id', leaderboardController.updateLeaderboard);
// router.delete('/:id', leaderboardController.deleteLeaderboard);
router.get('/wager-current', leaderboardController.getWagerCurrent);
router.get('/wager-past', leaderboardController.getWagerPast);

export const leaderboardRoutes = router;