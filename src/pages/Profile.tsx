import React, { useContext } from 'react';
import {
  IonHeader,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonPage,
  IonTitle,
  IonContent,
} from '@ionic/react';
import logo from '../assets/logo.png';

import UserDataContext from '../components/UserDataContext';



const Profile: React.FC = () => {
  const currentUser = useContext(UserDataContext);
  
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
      <IonContent>
        <IonGrid>
          <IonRow>
            <h1>{currentUser?.clientInfo.firstName}</h1>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
};

export default Profile;