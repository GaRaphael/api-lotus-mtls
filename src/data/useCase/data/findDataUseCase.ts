import { DataRepository } from '../../../infra/db';

export class FindAllDataUseCase {

  constructor( private dataRepository: DataRepository ) { }

  async perform(): Promise<any> {

    try {

      const response = await this.dataRepository.findAll();

      if (response) {
        return { data: response }
      }

      return { error: 'Error in find all Data ' };

    } catch (error) {
      return { error: `${error}` };
    }
  }
}
