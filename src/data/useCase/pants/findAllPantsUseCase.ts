import { PantRepository } from '../../../infra/db';


export class FindAllPantUseCase {

  constructor( private pantRepository: PantRepository ) { }

  async perform(): Promise<any> {

    try {

      const response = await this.pantRepository.findAll();

      if (response) {
        return { data: response }
      }

      return { error: 'Error in find all Suit ' };

    } catch (error) {
      return { error: `${error}` };
    }
  }
}
