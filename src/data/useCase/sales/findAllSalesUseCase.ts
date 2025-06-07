import { SalesRepository } from '../../../infra/db';

export class FindAllSalesUseCase {

  constructor( private salesRepository: SalesRepository ) { }

  async perform(): Promise<any> {

    try {

      const response = await this.salesRepository.findAll();

      if (response) {
        return { data: response }
      }

      return { error: 'Error in find all sales ' };

    } catch (error) {
      return { error: `${error}` };
    }
  }
}
