import { Router } from 'express';
import { FindAllDataController } from '../../presentation/controller/data';
import { FindAllDataUseCase } from '../../data/useCase/data';
import { adaptRoute } from '../middlewares/adapter/expressRouteAdapter';
import { Controller } from '../../presentation/controller';
import { DataRepository } from '../../infra/db';
import auth from '../middlewares/auth';
const router = Router();

const makeFindAllDataController = (): Controller => {

    const dataRepository = new DataRepository();
    const findAllDataUseCase = new FindAllDataUseCase(dataRepository);
    const findAllDataController = new FindAllDataController(findAllDataUseCase);

    return findAllDataController;
};




router
    .get('/data', auth, adaptRoute(makeFindAllDataController()))

export default router;