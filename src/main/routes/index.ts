import { Router } from 'express';
const router = Router();

import suitRouter from './suit';
import pantRouter from './pant';
import womenRouter from './women';
import accessoriesRouter from './accessories';
import salesRouter from './sales';
import dataRouter from './data';
import userRouter from './user';
import httpAuthRouter from './httpAuth';


router.get('/healthCheck', (__, res) => {
  res.status(200).send({
    message: 'OK',
    uptime: process.uptime()
  });
});


router.use(suitRouter);
router.use(pantRouter);
router.use(womenRouter);
router.use(accessoriesRouter);
router.use(salesRouter);
router.use(dataRouter);
router.use(userRouter);
router.use(httpAuthRouter);

export default router;
