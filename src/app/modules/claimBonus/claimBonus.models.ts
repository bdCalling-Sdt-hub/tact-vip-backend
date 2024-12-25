
import { model, Schema } from 'mongoose';
import { IClaimBonus, IClaimBonusModules } from './claimBonus.interface';

const claimBonusSchema = new Schema<IClaimBonus>(
  {
    logo: {
      type: String,
      required: true,
      trim: true,
    },

    mainBonus: {
      type: String,
      required: true,
    },
    extraBonus: {
      type: String,
      required: true,
    },
    hyperLink: {
      type: String,
      required: true,
    },
    
  },
  {
    timestamps: true,
  },
);

 

const ClaimBonus = model<IClaimBonus, IClaimBonusModules>(
  'ClaimBonus',
  claimBonusSchema
);
export default ClaimBonus;