import React from 'react';

/* Interfaces */
interface ClientInfo {
  firstName: string;
  lastName: string;
  email: string;
  location: string;
}

interface Reviews {
  [key: string]: string;
}

interface PastWork {
  [key: string]: string;
}

interface Bio {
  about: string;
  pastWork: PastWork;
  reviews: Reviews;
}

interface JobPost {
  Title: string;
  Date: string;
  Description: string;
}

interface Postings {
  [key: string]: JobPost;
}

interface User {
  // _id: {
  //   $oid: string;
  // };
  authID: string;
  clientInfo: ClientInfo;
  Position: string;
  bio: Bio;
  postings: Postings;
}

const UserDataContext = React.createContext<User | null>(null);
export default UserDataContext;