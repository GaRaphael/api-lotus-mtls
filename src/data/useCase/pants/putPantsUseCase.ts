import { PutSuitUseCaseParams} from '../../../domain/suit';
import { PantRepository } from '../../../infra/db';


export class PutPantUseCase {

  constructor( private pantRepository: PantRepository ) { }

  async perform(params: PutSuitUseCaseParams): Promise<any> {

    try {

      const response = await this.pantRepository.put({ ...params });

      if (response) {
        return { data: response }
      }

      return { error: 'Error in put Suit Repository' };

    } catch (error) {
      return { error: `${error}` };
    }
  }
}
