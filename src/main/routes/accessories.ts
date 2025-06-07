import { Router } from 'express';
import {
    AddAccessoriesController,
    FindAllAccessoriesController,
    PutAccessoriesController,
    DisableAccessoriesController,
    FindByIdAccessoriesController,
} from '../../presentation/controller';
import {
    AddAccessoriesUseCase,
    FindAllAccessoriesUseCase,
    PutAccessoriesUseCase,
    DisableAccessoriesUseCase,
    FindByIdAccessoriesUseCase
} from '../../data/useCase';
import { adaptRoute } from '../middlewares/adapter/expressRouteAdapter';
import { Controller } from '../../presentation/controller';
import { AccessoriesRepository } from '../../infra/db';
import auth from '../middlewares/auth';

const router = Router();

const makeAddAccessoriesController = (): Controller => {

    const accessoriesRepository = new AccessoriesRepository();
    const addAccessoriesUseCase = new AddAccessoriesUseCase(accessoriesRepository);
    const addAccessoriesController = new AddAccessoriesController(addAccessoriesUseCase);

    return addAccessoriesController;
};


const makeFindAllAccessoriesController = (): Controller => {

    const accessoriesRepository = new AccessoriesRepository();
    const findAllAccessoriesUseCase = new FindAllAccessoriesUseCase(accessoriesRepository);
    const findAllAccessoriesController = new FindAllAccessoriesController(findAllAccessoriesUseCase);

    return findAllAccessoriesController;
};

const makePutAccessoriesController = (): Controller => {
    const accessoriesRepository = new AccessoriesRepository();
    const putAccessoriesUseCase = new PutAccessoriesUseCase(accessoriesRepository);
    const putAccessoriesController = new PutAccessoriesController(putAccessoriesUseCase);

    return putAccessoriesController;
}

const makeDisableAccessoriesController = (): Controller => {
    const accessoriesRepository = new AccessoriesRepository();
    const disableAccessoriesUseCase = new DisableAccessoriesUseCase(accessoriesRepository);
    const disableAccessoriesController = new DisableAccessoriesController(disableAccessoriesUseCase);

    return disableAccessoriesController;
}

const makeFindByIdAccessoriesController = (): Controller => {
    const accessoriesRepository = new AccessoriesRepository();
    const findByIdAccessoriesUseCase = new FindByIdAccessoriesUseCase(accessoriesRepository);
    const findByIdAccessoriesController = new FindByIdAccessoriesController(findByIdAccessoriesUseCase);

    return findByIdAccessoriesController;
}


router
    .post('/accessories', auth, adaptRoute(makeAddAccessoriesController()))
    .get('/accessories/all', auth, adaptRoute(makeFindAllAccessoriesController()))
    .get('/accessories/:id', auth, adaptRoute(makeFindByIdAccessoriesController()))
    .put('/accessories/:id', auth, adaptRoute(makePutAccessoriesController()))
    .put('/disable/accessories/:id', auth, adaptRoute(makeDisableAccessoriesController()))


export default router;
