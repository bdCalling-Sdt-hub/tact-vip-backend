
import { model, Schema } from 'mongoose';
import { IChallenges, IChallengesModules } from './challenges.interface';

const challengesSchema = new Schema<IChallenges>(
  {
    logo: {
      type: String,
      required: true, 
    },
    title: {
      type: String,
      required: true, 
    },
    rocket: {
      type: String,
      required: true, 
    },
    durations: {
      type: Number, 
    },
    rocketTip: {
      type: String,
      required: true, 
    },
    hyperlink: {
      type: String,
      required: true, 
    },
  },
  {
    timestamps: true,
  },
);

 

const Challenges = model<IChallenges, IChallengesModules>(
  'Challenges',
  challengesSchema
);
export default Challenges;