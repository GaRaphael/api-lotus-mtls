import { Router } from 'express';
import {
    AddPantController,
    DisablePantController,
    FindAllPantController,
    PutPantController,
    FindByIdPantsController
} from '../../presentation/controller';
import {
    AddPantUseCase,
    FindAllPantUseCase,
    PutPantUseCase,
    DisablePantsUseCase,
    FindByIdPantsUseCase
} from '../../data/useCase';
import { adaptRoute } from '../middlewares/adapter/expressRouteAdapter';
import { Controller } from '../../presentation/controller';
import { PantRepository } from '../../infra/db';
import auth from '../middlewares/auth';

const router = Router();

const makeAddPantController = (): Controller => {

    const pantRepository = new PantRepository();

    const addPantUseCase = new AddPantUseCase(pantRepository);
    const addPantController = new AddPantController(addPantUseCase);

    return addPantController;
};


const makeFindAllPantController = (): Controller => {

    const pantRepository = new PantRepository();
    const findAllPantUseCase = new FindAllPantUseCase(pantRepository);
    const findAllPantController = new FindAllPantController(findAllPantUseCase);

    return findAllPantController;
};

const makePutPantController = (): Controller => {
    const pantRepository = new PantRepository();
    const putPantUseCase = new PutPantUseCase(pantRepository);
    const putPantController = new PutPantController(putPantUseCase);

    return putPantController;
}

const makeDisablePantController = (): Controller => {
    const pantRepository = new PantRepository();
    const disablePantUseCase = new DisablePantsUseCase(pantRepository);
    const disablePantController = new DisablePantController(disablePantUseCase);

    return disablePantController;
}

const makeFindByIdPantController = (): Controller => {
    const pantRepository = new PantRepository();
    const findByIdPantUseCase = new FindByIdPantsUseCase(pantRepository);
    const findByIdPantController = new FindByIdPantsController(findByIdPantUseCase);

    return findByIdPantController;
}

router
    .post('/pant', auth, adaptRoute(makeAddPantController()))
    .get('/pant/all', auth, adaptRoute(makeFindAllPantController()))
    .get('/pant/:id', auth, adaptRoute(makeFindByIdPantController()))
    .put('/pant/:id', auth, adaptRoute(makePutPantController()))
    .put('/disable/pant/:id', auth, adaptRoute(makeDisablePantController()))


export default router;
