import { Router } from 'express';
import { HttpAuthController } from '../../presentation/controller/auth/httpAuthController';
import { HttpAuthUseCase } from '../../data/useCase/auth/httpAuthUseCase';
import { adaptRoute } from '../middlewares/adapter/expressRouteAdapter';
import { Controller } from '../../presentation/controller';

const router = Router();

const makeHttpAuthController = (): Controller => {

    const httpAuthUseCase = new HttpAuthUseCase();
    const httpAuthController = new HttpAuthController(httpAuthUseCase);

    return httpAuthController;
};



router
    .post('/auth', adaptRoute(makeHttpAuthController()))

export default router;