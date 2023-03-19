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

/* Segment pages */
import Hire from './Hire';
import GetHired from './GetHired';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import './Main.css';

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

const Main: React.FC = () => {

    const [selectedSegment, setSelectedSegment] = useState('Hire');

    return(
        <IonPage>

            <IonHeader className="as_header">
                <IonToolbar className="as_toolbar">
                    <IonGrid className="as_grid">
                        <IonRow>
                            <IonCol size="12" className="ion-text-center colSize">
                            <IonImg src={logo} alt="AllSetLogo" style={{ height: '40%' }}/>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonSegment className="full-width-segment" value={selectedSegment} onIonChange={(e) => setSelectedSegment(e.detail.value as string)} >
                                <IonSegmentButton value="Hire">
                                    <IonLabel class="as_topNavButton">Hire</IonLabel>
                                </IonSegmentButton>
                                <IonSegmentButton value="GetHired">
                                    <IonLabel class="as_topNavButton">Get Hired</IonLabel>
                                </IonSegmentButton>
                            </IonSegment>
                        </IonRow>
                    </IonGrid>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                {selectedSegment === 'Hire' && <Hire />}
                {selectedSegment === 'GetHired' && <GetHired />}
            </IonContent>
        </IonPage>
    )
}

export default Main;
