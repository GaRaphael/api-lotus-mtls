import { Request } from 'express';
import {  StatusCodes } from 'http-status-codes';
import { FindAllAccessoriesUseCase }  from '../../../data/useCase/'
import { Controller, HttpResponse } from '../protocols/controller.protocols';

export  class FindAllAccessoriesController implements Controller {
  constructor(private findAllAccessoriesUseCase: FindAllAccessoriesUseCase){}

  public async handle():  Promise<HttpResponse>  {
   
    try {

      const response = await this.findAllAccessoriesUseCase.perform();

      if(response.error){
        return { statusCode: StatusCodes.BAD_REQUEST, body: response.error};
      }

      return { statusCode: StatusCodes.OK , body: response.data};
     
    } catch (error) {
      return { statusCode: StatusCodes.INTERNAL_SERVER_ERROR, body: error};
    }
  }
	
}