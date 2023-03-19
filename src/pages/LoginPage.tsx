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
        <IonGrid className="ion-grid-center">
          <IonRow className="ion-text-center">
              <div className="container">
                <IonRow>
                  <IonCol size="12" className="ion-text-center">
                    <IonImg src={logo} alt="AllSetLogo" style={{ height: '50px' }} />
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonText>
                    <p className="intro_text">
                    Collaborate with confidence
                    </p>
                    <p className="intro_text2">
                    AllSet is the go-to app for content production professionals to find and connect with the best talent in the industry.
                    </p>
                  </IonText>
                </IonRow>
                <IonRow className="ion-text-center">
                  <IonText>
                    <p>
                      Please take a moment to read our{' '}
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setShowTerms(true);
                        }}
                      >
                        terms and conditions
                      </a>
                    </p>
                  </IonText>
                </IonRow>
                <IonRadioGroup allow-empty-selection="true" value={agreed} onIonChange={(e) => setAgreed(e.detail.value)}>
                  <IonItem lines="none">
                    <IonRadio value={true} />
                    <IonLabel>&nbsp;&nbsp;&nbsp;I agree</IonLabel>
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
          </IonRow>
        </IonGrid>
    </IonContent>
  </IonPage>
  );
};

export default LoginPage;