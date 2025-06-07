import { Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import { DisablePantsUseCase } from '../../../data/useCase/pants'
import { Controller, HttpResponse } from '../protocols/controller.protocols';



export class DisablePantController implements Controller {
    constructor(private disablePantsUseCase: DisablePantsUseCase) { }

    public async handle(request: Request): Promise<HttpResponse> {

        try {

            const id: number = Number(request.params.id);

            const response = await this.disablePantsUseCase.perform({ id });

            if (response.error) {
                return { statusCode: StatusCodes.BAD_REQUEST, body: response.error };
            }

            return { statusCode: StatusCodes.OK, body: response.data };

        } catch (error) {
            return { statusCode: StatusCodes.INTERNAL_SERVER_ERROR, body: error };
        }
    }

}