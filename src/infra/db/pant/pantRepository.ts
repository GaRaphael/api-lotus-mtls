import { PrismaHelper } from '../helpers';
import {
    AddSuitRepositoryParams,
    DisableSuitRepositoryParams,
    PutSuitRepositoryParams
} from '../../../domain/suit';

const { prisma } = PrismaHelper;
export class PantRepository {

    public async add(params: AddSuitRepositoryParams): Promise<any> {
        const {
            color,
            image,
            model,
            price,
            size,
            composition,
            description
        } = params;

        const { pants: PantModel} = prisma;


        const response = await PantModel.create({
            data: {
                color,
                image,
                model,
                price,
                size,
                composition,
                description,
                active: true
            },
        });

        return response;
    }

    public async findAll(): Promise<any> {

        const { pants: PantModel } = prisma;

        const response = await PantModel.findMany({
            where: {
                active: true
            },
            orderBy: {
                id: 'desc'
            }
        });

        return response;
    }

    public async put(params: PutSuitRepositoryParams): Promise<any> {
        const { id, color, image, model, price, size, composition, description } = params;

        const { pants: PantModel } = prisma;

        const response = await PantModel.update({
            where: {
                id
            },
            data: {
                color,
                image,
                model,
                price,
                size,
                composition,
                description
            }
        });

        return response;
    }

    public async disable(params: DisableSuitRepositoryParams): Promise<any> {
        const { pants: pantsModel } = prisma;

        const response = await pantsModel.findFirst({
            where: {
                id: params.id
            }
        });

        const disable = await pantsModel.update({
            where: {
                id: response?.id
            },
            data: {
                active: !response?.active
            },
        });

        return disable;
    }

    public async findId(params: DisableSuitRepositoryParams): Promise<any> {
        const { pants: PantModel } = prisma;

        const response = await PantModel.findFirst({
            where: {
                id: params.id
            },
        });

        return response;
    }
}