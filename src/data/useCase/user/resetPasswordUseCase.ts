
import { generatePassword } from '../../../main/utils/auth';
import { ResetPasswordUseCaseParams, ResetPasswordUseCaseResponse } from '../../../domain';
import { UserRepository } from '../../../infra/db/';

export class ResetPasswordUseCase {

  constructor(private userRepository: UserRepository) { }

  async perform(params: ResetPasswordUseCaseParams): Promise<ResetPasswordUseCaseResponse> {

    try {
      const { email, new_password } = params;

      const cryptpoPassword = await generatePassword(new_password);

      const user = await this.userRepository.reset({
        new_password: cryptpoPassword,
        email
      });

      if (!user) return { error: 'User not found' };

      return { data: user };

    } catch (error) {
      return { error: `${error}` };
    }
  }
}
