import { model, Schema } from 'mongoose';
import {
  ILeaderboardMenu,
  ILeaderboardMenuModules,
} from './leaderboardMenu.interface';

const leaderboardMenuSchema = new Schema<ILeaderboardMenu>(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      unique: true,
    },
    totalPrice: {
      type: Number,
      required: [true, 'Total price is required'],
    },
  },
  {
    timestamps: true,
  },
);

 
const LeaderboardMenu = model<ILeaderboardMenu, ILeaderboardMenuModules>(
  'LeaderboardMenu',
  leaderboardMenuSchema,
);
export default LeaderboardMenu;
