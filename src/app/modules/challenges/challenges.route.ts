import { Router } from 'express';
import { challengesController } from './challenges.controller';
import fileUpload from '../../middleware/fileUpload';
import parseData from '../../middleware/parseData';
import auth from '../../middleware/auth';
import { USER_ROLE } from '../user/user.constants';
const upload = fileUpload('./public/uploads/challenges');

const router = Router();

router.post(
  '/',
  auth(USER_ROLE.admin),
  upload.single('logo'),
  parseData(),
  challengesController.createChallenges,
);
router.patch(
  '/:id',
  auth(USER_ROLE.admin),
  upload.single('logo'),
  parseData(),
  challengesController.updateChallenges,
);
router.delete(
  '/:id',
  auth(USER_ROLE.admin),
  challengesController.deleteChallenges,
);
router.get('/:id', challengesController.getChallengesById);
router.get('/', challengesController.getAllChallenges);

export const challengesRoutes = router;
