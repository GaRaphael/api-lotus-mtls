import { Router } from 'express';
import {
    AddSuitController,
    DisableSuitController,
    FindAllSuitController,
    PutSuitController,
    FindByIdSuitController
} from '../../presentation/controller/suit';
import {
    AddSuitUseCase,
    FindAllSuitUseCase,
    PutSuitUseCase,
    DisableSuitsUseCase,
    FindByIdSuitsUseCase
} from '../../data/useCase/suits';
import { adaptRoute } from '../middlewares/adapter/expressRouteAdapter';
import { Controller } from '../../presentation/controller';
import { SuitRepository } from '../../infra/db';
import auth from '../middlewares/auth';

const router = Router();

const makeAddSuitController = (): Controller => {

    const suitRepository = new SuitRepository();

    const addSuitUseCase = new AddSuitUseCase(suitRepository);
    const addSuitController = new AddSuitController(addSuitUseCase);

    return addSuitController;
};


const makeFindAllSuitController = (): Controller => {

    const suitRepository = new SuitRepository();
    const findAllSuitUseCase = new FindAllSuitUseCase(suitRepository);
    const findAllSuitController = new FindAllSuitController(findAllSuitUseCase);

    return findAllSuitController;
};

const makePutSuitController = (): Controller => {
    const suitRepository = new SuitRepository();
    const putSuitUseCase = new PutSuitUseCase(suitRepository);
    const putSuitController = new PutSuitController(putSuitUseCase);

    return putSuitController;
}

const makeDisableSuitController = (): Controller => {
    const suitRepository = new SuitRepository();
    const disableSuitUseCase = new DisableSuitsUseCase(suitRepository);
    const disableSuitController = new DisableSuitController(disableSuitUseCase);

    return disableSuitController;
}

const makeFindByIdSuitController = (): Controller => {
    const suitRepository = new SuitRepository();
    const findByIdSuitUseCase = new FindByIdSuitsUseCase(suitRepository);
    const findByIdSuitController = new FindByIdSuitController(findByIdSuitUseCase);

    return findByIdSuitController;
}

router
    .post('/suit', auth, adaptRoute(makeAddSuitController()))
    .get('/suit/all', auth, adaptRoute(makeFindAllSuitController()))
    .get('/suit/:id', auth, adaptRoute(makeFindByIdSuitController()))
    .put('/suit/:id',auth,  adaptRoute(makePutSuitController()))
    .put('/disable/suit/:id',auth,  adaptRoute(makeDisableSuitController()))


export default router;
