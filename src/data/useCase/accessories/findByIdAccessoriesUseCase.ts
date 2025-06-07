import { AccessoriesRepository } from '../../../infra/db';
import { DisableSuitUseCaseParams} from '../../../domain/';


export class FindByIdAccessoriesUseCase {

  constructor( private accessoriesRepository: AccessoriesRepository ) { }

  async perform(params: DisableSuitUseCaseParams): Promise<any> {

    try {

      const response = await this.accessoriesRepository.findId({ ...params });

      if (response) {
        return { data: response }
      }

      return { error: 'Error in Disable Accessories Repository' };

    } catch (error) {
      return { error: `${error}` };
    }
  }
}
