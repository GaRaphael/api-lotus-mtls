import { Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import { AuthUseCase } from '../../../data/useCase/'
import { Controller, HttpResponse } from '../protocols/controller.protocols';

export class AuthController implements Controller {
  constructor(private authUseCase: AuthUseCase) { }

  public async handle(request: Request): Promise<HttpResponse> {

    try {

      const email = String(request.body.email)
      const password = String(request.body.password)

      const response = await this.authUseCase.perform({ email, password });

      if (response.error) {
        return { statusCode: StatusCodes.BAD_REQUEST, body: response.error };
      }

      return { statusCode: StatusCodes.OK, body: response };

    } catch (error) {
      return { statusCode: StatusCodes.INTERNAL_SERVER_ERROR, body: error };
    }
  }
}

