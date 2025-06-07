import { Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import { PutSuitUseCase } from '../../../data/useCase/suits'
import { Controller, HttpResponse } from '../protocols/controller.protocols';
import { PutSuitUseCaseParams } from '../../../domain/suit';


export class PutSuitController implements Controller {
    constructor(private putSuitUseCase: PutSuitUseCase) { }

    public async handle(request: Request): Promise<HttpResponse> {

        try {

            const body = request.body as PutSuitUseCaseParams;
            const id: number = Number(request.params.id);

            const response = await this.putSuitUseCase.perform({ ...body, id });

            if (response.error) {
                return { statusCode: StatusCodes.BAD_REQUEST, body: response.error };
            }

            return { statusCode: StatusCodes.OK, body: response.data };

        } catch (error) {
            return { statusCode: StatusCodes.INTERNAL_SERVER_ERROR, body: error };
        }
    }

}
