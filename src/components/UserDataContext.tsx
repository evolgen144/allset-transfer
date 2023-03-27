import React from 'react';

interface ClientInfo {
    firstName: string;
    lastName: string;
    email: string;
    location: string;
  }
  
interface Bio {
    about: string;
    pastWork: string;
    reviews: string;
  }
  
interface User {
    _id: {
      $oid: string;
    };
    authID: string;
    clientInfo: ClientInfo;
    Position: string;
    bio: Bio;
}

// type UserDataContextType = {
//     currentUser: User | null;
// };
  
const UserDataContext = React.createContext<User | null>(null);
export default UserDataContext;