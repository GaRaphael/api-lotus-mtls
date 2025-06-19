import { Router } from 'express';
const secureRouter = Router();

import authRouter from './auth';


secureRouter.use(authRouter);


export default secureRouter;