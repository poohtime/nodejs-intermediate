import express from 'express';
import { SERVER_PORT } from './constants/app.constant.js';
import { apiRouter } from './routers/index.js';
import productsRouter from './routers/products.router.js';
import userRouter from './routers/users.router.js';
import errorHandling from './middlewares/error.middleware.js';
import cookieParser from 'cookie-parser';

import dotenv from 'dotenv'; // .env 패키지를 사용하기 위해 불러오고 실행함
dotenv.config();


const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api', [apiRouter,userRouter, productsRouter]);
app.use(errorHandling);
app.listen(SERVER_PORT, () => {
  console.log(`App listening on port ${SERVER_PORT}`);
});
