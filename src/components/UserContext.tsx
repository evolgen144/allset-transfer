import React from 'react';

type UserContextType = {
    userId: string | null;
    setUserId: (userId: string | null) => void;
};
  
export const UserContext = React.createContext<UserContextType>({
    userId: null,
    setUserId: () => {},
});