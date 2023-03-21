import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { IonButton } from '@ionic/react';
import './LogoutButton.css'

const LogoutButton: React.FC = () => {
  const { logout } = useAuth0();

  return (
    <IonButton expand='full' className="custom-button" onClick={() => logout()}>
      Log Out
    </IonButton>
  );
};

export default LogoutButton;