import { Router } from 'express';
import { needSignin } from '../middlewares/need-signin.middleware.js';
import { UsersController } from '../controller/users.controller.js'


const usersRouter = Router();

const usersController = new UsersController();

usersRouter.get('/me', needSignin,usersController.readMyInfo)
 

export { usersRouter };