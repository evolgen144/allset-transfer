import React from 'react';
import { useAuth0, LogoutOptions } from '@auth0/auth0-react';
import { IonButton } from '@ionic/react';

const LogoutButton: React.FC = () => {
  const { logout } = useAuth0();

  return (
    <IonButton onClick={() => logout()}>
      Log Out
    </IonButton>
  );
};

export default LogoutButton;