import { PrismaHelper } from '../helpers';
const { prisma } = PrismaHelper;


export class DataRepository {

    public async add(): Promise<any> {

        const { data_dash: DataRepository, sales: SalesRepository } = prisma;

        const sales = await SalesRepository.findMany({
            where: {
                active: true
            }
        });

        for (const sale of sales) {
            await DataRepository.create({
                data: {
                    payment_type: sale.payment_type,
                    value: sale.value,
                }
            });
        }

        await SalesRepository.updateMany({
            where: {
                active: true
            },
            data: {
                active: false
            }
        });

        console.log('Data added successfully');
    }

    public async findAll(): Promise<any> {

        const { data_dash: DataRepository } = prisma;

        const count = await DataRepository.count({
            where: {
                active: true
            }
        });

        const total = await DataRepository.groupBy({
            by: ['payment_type'],
            _sum: {
                value: true
            },
            where: {
                active: true
            }
        });

        let totalValue = 0;
        let totalValueCredit = 0;
        let totalValueDebit = 0;
        let totalValueMoney = 0;

        for (const data of total) {
            totalValue += data._sum.value!;
            if (data.payment_type === 'credito') {
                totalValueCredit = data._sum.value || 0;
            } else if (data.payment_type === 'debito') {
                totalValueDebit = data._sum.value || 0;
            } else {
                totalValueMoney = data._sum.value || 0;
            }
        }


        return {
            count: count,
            totalValue: totalValue,
            totalValueCredit: totalValueCredit,
            totalValueDebit: totalValueDebit,
            totalValueMoney: totalValueMoney
        }
    }
}