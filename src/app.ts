/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './app/middleware/globalErrorhandler';
import notFound from './app/middleware/notfound';
import router from './app/routes';
import catchAsync from './app/utils/catchAsync';
import { google } from 'googleapis';
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
let count = 0;
app.post('/webhook', async (req, res) => {
  count++;
  console.log('NOtification: ' + count);
});
app.get('/', (req: Request, res: Response) => {
  res.send('server is running');
});

app.use(globalErrorHandler);

//Not Found
app.use(notFound);

export default app;
