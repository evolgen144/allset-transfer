import { Redirect, Route } from 'react-router-dom';
import {
  IonHeader,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonSegment,
  IonSegmentButton,
  IonContent,
  IonItem,
  IonInput,
  IonButton,
  IonImg,
  IonFooter,
  IonApp,
  IonIcon,
  IonLabel,
  IonTextarea,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle, checkmarkOutline, refreshOutline } from 'ionicons/icons';
import logo from './assets/logo.png';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import React, { useRef } from 'react';

setupIonicReact();

const App: React.FC = () => {

  const as_projectNameRef = useRef<HTMLIonInputElement>(null)
  const as_roleRef = useRef<HTMLIonInputElement>(null)
  const as_budgetRef = useRef<HTMLIonInputElement>(null)
  const as_locationRef = useRef<HTMLIonInputElement>(null)
  const as_dateRef = useRef<HTMLIonInputElement>(null)
  const as_detailsRef = useRef<HTMLIonTextareaElement>(null)


  const submitBtn = () => {
      const projectEntered = as_projectNameRef.current!.value
      const roletEntered = as_roleRef.current!.value
      const budgetEntered = as_budgetRef.current!.value
      const locationEntered = as_locationRef.current!.value
      const dateEntered = as_dateRef.current!.value
      const detailsEntered = as_detailsRef.current!.value
    console.log(
      projectEntered,
      roletEntered,
      budgetEntered,
      locationEntered,
      dateEntered,
      detailsEntered
    )
}

  const refreshBtn = () => {
    as_projectNameRef.current!.value = ''
    as_roleRef.current!.value = ''
    as_budgetRef.current!.value = ''
    as_locationRef.current!.value = ''
    as_dateRef.current!.value = ''
    as_detailsRef.current!.value = ''
}



  return(<IonApp>

    <IonHeader class="as_header">
        <IonToolbar class="as_toolbar">
            <IonGrid class="as_headerGrid">
                <IonRow className="ion-align-items-center ion-justify-content-center">
                    <IonCol size="12" className="ion-text-center">
                      <IonImg class="logo" src={logo} alt="AllSetLogo" style={{ width: '40%', height: '40%' }}/>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonSegment class="as_topNavSegment" id="hireSeg" value="Hire">
                        <IonSegmentButton value="Hire">
                            <IonLabel class="as_topNavButton">Hire</IonLabel>
                        </IonSegmentButton>
                        <IonSegmentButton value="Get Hired">
                            <IonLabel class="as_topNavButton">Get Hired</IonLabel>
                        </IonSegmentButton>
                    </IonSegment>
                </IonRow>
            </IonGrid>
        </IonToolbar>
    </IonHeader>

    <IonContent className="ion-padding">

        <IonItem>
            <IonLabel position="floating">The project's name?</IonLabel>
            <IonInput id="as_projectName" ref={as_projectNameRef} class="as_input" clear-input="true" placeholder="Name?"  value=""></IonInput>
        </IonItem>
        <IonItem>
            <IonLabel position="floating">The role or position?</IonLabel>
            <IonInput id="as_role" ref={as_roleRef} class="as_input" clear-input="true" placeholder="Role/position?" value=""></IonInput>
        </IonItem>
        <IonItem>
            <IonLabel position="floating">The budget?</IonLabel>
            <IonInput id="as_budget" ref={as_budgetRef} class="as_input" clear-input="true" placeholder="Budget?" value=""></IonInput>
        </IonItem>
        <IonItem>
            <IonLabel position="floating">The project's location?</IonLabel>
            <IonInput id="as_location" ref={as_locationRef} class="as_input" clear-input="true" placeholder="Location?" value=""></IonInput>
        </IonItem>
        <IonItem>
            <IonLabel position="floating">The date(s)?</IonLabel>
            <IonInput  id="as_date" ref={as_dateRef} class="as_input" clear-input="true" placeholder="Date(s)?" value=""></IonInput>
        </IonItem>
        <IonItem>
            <IonLabel position="floating">The details?</IonLabel>
            <IonTextarea id="as_details" ref={as_detailsRef} class="as_textarea_1" auto-grow="true" clear-input="true" placeholder="Additional Details?" value=""></IonTextarea>
        </IonItem>

        <IonGrid>
            <IonRow>
                <IonCol>
                    <IonButton onClick={submitBtn} class="as_hireBtns" expand="block"><IonIcon slot="start"  icon={checkmarkOutline} />Submit</IonButton>
                </IonCol>
                <IonCol>
                    <IonButton onClick={refreshBtn} class="as_hireBtns" expand="block"><IonIcon slot="start"  icon={refreshOutline} />Reset</IonButton>
                </IonCol>
            </IonRow>
        </IonGrid>

    </IonContent>

  </IonApp>
  )
}

export default App;
