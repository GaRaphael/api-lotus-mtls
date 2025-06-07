import { PrismaHelper } from '../helpers';
import {
    AddSuitRepositoryParams,
    PutSuitRepositoryParams,
    DisableSuitRepositoryParams
} from '../../../domain/suit';

const { prisma } = PrismaHelper;
export class AccessoriesRepository {

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

        const { accessories: AccessoriesModel, } = prisma;


        const response = await AccessoriesModel.create({
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

        const { accessories: AccessoriesModel } = prisma;

        const response = await AccessoriesModel.findMany({
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

        const { accessories: AccessoriesModel } = prisma;

        const response = await AccessoriesModel.update({
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
        const { accessories: AccessoriesModel } = prisma;

        const response = await AccessoriesModel.findFirst({
            where: {
                id: params.id
            }
        });

        const disable = await AccessoriesModel.update({
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
        const { accessories: AccessoriesModel } = prisma;

        const response = await AccessoriesModel.findFirst({
            where: {
                id: params.id
            },
        });

        return response;
    }
}