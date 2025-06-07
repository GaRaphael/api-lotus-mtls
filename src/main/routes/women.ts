import { Router } from 'express';
import {
    AddWomenController,
    DisableWomenController,
    FindAllWomenController,
    FindByIdWomenController,
    PutWomenController
} from '../../presentation/controller';
import {
    AddWomenUseCase,
    DisableWomenUseCase,
    FindAllWomenUseCase,
    PutWomenUseCase,
    FindByIdWomenUseCase
} from '../../data/useCase';
import { adaptRoute } from '../middlewares/adapter/expressRouteAdapter';
import { Controller } from '../../presentation/controller';
import { WomenRepository } from '../../infra/db';
import auth from '../middlewares/auth';

const router = Router();

const makeAddWomenController = (): Controller => {

    const womenRepository = new WomenRepository();

    const addWomenUseCase = new AddWomenUseCase(womenRepository);
    const addWomenController = new AddWomenController(addWomenUseCase);

    return addWomenController;
};


const makeFindAllWomenController = (): Controller => {

    const womenRepository = new WomenRepository();
    const findAllWomenUseCase = new FindAllWomenUseCase(womenRepository);
    const findAllWomenController = new FindAllWomenController(findAllWomenUseCase);

    return findAllWomenController;
};

const makePutWomenController = (): Controller => {
    const womenRepository = new WomenRepository();
    const putWomenUseCase = new PutWomenUseCase(womenRepository);
    const putWomenController = new PutWomenController(putWomenUseCase);

    return putWomenController;
}

const makeDisableWomenController = (): Controller => {
    const womenRepository = new WomenRepository();
    const disableWomenUseCase = new DisableWomenUseCase(womenRepository);
    const disableWomenController = new DisableWomenController(disableWomenUseCase);

    return disableWomenController;
}

const makeFindByIdWomenController = (): Controller => {
    const womenRepository = new WomenRepository();
    const findByIdWomenUseCase = new FindByIdWomenUseCase(womenRepository);
    const findByIdWomenController = new FindByIdWomenController(findByIdWomenUseCase);

    return findByIdWomenController;
}

router
    .post('/women', auth, adaptRoute(makeAddWomenController()))
    .get('/women/all', auth, adaptRoute(makeFindAllWomenController()))
    .get('/women/:id', auth, adaptRoute(makeFindByIdWomenController()))
    .put('/women/:id', auth, adaptRoute(makePutWomenController()))
    .put('/disable/women/:id', auth, adaptRoute(makeDisableWomenController()))


export default router;
