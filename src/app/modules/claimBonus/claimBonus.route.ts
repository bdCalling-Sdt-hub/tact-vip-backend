import { Router } from 'express';
import { claimBonusController } from './claimBonus.controller';
import auth from '../../middleware/auth';
import { USER_ROLE } from '../user/user.constants';
import fileUpload from '../../middleware/fileUpload';
import parseData from '../../middleware/parseData';

const router = Router();
const upload = fileUpload('./public/uploads/logo');

router.post(
  '/',
  auth(USER_ROLE.admin),
  upload.single('logo'),

  parseData(),
  claimBonusController.createClaimBonus,
);
router.patch(
  '/:id',
  auth(USER_ROLE.admin),
  upload.single('logo'),
  parseData(),
  claimBonusController.updateClaimBonus,
);
router.delete(
  '/:id',
  auth(USER_ROLE.admin),
  claimBonusController.deleteClaimBonus,
);
router.get('/:id', claimBonusController.getClaimBonusById);
router.get('/', claimBonusController.getAllClaimBonus);

export const claimBonusRoutes = router;
