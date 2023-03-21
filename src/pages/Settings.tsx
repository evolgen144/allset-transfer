import React from 'react';
import {
  IonHeader,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonContent,
  IonImg,
  IonPage,
  IonTitle
} from '@ionic/react';
import logo from '../assets/logo.png';

import LogoutButton from '../components/LogoutButton';

const Settings: React.FC = () => {
  return(
    <IonPage>
        <IonHeader className="as_header">
          <IonToolbar className="as_toolbar">
              <IonGrid className="as_grid">
                  <IonRow>
                      <IonCol size="12" className="ion-text-center colSize">
                      <IonImg src={logo} alt="AllSetLogo" style={{ height: '25%' }}/>
                      <IonTitle>Settings</IonTitle>
                      </IonCol>
                  </IonRow>
              </IonGrid>
          </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <LogoutButton />
      </IonContent>
    </IonPage>
  )
};

export default Settings;