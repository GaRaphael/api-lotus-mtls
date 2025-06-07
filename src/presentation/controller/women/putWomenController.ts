import { Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import { PutWomenUseCase } from '../../../data/useCase/'
import { Controller, HttpResponse } from '../protocols/controller.protocols';
import { PutSuitUseCaseParams } from '../../../domain/suit';


export class PutWomenController implements Controller {
    constructor(private putWomenUseCase: PutWomenUseCase) { }

    public async handle(request: Request): Promise<HttpResponse> {

        try {

            const body = request.body as PutSuitUseCaseParams;
            const id: number = Number(request.params.id);

            const response = await this.putWomenUseCase.perform({ ...body, id });

            if (response.error) {
                return { statusCode: StatusCodes.BAD_REQUEST, body: response.error };
            }

            return { statusCode: StatusCodes.OK, body: response.data };

        } catch (error) {
            return { statusCode: StatusCodes.INTERNAL_SERVER_ERROR, body: error };
        }
    }

}
