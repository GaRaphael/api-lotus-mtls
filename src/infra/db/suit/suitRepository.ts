import { PrismaHelper } from '../helpers';
import {
    AddSuitRepositoryParams,
    DisableSuitRepositoryParams,
    PutSuitRepositoryParams
} from '../../../domain/suit';

const { prisma } = PrismaHelper;
export class SuitRepository {

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

        const { suits: SuitModel} = prisma;


        const response = await SuitModel.create({
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

        const { suits: SuitModel } = prisma;

        const response = await SuitModel.findMany({
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

        const { suits: SuitModel } = prisma;

        const response = await SuitModel.update({
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
        const { suits: suitsModel } = prisma;

        const response = await suitsModel.findFirst({
            where: {
                id: params.id
            }
        });

        const disable = await suitsModel.update({
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
        const { suits: SuitModel } = prisma;

        const response = await SuitModel.findFirst({
            where: {
                id: params.id
            },
        });

        return response;
    }
}