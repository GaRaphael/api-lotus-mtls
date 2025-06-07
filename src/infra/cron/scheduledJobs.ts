import { AddDataUseCase } from '../../data/useCase/data';
import { DataRepository } from '../../infra/db/data';
import CronJob from "node-cron";

// dependency injection factory Controller
const makeDataRepository = () => {
	const dataRepository = new DataRepository();
	return dataRepository;
};


const scheduledJobs = async () => {


	// rotina normal
	const scheduledJobFunction = CronJob.schedule("0 0 * * *", async () => {

		// rotina de teste
		//const scheduledJobFunction = CronJob.schedule("*/5 * * * * *", async () => {

		const data_dash = new AddDataUseCase(makeDataRepository())

		await data_dash.perform()

	});

	scheduledJobFunction.start();

}

export default scheduledJobs;