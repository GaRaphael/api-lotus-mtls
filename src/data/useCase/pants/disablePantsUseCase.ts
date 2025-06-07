import { PantRepository } from '../../../infra/db';
import { DisableSuitUseCaseParams} from '../../../domain/';


export class DisablePantsUseCase {

  constructor( private pantsRepository: PantRepository ) { }

  async perform(params: DisableSuitUseCaseParams): Promise<any> {

    try {

      const response = await this.pantsRepository.disable({ ...params });

      if (response) {
        return { data: response }
      }

      return { error: 'Error in Disable Pants Repository' };

    } catch (error) {
      return { error: `${error}` };
    }
  }
}
