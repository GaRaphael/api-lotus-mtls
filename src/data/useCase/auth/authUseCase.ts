
import { AuthUseCaseParams } from '../../../domain/auth'
import { AuthRepository } from '../../../infra/db/auth/authRepository';
import jwt from 'jsonwebtoken';

export class AuthUseCase {

  constructor(private authRepository: AuthRepository) { }

  async perform(params: AuthUseCaseParams): Promise<{ token?: string, error?: string }> {

    try {
      const { email, password } = params;
      
      const user = await this.authRepository.auth({ email, password });
      if (user && !user?.active) {
        return { error: 'Disabled user' };
      }

      if (!user) {
        return { error: 'Invalid email or password' };
      }

      const token = jwt.sign({
        user: {
          id: user.id,
          email: user.email,
          name: user.name
        }
      }, process.env.TOKEN_SECRET || '', {
        expiresIn: '1d'
      });


      return { token: token };

    } catch (error) {
      return { error: `${error}` };
    }
  }
}
