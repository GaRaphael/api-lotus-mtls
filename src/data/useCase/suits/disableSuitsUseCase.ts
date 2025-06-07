import { SuitRepository } from '../../../infra/db';
import { DisableSuitUseCaseParams} from '../../../domain/';


export class DisableSuitsUseCase {

  constructor( private suitsRepository: SuitRepository ) { }

  async perform(params: DisableSuitUseCaseParams): Promise<any> {

    try {

      const response = await this.suitsRepository.disable({ ...params });

      if (response) {
        return { data: response }
      }

      return { error: 'Error in Disable Suits Repository' };

    } catch (error) {
      return { error: `${error}` };
    }
  }
}
