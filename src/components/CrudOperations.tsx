import Crud, { authenticateUser } from "./Crud";
import { User } from '../typeInterfaces'

export interface Job {
	// _id: string[] | null;
	auth0Id: string | undefined;
	projectName: string;
	position: string[];
	budget: string;
	location: string;
	details: string;
	startDate: Date | null;
	endDate: Date | null;
}

/* Insert a Job offer */
export async function insertJobOffer(jobOffer: Job): Promise<boolean> {
	try {
		const user = await authenticateUser("adam@a.com", "Abc12345");
		if (!user) throw new Error("User authentication failed");

		const addJobOfferFunction = Crud.currentUser?.functions.insertJobOffer;
		const result = await addJobOfferFunction!(jobOffer);

		if (result.insertedId) {
			console.log("Job offer inserted successfully:", result.insertedId);
			return true;
		} else {
			console.error("Error inserting job offer:", result);
			return false;
		}
		} catch (error) {
		console.error("Error inserting authenticating or possibly inserting job offer:", error);
		return false;
	}
}

/* Get a list of all job offers */
export async function listAllJobOffers(): Promise<Job[]> {
	// try {
		const user = await authenticateUser("adam@a.com", "Abc12345");
		if (!user) throw new Error("User authentication failed");

		const listAllJobsFunction = Crud.currentUser?.functions.listAllJobOffers;
		const result = await listAllJobsFunction!();
		return result
}


/* Insert a new user */

export async function insertNewUser(newUser: User): Promise<boolean> {
	try {
		const user = await authenticateUser("adam@a.com", "Abc12345");
		if (!user) throw new Error("User authentication failed");

		const addNewUserFunction = Crud.currentUser?.functions.insertNewUser;
		const result = await addNewUserFunction!(newUser);

		if (result.insertedId) {
			console.log("New User inserted successfully:", result.insertedId);
			return true;
		} else {
			console.error("Error inserting New User:", result);
			return false;
		}
		} catch (error) {
			console.error("Error inserting authenticating or possibly inserting job offer:", error);
			return false;
		}
}

