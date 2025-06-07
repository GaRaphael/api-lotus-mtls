import { AccessoriesRepository } from '../../../infra/db';
import { PutSuitUseCaseParams} from '../../../domain/suit';


export class PutAccessoriesUseCase {

  constructor( private accessoriesRepository: AccessoriesRepository ) { }

  async perform(params: PutSuitUseCaseParams): Promise<any> {

    try {

      const response = await this.accessoriesRepository.put({ ...params });

      if (response) {
        return { data: response }
      }

      return { error: 'Error in put Suit Repository' };

    } catch (error) {
      return { error: `${error}` };
    }
  }
}
