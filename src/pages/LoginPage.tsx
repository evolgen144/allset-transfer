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

/* Login imports */
import LoginButton from '../components/LoginButton'


const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const history = useHistory();
    
    const handleLogin = () => {
        console.log('Email:', email);
        console.log('Password:', password);
        history.push('/Hire')
      };

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