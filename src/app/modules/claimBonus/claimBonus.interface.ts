import { Model } from 'mongoose';

export interface IClaimBonus {
  logo: string;
  title: string;
  mainBonus: string;
  extraBonus: string;
  redirectUrl: string;
  howToClaimText: string;
}

export type IClaimBonusModules = Model<IClaimBonus, Record<string, unknown>>;
