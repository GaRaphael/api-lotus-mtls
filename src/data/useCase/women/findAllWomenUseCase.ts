import { WomenRepository } from '../../../infra/db';


export class FindAllWomenUseCase {

    constructor(private womenRepository: WomenRepository) { }

    async perform(): Promise<any> {

        try {

            const response = await this.womenRepository.findAll();

            if (response) {
                return { data: response }
            }

            return { error: 'Error in find all Suit ' };

        } catch (error) {
            return { error: `${error}` };
        }
    }
}
