import { Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import { FindByIdSuitsUseCase } from '../../../data/useCase/'
import { Controller, HttpResponse } from '../protocols/controller.protocols';


export class FindByIdSuitController implements Controller {
    constructor(private findByIdSuitUseCase: FindByIdSuitsUseCase) { }

    public async handle(request: Request): Promise<HttpResponse> {

        try {

            const id: number = Number(request.params.id);

            const response = await this.findByIdSuitUseCase.perform({ id });

            if (response.error) {
                return { statusCode: StatusCodes.BAD_REQUEST, body: response.error };
            }

            return { statusCode: StatusCodes.OK, body: response.data };

        } catch (error) {
            return { statusCode: StatusCodes.INTERNAL_SERVER_ERROR, body: error };
        }
    }

}