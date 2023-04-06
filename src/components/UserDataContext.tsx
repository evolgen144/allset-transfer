import React from 'react';

/* Interfaces */

export interface Socials {
	Facebook: string;
	Instagram: string;
	LinkedIN: string;
	YouTube: string;
	Vimeo: string;
	Twitter: string
}

interface ClientInfo {
  firstName: string;
  lastName: string;
  email: string;
  location: string;
  socials: Socials;
}


// interface Reviews {
//   [key: string]: string;
// }

// interface PastWork {
//   [key: string]: string;
// }

interface Bio {
  about: string;
  pastWork: string;
}

// interface JobPost {
//   Title: string;
//   Date: string;
//   Description: string;
// }

// interface Postings {
//   [key: string]: JobPost;
// }

interface User {
  // _id: {
  //   $oid: string;
  // };
  authID: string;
  clientInfo: ClientInfo;
  Position: string;
  bio: Bio;
  // postings: Postings;
}

const UserDataContext = React.createContext<User | null>(null);
export default UserDataContext;