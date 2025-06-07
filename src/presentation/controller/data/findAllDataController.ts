import {  StatusCodes } from 'http-status-codes';
import { FindAllDataUseCase }  from '../../../data/useCase/data'
import { Controller, HttpResponse } from '../protocols/controller.protocols';

export  class FindAllDataController implements Controller {
  constructor(private findAllDataUseCase: FindAllDataUseCase){}

  public async handle():  Promise<HttpResponse>  {
   
    try {

      const response = await this.findAllDataUseCase.perform();

      if(response.error){
        return { statusCode: StatusCodes.BAD_REQUEST, body: response.error};
      }

      return { statusCode: StatusCodes.OK , body: response.data};
     
    } catch (error) {
      return { statusCode: StatusCodes.INTERNAL_SERVER_ERROR, body: error};
    }
  }
	
}