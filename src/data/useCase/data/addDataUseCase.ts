import { DataRepository } from '../../../infra/db';


export class AddDataUseCase {

  constructor(private dataRepository: DataRepository) { }

  async perform(): Promise<any> {

    try {

      const response = await this.dataRepository.add();

      if (response) {
        return { data: response }
      }

      return { error: 'Error in add data in Repository' };

    } catch (error) {
      return { error: `${error}` };
    }
  }
}
