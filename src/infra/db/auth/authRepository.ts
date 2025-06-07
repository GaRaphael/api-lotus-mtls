import { PrismaHelper } from '../helpers';
import {
    AuthRepositoryParams
} from '../../../domain/auth';
import { checkPassword } from '../../../main/utils/auth';

const { prisma } = PrismaHelper;
export class AuthRepository {

    public async auth(params: AuthRepositoryParams): Promise<any> {
        const { user: UserModel } = prisma;

        const response = await UserModel.findFirst({
            where: {
                email: params.email
            },
        });

        if (!response) {
            throw new Error('Invalid email');
        }

        if (response?.active === false) {
            throw new Error('Disabled user');
        }

        if (response) {

            const validPassword = await checkPassword(params.password, response.password);

            if (validPassword) {
                const user = await UserModel.update({
                    where: {
                        id: response.id
                    },
                    data: {
                        login: true
                    }
                });

                return user;
            }
        }
    }
}