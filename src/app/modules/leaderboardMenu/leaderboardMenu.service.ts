import httpStatus from 'http-status';
import { ILeaderboardMenu } from './leaderboardMenu.interface';
import LeaderboardMenu from './leaderboardMenu.models';
import QueryBuilder from '../../builder/QueryBuilder';
import AppError from '../../error/AppError';

const createLeaderboardMenu = async (payload: ILeaderboardMenu) => {
  const result = await LeaderboardMenu.create(payload);
  if (!result) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      'Failed to create leaderboard menu',
    );
  }
  return result;
};

const getAllLeaderboardMenu = async (query: Record<string, any>) => {
  const leaderboardMenuModel = new QueryBuilder(LeaderboardMenu.find(), query)
    .search(["title"])
    .filter()
    .paginate()
    .sort()
    .fields();

  const data = await leaderboardMenuModel.modelQuery;
  const meta = await leaderboardMenuModel.countTotal();

  return {
    data,
    meta,
  };
};

const getLeaderboardMenuById = async (id: string) => {
  const result = await LeaderboardMenu.findById(id);
  if (!result) {
    throw new Error('Leaderboard menu not found!');
  }
  return result;
};

const updateLeaderboardMenu = async (
  id: string,
  payload: Partial<ILeaderboardMenu>,
) => {
  const result = await LeaderboardMenu.findByIdAndUpdate(id, payload, {
    new: true,
  });
  if (!result) {
    throw new Error('Failed to update Leaderboard menu');
  }
  return result;
};

const deleteLeaderboardMenu = async (id: string) => {
  const result = await LeaderboardMenu.findByIdAndDelete(id);
  if (!result) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      'Failed to delete leaderboard menu',
    );
  }
  return result;
};

export const leaderboardMenuService = {
  createLeaderboardMenu,
  getAllLeaderboardMenu,
  getLeaderboardMenuById,
  updateLeaderboardMenu,
  deleteLeaderboardMenu,
};
