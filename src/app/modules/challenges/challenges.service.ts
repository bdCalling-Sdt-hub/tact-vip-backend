import httpStatus from 'http-status';
import { IChallenges } from './challenges.interface';
import Challenges from './challenges.models';
import QueryBuilder from '../../builder/QueryBuilder';
import AppError from '../../error/AppError';

const createChallenges = async (payload: IChallenges) => {
  const result = await Challenges.create(payload);
  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create challenges');
  }
  return result;
};

const getAllChallenges = async (query: Record<string, any>) => {
  const challengesModel = new QueryBuilder(Challenges.find(), query)
    .search(['title'])
    .filter()
    .paginate()
    .sort()
    .fields();

  const data = await challengesModel.modelQuery;
  const meta = await challengesModel.countTotal();

  return {
    data,
    meta,
  };
};

const getChallengesById = async (id: string) => {
  const result = await Challenges.findById(id);
  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Challenges not found!');
  }
  return result;
};

const updateChallenges = async (id: string, payload: Partial<IChallenges>) => {
  const result = await Challenges.findByIdAndUpdate(id, payload, { new: true });
  if (!result) {
    throw new Error('Failed to update Challenges');
  }
  return result;
};

const deleteChallenges = async (id: string) => {
  const result = await Challenges.findByIdAndDelete(id);
  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Failed to delete challenges');
  }
  return result;
};

export const challengesService = {
  createChallenges,
  getAllChallenges,
  getChallengesById,
  updateChallenges,
  deleteChallenges,
};
