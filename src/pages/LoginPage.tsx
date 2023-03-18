import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
    } from "@ionic/react";

/* Auth0 imports */
// 41153T.app
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../components/LoginButton'


const LoginPage: React.FC = () => {

  return (
    <LoginButton />



    //   <IonPage>
    //   <IonHeader>
    //     <IonToolbar>
    //       <IonTitle>Login</IonTitle>
    //     </IonToolbar>
    //   </IonHeader>
    //   <IonContent>
    //     <IonGrid>
    //       <IonRow>
    //         <IonCol>
    //           <IonItem>
    //             <IonLabel position="floating">Email</IonLabel>
    //             <IonInput
    //               type="email"
    //               value={email}
    //               onIonChange={(e) => setEmail(e.detail.value!)}
    //             />
    //           </IonItem>
    //         </IonCol>
    //       </IonRow>
    //       <IonRow>
    //         <IonCol>
    //           <IonItem>
    //             <IonLabel position="floating">Password</IonLabel>
    //             <IonInput
    //               type="password"
    //               value={password}
    //               onIonChange={(e) => setPassword(e.detail.value!)}
    //             />
    //           </IonItem>
    //         </IonCol>
    //       </IonRow>
    //       <IonRow>
    //         <IonCol>
    //           <IonButton expand="block" onClick={handleLogin}>
    //             Login
    //           </IonButton>
    //         </IonCol>
    //       </IonRow>
    //     </IonGrid>
    //   </IonContent>
    // </IonPage>
      );
    };

export default LoginPage;