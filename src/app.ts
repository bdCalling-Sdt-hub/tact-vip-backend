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
    console.log(error)
  } 
});


app.get('/', (req: Request, res: Response) => {
  res.send('server is running');
});

//Not Found
app.use(notFound);

export default app;
