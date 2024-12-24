
import { model, Schema } from 'mongoose';
import { ILeaderboard, ILeaderboardModules } from './leaderboard.interface';

const leaderboardSchema = new Schema<ILeaderboard>(
  {
    isDeleted: { type: 'boolean', default: false },
  },
  {
    timestamps: true,
  }
);

//leaderboardSchema.pre('find', function (next) {
//  //@ts-ignore
//  this.find({ isDeleted: { $ne: true } });
//  next();
//});

//leaderboardSchema.pre('findOne', function (next) {
  //@ts-ignore
  //this.find({ isDeleted: { $ne: true } });
 // next();
//});

leaderboardSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

const Leaderboard = model<ILeaderboard, ILeaderboardModules>(
  'Leaderboard',
  leaderboardSchema
);
export default Leaderboard;