import { Request } from 'express';
import {  StatusCodes } from 'http-status-codes';
import { FindAllSuitUseCase }  from '../../../data/useCase/suits'
import { Controller, HttpResponse } from '../protocols/controller.protocols';

export  class FindAllSuitController implements Controller {
  constructor(private findAllSuitUseCase: FindAllSuitUseCase){}

  public async handle():  Promise<HttpResponse>  {
   
    try {

      const response = await this.findAllSuitUseCase.perform();

      if(response.error){
        return { statusCode: StatusCodes.BAD_REQUEST, body: response.error};
      }

      return { statusCode: StatusCodes.OK , body: response.data};
     
    } catch (error) {
      return { statusCode: StatusCodes.INTERNAL_SERVER_ERROR, body: error};
    }
  }
	
}