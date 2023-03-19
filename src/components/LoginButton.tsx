import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { IonButton } from '@ionic/react';

const LoginButton: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  return (
  <IonButton onClick={() => loginWithRedirect()}>
    Log in
    </IonButton>
    );
};

export default LoginButton;