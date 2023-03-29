import Crud, { authenticateUser } from "./Crud";

export interface JobOffer {
  auth0Id: string;
  title: string;
  description: string;
  // other fields as needed
}

export async function insertJobOffer(jobOffer: JobOffer): Promise<boolean> {
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
    console.error("Error inserting job offer:", error);
    return false;
  }
}