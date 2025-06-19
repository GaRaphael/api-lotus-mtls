import { Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import { HttpAuthUseCase } from '../../../data/useCase/auth/httpAuthUseCase'
import { Controller, HttpResponse } from '../protocols/controller.protocols';

export class HttpAuthController implements Controller {
  constructor(private httpauthUseCase: HttpAuthUseCase) { }

  public async handle(request: Request): Promise<HttpResponse> {

    try {

      const email = String(request.body.email)
      const password = String(request.body.password)

      const response = await this.httpauthUseCase.perform({ email, password });

      if (response.error) {
        return { statusCode: StatusCodes.BAD_REQUEST, body: response.error };
      }

      return { statusCode: StatusCodes.OK, body: response };

    } catch (error) {
      return { statusCode: StatusCodes.INTERNAL_SERVER_ERROR, body: error };
    }
  }
}

