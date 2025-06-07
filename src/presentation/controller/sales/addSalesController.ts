import { Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import { AddSalesUseCase } from '../../../data/useCase/sales'
import { Controller, HttpResponse } from '../protocols/controller.protocols';
import { AddSalesUseCaseParams } from '../../../domain/sales';


export class AddSalesController implements Controller {
  constructor(private addSalesUseCase: AddSalesUseCase) { }

  public async handle(request: Request): Promise<HttpResponse> {

    try {

      const body = request.body as AddSalesUseCaseParams

      const response = await this.addSalesUseCase.perform({ ...body });

      if (response.error) {
        return { statusCode: StatusCodes.BAD_REQUEST, body: response.error };
      }

      return { statusCode: StatusCodes.OK, body: response.data };

    } catch (error) {
      return { statusCode: StatusCodes.INTERNAL_SERVER_ERROR, body: error };
    }
  }

}
