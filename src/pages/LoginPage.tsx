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
  IonModal, 
  IonRadioGroup, 
  IonRadio, 
  IonText,
  IonImg
    } from "@ionic/react";


/* CSS and images */
import './LoginPage.css';
import logo from '../assets/logo.png';

/* Auth0 imports */
// 41153T.app
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../components/LoginButton'


const LoginPage: React.FC = () => {
  const [showTerms, setShowTerms] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const { loginWithRedirect } = useAuth0();


  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonGrid className="as_grid">
              <IonRow>
                  <IonCol size="12" className="ion-text-center colSize">
                    <div className="container">
                    <IonImg src={logo} alt="AllSetLogo" style={{ height: '20%' }}/>
                      <IonText>
                        <p>
                          Welcome! Please take a moment to read our{' '}
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              setShowTerms(true);
                            }}
                          >
                            terms and conditions
                          </a>
                          .
                        </p>
                      </IonText>

                      <IonRadioGroup value={agreed} onIonChange={(e) => setAgreed(e.detail.value)}>
                        <IonItem lines="none">
                          <IonRadio value={true} />
                          <IonLabel>I agree</IonLabel>
                        </IonItem>
                      </IonRadioGroup>

                      <IonButton expand="full" color={agreed ? 'allset' : 'allset'} onClick={() => loginWithRedirect()} disabled={!agreed}>
                        Continue
                      </IonButton>
                    </div>

                    <IonModal isOpen={showTerms} onDidDismiss={() => setShowTerms(false)}>
                      <IonContent className="ion-padding">
                        <h2>Terms and Conditions</h2>
                        <p>Put your terms and conditions content here.</p>
                        <IonButton expand="full" color="light" onClick={() => setShowTerms(false)}>
                          Close
                        </IonButton>
                      </IonContent>
                    </IonModal>
                  </IonCol>
                </IonRow>
          </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;