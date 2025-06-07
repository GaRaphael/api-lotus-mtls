import { Request } from 'express';
import {  StatusCodes } from 'http-status-codes';
import { FindAllWomenUseCase }  from '../../../data/useCase/'
import { Controller, HttpResponse } from '../protocols/controller.protocols';

export  class FindAllWomenController implements Controller {
  constructor(private findAllWomenUseCase: FindAllWomenUseCase){}

  public async handle():  Promise<HttpResponse>  {
   
    try {

      const response = await this.findAllWomenUseCase.perform();

      if(response.error){
        return { statusCode: StatusCodes.BAD_REQUEST, body: response.error};
      }

      return { statusCode: StatusCodes.OK , body: response.data};
     
    } catch (error) {
      return { statusCode: StatusCodes.INTERNAL_SERVER_ERROR, body: error};
    }
  }
	
}