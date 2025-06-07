import { PrismaHelper } from '../helpers';
import {
    AddSuitRepositoryParams,
    DisableSuitRepositoryParams,
    PutSuitRepositoryParams
} from '../../../domain/suit';

const { prisma } = PrismaHelper;
export class WomenRepository {

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

        const { women_suit: WomenModel } = prisma;

        const response = await WomenModel.create({
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

        const { women_suit: WomenModel } = prisma;

        const response = await WomenModel.findMany({
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

        const { women_suit: WomenModel } = prisma;

        const response = await WomenModel.update({
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
        const { women_suit: womenModel } = prisma;

        const response = await womenModel.findFirst({
            where: {
                id: params.id
            }
        });

        const disable = await womenModel.update({
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
        const { women_suit: WomenModel } = prisma;

        const response = await WomenModel.findFirst({
            where: {
                id: params.id
            }
        });

        return response;
    }
}