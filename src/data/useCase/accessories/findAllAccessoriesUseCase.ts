import { AccessoriesRepository } from '../../../infra/db';

export class FindAllAccessoriesUseCase {

  constructor( private accessoriesRepository: AccessoriesRepository ) { }

  async perform(): Promise<any> {

    try {

      const response = await this.accessoriesRepository.findAll();

      if (response) {
        return { data: response }
      }

      return { error: 'Error in find all Suit ' };

    } catch (error) {
      return { error: `${error}` };
    }
  }
}
