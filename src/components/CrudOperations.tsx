import Crud, { authenticateUser } from "./Crud";
import { User, Application } from '../typeInterfaces'

export interface Job {
	jobID: string | null;
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

		if (result) {
			console.log("Job offer inserted successfully:", result);
			// lastInsertedJobId = result.insertedId;
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


/* Insert an Application */
export async function insertApplication(jobApplication: Application): Promise<boolean> {
	try {
		const user = await authenticateUser("adam@a.com", "Abc12345");
		if (!user) throw new Error("User authentication failed");

		const addApplicationFunction = Crud.currentUser?.functions.insertApplication;
		const result = await addApplicationFunction!(jobApplication);

		if (result) {
			console.log("Application inserted successfully:", result);
			return true;
		} else {
			console.error("Error inserting Application:", result);
			return false;
		}
		} catch (error) {
		console.error("Error inserting authenticating or possibly inserting Application:", error);
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

/* getJobsPosted */
export async function getJobsPosted(userId: string): Promise<Job[]> {

	const user = await authenticateUser("adam@a.com", "Abc12345");
	if (!user) throw new Error("User authentication failed");

	const getJobsPostedFunction = Crud.currentUser?.functions.getJobsPosted;
	const result = await getJobsPostedFunction!(userId);
	return result
}

/* getJobsApplied */
export async function getJobsApplied(userId: string): Promise<Job[]> {

	const user = await authenticateUser("adam@a.com", "Abc12345");
	if (!user) throw new Error("User authentication failed");

	const getJobsAppliedFunction = Crud.currentUser?.functions.getJobsApplied;
	const result = await getJobsAppliedFunction!(userId);
	return result
}

/* getJobApplicants */
export async function getJobApplicants(userId: string, job: string): Promise<User[]> {

	const user = await authenticateUser("adam@a.com", "Abc12345");
	if (!user) throw new Error("User authentication failed");

	const getJobApplicantsFunction = Crud.currentUser?.functions.getJobApplicants;
	const result = await getJobApplicantsFunction!(userId, job);
	return result
}

/* getUserProfile */
export async function getUserProfile(newUser: User): Promise<boolean> {
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