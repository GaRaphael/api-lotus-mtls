import { WomenRepository } from '../../../infra/db';
import { PutSuitUseCaseParams} from '../../../domain/suit';


export class PutWomenUseCase {

  constructor( private womenRepository: WomenRepository ) { }

  async perform(params: PutSuitUseCaseParams): Promise<any> {

    try {

      const response = await this.womenRepository.put({ ...params });

      if (response) {
        return { data: response }
      }

      return { error: 'Error in put Suit Repository' };

    } catch (error) {
      return { error: `${error}` };
    }
  }
}
