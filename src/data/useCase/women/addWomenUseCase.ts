import { AddSuitUseCaseParams, AddSuitUseCaseResponse } from '../../../domain/suit';
import { WomenRepository } from '../../../infra/db';


export class AddWomenUseCase {

  constructor( private womenRepository: WomenRepository ) { }

  async perform(params: AddSuitUseCaseParams): Promise<AddSuitUseCaseResponse> {

    try {

      const response = await this.womenRepository.add({ ...params });

      if (response) {
        return { data: response }
      }

      return { error: 'Error in add Suit Repository' };

    } catch (error) {
      return { error: `${error}` };
    }
  }
}