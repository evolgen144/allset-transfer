/* Interfaces */
export interface ClientInfo {
	firstName: string;
	lastName: string;
	email: string;
	location: string;
}

export interface Reviews {
	[key: string]: string; // possibly change to key: number
}

export interface PastWork {
	[key: string]: string; // possibly change to key: number
}

export interface Bio {
	about: string;
	pastWork: PastWork;
	reviews: Reviews;
}

export interface JobPost {
	Title: string;
	Date: string;
	Description: string;
}

export interface Postings {
	[key: string]: JobPost;
}

export interface User {
	_id: {
		$oid: string;
	};
	authID: string;
	clientInfo: ClientInfo;
	Position: string;
	bio: Bio;
	postings: Postings;
}