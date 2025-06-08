import { StatusCodes } from 'http-status-codes';
import { Controller, HttpResponse } from '../protocols/controller.protocols';

export class GetTermsController implements Controller {
    constructor() { }

    public async handle(): Promise<HttpResponse> {

        try {

            const termsUrl = process.env.TERMS_URL;
            return { statusCode: StatusCodes.OK, body: { termsUrl } };

        } catch (error) {
            return { statusCode: StatusCodes.INTERNAL_SERVER_ERROR, body: error };
        }
    }

}