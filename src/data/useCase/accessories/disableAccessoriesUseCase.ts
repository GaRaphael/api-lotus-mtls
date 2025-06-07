import { AccessoriesRepository } from '../../../infra/db';
import { DisableSuitUseCaseParams} from '../../../domain/';


export class DisableAccessoriesUseCase {

  constructor( private accessoriesRepository: AccessoriesRepository ) { }

  async perform(params: DisableSuitUseCaseParams): Promise<any> {

    try {

      const response = await this.accessoriesRepository.disable({ ...params });

      if (response) {
        return { data: response }
      }

      return { error: 'Error in Disable Accessories Repository' };

    } catch (error) {
      return { error: `${error}` };
    }
  }
}
