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



// export interface Reviews {
// 	[key: string]: string; // possibly change to key: number
// }

export interface PastWork {
	[key: string]: string; // possibly change to key: number
}

export interface Bio {
	about: string;
	pastWork: string;
}

export interface User {
	// _id: {
	// 	$oid: string;
	// };
	authID: string;
	clientInfo: ClientInfo;
	socials: Socials;
	Position: string;
	bio: Bio;
}