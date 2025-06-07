import { Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ResetPasswordUseCase } from '../../../data/useCase/user'
import { Controller, HttpResponse } from '../protocols/controller.protocols';


export class ResetPasswordController implements Controller {
    constructor(private resetPasswordUseCase: ResetPasswordUseCase) { }

    public async handle(request: Request): Promise<HttpResponse> {

        try {

            const response = await this.resetPasswordUseCase.perform({ email: request.body.email, new_password: request.body.new_password });

            if (response.error) {
                return { statusCode: StatusCodes.BAD_REQUEST, body: response.error };
            }

            return { statusCode: StatusCodes.OK, body: response.data };

        } catch (error) {
            return { statusCode: StatusCodes.INTERNAL_SERVER_ERROR, body: error };
        }
    }

}
