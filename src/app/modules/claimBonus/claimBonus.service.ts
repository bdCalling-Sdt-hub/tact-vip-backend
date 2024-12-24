import httpStatus from 'http-status';
import { IClaimBonus } from './claimBonus.interface';
import ClaimBonus from './claimBonus.models';
import QueryBuilder from '../../builder/QueryBuilder';
import AppError from '../../error/AppError';
import { storeFile } from '../../utils/fileHelper';

const createClaimBonus = async (payload: IClaimBonus, file: any) => {
  if (file) {
    payload.logo = storeFile('logo', file?.filename);
  }

  const result = await ClaimBonus.create(payload);
  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create claimBonus');
  }
  return result;
};

const getAllClaimBonus = async (query: Record<string, any>) => {
  const claimBonusModel = new QueryBuilder(ClaimBonus.find(), query)
    .search([''])
    .filter()
    .paginate()
    .sort()
    .fields();

  const data = await claimBonusModel.modelQuery;
  const meta = await claimBonusModel.countTotal();

  return {
    data,
    meta,
  };
};

const getClaimBonusById = async (id: string) => {
  const result = await ClaimBonus.findById(id);
  if (!result) {
    throw new Error('ClaimBonus not found!');
  }
  return result;
};

const updateClaimBonus = async (
  id: string,
  payload: Partial<IClaimBonus>,
  file: any,
) => {
  if (file) {
    payload.logo = storeFile('logo', file?.filename);
  }
  const result = await ClaimBonus.findByIdAndUpdate(id, payload, { new: true });
  if (!result) {
    throw new Error('Failed to update ClaimBonus');
  }
  return result;
};

const deleteClaimBonus = async (id: string) => {
  const result = await ClaimBonus.findByIdAndDelete(id);
  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Failed to delete claimBonus');
  }
  return result;
};

export const claimBonusService = {
  createClaimBonus,
  getAllClaimBonus,
  getClaimBonusById,
  updateClaimBonus,
  deleteClaimBonus,
};
