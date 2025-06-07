import { PrismaHelper } from '../helpers';
import {
    AddUserRepositoryParams,
    AddUserRepositoryResponse,
    FindUserExistsParams,
    FindUserExistsResponse,
    ResetPasswordRepositoryParams,
    ResetPasswordRepositoryResponse
} from '../../../domain';

const { prisma } = PrismaHelper;
export class UserRepository {

    public async add(params: AddUserRepositoryParams): Promise<AddUserRepositoryResponse> {
        const {
            cpf,
            email,
            name,
            password,
        } = params;

        const { user: UserModel } = prisma;

        const user = await UserModel.create({
            data: {
                cpf,
                email,
                name,
                password
            },

        });

        return {
            id: user.id,
            cpf: user.cpf,
            email: user.email,
            name: user.name,
        }
    }

    public async verifyExists(params: FindUserExistsParams): Promise<FindUserExistsResponse> {

        const { user: UserModel } = prisma;

        const user = await UserModel.findFirst({
            where: {
                OR: [
                    { cpf: params.cpf },
                    { email: params.email }
                ]
            },
        });

        return { exists: !!user };
    }

    public async reset(params: ResetPasswordRepositoryParams): Promise<ResetPasswordRepositoryResponse> {

        const { user: UserModel } = prisma;

        const user = await UserModel.update({
            where: {
                email: params.email
            },
            data: {
                password: params.new_password
            }
        });

        return user;
    }
}