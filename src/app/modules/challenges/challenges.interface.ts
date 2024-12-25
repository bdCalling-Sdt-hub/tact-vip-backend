
import { Model } from 'mongoose';

export interface IChallenges {
    logo:string
    title: string
    rocket:string
    durations:number
    rocketTip:string
    hyperlink:string
}

export type IChallengesModules = Model<IChallenges, Record<string, unknown>>;