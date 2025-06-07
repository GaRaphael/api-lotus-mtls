import { Router } from 'express';
import { AddSalesController, FindAllSalesController } from '../../presentation/controller';
import { AddSalesUseCase, FindAllSalesUseCase } from '../../data/useCase/sales';
import { adaptRoute } from '../middlewares/adapter/expressRouteAdapter';
import { Controller } from '../../presentation/controller';
import { SalesRepository } from '../../infra/db';
import auth from '../middlewares/auth';

const router = Router();

const makeAddSalesController = (): Controller => {

    const salesRepository = new SalesRepository();
    const addSalesUseCase = new AddSalesUseCase(salesRepository);
    const addSalesController = new AddSalesController(addSalesUseCase);

    return addSalesController;
};

const makeFindAllSalesController = (): Controller => {

    const salesRepository = new SalesRepository();
    const findAllSalesUseCase = new FindAllSalesUseCase(salesRepository);
    const findAllSalesController = new FindAllSalesController(findAllSalesUseCase);

    return findAllSalesController;
};




router
    .post('/sales',auth,  adaptRoute(makeAddSalesController()))
    .get('/sales', auth, adaptRoute(makeFindAllSalesController()))

export default router;