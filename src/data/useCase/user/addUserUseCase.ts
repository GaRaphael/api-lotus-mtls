import { generatePassword } from '../../../main/utils/auth';
import { AddUserUseCaseParams, AddUserUseCaseResponse } from '../../../domain';
import { UserRepository } from '../../../infra/db';



export class AddUserUseCase {

  constructor(
    private userRepository: UserRepository
  ) { }

  async perform(params: AddUserUseCaseParams): Promise<AddUserUseCaseResponse> {

    try {
      const alreadyUser = await this.userRepository.verifyExists({ email: params.email, cpf: params.cpf });

      if (alreadyUser.exists) {
        return { error: 'Cpf or Email already exists' };
      }

      const cryptPassword = await generatePassword(params.password);
      const response = await this.userRepository.add({ ...params, password: cryptPassword });

      if (response) {
        return { data: response }
      }

      return { error: 'Error in add User Repository' };

    } catch (error) {
      return { error: `${error}` };
    }
  }
}
