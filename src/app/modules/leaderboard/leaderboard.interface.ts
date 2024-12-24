
import { Model } from 'mongoose';

export interface ILeaderboard {}

export type ILeaderboardModules = Model<ILeaderboard, Record<string, unknown>>;