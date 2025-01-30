import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { challengesService } from './challenges.service';
import sendResponse from '../../utils/sendResponse';
import { storeFile } from '../../utils/fileHelper';

const createChallenges = catchAsync(async (req: Request, res: Response) => {
  if (req.file) {
    req.body.logo = storeFile('challenges', req?.file?.filename as string);
  }
  const result = await challengesService.createChallenges(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Challenges created successfully',
    data: result,
  });
});

const getAllChallenges = catchAsync(async (req: Request, res: Response) => {
  const result = await challengesService.getAllChallenges(req.query);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'All challenges fetched successfully',
    data: result,
  });
});

const getChallengesById = catchAsync(async (req: Request, res: Response) => {
  const result = await challengesService.getChallengesById(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Challenges fetched successfully',
    data: result,
  });
});
const updateChallenges = catchAsync(async (req: Request, res: Response) => {
  if (req.file) {
    req.body.logo = storeFile('challenges', req?.file?.filename as string);
  }
  const result = await challengesService.updateChallenges(
    req.params.id,
    req.body,
  );
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Challenges updated successfully',
    data: result,
  });
});

const deleteChallenges = catchAsync(async (req: Request, res: Response) => {
  const result = await challengesService.deleteChallenges(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Challenges deleted successfully',
    data: result,
  });
});

export const challengesController = {
  createChallenges,
  getAllChallenges,
  getChallengesById,
  updateChallenges,
  deleteChallenges,
};
