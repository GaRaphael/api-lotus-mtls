import { AddSalesUseCaseParams, AddSalesUseCaseResponse } from '../../../domain/sales';
import { SalesRepository } from '../../../infra/db';


export class AddSalesUseCase {

  constructor(private salesRepository: SalesRepository) { }

  async perform(params: AddSalesUseCaseParams): Promise<AddSalesUseCaseResponse> {

    try {

      const response = await this.salesRepository.add({ ...params });

      if (response) {
        return { data: response }
      }

      return { error: 'Error in add sales in Repository' };

    } catch (error) {
      return { error: `${error}` };
    }
  }
}
