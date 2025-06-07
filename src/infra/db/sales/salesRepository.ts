import { PrismaHelper } from '../helpers';
import {
    AddSalesRepositoryParams,
    AddSalesRepositoryResponse
} from '../../../domain/sales';

const { prisma } = PrismaHelper;

export class SalesRepository {

    public async add(params: AddSalesRepositoryParams): Promise<AddSalesRepositoryResponse> {
        const {
            category,
            model,
            payment_type,
            product_id,
            value
        } = params;

        const { sales: SalesRepository } = prisma;

        const response = await SalesRepository.create({
            data: {
                category,
                model,
                payment_type,
                value,
            },
        });

        return response;
    }

    public async findAll(): Promise<any> {

        const { sales: SalesRepository } = prisma;

        const response = await SalesRepository.findMany({
            orderBy: {
                id: 'desc'
            }
        });

        return response;
    }

}