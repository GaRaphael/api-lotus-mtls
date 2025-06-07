import { StatusCodes } from 'http-status-codes';
import { FindAllSalesUseCase } from '../../../data/useCase/sales'
import { Controller, HttpResponse } from '../protocols/controller.protocols';


export class FindAllSalesController implements Controller {
  constructor(private findAllSalesUseCase: FindAllSalesUseCase) { }

  public async handle(): Promise<HttpResponse> {

    try {

      const response = await this.findAllSalesUseCase.perform();

      if (response.error) {
        return { statusCode: StatusCodes.BAD_REQUEST, body: response.error };
      }

      return { statusCode: StatusCodes.OK, body: response.data };

    } catch (error) {
      return { statusCode: StatusCodes.INTERNAL_SERVER_ERROR, body: error };
    }
  }

}
