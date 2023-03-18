import './Hire.css';
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
  IonPage,
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
import logo from '../assets/logo.png';
import Tab1 from './Tab1';
import Tab2 from './Tab2';

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
import '../theme/variables.css';

/* All-Set config */
import { refresh } from 'ionicons/icons';
import React, { useState } from 'react';

/* Auth0 */
import LogoutButton from '../components/LogoutButton';

/* MongoDB */
// import * as Realm from "realm-web";
// const app = new Realm.App({ id: "all-set-wgyfg" });
// const credentials = Realm.Credentials.anonymous();
// const user = await app.logIn(credentials);
// console.log(user.id)

setupIonicReact();

const Hire: React.FC = () => {

  const [ProjectName, setProjecttName] = useState<string>('');
  const [Role, setRole] = useState<string>('');
  const [Budget, setBudget] = useState<string>('');
  const [Location, setLocation] = useState<string>('');
  const [Date, setDate] = useState<string>('');
  const [Details, setDetails] = useState<string>('');
  
  const pressSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(ProjectName, Role, Budget, Location, Date, Details);
  }

  const handleReset = (): void => {
    setProjecttName('');
    setRole('');
    setBudget('');
    setLocation('');
    setDate('');
    setDetails('');
  };

  return(<IonPage>

    <IonHeader className="as_header">
        <IonToolbar className="as_toolbar">
            <IonGrid className="as_grid">
                <IonRow>
                    <IonCol size="12" className="ion-text-center colSize">
                      <IonImg src={logo} alt="AllSetLogo" style={{ height: '40%' }}/>
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

        <form onSubmit={pressSubmit}>
            <IonItem>
                <IonLabel position="floating">The project's name?</IonLabel>
                <IonInput placeholder="Project Name" value={ProjectName} onIonChange={(e) => setProjecttName(e.detail.value!)} />
            </IonItem>
            <IonItem>
                <IonLabel position="floating">The role or position?</IonLabel>
                <IonInput placeholder="Role" value={Role} onIonChange={(e) => setRole(e.detail.value!)} />
            </IonItem>
            <IonItem>
                <IonLabel position="floating">The budget?</IonLabel>
                <IonInput placeholder="Budget" value={Budget} onIonChange={(e) => setBudget(e.detail.value!)} />
            </IonItem>
            <IonItem>
                <IonLabel position="floating">The project's location?</IonLabel>
                <IonInput placeholder="Location" value={Location} onIonChange={(e) => setLocation(e.detail.value!)} />
            </IonItem>
            <IonItem>
                <IonLabel position="floating">The date(s)?</IonLabel>
                <IonInput placeholder="Date" value={Date} onIonChange={(e) => setDate(e.detail.value!)} />
            </IonItem>
            <IonItem>
                <IonLabel position="floating">The details?</IonLabel>
                <IonTextarea placeholder="Details" value={Details} onIonChange={(e) => setDetails(e.detail.value!)} />
            </IonItem>
            <IonButton type="submit">Submit</IonButton>
            <IonButton type="button" onClick={handleReset}>
                <IonIcon icon={refresh} />
                Reset
            </IonButton>
            <LogoutButton />
        </form>

    </IonContent>

  </IonPage>
  )
}

export default Hire;
