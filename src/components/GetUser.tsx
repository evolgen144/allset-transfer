import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { UserContext } from './UserContext';
import DbCrud from './DbCrud';
import Crud from './Crud';




const GetUser: React.FC = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    if (isAuthenticated && user) {
      setUserId(user?.sub?.toString() ?? '');  // Set Autho0 User Id
    }

  }, [isAuthenticated, user, getAccessTokenSilently]);
  
  return (
    <UserContext.Provider value={{ userId }}>
      <DbCrud />
      {/* <Crud /> */}
    </UserContext.Provider>  
  )
};

// export const exportedUserId = userId;
export default GetUser