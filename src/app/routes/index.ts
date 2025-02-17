import { Router } from 'express';
import { otpRoutes } from '../modules/otp/otp.routes';
import { userRoutes } from '../modules/user/user.route';
import { authRoutes } from '../modules/auth/auth.route';
import { notificationRoutes } from '../modules/notification/notificaiton.route';
import { leaderboardRoutes } from '../modules/leaderboard/leaderboard.route';
import { challengesRoutes } from '../modules/challenges/challenges.route';
import { leaderboardMenuRoutes } from '../modules/leaderboardMenu/leaderboardMenu.route';
import { claimBonusRoutes } from '../modules/claimBonus/claimBonus.route';
import { contentsRoutes } from '../modules/contents/contents.route';

const router = Router();
const moduleRoutes = [
  {
    path: '/users',
    route: userRoutes,
  },
  {
    path: '/contents',
    route: contentsRoutes,
  },
  {
    path: '/auth',
    route: authRoutes,
  },
  {
    path: '/otp',
    route: otpRoutes,
  },
  {
    path: '/notifications',
    route: notificationRoutes,
  },
  {
    path: '/leaderboard',
    route: leaderboardRoutes,
  },
  {
    path: '/leaderboard-menus',
    route: leaderboardMenuRoutes,
  },
  {
    path: '/challenges',
    route: challengesRoutes,
  },
  {
    path: '/claim-bonus',
    route: claimBonusRoutes,
  },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
