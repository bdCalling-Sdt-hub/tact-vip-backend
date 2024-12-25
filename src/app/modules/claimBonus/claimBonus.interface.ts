import { Model } from 'mongoose';

export interface IClaimBonus {
  logo: string;
  mainBonus: string;
  extraBonus: string;
  hyperLink: string;
}

export type IClaimBonusModules = Model<IClaimBonus, Record<string, unknown>>;
