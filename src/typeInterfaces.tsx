/* Interfaces */

export interface Socials {
	Facebook: string;
	Instagram: string;
	LinkedIN: string;
	YouTube: string;
	Vimeo: string;
	Twitter: string
}
export interface ClientInfo {
	firstName: string;
	lastName: string;
	email: string;
	location: string;
	socials: Socials;
}

export interface PastWork {
	[key: string]: string;
}

export interface Bio {
	about: string;
	pastWork: string;
}

export interface User {
	authID: string;
	clientInfo: ClientInfo;
	socials: Socials;
	Position: string[];
	bio: Bio;
}

export interface Chat {
	[key: string]: string;
}

export interface Application {
	jobID: string;
	posterID: string;
	applicantID: string;
}