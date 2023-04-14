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


interface Bio {
  about: string;
  pastWork: string;
}


interface User {
  authID: string;
  clientInfo: ClientInfo;
  Position: string[];
  bio: Bio;
}

const UserDataContext = React.createContext<User | null>(null);
export default UserDataContext;