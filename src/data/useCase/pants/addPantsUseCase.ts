import { AddSuitUseCaseParams, AddSuitUseCaseResponse } from '../../../domain/suit';
import { PantRepository } from '../../../infra/db';


export class AddPantUseCase {

  constructor( private pantRepository: PantRepository ) { }

  async perform(params: AddSuitUseCaseParams): Promise<AddSuitUseCaseResponse> {

    try {

      const response = await this.pantRepository.add({ ...params });

      if (response) {
        return { data: response }
      }

      return { error: 'Error in add Suit Repository' };

    } catch (error) {
      return { error: `${error}` };
    }
  }
}
