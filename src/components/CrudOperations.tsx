import Crud, { authenticateUser } from "./Crud";

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
