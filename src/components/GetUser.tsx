import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { IonApp } from '@ionic/react';
import { UserContext } from './UserContext';
import DbCrud from './DbCrud';


const GetUser: React.FC = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [userId, setUserId] = useState<string | null>(null);
  // let userIdString: string = 'test';

  useEffect(() => {
    if (isAuthenticated && user) {
      // userIdString = user?.sub?.toString() ?? '';
      // console.log('***** GetUser.tsx: THE LOGGED IN User ID:', userIdString); // Use this as a unique identifier for the user in your database
      setUserId(user?.sub?.toString() ?? '');
      // console.log("The revised id is: ", userId)


      // Call your backend API to fetch user data
      // const fetchData = async () => {
      //   try {
      //     const accessToken = await getAccessTokenSilently();
      //     const response = await fetch('https://your-api.example.com/user-data', {
      //       headers: {
      //         Authorization: `Bearer ${accessToken}`,
      //       },
      //     });
      //     const data = await response.json();
      //     // Process and display the fetched user data
      //   } catch (error) {
      //     console.error(error);
      //   }
      // };

    //   fetchData();
    }

  }, [isAuthenticated, user, getAccessTokenSilently]);

  return (
    <UserContext.Provider value={{ userId, setUserId }}>
      <DbCrud />
    </UserContext.Provider>  
  )
};

export default GetUser