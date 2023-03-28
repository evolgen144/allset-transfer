import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { UserContext } from './UserContext';
import DbCrud from './DbCrud';




const GetUser: React.FC = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    if (isAuthenticated && user) {
      setUserId(user?.sub?.toString() ?? '');
    }

  }, [isAuthenticated, user, getAccessTokenSilently]);

  return (
    <UserContext.Provider value={{ userId }}>
      <DbCrud />
    </UserContext.Provider>  
  )
};


export default GetUser