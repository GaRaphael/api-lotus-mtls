import { Router } from 'express';
const secureRouter = Router();


import userRouter from './user';
import authRouter from './auth';

secureRouter.use(userRouter);
secureRouter.use(authRouter);


export default secureRouter;