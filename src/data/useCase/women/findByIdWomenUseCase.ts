import { WomenRepository } from '../../../infra/db';
import { DisableSuitUseCaseParams } from '../../../domain/';


export class FindByIdWomenUseCase {

    constructor(private womenRepository: WomenRepository) { }

    async perform(params: DisableSuitUseCaseParams): Promise<any> {

        try {

            const response = await this.womenRepository.findId({ ...params });

            if (response) {
                return { data: response }
            }

            return { error: 'Error in Disable Women Repository' };

        } catch (error) {
            return { error: `${error}` };
        }
    }
}
