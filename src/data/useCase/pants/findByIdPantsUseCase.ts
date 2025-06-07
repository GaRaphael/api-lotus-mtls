import { PantRepository } from '../../../infra/db';
import { DisableSuitUseCaseParams} from '../../../domain/';


export class FindByIdPantsUseCase {

  constructor( private pantRepository: PantRepository ) { }

  async perform(params: DisableSuitUseCaseParams): Promise<any> {

    try {

      const response = await this.pantRepository.findId({ ...params });

      if (response) {
        return { data: response }
      }

      return { error: 'Error in Disable Pants Repository' };

    } catch (error) {
      return { error: `${error}` };
    }
  }
}
