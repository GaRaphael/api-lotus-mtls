import { PutSuitUseCaseParams} from '../../../domain/suit';
import { SuitRepository } from '../../../infra/db';


export class PutSuitUseCase {

  constructor( private suitRepository: SuitRepository ) { }

  async perform(params: PutSuitUseCaseParams): Promise<any> {

    try {

      const response = await this.suitRepository.put({ ...params });

      if (response) {
        return { data: response }
      }

      return { error: 'Error in put Suit Repository' };

    } catch (error) {
      return { error: `${error}` };
    }
  }
}
