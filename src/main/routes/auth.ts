import { Router } from 'express';
import { AuthController } from '../../presentation/controller';
import { AuthUseCase } from '../../data/useCase';
import { adaptRoute } from '../middlewares/adapter/expressRouteAdapter';
import { Controller } from '../../presentation/controller';
import { AuthRepository } from '../../infra/db/auth';
import { requireCert } from './../middlewares/secure/requiredCert'

const router = Router();

const makeAuthController = (): Controller => {

    const authRepository = new AuthRepository();

    const authUseCase = new AuthUseCase(authRepository);
    const authController = new AuthController(authUseCase);

    return authController;
};



router
    .post('/auth', requireCert, adaptRoute(makeAuthController()))


export default router;