import { Router } from 'express';
const router = Router();

import suitRouter from './suit';
import pantRouter from './pant';
import womenRouter from './women';
import accessoriesRouter from './accessories';
import salesRouter from './sales';
import dataRouter from './data';

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

export default router;
