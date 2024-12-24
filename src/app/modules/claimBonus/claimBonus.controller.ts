import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { claimBonusService } from './claimBonus.service';
import sendResponse from '../../utils/sendResponse';

const createClaimBonus = catchAsync(async (req: Request, res: Response) => {
  const result = await claimBonusService.createClaimBonus(req.body, req.file);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'ClaimBonus created successfully',
    data: result,
  });
});

const getAllClaimBonus = catchAsync(async (req: Request, res: Response) => {
  const result = await claimBonusService.getAllClaimBonus(req.query);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'All claimBonus fetched successfully',
    data: result,
  });
});

const getClaimBonusById = catchAsync(async (req: Request, res: Response) => {
  const result = await claimBonusService.getClaimBonusById(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'ClaimBonus fetched successfully',
    data: result,
  });
});

const updateClaimBonus = catchAsync(async (req: Request, res: Response) => {
  const result = await claimBonusService.updateClaimBonus(
    req.params.id,
    req.body,
    req.file,
  );
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'ClaimBonus updated successfully',
    data: result,
  });
});

const deleteClaimBonus = catchAsync(async (req: Request, res: Response) => {
  const result = await claimBonusService.deleteClaimBonus(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'ClaimBonus deleted successfully',
    data: result,
  });
});

export const claimBonusController = {
  createClaimBonus,
  getAllClaimBonus,
  getClaimBonusById,
  updateClaimBonus,
  deleteClaimBonus,
};
