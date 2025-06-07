import { AddSuitUseCaseParams, AddSuitUseCaseResponse } from '../../../domain/suit';
import { SuitRepository } from '../../../infra/db';


export class AddSuitUseCase {

  constructor( private suitRepository: SuitRepository ) { }

  async perform(params: AddSuitUseCaseParams): Promise<AddSuitUseCaseResponse> {

    try {

      const response = await this.suitRepository.add({ ...params });

      if (response) {
        return { data: response }
      }

      return { error: 'Error in add Suit Repository' };

    } catch (error) {
      return { error: `${error}` };
    }
  }
}
