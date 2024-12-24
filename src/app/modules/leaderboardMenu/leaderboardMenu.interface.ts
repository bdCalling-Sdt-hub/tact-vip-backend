
import { Model } from 'mongoose';

export interface ILeaderboardMenu {
    title: string
    totalPrice: number
}

export type ILeaderboardMenuModules = Model<ILeaderboardMenu, Record<string, unknown>>;