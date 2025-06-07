import { SuitRepository } from '../../../infra/db';


export class FindAllSuitUseCase {

  constructor( private suitRepository: SuitRepository ) { }

  async perform(): Promise<any> {

    try {

      const response = await this.suitRepository.findAll();

      if (response) {
        return { data: response }
      }

      return { error: 'Error in find all Suit ' };

    } catch (error) {
      return { error: `${error}` };
    }
  }
}
