import { Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import { AddSuitUseCase } from '../../../data/useCase/suits'
import { Controller, HttpResponse } from '../protocols/controller.protocols';
import { AddSuitUseCaseParams } from '../../../domain/suit';


export class AddSuitController implements Controller {
  constructor(private addSuitUseCase: AddSuitUseCase) { }

  public async handle(request: Request): Promise<HttpResponse> {

    try {

      const body = request.body as AddSuitUseCaseParams;

      const response = await this.addSuitUseCase.perform({ ...body });

      if (response.error) {
        return { statusCode: StatusCodes.BAD_REQUEST, body: response.error };
      }

      return { statusCode: StatusCodes.OK, body: response.data };

    } catch (error) {
      return { statusCode: StatusCodes.INTERNAL_SERVER_ERROR, body: error };
    }
  }

}
