/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import notFound from './app/middleware/notfound';
import router from './app/routes';
import lodash from 'lodash';
import { io } from './server';
import globalErrorHandler from './app/middleware/globalErrorhandler';
import axios from 'axios';
import AppError from './app/error/AppError';
import httpStatus from 'http-status';
import catchAsync from './app/utils/catchAsync';

const app: Application = express();
app.use(express.static('public'));
app.use(express.json({ limit: '500mb' }));
app.use(express.urlencoded({ limit: '500mb', extended: true }));

//parsers
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  }),
);

app.use('/api/v1', router);

app.post('/webhook', async (req, res) => {
  try {
    let debounce_fun = lodash.debounce(function () {
      if (io) {
        io.emit('data-change', { status: true, change: true });
      }
    }, 5000);

    debounce_fun();
  } catch (error) {
    console.log(error);
  }
});

app.get(
  '/api/v1/youtube-data',

  catchAsync(async (req, res) => {
    const { playlist, ...queries } = req.query;
    if (!playlist) {
      throw new AppError(httpStatus.BAD_REQUEST, 'playlist id is required');
    }
    try {
      const response = await axios.get(
        'https://www.googleapis.com/youtube/v3/playlistItems',
        {
          params: {
            ...queries,
            part: 'snippet',
            playlistId: playlist,
            key: 'AIzaSyAinhUvJieH3RdLZARQeMcf3P4oBrIGwbY',
          },
        },
      );

      res.json(response.data.items);
    } catch (error: any) {
      console.log(error);
    }
  }),
);
app.get('/', (req: Request, res: Response) => {
  res.send('server is running');
});

//Not Found
app.use(notFound);
app.use(globalErrorHandler);

export default app;
