import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { leaderboardService } from './leaderboard.service';
import sendResponse from '../../utils/sendResponse';
import { storeFile } from '../../utils/fileHelper';
import { uploadToS3 } from '../../utils/s3';

const getWagerPast = catchAsync(async (req: Request, res: Response) => {
  const result = await leaderboardService.getWagerPast();
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'wager current month data successfully',
    data: result,
  });
});

const getWagerCurrent = catchAsync(async (req: Request, res: Response) => {
  const result = await leaderboardService.getWagerCurrent();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'wager current month data fetched successfully',
    data: result,
  });
});

// const getLeaderboardById = catchAsync(async (req: Request, res: Response) => {
//  const result = await leaderboardService.getLeaderboardById(req.params.id);
//   sendResponse(res, {
//     statusCode: 200,
//     success: true,
//     message: 'Leaderboard fetched successfully',
//     data: result,
//   });

// });
// const updateLeaderboard = catchAsync(async (req: Request, res: Response) => {
// const result = await leaderboardService.updateLeaderboard(req.params.id, req.body);
//   sendResponse(res, {
//     statusCode: 200,
//     success: true,
//     message: 'Leaderboard updated successfully',
//     data: result,
//   });

// });

// const deleteLeaderboard = catchAsync(async (req: Request, res: Response) => {
//  const result = await leaderboardService.deleteLeaderboard(req.params.id);
//   sendResponse(res, {
//     statusCode: 200,
//     success: true,
//     message: 'Leaderboard deleted successfully',
//     data: result,
//   });

// });

export const leaderboardController = {
  getWagerPast,
  getWagerCurrent,
};
