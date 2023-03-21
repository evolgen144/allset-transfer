import React from 'react';
import {
  IonHeader,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonPage,
  IonTitle
} from '@ionic/react';
import logo from '../assets/logo.png';

const Profile: React.FC = () => {
  return(
    <IonPage>
        <IonHeader className="as_header">
          <IonToolbar className="as_toolbar">
              <IonGrid className="as_grid">
                  <IonRow>
                      <IonCol size="12" className="ion-text-center colSize">
                      <IonImg src={logo} alt="AllSetLogo" style={{ height: '25%' }}/>
                      <IonTitle>Profile</IonTitle>
                      </IonCol>
                  </IonRow>
              </IonGrid>
          </IonToolbar>
      </IonHeader>
    </IonPage>
  )
};

export default Profile;