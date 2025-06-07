import { AddSuitUseCaseParams, AddSuitUseCaseResponse } from '../../../domain/suit';
import { AccessoriesRepository } from '../../../infra/db';


export class AddAccessoriesUseCase {

  constructor( private accessoriesRepository: AccessoriesRepository ) { }

  async perform(params: AddSuitUseCaseParams): Promise<AddSuitUseCaseResponse> {

    try {

      const response = await this.accessoriesRepository.add({ ...params });

      if (response) {
        return { data: response }
      }

      return { error: 'Error in add Suit Repository' };

    } catch (error) {
      return { error: `${error}` };
    }
  }
}
