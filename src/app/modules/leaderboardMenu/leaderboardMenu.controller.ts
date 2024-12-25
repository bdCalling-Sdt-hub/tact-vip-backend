
import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';  
import { leaderboardMenuService } from './leaderboardMenu.service';
import sendResponse from '../../utils/sendResponse'; 

const createLeaderboardMenu = catchAsync(async (req: Request, res: Response) => {
 const result = await leaderboardMenuService.createLeaderboardMenu(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'LeaderboardMenu created successfully',
    data: result,
  });

});

const getAllLeaderboardMenu = catchAsync(async (req: Request, res: Response) => {

 const result = await leaderboardMenuService.getAllLeaderboardMenu(req.query);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'All leaderboardMenu fetched successfully',
    data: result,
  });

});

const getLeaderboardMenuById = catchAsync(async (req: Request, res: Response) => {
 const result = await leaderboardMenuService.getLeaderboardMenuById(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'LeaderboardMenu fetched successfully',
    data: result,
  });

});
const updateLeaderboardMenu = catchAsync(async (req: Request, res: Response) => {
const result = await leaderboardMenuService.updateLeaderboardMenu(req.params.id, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'LeaderboardMenu updated successfully',
    data: result,
  });

});


const deleteLeaderboardMenu = catchAsync(async (req: Request, res: Response) => {
 const result = await leaderboardMenuService.deleteLeaderboardMenu(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'LeaderboardMenu deleted successfully',
    data: result,
  });

});

export const leaderboardMenuController = {
  createLeaderboardMenu,
  getAllLeaderboardMenu,
  getLeaderboardMenuById,
  updateLeaderboardMenu,
  deleteLeaderboardMenu,
};