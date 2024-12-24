import { Router } from 'express';
import { claimBonusController } from './claimBonus.controller';
import auth from '../../middleware/auth';
import { USER_ROLE } from '../user/user.constants';
import fileUpload from '../../middleware/fileUpload';

const router = Router();
const upload = fileUpload('./public/uploads/logo');

router.post(
  '/',
  auth(USER_ROLE.admin),
  upload.single('logo'),
  claimBonusController.createClaimBonus,
);
router.patch(
  '/:id',
  upload.single('logo'),
  claimBonusController.updateClaimBonus,
);
router.delete('/:id', claimBonusController.deleteClaimBonus);
router.get('/:id', claimBonusController.getClaimBonusById);
router.get('/', claimBonusController.getAllClaimBonus);

export const claimBonusRoutes = router;
