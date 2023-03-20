import React from 'react';
import { useAuth0, LogoutOptions } from '@auth0/auth0-react';
import { IonButton } from '@ionic/react';
import './LogoutButton.css'

const LogoutButton: React.FC = () => {
  const { logout } = useAuth0();

  return (
    <IonButton className="custom-logout" onClick={() => logout()}>
      Log Out
    </IonButton>
  );
};

export default LogoutButton;