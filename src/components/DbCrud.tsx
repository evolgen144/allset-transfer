import React, { useState, useEffect, useContext } from 'react';
import * as Realm from 'realm-web';
import { UserContext } from './UserContext'; // Make sure to import the correct UserContext
import UserDataContext from './UserDataContext';
import App from '../App'

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


const DbCrud: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const userId = useContext(UserContext);
//   const context = useContext(UserDataContext);

  const app = new Realm.App({ id: "all-set-wgyfg"});

  async function getUserByAuthID(authID: string | null) {
    if (!authID) {
      return null;
    }

    // Replace the placeholders with your actual email and password for Realm
    const credentials = Realm.Credentials.emailPassword("adam@a.com", "Abc12345");
    try {
      const user = await app.logIn(credentials);
      console.log('Logged in to Realm as:', user.id);

      const mongodb = user.mongoClient('mongodb-atlas');
      const usersCollection = mongodb.db("ALLSET").collection("Clients");

      const query = { authID };
      const result = await usersCollection.findOne(query);

      return result;
    } catch (error) {
      console.error('Error logging in or fetching data from MongoDB:', error);
      return null;
    }
  }

  useEffect(() => {
    async function processUser(authID: string | null) {
      const user = await getUserByAuthID(authID);
      setCurrentUser(user);
    //   console.log('The final user info: ', user.clientInfo.firstName); 
    }

    if (userId.userId) {
      processUser(userId.userId);
    }
  }, [userId]);

  return (
    <UserDataContext.Provider value={ currentUser }>
        <App />
    </UserDataContext.Provider> 
  );
};


export default DbCrud;

