import React from 'react';

type UserContextType = {
    userId: string | null;
};
  
export const UserContext = React.createContext<UserContextType>({
    userId: null
});